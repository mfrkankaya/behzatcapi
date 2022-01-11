import { Injectable } from '@nestjs/common';
import { ALL_CHARACTERS_DATA } from './characters.data';
import { Character } from './characters.types';

@Injectable()
export class CharactersService {
  private characters = ALL_CHARACTERS_DATA;

  getCharacters(page = 1, seed = 5): Character[] {
    const s = seed < 1 ? 1 : seed > 20 ? 20 : seed;
    const start = (page - 1) * s;
    const end = page * s;

    return this.characters.slice(start, end);
  }

  getCharacterById(id: string): Character {
    return this.characters.find((character) => character.id === id);
  }

  searchCharacters(query: string, page = 1, seed = 5): Character[] {
    if (!query) return [];

    const loweredQuery = query.toLocaleLowerCase('tr');
    const s = seed < 1 ? 1 : seed > 20 ? 20 : seed;
    const start = (page - 1) * s;
    const end = page * s;

    return this.characters
      .filter((character) => {
        const loweredName = character.name.toLocaleLowerCase('tr');
        return loweredName.includes(loweredQuery);
      })
      .slice(start, end);
  }
}
