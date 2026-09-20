import portada1 from './assets/lumen.png'
import portada2 from './assets/lumbral.png'
import portada3 from './assets/laArgentina.jpg'

export const author = {
  role: 'Autor',
  name: 'Markow Martín',
  eyebrow: 'Markow Martín',
  headline: 'Una breve introducción sobre mí.',
  bio: [
    'Estudiante de la carrera de Literatura en la Universidad Nacional de Lomas de Zamora. Escritor y productor de contenidos literarios con trayectoria continua desde los ocho años, con publicaciones y reconocimientos a nivel local e internacional. Autor de trabajos ensayísticos destacados, entre ellos un ensayo sobre nuevas figuras retóricas y el neobarroco, finalista del XI Premio de Literatura Experimental del Sporting Club Ruffasa Carlos Moreno Mínguez.',
    'Se especializa con excelencia en el género lírico, pues es autor de un poemario publicado que cuenta con obras reconocidas internacionalmente en revistas como Poesía entre Neón (México), Papeles del Caracol (España) y la XL edición de Trinando (Colombia), entre otras.',
    'Su interés avanzado en lingüistica diacrónica y en la estilistica, le condujo a escribir en inglés isabelino shakespeariano, italiano florentino-toscano, portugués quinhentista y español arcaizante del Cid.'  ],
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/autor.martinmarkow/' },
    { label: 'YouTube', url: '#' },
    { label: 'Gmail', url: '#' },
  ],
}
export const videos =[
  {
    title:'Poesía y conocimiento en las manifestaciones del infinito condensadas en la nocturnidad novaliana',
    description:'',
    url: 'https://www.youtube.com/embed/i-2eHmH_d9E',
  },
  {
    title:'Nueva fundamentación de la lógica matemática de Desde un punto de vista lógico de Willard Quine',
    description:'',
    url: 'https://www.youtube.com/embed/N_BxKFk4yVQ',
  }
]
export const books = [
  {
    id: 'book1',
    title: 'Lumen',
    eyebrow: 'Poesía · 2026',
    cover: portada1,
    meta: 'PuntoAparte · 55 páginas',
    intro:
      'Bajo el leitmotiv de una dedicatoria amorosa en la tradición del cancionero petrarquista. Lumen se aparta de la convencionalidad y de los límites del soneto italiano y del tópico de la donna angelicata para desplegar una sostenida versatilidad formal. El libro pone en escena un sólido dominio de formas estróficas, registros y procedimientos retóricos, en los que se articulan sensibilidad e intelectualidad, forma y contenido, así como elementos poéticos y prosísticos. Esta poética se cifra en lo que el autor denomina una "herética ortodoxia" o un "neológico arcaísmo": una escritura que, sin renunciar a la tradición, la reinscribe desde un diálogo activo con fuentes clásicas, modernistas y contemporáneas.',
    coverGradient: 'linear-gradient(160deg,#7a2e2e,#3a1414)',
    purchase: {
      price: '$18.500',
      description: 'Tapa dura con sobrecubierta ilustrada. Envíos a todo el país en 5 a 8 días hábiles.',
      url: '#',
    },
    digital: {
      price: '$6.200',
      description: 'Disponible en EPUB y PDF. Descarga inmediata después de la compra, compatible con cualquier lector.',
      url: '#',
    },
  },
  {
    id: 'book2',
    title: 'Lumbral',
    eyebrow: 'Poesía · 2026',
    cover: portada2,
    meta: 'PuntoAparte · 288 páginas',
    intro:
      'Tres hermanas se reencuentran cada enero en la misma casa de la costa. Esta es la historia del último verano que pasaron juntas antes de que la casa, y todo lo que representaba, dejara de ser suya.',
    coverGradient: 'linear-gradient(160deg,#3a4a3f,#161f1a)',
    purchase: {
      price: '$17.900',
      description: 'Tapa blanda, edición de bolsillo. Envíos a todo el país en 5 a 8 días hábiles.',
      url: '#',
    },
    digital: {
      price: '$5.800',
      description: 'Disponible en EPUB y PDF. Descarga inmediata después de la compra, compatible con cualquier lector.',
      url: '#',
    },
  },
  {
    id: 'book3',
    title: 'La Argentina de las vacas gordas',
    eyebrow: 'Poesía · 2022',
    cover: portada3,
    meta: 'Tinta Libre · 60 páginas',
    intro:
      'Con influencias de Quevedo, Gazir, Jaloner y el arte conceptual, el autor innova con estilemas como jurqueros campos sémicos, semánticos, conceptuales, dobletes etimológicos, semaforías, morfoforía o políptoton, morfemia, semia, lexemia, etimemia, tonemia, sinaxtemas, los pinos de una armonía funcional, etc. Además, posee un dominio expolitivo o lujoso de las figuras literarias más básicas como la paronimia, la homofonía, la polisemia, las multisilábicas o la metáfora hasta el punto de récords tales como la mayor cantidad de sentidos en una frase en español (20), la mayor cantidad de sentidos en una sola palabra en español (5), mayor cantidad de versos relacionados (27), mayor cantidad de calambures de una sola palabra (4), mayor cantidad de sentidos en un calambur polisémico (5), mayor expolición de metáforas de un solo concepto en español (11), entre otros.',
    coverGradient: 'linear-gradient(160deg,#4a4030,#1c1810)',
    purchase: {
      price: '$11.500',
      description: 'Tapa blanda. Envíos a todo el país en 5 a 8 días hábiles.',
      url: '#',
    },
    digital: {
      price: '$5.750',
      description: 'Disponible en EPUB y PDF. Descarga inmediata después de la compra, compatible con cualquier lector.',
      url: '#',
    },
  },
]
