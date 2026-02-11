import { useState, type FormEvent } from "react";

// Número real de WhatsApp del negocio (Perú)
const WHATSAPP_NUMBER = "51921396616";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const heroWhatsAppMessage =
  "Hola, vengo de tu sitio web y quiero hablar sobre soluciones digitales para mi negocio.";

const services = [
  {
    title: "Páginas web que venden",
    tag: "Web profesional",
    description:
      "No hacemos páginas bonitas. Hacemos máquinas de venta 24/7 pensadas para convertir visitas en clientes.",
    benefits: [
      "Estructura pensada para agendar más citas y reservas",
      "Copywriting persuasivo basado en psicología de ventas",
      "Diseño tipo startup tecnológica, rápido y optimizado para móvil",
    ],
    idealFor: "Dentistas, restaurantes, hoteles, gimnasios y emprendedores.",
  },
  {
    title: "Automatización de WhatsApp",
    tag: "Chat que convierte",
    description:
      "Conecta tu web y tus campañas con un flujo de WhatsApp que responde incluso cuando tú duermes.",
    benefits: [
      "Respuestas automáticas que suenan humanas, no a robot",
      "Captura de datos clave: nombre, servicio, presupuesto, horario",
      "Seguimiento inteligente para cerrar más ventas sin perseguir clientes",
    ],
    idealFor: "Restaurantes, barberías, gimnasios y tiendas online.",
  },
  {
    title: "Programación de sistemas a medida",
    tag: "Software a tu medida",
    description:
      "Sistemas que organizan tu negocio, eliminan tareas manuales y te dan control total en un panel único.",
    benefits: [
      "Automatiza procesos internos repetitivos",
      "Paneles con métricas claras para decidir rápido",
      "Integraciones con herramientas que ya usas",
    ],
    idealFor: "Colegios, clínicas, hoteles, empresas con procesos manuales.",
  },
  {
    title: "Marketing digital enfocado en resultados",
    tag: "Campañas que facturan",
    description:
      "No vendemos seguidores, vendemos citas agendadas, mesas llenas y habitaciones ocupadas.",
    benefits: [
      "Campañas en Meta y Google orientadas a retorno de inversión",
      "Mensajes adaptados para cada sector (dentistas, restaurantes, gimnasios...)",
      "Reportes claros para ver qué funciona y qué escalar",
    ],
    idealFor: "Dentistas, restaurantes, hoteles, gimnasios y marcas personales.",
  },
  {
    title: "Diseño y gestión de bases de datos",
    tag: "Datos que trabajan por ti",
    description:
      "Diseñamos y organizamos tu base de datos para que nunca pierdas información crítica de tus clientes.",
    benefits: [
      "Estructuras seguras y escalables",
      "Acceso rápido a la información clave del negocio",
      "Preparado para conectar con dashboards y automatizaciones",
    ],
    idealFor: "Colegios, clínicas, hoteles y negocios con alto volumen de datos.",
  },
  {
    title: "Soporte técnico premium",
    tag: "Tu equipo siempre operativo",
    description:
      "Reparamos, optimizamos e instalamos el software que tu equipo necesita para trabajar sin interrupciones.",
    benefits: [
      "Reparación de PCs y eliminación de virus",
      "Instalación y configuración de software crítico",
      "Mantenimiento preventivo para evitar caídas y pérdidas de tiempo",
    ],
    idealFor: "Oficinas, colegios, estudios creativos y despachos profesionales.",
  },
  {
    title: "Desbloqueo y optimización de celulares",
    tag: "Móviles listos para trabajar",
    description:
      "Devolvemos la vida a los dispositivos de tu equipo para que puedan seguir vendiendo y atendiendo.",
    benefits: [
      "Desbloqueo profesional de dispositivos",
      "Optimización de rendimiento y espacio",
      "Configuración segura para uso empresarial",
    ],
    idealFor: "Equipos comerciales, emprendedores y negocios que dependen de WhatsApp.",
  },
] as const;

