import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit{

  @Output() public emiterValue = new EventEmitter
  public valor: string=''

  constructor(){}

  ngOnInit(): void {
    
  }

  public emitirEvento(value:string){
    this.emiterValue.emit(value)
  }

}
