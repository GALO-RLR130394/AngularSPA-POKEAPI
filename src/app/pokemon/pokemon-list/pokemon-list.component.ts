import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
//Services
import { PokemonService } from '../services/pokemon.service';
//Models
import { PokemonObject } from '../models/pokemon-object';
import { Pokemon } from '../models/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @ViewChildren('pokemonCards') pokemonCards!: QueryList<ElementRef>

  pokemonObject:PokemonObject=new PokemonObject().deserialize({});
  pokemons:Pokemon[]=[];
  length=0;
  pageSize = 20;
  pageIndex=0;

  constructor(
    private pokemonService: PokemonService,
    private viewport: ViewportScroller,
    private router:Router) {}

  ngOnInit(): void {

    let limit=20;
    let offset=0;
    this.getAllPokemon(limit,offset);
    
  }

  getAllPokemon(limit:number,offset:number):void {

    this.pokemonService.getAllPokemon(limit,offset).subscribe((pokemonObject:PokemonObject)=>{
      
      this.pokemonObject=pokemonObject;
      this.pokemonObject.addUrlImage(offset);
      this.pokemons=pokemonObject.results;
      this.length = pokemonObject.count;
      this.pageSize =20;
     
    })
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    let limit=event.pageSize;
    let offset=event.pageIndex*event.pageSize;
    
    this.pokemonCards.first.nativeElement.scrollIntoView({block: "end", behavior: "smooth"});
    this.getAllPokemon(limit,offset);

  }

}
