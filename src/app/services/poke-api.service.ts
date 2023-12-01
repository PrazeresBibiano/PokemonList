import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(
    private httpClient: HttpClient
  ) { }

  get pokeList():Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      tap(res =>res),
      tap(res =>{
       res.results.map( (resPokemons: any)=>{
       
          this.getPokemonsInformacao(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
       })
      })

    )
  }

  public getPokemonsInformacao(url:string):Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(
        res =>res
      )
    )
  }

  // async pokeList1():Promise<any>{
  //   let call = await this.httpClient.get<any>(this.url)
  //   return call
  // }
}
