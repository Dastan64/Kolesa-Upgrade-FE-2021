const clothes = [
    {
        src:              '/src/assets/images/t-shirt-card.png',
        webpSrc:          '/src/assets/images/t-shirt-card.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',
        id:               1,
        isNew:            true,
        type:             'Футболка',
        name:             '"Эволюционируй или умри"',
        description:      'Брендированная толстовка от Qazaq Republic. Материал:Хлопок 80%, Вискоза 20%',
        scores:           '220 баллов',
        sizes:            ['S', 'XS', 'M'],
        colors:           [
            {
                name:  'Синий',
                value: '#00458a',
                id:    'blue',
            },
            {
                name:  'Бежевый',
                value: '#efe8d8',
                id:    'beige',
            },
            {
                name:  'Серый',
                value: '#d4d4da',
                id:    'grey',
            },
        ],
    },
    {
        src:              '/src/assets/images/t-shirt.png',
        webpSrc:          '/src/assets/images/t-shirt.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          2,
        isNew:       true,
        type:        'Свитшот',
        name:        '"По заветам бабушки"',
        description: 'Невероятно тёплый свитшот, который поможет согреться в зимние вечера. Материал:Хлопок 100%',

        scores: '230 баллов',
        sizes:  ['M', 'L'],
        colors: [
            {
                name:  'Хаки',
                value: '#F0E68C',
                id:    'khaki',
            },
            {
                name:  'Красный',
                value: '#ff0000',
                id:    'red',
            },
            {
                name:  'Зелёный',
                value: '#388828',
                id:    'green',
            },
        ],
    },
    {
        src:              '/src/assets/images/belt.png',
        webpSrc:          '/src/assets/images/belt.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          3,
        isNew:       false,
        type:        'Ремень',
        name:        '',
        description: 'Качественный ремень от бренда Qazaq Republic',

        scores: '80 баллов',
        sizes:  ['XS', 'XL'],
        colors: [
            {
                name:  'Чёрный',
                value: '#000000',
                id:    'black',
            },
            {
                name:  'Коричневый',
                value: '#46332e',
                id:    'brown',
            },
        ],
    },
    {
        src:              '/src/assets/images/cap.png',
        webpSrc:          '/src/assets/images/cap.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          4,
        isNew:       false,
        type:        'Кепка',
        name:        '',
        description: 'Кепка от Kolesa Group, полностью изготовленная из хлопка',

        scores: '85 баллов',
        sizes:  ['L', 'XL'],
        colors: [
            {
                name:  'Зелёный',
                value: '#2b7500',
                id:    'green',
            },
            {
                name:  'Синий',
                value: '#00458a',
                id:    'blue',
            },
            {
                name:  'Красный',
                value: '#ff0000',
                id:    'green',
            },
        ],
    },
    {
        src:              '/src/assets/images/handkerchief.png',
        webpSrc:          '/src/assets/images/handkerchief.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          5,
        isNew:       false,
        type:        'Карманный платок',
        name:        '',
        description: 'Элегантный платок. Материал: хлопок',

        scores: '50 баллов',
        sizes:  ['45x45 см'],
    },
    {
        src:              '/src/assets/images/hat.png',
        webpSrc:          '/src/assets/images/hat.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:    6,
        isNew: false,
        type:  'Шапочка',
        name:  '',

        scores: '100 баллов',
        sizes:  ['XS', 'M'],
        colors: [
            {
                name:  'Чёрный',
                value: '#000',
                id:    'black',
            },
            {
                name:  'Красный',
                value: '#ff3300',
                id:    'red',
            },
        ],
    },
    {
        src:              '/src/assets/images/mask.png',
        webpSrc:          '/src/assets/images/mask.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          7,
        isNew:       false,
        type:        'Маска',
        name:        '',
        description: 'Маска, которая даёт Вам +10 к социальной ответственности, а ещё согреет область лица зимой',
        scores:      '45 баллов',
        sizes:       ['XS'],
        colors:      [
            {
                name:  'Чёрный',
                value: '#000000',
                id:    'black',
            },
            {
                name:  'Бежевый',
                value: '#efe8d8',
                id:    'beige',
            },
        ],
    },
    {
        src:              '/src/assets/images/polo.png',
        webpSrc:          '/src/assets/images/polo.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          8,
        isNew:       false,
        type:        'Поло',
        name:        '',
        description: "Поло, не уступающее по качеству бренду Marc O'Polo",
        scores:      '240 баллов',
        sizes:       ['S', 'M', 'L', 'XL'],
        colors:      [
            {
                name:  'Белый',
                value: '#fff',
                id:    'white',
            },
            {
                name:  'Лаймовый',
                value: '#00ff00',
                id:    'lime',
            },
        ],
    },
    {
        src:              '/src/assets/images/socks.png',
        webpSrc:          '/src/assets/images/socks.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          9,
        isNew:       false,
        type:        'Носки',
        name:        '',
        description: 'Тёплые носочки, сделанные из 100%-ного хлопка',

        scores: '35 баллов',
        sizes:  ['S'],
        colors: [
            {
                name:  'Серый',
                value: '#666B80',
                id:    'grey',
            },
        ],
    },
];

