export const SITE = {
  name: "Terramore",
  slogan: "Cannabis medicinal legal, seguro y acompañado",
  country: "Argentina",
  domain: "https://terramore.com.ar",
  whatsapp: {
    cordoba: "5493516809346",
    baires: "5491166074617",
    argentina: "5493516809346",
  },
  whatsappMessage: "Hola Terramore, quiero más información",
  email: "contacto@terramore.com.ar",
  instagram: "@terramorearg",
  sedes: {
    cordoba: {
      name: "Córdoba",
      address: "Centro Cultural · Córdoba Capital",
      hours: [
        { label: "Lunes a miércoles", time: "10 a 17hs" },
        { label: "Jueves y viernes", time: "10 a 20hs" },
      ],
      phone: "+54 9 351 680 9346",
    },
    baires: {
      name: "Buenos Aires",
      address: "Godoy Cruz 3217 · Palermo · Buenos Aires",
      hours: [
        { label: "Lunes a miércoles", time: "11 a 19hs" },
        { label: "Jueves y viernes", time: "12 a 20hs" },
      ],
      phone: "+54 9 11 6607 4617",
    },
  },
};

export const products = [
  {
    id: 1,
    slug: "aceite-cbd",
    categoria: "Aceites medicinales",
    nombre: "Aceite de CBD",
    imagen: "/product1.webp",
    galeria: ["/product1.webp"],
    resumen:
      "Aceite de cannabis medicinal elaborado a partir de extracto vegetal con predominancia de CBD. Una formulación orientada al acompañamiento de cuadros de ansiedad, estrés y dolor leve, así como al bienestar general, siempre dentro del marco de uso medicinal indicado para cada paciente.",
    destacados: [
      { titulo: "Predominancia de CBD", desc: "Extracto vegetal formulado con predominancia de CBD." },
      { titulo: "Ansiedad y estrés", desc: "Indicado en la etiqueta como acompañamiento para ansiedad y estrés." },
      { titulo: "Dolor leve", desc: "Una alternativa dentro del abordaje medicinal para molestias leves." },
      { titulo: "Bienestar general", desc: "Formulación pensada para acompañar el bienestar integral." },
    ],
    descripcion:
      "El Aceite de CBD Terramore está elaborado a partir de un extracto vegetal con predominancia de CBD. Su formulación busca acompañar distintos procesos vinculados al bienestar, especialmente cuadros de ansiedad, estrés y dolor leve. Por su perfil predominantemente CBD, la etiqueta indica que no presenta efecto psicoactivo en dosis habituales, aunque puede generar relajación intensa en dosis elevadas. Su utilización debe realizarse de manera individualizada y dentro del seguimiento correspondiente.",
    modoUso:
      "Utilizar exclusivamente según la indicación y dosificación establecidas para el paciente registrado. El uso debe ser personal e individual.",
    fichaTecnica: [
      { label: "Tipo de extracto", value: "Extracto vegetal con predominancia de CBD." },
      { label: "Presentación", value: "Frasco gotero de 20 ml." },
      { label: "Perfil", value: "Predominancia de CBD." },
      {
        label: "Efecto psicoactivo",
        value: "No psicoactivo en dosis habituales. Puede generar relajación intensa en dosis elevadas.",
      },
    ],
    infoImportante:
      "Uso exclusivo dentro del marco del cannabis medicinal. Dispensa permitida únicamente para asociados con REPROCANN conforme a la normativa vigente. Producto destinado al uso personal del paciente registrado. Mantener fuera del alcance de niños. No recomendado para embarazadas o personas en período de lactancia.",
  },
  {
    id: 2,
    slug: "aceite-1-1-cbd-thc",
    categoria: "Aceites medicinales",
    nombre: "Aceite 1:1 (CBD + THC)",
    imagen: "/product2.webp",
    galeria: ["/product2.webp"],
    resumen:
      "Aceite de cannabis medicinal formulado con una proporción equilibrada de CBD y THC. Su perfil está orientado al acompañamiento de dolor intenso, espasticidad e insomnio resistente, dentro de un tratamiento individualizado y con seguimiento profesional.",
    destacados: [
      { titulo: "Fórmula 1:1", desc: "Proporción equilibrada de CBD y THC." },
      { titulo: "Dolor intenso", desc: "Perfil formulado para el acompañamiento de cuadros de dolor intenso." },
      { titulo: "Espasticidad", desc: "Indicado en la etiqueta para cuadros de espasticidad." },
      { titulo: "Insomnio resistente", desc: "Una formulación orientada a situaciones de descanso de mayor complejidad." },
    ],
    descripcion:
      "El Aceite 1:1 Terramore combina CBD y THC en una proporción equilibrada, generando un perfil cannabinoide diferente al aceite predominantemente CBD. La etiqueta lo orienta especialmente al acompañamiento de dolor intenso, espasticidad e insomnio resistente. Por contener THC, puede producir efecto psicoactivo según la dosis y la tolerancia individual, por lo que su utilización requiere especial cuidado y seguimiento.",
    modoUso:
      "Utilizar únicamente de acuerdo con la indicación profesional correspondiente. La etiqueta recomienda comenzar con dosis bajas debido a la posibilidad de efecto psicoactivo y a las diferencias individuales de tolerancia.",
    fichaTecnica: [
      { label: "Formulación", value: "CBD + THC." },
      { label: "Proporción", value: "1:1, equilibrada entre CBD y THC." },
      { label: "Presentación", value: "Frasco gotero de 20 ml." },
      {
        label: "Efecto psicoactivo",
        value: "Puede generar efecto psicoactivo según dosis y tolerancia individual.",
      },
    ],
    infoImportante:
      "Uso exclusivo dentro del marco del cannabis medicinal y para el paciente registrado. Mantener fuera del alcance de niños. No recomendado durante el embarazo o la lactancia.",
  },
  {
    id: 3,
    slug: "aceite-amplio-espectro",
    categoria: "Aceites medicinales",
    nombre: "Aceite de Amplio Espectro",
    imagen: "/product3.webp",
    galeria: ["/product3.webp"],
    resumen:
      "Extracto vegetal de amplio espectro sobre base de aceite de oliva, desarrollado para conservar distintos cannabinoides y compuestos naturales de la planta. Orientado al acompañamiento de dolor crónico, procesos inflamatorios y ansiedad leve a moderada.",
    destacados: [
      { titulo: "Amplio espectro", desc: "Conserva distintos cannabinoides y compuestos naturales de la planta." },
      { titulo: "Dolor crónico", desc: "Perfil orientado al acompañamiento del dolor crónico." },
      { titulo: "Procesos inflamatorios", desc: "Indicado en la etiqueta para acompañar procesos inflamatorios." },
      { titulo: "Ansiedad leve a moderada", desc: "Formulación contemplada para cuadros de ansiedad leve a moderada." },
    ],
    descripcion:
      "El Aceite de Amplio Espectro Terramore busca conservar un perfil más amplio de los componentes presentes naturalmente en la planta, incluyendo distintos cannabinoides y otros compuestos vegetales. Su base es aceite de oliva y su formulación está orientada al acompañamiento de dolor crónico, procesos inflamatorios y ansiedad leve a moderada. Los efectos pueden variar de acuerdo con la dosis utilizada y la sensibilidad individual.",
    modoUso:
      "Utilizar únicamente según indicación profesional y de manera individualizada, teniendo en cuenta que la respuesta puede variar según dosis y sensibilidad de cada persona.",
    fichaTecnica: [
      { label: "Tipo", value: "Extracto vegetal de amplio espectro." },
      { label: "Base", value: "Aceite de oliva." },
      { label: "Perfil", value: "Conserva distintos cannabinoides y compuestos naturales de la planta." },
      { label: "Presentación", value: "Frasco gotero de 20 ml." },
    ],
    infoImportante:
      "Puede generar efectos diferentes según dosis y sensibilidad individual. Producto destinado exclusivamente al uso personal del paciente registrado dentro del marco del cannabis medicinal.",
  },
  {
    id: 4,
    slug: "aceite-cbd-melatonina",
    categoria: "Aceites medicinales",
    nombre: "Aceite CBD + Melatonina",
    imagen: "/product4.webp",
    galeria: ["/product4.webp"],
    resumen:
      "Una formulación que combina CBD y melatonina, desarrollada específicamente para acompañar el descanso y favorecer una mejor calidad del sueño. Indicada para dificultad para conciliar el sueño y patrones de descanso irregular.",
    destacados: [
      { titulo: "CBD + Melatonina", desc: "Una combinación orientada específicamente al momento del descanso." },
      { titulo: "Conciliación del sueño", desc: "Formulación indicada para quienes presentan dificultad para conciliar el sueño." },
      { titulo: "Descanso irregular", desc: "Pensada para acompañar patrones de sueño irregulares." },
      { titulo: "Calidad del descanso", desc: "Desarrollada para favorecer el descanso y mejorar la calidad del sueño." },
    ],
    descripcion:
      "El Aceite CBD + Melatonina Terramore fue formulado específicamente alrededor del descanso. Combina CBD con melatonina en una propuesta orientada a aquellas personas que presentan dificultad para conciliar el sueño o un descanso irregular. Su diferencial frente a los otros aceites de la línea es claro: su territorio es el sueño. La formulación puede producir somnolencia, por lo que debe utilizarse de acuerdo con la indicación correspondiente.",
    modoUso:
      "Utilizar de acuerdo con la indicación profesional correspondiente. La etiqueta advierte que puede generar somnolencia.",
    fichaTecnica: [
      { label: "Formulación", value: "CBD + melatonina." },
      { label: "Objetivo de la fórmula", value: "Favorecer el descanso y mejorar la calidad del sueño." },
      { label: "Presentación", value: "Frasco gotero de 20 ml." },
      { label: "Advertencia", value: "Puede generar somnolencia." },
    ],
    infoImportante:
      "Producto de uso personal dentro del marco del cannabis medicinal. Mantener fuera del alcance de niños. No recomendado durante embarazo o lactancia.",
  },
  {
    id: 5,
    slug: "crema-cbd",
    categoria: "Uso tópico",
    nombre: "Crema de CBD",
    imagen: "/product5.webp",
    galeria: ["/product5.webp"],
    resumen:
      "Crema tópica con CBD formulada para aliviar molestias musculares y articulares y acompañar la recuperación frente a traumatismos y contusiones. Su fórmula combina cannabinoides con componentes botánicos y está pensada para una aplicación localizada y de rápida absorción.",
    destacados: [
      { titulo: "Dolores musculares", desc: "Aplicación localizada sobre zonas con molestias musculares." },
      { titulo: "Molestias articulares", desc: "Formulada para acompañar el alivio de molestias articulares." },
      { titulo: "Recuperación localizada", desc: "Pensada para acompañar traumatismos y contusiones." },
      { titulo: "Rápida absorción", desc: "Aplicación tópica con masaje hasta su completa absorción." },
    ],
    descripcion:
      "La Crema de CBD Terramore está formulada con propiedades antiinflamatorias, analgésicas y antioxidantes que, según su etiqueta, ayudan a aliviar molestias musculares y articulares. Está pensada también para acompañar la recuperación frente a traumatismos y contusiones, aportando bienestar y confort mediante una aplicación localizada. Es ideal para utilizar en zonas como cuello, hombros, espalda, rodillas y piernas.",
    modoUso:
      "Aplicar una cantidad adecuada de crema sobre la zona deseada y masajear suavemente hasta su completa absorción. Utilizar según sea necesario. Lavarse las manos después de cada aplicación. En caso de encontrarse bajo tratamiento médico, embarazo o período de lactancia, consultar con un médico antes de utilizar el producto.",
    fichaTecnica: [
      { label: "Tipo de producto", value: "Crema tópica con CBD." },
      { label: "Presentación", value: "50 g." },
      { label: "Aplicación", value: "Uso tópico localizado." },
      {
        label: "Ingredientes declarados",
        value:
          "Cannabidiol, agua, aceite mineral, alcohol cetearílico, glicerina, estearato de glicerilo SE, sulfato de sodio, metilparabeno de sodio, propilparabeno de sodio, ácido cítrico, esencia de lavanda, árnica, caléndula, menta, romero y manzanilla.",
      },
    ],
    infoImportante:
      "Uso externo. Evitar el contacto con ojos y mucosas. Lavarse las manos después de la aplicación y consultar con un profesional en caso de tratamiento médico, embarazo o lactancia.",
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug) ?? null;

export const getRelatedProducts = (slug, limit = 3) =>
  products.filter((p) => p.slug !== slug).slice(0, limit);
