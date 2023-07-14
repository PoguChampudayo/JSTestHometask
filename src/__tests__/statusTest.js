import { getStatus, sortCharactersByHealth } from '../index';

test.each([
  [{ name: 'Волшебник', health: 75 }, 'healthy'],
  [{ name: 'Чернокнижник', health: 45 }, 'wounded'],
  [{ name: 'Варвар', health: 10 }, 'critical'],
  [{ name: 'Чародей', health: 89 }, 'healthy'],
  [{ name: 'Плут', health: 16 }, 'wounded'],
  [{ name: 'Чародей', health: 15 }, 'critical'],
  [{ name: 'Следопыт', health: 1 }, 'critical'],
  [{ name: 'Паладин', health: 0 }, 'dead'],
])(
  ('should return %s status according to its health (%s)'),
  (character, expected) => {
    const recieved = getStatus(character);
    expect(recieved).toBe(expected);
  },
);

test.each([
  [[
    { name: 'Волшебник', health: 100 },
    { name: 'Чародей', health: 50 },
    { name: 'Варвар', health: 80 },
  ],
  [
    { name: 'Волшебник', health: 100 },
    { name: 'Варвар', health: 80 },
    { name: 'Чародей', health: 50 },
  ]],
  [[
    { name: 'Волшебник', health: 90 },
    { name: 'Чародей', health: 60 },
    { name: 'Варвар', health: 100 },
  ],
  [
    { name: 'Варвар', health: 100 },
    { name: 'Волшебник', health: 90 },
    { name: 'Чародей', health: 60 },
  ]],
  [[
    { name: 'Волшебник', health: 15 },
    { name: 'Чародей', health: 65 },
    { name: 'Варвар', health: 80 },
  ],
  [
    { name: 'Варвар', health: 80 },
    { name: 'Чародей', health: 65 },
    { name: 'Волшебник', health: 15 },
  ],
  ],

])(
  ('should return sorted characters'),
  (characters, expected) => {
    const recieved = sortCharactersByHealth(characters);
    expect(recieved).toEqual(expected);
  },
);
