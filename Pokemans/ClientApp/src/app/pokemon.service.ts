import { Injectable } from '@angular/core';
import { Pokemon, Ability, Characteristics } from './interfaces/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonByID(id: number) {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemonAbilities(name: string) {
    return this.http.get<Ability>(`${this.apiUrl}/ability/${name}`);
  }

  getDetail(id: number) {
    return this.http.get<Characteristics>(`${this.apiUrl}/characteristic/${id}`);
  }
}
