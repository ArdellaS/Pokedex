export interface Pokemon {
  id: number;
  abilities: Ability[];
  height: number;
  name: string;
  type: Types[];
  weight: number;
  sprite: Sprites[];
}

export interface Ability {
  name: string;
  id: number;

}

export interface Types {
  name: string;
}
export interface Sprites {
  back: string;
  front: string;
}
