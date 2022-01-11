import { v4 as uuid } from 'uuid';
import { Character } from './characters.types';

export const generateCharacter = ({
  name,
  image = 'unknown.png',
}: {
  name: string;
  image?: string;
}): Character => ({
  id: uuid(),
  name,
  image,
});
