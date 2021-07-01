import { Component, Input } from '@angular/core';
import { Pokemon, Ability, Characteristics } from '../interfaces/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
/** pokedex component*/
export class PokedexComponent {
  pokemon: Pokemon[];
  detail: Characteristics[];
  
  
  constructor(private pokeService: PokemonService) { }

 getPokemonById(id: number) {
    this.pokeService.getPokemonByID(id).subscribe(
      (data: any) => {
        this.pokemon = data;
        console.log(this.pokemon);
      },
      error => console.error(error)
    );
  }

  getDetail(id: number) {
    this.pokeService.getDetail(id).subscribe(
      (data: any) => {
        this.detail = data;
        console.log(this.detail);
      },
      error => console.error(error)
    );
  }

  details() {
    let id = Math.floor(Math.random() * 20);
    this.getDetail(id);
  }

  randPokemon() {
    let id = Math.floor(Math.random() * 898);
    this.getPokemonById(id);
    this.details();
  }
  
  pokemonHeight(height: number) {
    return Math.round((height * 3.93) / 12);
  }

  pokemonWeight(weight: number) {
    return Math.round((weight * 3.93) / 12);
  }

  ngOnInit() { }
}
