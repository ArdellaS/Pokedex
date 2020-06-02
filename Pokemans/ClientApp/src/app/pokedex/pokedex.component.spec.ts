/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PokedexComponent } from './pokedex.component';

let component: PokedexComponent;
let fixture: ComponentFixture<PokedexComponent>;

describe('pokedex component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PokedexComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PokedexComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});