const sectors = [
  {
    name: "Dentistas",
    pain: "Agenda con huecos, pacientes que no confirman y poca presencia digital.",
    result:
      "Web + recordatorios + campañas que llenan tu calendario con pacientes que llegan decididos.",
  },
  {
    name: "Restaurantes",
    pain: "Mesas vacías entre semana y reservas solo por recomendación.",
    result:
      "Sistema de reservas online + campañas localizadas que llenan tus horarios más flojos.",
  },
  {
    name: "Barberías",
    pain: "Clientes que escriben por WhatsApp a cualquier hora y se pierden en la bandeja.",
    result:
      "Agenda automática por WhatsApp + recordatorios para que el cliente no falle a la cita.",
  },
  {
    name: "Colegios",
    pain: "Procesos manuales, listas en Excel y pérdida de información de alumnos.",
    result:
      "Sistemas y bases de datos que organizan matrículas, pagos y comunicación con padres.",
  },
  {
    name: "Hoteles",
    pain: "Dependencia total de OTAs y comisiones altas.",
    result:
      "Motor de reservas propio + automatización de mensajes para huéspedes antes, durante y después de la estadía.",
  },
  {
    name: "Gimnasios",
    pain: "Clientes que se dan de baja y poca recurrencia.",
    result:
      "Sistemas de seguimiento y campañas de reactivación por WhatsApp para mantener tu box lleno.",
  },
  {
    name: "Emprendedores",
    pain: "Mucho esfuerzo en redes, pocas ventas reales.",
    result:
      "Embudo sencillo: anuncio → web persuasiva → WhatsApp → venta cerrada.",
  },
];

const packages = [
  {
    name: "Lanzamiento Acelerado",
    price: "Desde 297 USD",
    badge: "Ideal para empezar",
    description:
      "Perfecto para negocios que quieren validar rápido su presencia digital sin complicarse.",
    features: [
      "Landing page profesional 100% personalizada (no plantilla genérica)",
      "Integración con botón de WhatsApp y formulario táctico",
      "Optimización móvil + carga rápida",
      "Configuración básica de Google Analytics",
    ],
    target: "Emprendedores, barberías, pequeños restaurantes.",
    highlighted: false,
  },
  {
    name: "Crecimiento Imparable",
    price: "Desde 497 USD",
    badge: "Más vendido",
    description:
      "El paquete perfecto para negocios que quieren resultados en menos de 7 días.",
    features: [
      "Web estratégica multi-sección tipo agencia",
      "Automatización de WhatsApp con flujos personalizados",
      "Implementación de 1 embudo de ventas completo",
      "Campaña inicial en Meta Ads o Google Ads",
      "Soporte prioritario durante 30 días",
    ],
    target: "Dentistas, gimnasios, restaurantes y hoteles medianos.",
    highlighted: true,
  },
  {
    name: "Dominio Total",
    price: "Desde 997 USD",
    badge: "Para los que van en serio",
    description:
      "Pensado para negocios que quieren sistemas, datos y marketing trabajando juntos.",
    features: [
      "Sistema a medida conectado con tu web y campañas",
      "Diseño y optimización de base de datos",
      "Múltiples automatizaciones de WhatsApp y correo",
      "Panel de métricas en tiempo real",
      "Acompañamiento estratégico 1 a 1",
    ],
    target: "Colegios, clínicas, cadenas de restaurantes y hoteles.",
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Dra. Valeria Muñoz",
    role: "Directora de clínica dental",
    sector: "Odontología",
    quote:
      "Pasamos de vivir de referidos a tener la agenda llena dos semanas antes. Los pacientes llegan sabiendo lo que quieren y el valor del tratamiento.",
    result: "+72% de incremento en primeras citas en 45 días.",
    location: "Clínica dental en Lima, Perú",
  },
  {
    name: "Javier López",
    role: "Dueño de restaurante",
    sector: "Restaurante",
    quote:
      "Los días flojos de martes y miércoles prácticamente desaparecieron. Ahora recibimos reservas por WhatsApp sin tener que responder uno por uno.",
    result: "Salas llenas 4 noches extra por semana.",
    location: "Restaurante en Arequipa, Perú",
  },
  {
    name: "Carla Rivas",
    role: "Fundadora de gimnasio boutique",
    sector: "Gimnasio",
    quote:
      "Tenía seguidores en redes pero pocos clientes. Con el nuevo sistema pasamos a lista de espera en los horarios clave.",
    result: "+38% de membresías activas en 60 días.",
    location: "Gimnasio en Cusco, Perú",
  },
];

