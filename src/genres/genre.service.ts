import { Injectable } from '@nestjs/common';

export type Genre = {
  id: number;
  label: string;
  type: string | null;
  icon: string;
};

@Injectable()
export class GenreService {
  private readonly genres: Genre[] = [
    { id: 1, label: 'All quests', type: null, icon: '/icons/all_quests.svg' },
    {
      id: 2,
      label: 'Adventure',
      type: 'Adventure',
      icon: '/icons/adventure.svg',
    },
    { id: 3, label: 'Horror', type: 'Horror', icon: '/icons/horror.svg' },
    {
      id: 4,
      label: 'Mysticism',
      type: 'Mysticism',
      icon: '/icons/mysticism.svg',
    },
    {
      id: 5,
      label: 'Detective',
      type: 'Detective',
      icon: '/icons/detective.svg',
    },
    { id: 6, label: 'Sci-Fi', type: 'Sci-Fi', icon: '/icons/sci-fi.svg' },
  ];

  findAll(): Promise<Genre[]> {
    return Promise.resolve(this.genres);
  }
}
