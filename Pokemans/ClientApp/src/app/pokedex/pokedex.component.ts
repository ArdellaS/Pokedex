import { Component, Input } from '@angular/core';
import { Pokemon, Ability, Types, Sprites } from '../interfaces/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
/** pokedex component*/
export class PokedexComponent {
  pokemon: Pokemon[];
  ability: Ability[];
  type: Types[];

  
  constructor(private pokeService: PokemonService) { }

  randID():number {
    return Math.floor(Math.random() * 801);
  }

  getPokemonByID(id:number) {
    this.pokeService.getPokemonByID(id).subscribe(
      (data: any) => {
        this.pokemon = data;
        console.log(this.pokemon);
  },
      error => console.error(error)
    );
  }
  getPokemonAbilitiesByName(name: string) {
    this.pokeService.getPokemonAbilities(name).subscribe(
      (data: any) => {
        this.ability = data;
        console.log(this.ability);
      },
      error => console.error(error)
    );
  }

  //getPokemonTypesByID(id: number) {
  //  this.pokeService.getPokemonTypes(id).subscribe(
  //    (data: any) => {
  //      this.type = data;
  //      console.log(this.type);
  //    },
  //    error => console.error(error)
  //  );
  //}
  randPokemon() {
    let id = this.randID();
    let newMon = this.getPokemonByID(id);
    console.log(newMon);
    //this.getPokemonAbilitiesByID(this.getPokemonByID.name);
//    this.getPokemonTypesByID(id);
    console.log(this.pokemon);
    
  }
  ngOnInit() {
    
  }
}
