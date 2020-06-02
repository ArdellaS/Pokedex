/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PokedexDetailComponent } from './pokedex-detail.component';

let component: PokedexDetailComponent;
let fixture: ComponentFixture<PokedexDetailComponent>;

describe('pokedex-detail component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PokedexDetailComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PokedexDetailComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});