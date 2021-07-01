export interface Pokemon {
  id: number;
  abilities: Ability[];
  height: number;
  name: string;
  type: Types[];
  weight: number;
  sprite: Sprites[];
  base_experience: number;
}

export interface Ability {
  name: string;
  id: number;

}
export interface Characteristics {
  id: number;
  description: string;
}