type GalleryImage = {
  src: string;
  label: string;
  subtitle: string;
};

type GalleryService = {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
};

const galleryServices: GalleryService[] = [
  {
    id: "web",
    name: "Páginas web",
    description:
      "Interfaces limpias, modernas y enfocadas en un solo objetivo: que el visitante dé clic en reservar o escribir por WhatsApp.",
    images: [
      {
        src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Landing premium para clínica dental",
        subtitle: "Estructura diseñada para agendar más primeras consultas.",
      },
      {
        src: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Sitio tipo startup para restaurante",
        subtitle: "Reservas directas con menú dinámico y fotos profesionales.",
      },
      {
        src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Web para gimnasio boutique",
        subtitle: "Enfocada en plazas limitadas y lista de espera.",
      },
    ],
  },
  {
    id: "whatsapp",
    name: "Automatización WhatsApp",
    description:
      "Flujos conversacionales que capturan datos clave y califican al cliente antes de que tú entres a la llamada.",
    images: [
      {
        src: "https://images.pexels.com/photos/3760850/pexels-photo-3760850.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Flujo automático para restaurante",
        subtitle: "El cliente elige día, hora y número de personas por WhatsApp.",
      },
      {
        src: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Embudo para barbería",
        subtitle: "Agenda automática de cortes con recordatorios personalizados.",
      },
      {
        src: "https://images.pexels.com/photos/5076512/pexels-photo-5076512.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Atención 24/7 para gimnasio",
        subtitle: "Respuestas frecuentes automatizadas sin perder el tono humano.",
      },
    ],
  },
  {
    id: "sistemas",
    name: "Sistemas y bases de datos",
    description:
      "Paneles y sistemas internos que convierten el caos de Excel en información clara para decidir rápido.",
    images: [
      {
        src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Panel académico para colegio",
        subtitle: "Control de matrículas, pagos y comunicación con padres.",
      },
      {
        src: "https://images.pexels.com/photos/159888/office-home-house-desk-159888.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Dashboard de reservas para hotel",
        subtitle: "Visualización clara de ocupación y canales de venta.",
      },
      {
        src: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Base de datos de pacientes",
        subtitle: "Historial clínico organizado y accesible de forma segura.",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing digital",
    description:
      "Creatividades, mensajes y landing pages coordinadas para que cada clic tenga una razón y un destino claro.",
    images: [
      {
        src: "https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Campaña para clínica",
        subtitle: "Anuncios alineados con la propuesta de valor de alto ticket.",
      },
      {
        src: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Embudo para restaurante",
        subtitle: "Promos controladas para llenar días específicos de la semana.",
      },
      {
        src: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Ads para gimnasio",
        subtitle: "Mensajes de urgencia y plazas limitadas alineados con la web.",
      },
    ],
  },
  {
    id: "soporte",
    name: "Soporte & móviles",
    description:
      "Equipos listos para trabajar: PCs, laptops y celulares optimizados para que tu operación no se detenga.",
    images: [
      {
        src: "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Puestos de trabajo optimizados",
        subtitle: "Equipos limpios, rápidos y con el software justo para producir.",
      },
      {
        src: "https://images.pexels.com/photos/5077040/pexels-photo-5077040.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Celulares desbloqueados",
        subtitle: "Dispositivos listos para usar WhatsApp Business y apps de gestión.",
      },
      {
        src: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "Soporte remoto",
        subtitle: "Atención técnica sin que tu equipo tenga que moverse.",
      },
    ],
  },
];

function FloatingWhatsAppButton() {
  const message =
    "Hola, vengo de tu sitio web y quiero impulsar mi negocio con sistemas y automatización.";

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-40 group"
      aria-label="Hablar por WhatsApp"
    >
      <div className="relative flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-400/50 transition hover:-translate-y-0.5 hover:bg-emerald-400">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-inner">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.5 11.5C20.5 16.1944 16.6944 20 12 20C10.7899 20 9.63799 19.7367 8.6 19.259L4 20.5L5.3 16C4.76935 14.9964 4.5 13.8673 4.5 12.7C4.5 8.00558 8.30558 4.2 13 4.2C17.6944 4.2 21.5 8.00558 21.5 12.7Z" />
            <path d="M10.75 9.75L11.5 11.75L10.25 12.75C10.75 13.75 11.5 14.5 12.5 15L13.5 13.75L15.5 14.5" />
          </svg>
        </div>
        <span className="hidden sm:inline">WhatsApp inmediato</span>
        <span className="inline sm:hidden">Chat</span>
        <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-emerald-600">
          1
        </span>
      </div>
    </a>
  );
}

export function App() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const [activeGalleryId, setActiveGalleryId] = useState<string>(
    galleryServices[0]?.id ?? "web",
  );

  const activeGallery =
    galleryServices.find((service) => service.id === activeGalleryId) ??
    galleryServices[0];

  const heroWhatsAppLink = buildWhatsAppUrl(heroWhatsAppMessage);

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      `Hola Aurion Tech Studio 👋\n\n` +
      `Quiero reservar una llamada estratégica para mi negocio.\n\n` +
      `📌 Nombre: ${name || "No indicado"}\n` +
      `📌 Tipo de negocio: ${businessType || "No indicado"}\n` +
      `📌 WhatsApp: ${whatsApp || "No indicado"}\n` +
      `📌 Fecha ideal: ${preferredDate || "No indicada"}\n` +
      `📌 Hora ideal: ${preferredTime || "No indicada"}\n\n` +
      "Me interesa aumentar ventas en menos de 7 días con sistemas, automatización y marketing.";

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Fondo suave futurista */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -right-40 bottom-[-6rem] h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        <div className="absolute inset-y-0 left-10 hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-5 sm:px-6 lg:px-8 lg:pt-8">
        {/* Navegación */}
        <header className="sticky top-3 z-30">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-lg shadow-sky-100/80 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-violet-500 to-fuchsia-500 text-white shadow-md shadow-sky-400/60">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="14" rx="3" />
                  <path d="M3 9h18" />
                  <path d="M9 15h6" />
                  <path d="M8 4v3" />
                  <path d="M16 4v3" />
                </svg>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-sky-700">
                  AURION TECH STUDIO · PERÚ
                </p>
                <p className="hidden text-xs text-slate-500 sm:block">
                  Estudio tecnológico peruano en UX/UI, automatización y marketing digital.
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-[0.72rem] font-medium text-slate-600 md:flex">
              <a href="#servicios" className="hover:text-sky-700">
                Servicios
              </a>
              <a href="#sectores" className="hover:text-sky-700">
                Sectores
              </a>
              <a href="#galeria" className="hover:text-sky-700">
                Galería
              </a>
              <a href="#paquetes" className="hover:text-sky-700">
                Paquetes
              </a>
              <a href="#testimonios" className="hover:text-sky-700">
                Casos reales
              </a>
              <a href="#reserva" className="hover:text-sky-700">
                Reserva
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={heroWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                WhatsApp ahora
              </a>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-20 lg:mt-14 lg:space-y-24">
          {/* Hero */}
          <section
            id="inicio"
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[0.68rem] text-emerald-800">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Resultados en menos de 7 días</span>
                <span className="h-3 w-px bg-emerald-200" />
                <span>Cupos limitados a 5 proyectos / mes</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Sistemas, automatización y marketing que convierten visitas en clientes.
                </h1>
                <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                  <span className="font-semibold text-sky-700">Aurion Tech Studio</span> es un estudio
                  tecnológico peruano que crea experiencias digitales modernas y ultra persuasivas.
                  Nada de plantillas genéricas de IA: cada detalle se diseña para llevar al visitante a
                  un solo lugar: <span className="font-semibold">WhatsApp</span>.
                </p>
              </div>

              <div className="grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[0.7rem] text-sky-700">
                    1
                  </span>
                  <p className="text-sm text-slate-700">
                    Diseñamos una web y un sistema que hablen el lenguaje de tu sector (dentistas,
                    restaurantes, gimnasios, hoteles…).
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-[0.7rem] text-violet-700">
                    2
                  </span>
                  <p className="text-sm text-slate-700">
                    Conectamos todo con WhatsApp para que los leads lleguen filtrados, listos para
                    comprar, no para preguntar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={heroWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300/50 transition hover:-translate-y-0.5 hover:shadow-fuchsia-300/60"
                >
                  Hablar por WhatsApp ahora
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="#paquetes"
                  className="inline-flex items-center justify-center gap-1 text-xs font-medium text-slate-600 hover:text-sky-700"
                >
                  Ver paquetes y precios
                  <span className="text-[0.65rem] text-slate-400">
                    (transparente, sin letra pequeña)
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span>+120 proyectos digitales entregados en Perú y Latinoamérica</span>
                </div>
                <div className="h-3 w-px bg-slate-200" />
                <div>
                  <span className="font-semibold text-sky-700">Garantía de enfoque en ventas</span> ·
                  si no entendemos tu negocio, no aceptamos el proyecto.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-100 via-violet-100 to-fuchsia-100 blur-3xl" />
              <div className="relative space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_0_40px_rgba(148,163,184,0.35)]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sky-700">
                      Panel de control
                    </p>
                    <p className="text-sm text-slate-700">Vista rápida de tu crecimiento</p>
                  </div>
                  <div className="rounded-full bg-slate-50 px-3 py-1 text-[0.65rem] text-slate-600">
                    Actualizado en tiempo real
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-[0.6rem] text-slate-500">Leads calificados</p>
                    <p className="mt-1 text-xl font-semibold text-emerald-600">+213%</p>
                    <p className="mt-1 text-[0.7rem] text-emerald-700">
                      Desde que conectamos web + WhatsApp.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-[0.6rem] text-slate-500">Tiempo de respuesta</p>
                    <p className="mt-1 text-xl font-semibold text-sky-600">&lt; 2 min</p>
                    <p className="mt-1 text-[0.7rem] text-sky-700">
                      Automatizaciones que abren la conversación por ti.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-[0.6rem] text-slate-500">Retorno estimado</p>
                    <p className="mt-1 text-xl font-semibold text-fuchsia-600">x4.7</p>
                    <p className="mt-1 text-[0.7rem] text-fuchsia-700">
                      Promedio de clientes que implementan el sistema completo.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 rounded-2xl bg-slate-50 p-3 text-[0.7rem] text-slate-700 sm:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-[0.6rem] text-slate-500">Sectores en los que somos fuertes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Dentistas", "Restaurantes", "Barberías", "Colegios", "Hoteles", "Gimnasios"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white px-2 py-0.5 text-[0.65rem] text-slate-700 shadow-sm"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[0.6rem] text-slate-500">Oferta activa</p>
                    <p>
                      Pack
                      <span className="font-semibold text-sky-700">
                        {" "}
                        Web + WhatsApp + Soporte 30 días
                      </span>
                      {" "}
                      con condiciones especiales para los próximos
                      <span className="font-semibold text-emerald-700"> 3 clientes</span>.
                    </p>
                    <p className="text-[0.6rem] text-emerald-600">*Disponibilidad actualizada hace 2 horas.</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-3 text-[0.7rem]">
                  <div>
                    <p className="font-semibold text-sky-800">Agenda una llamada estratégica sin costo</p>
                    <p className="text-slate-600">En 20 minutos definimos el sistema ideal para tu negocio.</p>
                  </div>
                  <a
                    href="#reserva"
                    className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-3 py-1 text-[0.7rem] font-semibold text-white shadow-sm shadow-sky-400 hover:bg-sky-500"
                  >
                    Reservar ahora
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section id="servicios" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Servicios pensados para resultados, no solo para verse bien.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Cada servicio se diseña desde la psicología de tu cliente. Menos ruido, más acciones
                  claras: reservar, escribir por WhatsApp o pagar.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-500">
                Combinamos <span className="font-semibold text-sky-700">UX/UI</span>, automatización y
                marketing para que tu negocio parezca una startup que factura millones, aunque estés
                empezando.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm shadow-slate-100 transition hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">{service.title}</h3>
                      <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[0.65rem] text-sky-700">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{service.description}</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[0.7rem] text-slate-500">
                    <p className="max-w-[70%] leading-snug">
                      <span className="text-slate-700">Ideal para:</span> {service.idealFor}
                    </p>
                    <a
                      href={heroWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-none items-center rounded-full bg-slate-900 px-3 py-1 text-[0.65rem] font-semibold text-white transition group-hover:bg-sky-600"
                    >
                      Quiero este
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sectores */}
          <section id="sectores" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Diseñado para tu tipo de negocio.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  No aplicamos la misma fórmula a todos. Ajustamos mensaje, estética y automatización
                  según tu sector específico.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-500">
                Detectamos los puntos de fuga de tu embudo actual y los cerramos con tecnología y
                comunicación clara.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector) => (
                <article
                  key={sector.name}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm shadow-violet-100 transition hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-900">{sector.name}</h3>
                    <p className="text-[0.75rem] text-slate-600">
                      <span className="font-semibold text-slate-800">Problema común:</span>{" "}
                      {sector.pain}
                    </p>
                  </div>
                  <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-[0.75rem] text-slate-700">
                    <span className="font-semibold text-sky-700">Lo que construimos contigo:</span>{" "}
                    {sector.result}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Oferta */}
          <section id="oferta" className="space-y-4">
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-sky-50 to-sky-50 p-5 text-sm shadow-lg shadow-emerald-100">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[0.7rem] font-semibold text-emerald-800">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Oferta activa para nuevos proyectos en Perú y Latinoamérica
                  </p>
                  <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    Web estratégica + Automatización de WhatsApp + Soporte 30 días.
                  </h2>
                  <p className="max-w-2xl text-xs text-slate-600 sm:text-sm">
                    Pack pensado para que consigas tus primeros resultados en menos de 7 días. No es
                    una auditoría ni una reunión eterna: es implementación directa, con entregables
                    claros desde la primera semana.
                  </p>
                </div>
                <div className="space-y-2 text-right text-xs md:text-sm">
                  <p className="text-slate-700">
                    <span className="text-slate-400 line-through">Antes: 890 USD</span>
                    <br />
                    <span className="text-emerald-700">Hoy desde 590 USD</span>
                  </p>
                  <p className="text-[0.7rem] text-emerald-700">
                    Quedan <span className="font-semibold">3 cupos</span> con estas condiciones.
                  </p>
                  <a
                    href={heroWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-full bg-emerald-600 px-4 py-1.5 text-[0.75rem] font-semibold text-white shadow-md shadow-emerald-300 hover:bg-emerald-500"
                  >
                    Quiero asegurar mi cupo ahora
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Galería */}
          <section id="galeria" className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Galería de resultados por servicio.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Visualiza cómo podría verse tu proyecto. Cada ejemplo está pensado para un tipo de
                  negocio real y un objetivo concreto: más reservas, más citas o más ventas.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[0.7rem]">
                {galleryServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveGalleryId(service.id)}
                    className={`rounded-full border px-3 py-1.5 font-medium transition ${
                      activeGalleryId === service.id
                        ? "border-sky-500 bg-sky-50 text-sky-800 shadow-sm shadow-sky-100"
                        : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700"
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-sky-100">
              <p className="mb-4 text-xs text-slate-600 sm:text-sm">{activeGallery.description}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {activeGallery.images.map((image) => (
                  <figure
                    key={image.label}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <img
                      src={image.src}
                      alt={image.label}
                      loading="lazy"
                      className="h-40 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-3 text-[0.7rem]">
                      <p className="font-semibold text-slate-50">{image.label}</p>
                      <p className="mt-0.5 text-[0.65rem] text-slate-100/90">{image.subtitle}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Paquetes */}
          <section id="paquetes" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Paquetes y precios claros.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Inversión transparente, sin letra pequeña ni permanencias. Elegimos contigo el
                  paquete ideal según el punto en el que está tu negocio.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-500">
                Todos los proyectos incluyen acompañamiento humano, no solo plantillas. Si no vemos
                potencial real de retorno, te lo diremos antes de avanzar.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {packages.map((pack) => (
                <article
                  key={pack.name}
                  className={`flex flex-col justify-between rounded-3xl border p-5 text-sm shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl ${
                    pack.highlighted
                      ? "border-sky-300 bg-sky-50 shadow-sky-100"
                      : "border-slate-200 bg-white shadow-slate-100"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{pack.name}</h3>
                        <p className="text-xs text-slate-600">{pack.description}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold ${
                          pack.highlighted
                            ? "bg-sky-100 text-sky-800"
                            : "bg-slate-50 text-slate-700"
                        }`}
                      >
                        {pack.badge}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-emerald-700">{pack.price}</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                      {pack.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-[0.7rem] text-slate-500">
                    <p className="max-w-[70%] leading-snug">
                      <span className="text-slate-700">Pensado para:</span> {pack.target}
                    </p>
                    <a
                      href={heroWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex flex-none items-center gap-1 rounded-full px-3 py-1 text-[0.7rem] font-semibold transition ${
                        pack.highlighted
                          ? "bg-sky-600 text-white hover:bg-sky-500"
                          : "bg-slate-900 text-white hover:bg-slate-700"
                      }`}
                    >
                      Solicitar este plan
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Testimonios */}
          <section id="testimonios" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Historias reales, resultados medibles.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  Usamos datos antes de tomar decisiones. Cada testimonio viene con un resultado
                  concreto, no solo con palabras bonitas.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-500">
                Tu marca se beneficia de la experiencia acumulada con negocios peruanos de diferentes
                sectores, sin pagar el coste de todos los errores que ya optimizamos en otros
                proyectos.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-4 text-sm shadow-sm shadow-fuchsia-100 transition hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-fuchsia-100"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-[0.65rem] text-slate-500">
                          {testimonial.role} · {testimonial.sector}
                        </p>
                      </div>
                      <div className="text-[0.65rem] text-amber-500">★★★★★</div>
                    </div>
                    <p className="text-xs text-slate-700">“{testimonial.quote}”</p>
                  </div>
                  <div className="mt-3 space-y-1 text-[0.7rem] text-slate-600">
                    <p className="text-emerald-700">{testimonial.result}</p>
                    <p className="text-slate-500">{testimonial.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Reserva / Sistema de reservas */}
          <section id="reserva" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Reserva tu llamada estratégica.
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  En 20 minutos analizamos tu negocio, definimos el sistema ideal y te mostramos un
                  mapa claro de implementación. Sin presión, con números.
                </p>
              </div>
              <p className="max-w-sm text-xs text-slate-500">
                Cupos limitados por semana para garantizar que cada proyecto reciba foco total. Somos
                un estudio peruano boutique: priorizamos calidad sobre volumen. Reserva tu espacio
                ahora; confirmaremos la hora final por WhatsApp.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <form
                onSubmit={handleBookingSubmit}
                className="space-y-4 rounded-3xl border border-sky-200 bg-white p-5 shadow-lg shadow-sky-100"
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">
                    Completa los datos y te llevamos directo a WhatsApp.
                  </p>
                  <p className="text-[0.7rem] text-slate-500">
                    Usaremos esta información solo para preparar tu llamada. No hacemos spam ni
                    compartimos tus datos.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[0.7rem] text-slate-700">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Ej. Dra. Andrea Pérez"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="business" className="text-[0.7rem] text-slate-700">
                      Tipo de negocio
                    </label>
                    <input
                      id="business"
                      type="text"
                      value={businessType}
                      onChange={(event) => setBusinessType(event.target.value)}
                      placeholder="Clínica dental, restaurante, gimnasio..."
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="whatsapp" className="text-[0.7rem] text-slate-700">
                      Número de WhatsApp (con código de país)
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={whatsApp}
                      onChange={(event) => setWhatsApp(event.target.value)}
                      placeholder="Ej. +51 921 396 616"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label htmlFor="date" className="text-[0.7rem] text-slate-700">
                        Día ideal
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={preferredDate}
                        onChange={(event) => setPreferredDate(event.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="time" className="text-[0.7rem] text-slate-700">
                        Hora ideal
                      </label>
                      <input
                        id="time"
                        type="time"
                        value={preferredTime}
                        onChange={(event) => setPreferredTime(event.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-[0.7rem] text-slate-600">
                  <p>
                    Al hacer clic en "Reservar y abrir WhatsApp" se abrirá directamente una
                    conversación con nosotros con todos tus datos prellenados.
                  </p>
                  <p className="text-emerald-700">
                    Respuesta promedio: menos de 15 minutos en horario de Perú (GMT-5).
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-300/70 transition hover:-translate-y-0.5 hover:shadow-violet-300/70"
                >
                  Reservar y abrir WhatsApp
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm shadow-slate-100">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Qué pasa después de agendar
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>
                        Revisamos tu tipo de negocio y te enviamos algunas preguntas rápidas por
                        WhatsApp para llegar preparados.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>
                        En la llamada, analizamos tu situación actual y te mostramos el mapa de
                        implementación recomendado.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>
                        Si encajamos, bloqueamos fecha de inicio. Si no, te llevas claridad sin haber
                        pagado nada.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3 text-[0.7rem] text-slate-700">
                  <p>
                    <span className="font-semibold text-sky-700">Nota de autoridad:</span> trabajamos
                    con pocos proyectos en paralelo para mantener un nivel alto de detalle. Somos un
                    estudio peruano que prioriza la calidad, por eso usamos este sistema de reservas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-slate-200 pt-6 text-[0.7rem] text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">Aurion Tech Studio · Estudio peruano</p>
              <p className="text-slate-600">
                Sistemas, automatización de WhatsApp y marketing digital para negocios que quieren
                resultados en menos de 7 días.
              </p>
            </div>
            <div className="space-y-1 text-slate-600">
              <p>
                Estrategia · UX/UI · Desarrollo · Automatización · Soporte — todo coordinado desde un
                solo equipo con base en Perú.
              </p>
              <p>
                ¿Listo para el siguiente nivel?{" "}
                <a
                  href={heroWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sky-700 hover:text-sky-800"
                >
                  Escríbenos por WhatsApp ahora.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <FloatingWhatsAppButton />
    </div>
  );
}
