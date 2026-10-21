import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

// Exercise the actual production HTML, routes, images and CV download.
const port = "3107";
const base = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    port,
  ],
  {
    stdio: "pipe",
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  },
);
let logs = "";
server.stdout.on("data", (chunk) => {
  logs += chunk;
});
server.stderr.on("data", (chunk) => {
  logs += chunk;
});
server.on("error", (error) => {
  logs += error.message;
});

try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(base)).ok) {
        ready = true;
        break;
      }
    } catch {}
    if (server.exitCode !== null) break;
    await delay(500);
  }
  assert(ready, `Production server did not start.\n${logs}`);
  const spanishRoutes = [
    "/",
    "/projects",
    "/projects/alertaya",
    "/projects/bunker-canino",
    "/projects/educapp",
  ];
  const routes = [
    ...spanishRoutes,
    ...spanishRoutes.map((route) => `/en${route === "/" ? "" : route}`),
  ];
  const pages = new Map();
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one h1`);
    assert.equal(
      (html.match(/<main[ >]/g) || []).length,
      1,
      `${route}: one main`,
    );
    assert(
      html.includes(`lang="${route.startsWith("/en") ? "en" : "es"}"`),
      `${route}: document language`,
    );
    assert(
      html.includes('name="description"'),
      `${route}: description metadata`,
    );
    assert(
      !/tuusuario|pronto\.com|PolarTech/.test(html),
      `${route}: obsolete content`,
    );
    pages.set(route, html);
    console.log(`OK ${route}`);
  }
  const home = pages.get("/");
  for (const route of ["/projects/educapp", "/en/projects/educapp"]) {
    const educapp = pages.get(route);
    assert(
      educapp.includes(
        "https://www.inproyi.com/proydsi/frontend/vista/Index.php",
      ),
      `${route}: teacher panel link`,
    );
    for (const name of [
      "acceso",
      "menu",
      "contar-estrellas",
      "operaciones",
      "animales",
      "memorama",
      "puntajes",
    ]) {
      assert(
        educapp.includes(`/educapp/mobile/${name}.jpg`),
        `${route}: mobile screenshot ${name}`,
      );
    }
    assert(
      educapp.includes("/educapp/admin/acceso.png"),
      `${route}: panel access screenshot`,
    );
    assert(educapp.includes("EducApp:"), `${route}: screenshot project labels`);
  }
  const alertaya = pages.get("/projects/alertaya");
  for (const image of [
    "admin/dashboard-actual.png",
    "admin/reportes-actual.png",
    "admin/detalle-actual.png",
    "admin/acceso-actual.png",
    "mobile/inicio-actual.png",
    "mobile/nuevo-reporte-actual.png",
    "mobile/mis-reportes-actual.png",
    "mobile/detalle-actual.png",
  ]) {
    assert(
      alertaya.includes(`/alertaya/${image}`),
      `Current AlertaYa screenshot: ${image}`,
    );
  }
  assert(
    !/PanelAdminAlertaya\.jpg|iniciosesion\.jpg|formularioreporte\.jpg|misreportes\.jpg|detallereporte\.jpg/.test(
      alertaya,
    ),
    "No obsolete AlertaYa screenshots",
  );
  for (const id of [
    "projects",
    "experience",
    "skills",
    "about",
    "contact",
    "contenido",
  ]) {
    assert(home.includes(`id="${id}"`), `Navigation target: ${id}`);
  }
  assert(home.includes("universidades-rusia.com"));
  assert(home.includes("bunker-canino.vercel.app"));
  const assets = new Set();
  for (const html of pages.values()) {
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
      if (!match[1].includes("?")) assets.add(match[1]);
    }
  }
  for (const asset of assets) {
    const response = await fetch(base + asset);
    assert.equal(response.status, 200, `Internal asset/link: ${asset}`);
    if (asset.endsWith(".pdf")) {
      assert(response.headers.get("content-type")?.includes("pdf"));
      assert(
        Buffer.from(await response.arrayBuffer())
          .subarray(0, 4)
          .toString() === "%PDF",
      );
    }
  }
  const social = await fetch(base + "/opengraph-image");
  assert.equal(social.status, 200, "Open Graph image");
  assert(social.headers.get("content-type")?.includes("image/png"));
  console.log(
    `OK navigation, metadata, CV and ${assets.size} internal links/assets`,
  );
} finally {
  if (server.exitCode === null) {
    server.kill();
    await Promise.race([once(server, "exit"), delay(5000)]);
  }
}
