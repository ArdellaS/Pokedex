export interface Pokemon {
  id: number;
  abilities: Ability[];
  height: number;
  name: string;
  type: Types[];
  weight: number;
  sprite: Sprites[];
  base_experience: number;
  //move: Moves[];
  
}

export interface Ability {
  name: string;
  id: number;

}
//export interface Moves {

//}

export interface Types {
  name: string;
}
export interface Sprites {
  back: string;
  front: string;
}
