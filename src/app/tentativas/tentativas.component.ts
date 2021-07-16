import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})

export class TentativasComponent implements OnInit , OnChanges{



  @Input() public tentativas : number =3

  public coracoes: Array<Coracao> =[new Coracao(true),new Coracao(true),new Coracao(true)]

  constructor() { 
    
    
  }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length){
      let cont = this.coracoes.length - this.tentativas
      this.coracoes[cont-1].cheio = false
    }
    

  }

  ngOnInit()  { 
    
  }

  

  

}
