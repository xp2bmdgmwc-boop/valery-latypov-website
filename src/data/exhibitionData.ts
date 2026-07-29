export interface PortraitItem {
  id: string;
  title: string;
  year: string;
  location: string;
  concept: string;
  image: string;
  aspectRatio?: string;
  speed: number; // differential parallax speed factor (2D DOM layer)
}

export interface FaceTimeItem {
  id: string;
  name: string;
  role: string;
  year: string;
  image: string;
  quote?: string;
}

export interface InkArtItem {
  id: string;
  title: string;
  dimensions: string;
  status: 'Original Available' | 'In Private Collection';
  price?: string;
  energyDescription: string;
  image: string;
}

export const HERO_DATA = {
  title: 'VALERY LATYPOV',
  subtitle: 'Visual Architect & Artist. 25 Years of Capturing Raw Texture.',
  heroImage: '/images/hero_portrait.webp',
  tagline: 'PRIVATE ART MUSEUM & DIGITAL EXHIBITION',
};

export const CINEMATIC_PORTRAITS: PortraitItem[] = [
  {
    id: 'p1',
    title: 'The Silent Architect',
    year: '2024',
    location: 'Moscow',
    concept: 'Volumetric natural light, psychological depth & status anchoring',
    image: '/images/portrait_1.webp',
    speed: 0.85,
  },
  {
    id: 'p2',
    title: 'Raw Texture & Shadow',
    year: '2024',
    location: 'Dubai',
    concept: 'Unfiltered humanity without plastic retouching',
    image: '/images/portrait_2.webp',
    speed: 1.15,
  },
  {
    id: 'p3',
    title: 'Executive Presence',
    year: '2023',
    location: 'Moscow',
    concept: 'Commanding calm, authentic posture, timeless character',
    image: '/images/portrait_3.webp',
    speed: 0.9,
  },
  {
    id: 'p4',
    title: 'Monochrome Soul',
    year: '2023',
    location: 'Paris',
    concept: 'High-contrast fine art lighting, inner dignity',
    image: '/images/portrait_4.webp',
    speed: 1.1,
  },
  {
    id: 'p5',
    title: 'The Visionary Eye',
    year: '2024',
    location: 'Bali / Moscow',
    concept: 'Cinematic narrative portrait, organic light',
    image: '/images/portrait_5.webp',
    speed: 0.95,
  },
  {
    id: 'p6',
    title: 'Legacy & Depth',
    year: '2024',
    location: 'Moscow',
    concept: 'Authentic scale before a single word is spoken',
    image: '/images/portrait_6.webp',
    speed: 1.05,
  },
];

export const HALL_1_QUOTE = {
  text: '«Я не делаю шаблонные бизнес-портреты со скрещенными руками. Я создаю кинематографичную фотографию, которая раскрывает человека без масок и пластиковой ретуши. Моя задача — сделать так, чтобы ваш визуал транслировал ваш масштаб еще до того, как вы начнете говорить».',
  author: 'Валерий Латыпов',
  ctaText: 'Запросить съемку в Москве (50 000 ₽ / 2 часа)',
  price: '50 000 ₽',
  duration: '2 часа',
};

export const FACETIME_ARCHIVE: FaceTimeItem[] = [
  {
    id: 'ft1',
    name: 'Татьяна Навка и Дмитрий Песков',
    role: 'Олимпийская чемпионка & Пресс-секретарь',
    year: '2020',
    image: '/images/facetime_navka_peskov.webp',
  },
  {
    id: 'ft2',
    name: 'Ирина Хакамада',
    role: 'Общественный деятель, писатель',
    year: '2020',
    image: '/images/facetime_khakamada.webp',
  },
  {
    id: 'ft3',
    name: 'Игорь Рыбаков & Оскар Хартманн',
    role: 'Предприниматели & Инвесторы',
    year: '2020',
    image: '/images/facetime_rybakov_hartmann.webp',
  },
  {
    id: 'ft4',
    name: 'Радислав Гандапас',
    role: 'Эксперт по лидерству',
    year: '2020',
    image: '/images/facetime_gandapas.webp',
  },
  {
    id: 'ft5',
    name: 'Александр Робак',
    role: 'Актер театра и кино',
    year: '2020',
    image: '/images/facetime_robak.webp',
  },
  {
    id: 'ft6',
    name: 'Люся Чеботина, Женя Искандарова, Петя Плосков',
    role: 'Артисты & Медиа-продюсеры',
    year: '2020',
    image: '/images/facetime_chebotina.webp',
  },
  {
    id: 'ft7',
    name: 'Борис Гребенщиков & Би-2',
    role: 'Легенды рок-музыки',
    year: '2020',
    image: '/images/facetime_bg_b2.webp',
  },
  {
    id: 'ft8',
    name: 'Forbes Executive Heroes',
    role: 'Герои обложек & Инвесторы',
    year: '2020',
    image: '/images/facetime_forbes.webp',
  },
];

export const INK_ENERGY_COLLECTION: InkArtItem[] = [
  {
    id: 'ink1',
    title: 'Focus & Structure No. 01',
    dimensions: '70 x 100 cm',
    status: 'Original Available',
    price: '€1,400',
    energyDescription: 'Фокус, тишина, структура. Монохромная энергетическая сетка тушью на хлопковой бумаге.',
    image: '/images/ink_art_1.webp',
  },
  {
    id: 'ink2',
    title: 'Monolithic Vector',
    dimensions: '50 x 70 cm',
    status: 'Original Available',
    price: '€950',
    energyDescription: 'Плотный графический импульс, концентрация намерения и кристаллическая гармония.',
    image: '/images/ink_art_2.webp',
  },
  {
    id: 'ink3',
    title: 'Quantum Field Canvas',
    dimensions: '100 x 140 cm',
    status: 'In Private Collection',
    price: '€2,000',
    energyDescription: 'Глубинная медитативная декомпозиция пространственной энергии.',
    image: '/images/ink_art_3.webp',
  },
  {
    id: 'ink4',
    title: 'Polyline Resonance',
    dimensions: '60 x 80 cm',
    status: 'Original Available',
    price: '€1,200',
    energyDescription: 'Чистый ритм линии, тактильная фактура бумаги и архитектура сознания.',
    image: '/images/ink_art_4.webp',
  },
];

export const VENTURES_DATA = {
  manilia: {
    title: 'Manilia LS',
    tagline: 'B2B AI Visual Engine for Jewelry Brands',
    url: 'https://mls.valerylatypov.com/',
    description: 'ИИ-платформа нового поколения для генерации визуалов ювелирных брендов класса люкс.',
  },
  baliExpedition: {
    title: 'Private Author\'s Expedition',
    tagline: 'Bali Reboot for Founders',
    price: 'от €7,400',
    description: 'Персональная закрытая экспедиция-перезагрузка для основателей и топ-менеджеров на Бали.',
  },
  socials: {
    instagram: '@valery.latypov',
    instagramUrl: 'https://instagram.com/valery.latypov',
    telegram: 't.me/valerylatypov',
    telegramUrl: 'https://t.me/valerylatypov',
    whatsapp: 'https://wa.me/79990000000',
  },
};
