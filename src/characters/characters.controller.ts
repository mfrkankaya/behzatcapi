import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Character } from './characters.types';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  getCharacters(
    @Query('page') page: number,
    @Query('seed') seed: number,
  ): Character[] {
    return this.charactersService.getCharacters(page, seed);
  }

  @Get(':id')
  getCharacterById(@Param('id') characterId: string): Character {
    return this.charactersService.getCharacterById(characterId);
  }

  @Get('search')
  searchCharacters(
    @Query('query') query: string,
    @Query('page') page: number,
    @Query('seed') seed: number,
  ): Character[] {
    return this.charactersService.searchCharacters(query, page, seed);
  }
}
