import type { Screenshot } from "./alertaya-screens";
import { text as t, type Locale } from "@/lib/locale";

export function getEducappScreens(locale: Locale): {
  admin: Screenshot[];
  mobile: Screenshot[];
} {
  return {
    admin: [
      {
        src: "/educapp/admin/acceso.png",
        label: t(locale, "Acceso al panel docente", "Teacher panel sign-in"),
        description: t(
          locale,
          "Página de acceso de la plataforma EducApp. Requiere una cuenta para ingresar.",
          "EducApp platform sign-in. An account is required to access the panel.",
        ),
      },
    ],
    mobile: [
      {
        src: "/educapp/mobile/acceso.jpg",
        label: t(locale, "Ingreso a EducApp", "EducApp sign-in"),
        description: t(
          locale,
          "Pantalla de bienvenida y acceso a la aplicación educativa.",
          "Welcome screen and sign-in to the educational application.",
        ),
      },
      {
        src: "/educapp/mobile/menu.jpg",
        label: t(locale, "Menú de actividades", "Activity menu"),
        description: t(
          locale,
          "Selección de juegos, envío de puntajes y consulta de resultados.",
          "Game selection, score submission and results access.",
        ),
      },
      {
        src: "/educapp/mobile/contar-estrellas.jpg",
        label: t(locale, "Contar estrellas", "Counting stars"),
        description: t(
          locale,
          "Actividad de conteo con opciones numéricas e intentos disponibles.",
          "A counting activity with number choices and remaining attempts.",
        ),
      },
      {
        src: "/educapp/mobile/operaciones.jpg",
        label: t(locale, "Operaciones matemáticas", "Math operations"),
        description: t(
          locale,
          "Ejercicios de suma, resta, multiplicación, división y operaciones combinadas.",
          "Addition, subtraction, multiplication, division and mixed-operation exercises.",
        ),
      },
      {
        src: "/educapp/mobile/animales.jpg",
        label: t(locale, "Reconocer animales", "Recognizing animals"),
        description: t(
          locale,
          "Actividad de identificación de animales y validación de respuestas.",
          "An animal identification activity with answer validation.",
        ),
      },
      {
        src: "/educapp/mobile/memorama.jpg",
        label: t(locale, "Memorama", "Memory game"),
        description: t(
          locale,
          "Juego de memoria visual con tarjetas e indicador de intentos.",
          "A visual memory game with cards and an attempt counter.",
        ),
      },
      {
        src: "/educapp/mobile/puntajes.jpg",
        label: t(locale, "Historial de puntajes", "Score history"),
        description: t(
          locale,
          "Consulta del puntaje acumulado y de los resultados por partida.",
          "Accumulated score and game-by-game results.",
        ),
      },
    ],
  };
}
