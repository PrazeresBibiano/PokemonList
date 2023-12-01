import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class PokeListComponent implements OnInit{
  public allPokemons:any
  public filterPokemons:any
  public errorApi = false

  constructor(
    private pokeApiService:PokeApiService
  ){}

  ngOnInit(): void {
    this.getPokemonList()
    
  }

  getPokemonList(){
    this.pokeApiService.pokeList.subscribe(
      res => {
        this.filterPokemons = res.results
        this.allPokemons = this.filterPokemons
     },
     error =>{
      this.errorApi =true
     }
    )
  }

  public getEvento(value: string){
    if(value == ''){
      this.ngOnInit()
    }else{
    const filter = this.filterPokemons.filter((res:any)=>{
      return !res.name.indexOf(value.toLocaleLowerCase())
    })
      this.allPokemons = filter
    }
        

  }

  // async getPokemonList1(){
  //   let pokemon = await this.pokeApiService.pokeList1()
  // }


}
