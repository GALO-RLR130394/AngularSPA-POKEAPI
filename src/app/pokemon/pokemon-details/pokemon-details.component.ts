import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
//Services
import { PokemonService } from '../services/pokemon.service';
//Models
import { PokemonObject } from '../models/pokemon-object';
import { PokemonDetail  } from '../models/pokemon-detail';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon:PokemonDetail=new PokemonDetail().deserialize({});
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService:PokemonService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if(name){
      this.pokemonService.getPokemonByName(name).subscribe((pokemon:PokemonDetail)=>{
        this.pokemon=pokemon;
        this.pokemon.addUrlImage();
      })
    }else{
      this.router.navigate(['/pokemons']);
    }
  };
}
