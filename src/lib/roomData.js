export const roomSlugs = [
  'suite-deluxe-new',
  'suite-superior-gessi-new',
  'junior-suite-superior-new',
  'singola',
  'standard-queen',
  'comfort-twin',
  'superior-queen-balcone',
  'superior-king-balcone',
  'deluxe',
  'deluxe-balcone',
  'tripla',
  'junior-suite',
  'suite-classic',
  'tower-room',
];

export function getPremiumRooms(content) {
  const rooms = [
    ...content.spaSuites.slice().reverse(),
    ...content.rooms,
  ];

  return rooms.map((room, index) => ({
    ...room,
    slug: roomSlugs[index],
    index,
    number: String(index + 1).padStart(2, '0'),
    size: room.details.find((detail) => /m2|m²/i.test(detail)) || room.details[2] || '',
    bed: room.details[0] || '',
    feature: room.details[1] || room.eyebrow || '',
  }));
}

export function getRoomBySlug(content, slug) {
  return getPremiumRooms(content).find((room) => room.slug === slug);
}
