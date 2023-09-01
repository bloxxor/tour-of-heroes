import {Component} from '@angular/core';
import {HEROES} from "../mock-heroes";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: Hero;

  /**
   * Bind to onSelect in heroes.component.ts
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
