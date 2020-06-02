import { Injectable } from '@angular/core';
import { Pokemon, Ability, Types, Sprites } from './interfaces/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonByID(id:number) {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemonAbilities(id: number) {
    return this.http.get<Ability>(`${this.apiUrl}/ability/${id}`);
  }

  getPokemonTypes(id: number) {
    return this.http.get<Types>(`${this.apiUrl}/type/${id}`);
  }

  //getSpriteOfPokemon(url: string) {
  //  return this.http.get<Sprites>(url);
  //}
}
