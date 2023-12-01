import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon:any
  public isLoading = false
  public errorApi = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ){}

  ngOnInit(): void {
    this.pokemoDetails()
  }

  public pokemoDetails(){

    let id = this.activatedRoute.snapshot.params['id']
    let pokemon = this.pokeApiService.getPokemonsInformacao(`${this.urlPokemon}/${id}`)
    let name = this.pokeApiService.getPokemonsInformacao(`${this.urlName}/${id}`)
    return forkJoin([pokemon,name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = true
      },
      error =>{
        this.errorApi = false
      }
    )
  }
}
