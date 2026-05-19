const destinations = {

  northIndia: [

    {
      id: 1,
      name: 'Manali',
      image:
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
      description:
        'Enjoy snow mountains, rivers, cafes, and adventure sports.',
      price: 18000,
      category: 'Mountains',
      popularity: 92,
    },

    {
      id: 2,
      name: 'Kashmir',
      image:
        'https://images.unsplash.com/photo-1598091383021-15ddea10925d',
      description:
        'Experience Dal Lake, snow peaks, valleys, and paradise views.',
      price: 25000,
      category: 'Mountains',
      popularity: 99,
    },

    {
      id: 3,
      name: 'Ladakh',
      image:
        'https://images.unsplash.com/photo-1612438214708-f428a707dd24',
      description:
        'Bike rides, monasteries, mountains, and breathtaking roads.',
      price: 30000,
      category: 'Mountains',
      popularity: 97,
    },

    {
      id: 4,
      name: 'Shimla',
      image:
        'https://images.unsplash.com/photo-1622308644420-b20142dc993c',
      description:
        'Colonial beauty, toy train, hills, and snowfall views.',
      price: 16000,
      category: 'Mountains',
      popularity: 88,
    },

    {
      id: 5,
      name: 'Rishikesh',
      image:
        'https://images.unsplash.com/photo-1627894483216-2138af692e32',
      description:
        'River rafting, yoga, temples, and Himalayan beauty.',
      price: 14000,
      category: 'Spiritual',
      popularity: 90,
    },

    {
      id: 21,
      name: 'Agra',
      image:
        'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      description:
        'Visit the iconic Taj Mahal and Mughal architecture.',
      price: 14000,
      category: 'Luxury',
      popularity: 96,
    },

    {
      id: 22,
      name: 'Delhi',
      image:
        'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description:
        'Explore India Gate, Red Fort, markets, and vibrant city life.',
      price: 15000,
      category: 'Luxury',
      popularity: 91,
    },

  ],

  southIndia: [

    {
      id: 6,
      name: 'Goa',
      image:
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      description:
        'Beautiful beaches, nightlife, water sports, and parties.',
      price: 12000,
      category: 'Beaches',
      popularity: 100,
    },

    {
      id: 7,
      name: 'Kerala',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      description:
        'Backwaters, tea gardens, houseboats, and nature.',
      price: 22000,
      category: 'Luxury',
      popularity: 95,
    },

    {
      id: 8,
      name: 'Ooty',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      description:
        'Tea plantations, cool weather, lakes, and hills.',
      price: 17000,
      category: 'Mountains',
      popularity: 85,
    },

    {
      id: 9,
      name: 'Coorg',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      description:
        'Coffee plantations, waterfalls, and scenic valleys.',
      price: 18000,
      category: 'Mountains',
      popularity: 87,
    },

    {
      id: 10,
      name: 'Kanyakumari',
      image:
        'https://images.unsplash.com/photo-1593693397690-362cb9666fc2',
      description:
        'Sunrise views, Vivekananda Rock, and ocean beauty.',
      price: 15000,
      category: 'Beaches',
      popularity: 84,
    },

  ],

  westIndia: [

    {
      id: 23,
      name: 'Mumbai',
      image:
        'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
      description:
        'Visit Gateway of India, Marine Drive, Bollywood, and nightlife.',
      price: 20000,
      category: 'Luxury',
      popularity: 98,
    },

    {
      id: 11,
      name: 'Jaipur',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      description:
        'Royal forts, palaces, colorful markets, and culture.',
      price: 15000,
      category: 'Luxury',
      popularity: 94,
    },

    {
      id: 12,
      name: 'Udaipur',
      image:
        'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      description:
        'Lakes, palaces, luxury hotels, and royal heritage.',
      price: 17000,
      category: 'Luxury',
      popularity: 93,
    },

    {
      id: 13,
      name: 'Mount Abu',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      description:
        'Hill station beauty, Nakki Lake, and peaceful views.',
      price: 13000,
      category: 'Mountains',
      popularity: 80,
    },

    {
      id: 14,
      name: 'Kutch',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      description:
        'White desert, Rann festival, and cultural beauty.',
      price: 21000,
      category: 'Wildlife',
      popularity: 82,
    },

    {
      id: 15,
      name: 'Mahabaleshwar',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      description:
        'Strawberry farms, hills, lakes, and cool weather.',
      price: 16000,
      category: 'Mountains',
      popularity: 83,
    },

  ],

  eastIndia: [

    {
      id: 16,
      name: 'Darjeeling',
      image: '/images/darjeeling.png',
      description:
        'Tea gardens, toy train, and Kanchenjunga views.',
      price: 19000,
      category: 'Mountains',
      popularity: 93,
    },

    {
      id: 17,
      name: 'Gangtok',
      image:
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      description:
        'Monasteries, mountains, lakes, and adventure.',
      price: 22000,
      category: 'Mountains',
      popularity: 89,
    },

    {
      id: 18,
      name: 'Puri',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      description:
        'Jagannath temple, beaches, and spiritual beauty.',
      price: 12000,
      category: 'Spiritual',
      popularity: 86,
    },

    {
      id: 19,
      name: 'Shillong',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      description:
        'Waterfalls, hills, clouds, and greenery.',
      price: 20000,
      category: 'Mountains',
      popularity: 84,
    },

    {
      id: 20,
      name: 'Kaziranga',
      image:
        'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      description:
        'Wildlife safari, rhinos, forests, and nature.',
      price: 24000,
      category: 'Wildlife',
      popularity: 88,
    },

  ],

}

export default destinations