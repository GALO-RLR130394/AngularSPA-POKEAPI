import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//Models
import { PokemonObject } from '../models/pokemon-object';
import { PokemonDetail  } from '../models/pokemon-detail';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpService: HttpClient) { }

  public getAllPokemon(limit:number,offset:number): Observable<PokemonObject> {

    return this.httpService.get<PokemonObject>(`${environment.api_url}/pokemon?limit=${limit}&offset=${offset}/`).pipe(
      map((data:any)=>new PokemonObject().deserialize(data)),
      catchError(this.handleError)
    );
  };

  public getPokemonByName(name:string): Observable<PokemonDetail> {

    return this.httpService.get<PokemonDetail>(`${environment.api_url}/pokemon/${name}`).pipe(
      map((data:any)=>new PokemonDetail().deserialize(data)),
      catchError(this.handleError)
    );
  };

  private handleError(err: HttpErrorResponse) {

    let errorMessage: any = {};

    if (err.error instanceof ErrorEvent) {
      errorMessage = {
        message: `An error occurred: ${err.error.message}`,
        code: err.status
      };
    } else {
      errorMessage = {
        message: err
      };
    }
    return throwError(errorMessage);
  }

}
