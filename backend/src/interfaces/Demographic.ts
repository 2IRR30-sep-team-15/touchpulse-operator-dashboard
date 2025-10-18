import { Entity } from 'redis-om';

export interface Demographic extends Entity {
  id: string;
  age: number;
  sight_status: string;
  uses_cane: boolean;
  uses_guide_dog: boolean;
  created_at: number;
}
