import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes,  app-hero-detail',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero!: Hero;

  heroes!: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}















































/*import { Component, OnInit } from '@angular/core'; // Importa los módulos 'Component' y 'OnInit' desde '@angular/core'
import { Hero } from '../heroes'; // Importa la interfaz 'Hero' desde el archivo '../heroes'
//import { HEROES } from '../mock-heroes'; // Importa la constante 'HEROES' desde el archivo '../mock-heroes'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes', // Define el selector del componente como 'app-heroes', lo que significa que se puede usar con <app-heroes> en la plantilla HTML
  templateUrl: './heroes.component.html', // Define la plantilla HTML asociada con este componente
  styleUrls: ['./heroes.component.css'] // Define las hojas de estilo CSS asociadas con este componente
})
export class HeroesComponent { // Define la clase 'HeroesComponent'
  heroes: Hero[] = [];
  //heroes = HEROES; // Crea una propiedad 'heroes' que se inicializa con la constante 'HEROES'
  selectedHero?: Hero // Declara una propiedad 'selectedHero' que puede ser de tipo 'Hero' o 'undefined'

  onSelect(hero: Hero): void { // Define un método 'onSelect' que toma un parámetro 'hero' de tipo 'Hero' y no devuelve nada
    this.selectedHero = hero; // Asigna el héroe seleccionado al 'selectedHero'
  }
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  
}
*/

/*export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}*/
