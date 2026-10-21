import { ImageResponse } from "next/og";

export const alt =
  "José Tume · Desarrollador Full Stack Junior · PHP, React y SQL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#0b1115",
        padding: 80,
        color: "#f0f5f6",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, color: "#70e0c5" }}>
        DESARROLLADOR FULL STACK JUNIOR
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 94,
            fontWeight: 700,
            letterSpacing: -4,
          }}
        >
          José Tume.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: 20,
            color: "#a6b6be",
          }}
        >
          Interfaces, datos y soluciones para la web.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #26373e",
          paddingTop: 25,
          fontSize: 25,
        }}
      >
        <span style={{ color: "#70e0c5" }}>PHP / JavaScript / React / SQL</span>
        <span>Lima, Perú</span>
      </div>
    </div>,
    size,
  );
}
