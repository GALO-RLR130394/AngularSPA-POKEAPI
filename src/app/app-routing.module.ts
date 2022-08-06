import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { FullComponent } from './layout/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
      {
        path: 'pokemons',
        loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pokemons'
  }
];
