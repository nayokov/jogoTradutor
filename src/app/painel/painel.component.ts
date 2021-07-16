import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import {Frase} from '../shared/frase.model'
import {FRASES} from './frases.mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit , OnDestroy{

  public frases: Array<Frase> = FRASES
  public msg: string = "Traduza a frase :"
  public resposta: string =''

  public rodada : number =0
  public rodadaFrase: Frase =this.frases[this.rodada]
  public progresso: number=0
  public tentativas: number =3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
   }

  ngOnDestroy(): void {
     
  }

  ngOnInit(): void{
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificaResposta(): void{
    if(this.rodadaFrase.frasePt.toLowerCase() == this.resposta.toLowerCase()){
      
      //contador para alterar pergunta
      this.rodada++
      
      //progresso
      this.progresso = this.progresso + (100/(this.frases.length))

      //
      if(this.rodada===4) {
        this.encerrarJogo.emit('vitoria')
      }

      //atualiza a pergunta de acordo com contador
      this.atualizaRodada()
      

    }else{
      
      this.resposta=""
      // reduzir tentativas
      this.tentativas--
      if(this.tentativas==-1){
         this.encerrarJogo.emit('derrota')
      }
    }
    
    
    
  }
  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    //limpa resposta
    this.resposta=""
  }

}


