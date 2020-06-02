import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Component({
    selector: 'app-pokedex-detail',
    templateUrl: './pokedex-detail.component.html',
    styleUrls: ['./pokedex-detail.component.scss']
})
/** pokedex-detail component*/
export class PokedexDetailComponent implements OnInit {
  @Input() myPokemon: Pokemon;

    constructor() {

  }
  ngOnInit(): void {
  }
}
