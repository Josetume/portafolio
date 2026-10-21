export type Screenshot = {
  src: string;
  label: string;
  description: string;
};

export const adminScreens: Screenshot[] = [
  {
    src: "/alertaya/admin/dashboard-actual.png",
    label: "Resumen de actividad",
    description: "Bandeja personal y reportes que requieren atención.",
  },
  {
    src: "/alertaya/admin/reportes-actual.png",
    label: "Gestión de reportes",
    description: "Bandejas, vistas guardadas y filtros de atención ciudadana.",
  },
  {
    src: "/alertaya/admin/detalle-actual.png",
    label: "Atención y seguimiento",
    description: "Responsables, prioridad, evidencia e historial de un caso.",
  },
  {
    src: "/alertaya/admin/acceso-actual.png",
    label: "Acceso administrativo",
    description: "Inicio de sesión del panel de administración.",
  },
];

// Only current screenshots captured from the native application belong here.
export const mobileScreens: Screenshot[] = [
  {
    src: "/alertaya/mobile/inicio-actual.png",
    label: "Inicio y mapa",
    description:
      "Mapa de incidentes, último caso y acceso al registro de reportes.",
  },
  {
    src: "/alertaya/mobile/nuevo-reporte-actual.png",
    label: "Nuevo reporte",
    description:
      "Formulario guiado en tres pasos y clasificación del incidente.",
  },
  {
    src: "/alertaya/mobile/mis-reportes-actual.png",
    label: "Mis reportes",
    description:
      "Bandejas de reportes y emergencias, estados y envíos guardados.",
  },
  {
    src: "/alertaya/mobile/detalle-actual.png",
    label: "Detalle y seguimiento",
    description:
      "Estado de atención del caso y revisión de la evidencia fotográfica.",
  },
];