const accessories = [
    {
        src:              '/src/assets/images/glasses.png',
        webpSrc:          '/src/assets/images/glasses.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        isNew:       true,
        id:          10,
        type:        'Очки',
        name:        '"Авиатор"',
        description: 'Очки в стиле "Авиатор" прибавят вам +30 к харизме.',
        scores:      '120 баллов',
    },
    {
        src:              '/src/assets/images/hanger.png',
        webpSrc:          '/src/assets/images/hanger.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        isNew:  true,
        id:     11,
        type:   'Вешалка-плечики',
        name:   '',
        scores: '90 баллов',
    },
    {
        src:              '/src/assets/images/pen.png',
        webpSrc:          '/src/assets/images/pen.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          12,
        isNew:       false,
        type:        'Ручка',
        name:        '',
        description: 'Шариковая ручка, которая не измажет бумагу',
        scores:      '40 баллов',
    },
    {
        src:              '/src/assets/images/phone-handler.png',
        webpSrc:          '/src/assets/images/phone-handler.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          13,
        isNew:       false,
        type:        'Поп-сокет',
        name:        '',
        description: 'Надоело держать телефон в машине? Купи этот поп-сокет и облегчи себе жизнь!',
        scores:      '160 баллов',
    },
    {
        src:              '/src/assets/images/powerbank.png',
        webpSrc:          '/src/assets/images/powerbank.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          14,
        isNew:       false,
        type:        'Powerbank',
        name:        '',
        description: 'Мощный Powerbank, который спасёт тебя в любой ситуации',
        scores:      '320 баллов',
    },
    {
        src:              '/src/assets/images/usb.png',
        webpSrc:          '/src/assets/images/usb.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          15,
        isNew:       false,
        type:        'Флешка',
        name:        '',
        description: 'Вместительная флешка объёмом 32ГБ, на которую ты можешь записать всё, что душе угодно',
        scores:      '180 баллов',
    },
    {
        src:              '/src/assets/images/umbrella.png',
        webpSrc:          '/src/assets/images/umbrella.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          16,
        isNew:       false,
        type:        'Зонт',
        name:        '',
        description: 'Широкий зонт не даст тебе промокнуть',

        scores: '140 баллов',
    },
    {
        src:              '/src/assets/images/cable.png',
        webpSrc:          '/src/assets/images/cable.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:     17,
        isNew:  false,
        type:   'Кабель быстрой зарядки',
        name:   '',
        scores: '185 баллов',
    },
    {
        src:              '/src/assets/images/pencilcase.png',
        webpSrc:          '/src/assets/images/pencilcase.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          18,
        isNew:       false,
        type:        'Пенал',
        name:        '',
        description: 'Удобный пенал для всех твоих принадлежностей',
        scores:      '110 баллов',
    },
];

export { clothes, accessories };
