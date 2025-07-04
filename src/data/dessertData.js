export const dessertItems = [
  {
    id: 1,
    name: '초콜릿 케이크',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '케이크',
    description: '진한 초콜릿의 풍미'
  },
  {
    id: 2,
    name: '딸기 케이크',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '케이크',
    description: '신선한 딸기와 크림'
  },
  {
    id: 3,
    name: '마카롱',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '마카롱',
    description: '다양한 색상의 마카롱'
  },
  {
    id: 4,
    name: '티라미수',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '케이크',
    description: '이탈리아 전통 디저트'
  },
  {
    id: 5,
    name: '도넛',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '도넛',
    description: '글레이즈드 도넛'
  },
  {
    id: 6,
    name: '크로와상',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4a3e4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '페이스트리',
    description: '버터 향이 가득한 크로와상'
  },
  {
    id: 7,
    name: '치즈케이크',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '케이크',
    description: '부드러운 치즈케이크'
  },
  {
    id: 8,
    name: '에클레어',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: '페이스트리',
    description: '크림이 가득한 에클레어'
  }
];

export const stickerTemplates = [
  {
    id: 1,
    name: '클래식',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    price: 2000,
    colors: ['black', 'white', 'gold']
  },
  {
    id: 2,
    name: '하트 패턴',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    price: 2500,
    colors: ['pink', 'red', 'purple']
  },
  {
    id: 3,
    name: '파티 테마',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    price: 3000,
    colors: ['multicolor', 'rainbow', 'neon']
  },
  {
    id: 4,
    name: '미니멀',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    price: 1500,
    colors: ['gray', 'white', 'black']
  }
];

export const boxSizes = [
  {
    id: 'small',
    name: '소형 박스',
    capacity: 4,
    price: 3000,
    description: '4개 디저트 수납 가능'
  },
  {
    id: 'medium',
    name: '중형 박스',
    capacity: 8,
    price: 5000,
    description: '8개 디저트 수납 가능'
  },
  {
    id: 'large',
    name: '대형 박스',
    capacity: 12,
    price: 7000,
    description: '12개 디저트 수납 가능'
  }
];