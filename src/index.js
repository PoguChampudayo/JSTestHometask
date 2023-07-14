export function getStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health > 15 && character.health <= 50) {
    return 'wounded';
  }
  if (character.health <= 15 && character.health > 0) {
    return 'critical';
  }
  return 'dead';
}

export function sortCharactersByHealth(characters) {
  return characters.sort((a, b) => (a.health > b.health ? -1 : 1));
}
