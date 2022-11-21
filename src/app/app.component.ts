import { Component , OnInit} from '@angular/core';
import { POKEMONS } from './moke-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;


  ngOnInit(): void {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[4]);
  }
  selectPokemon(pokemonId: String){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`Vous avez Clic sur :${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Pokemon n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }


}

// Pseudo evenement Angular (Evenement JS)
