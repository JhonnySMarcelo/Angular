import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from "../input-property/input-property.component";
import { OutputPropertyComponent } from "../output-property/output-property.component";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, InputPropertyComponent, OutputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url = 'https://google.com';
  urlImagem = 'https://www.minhareceita.com.br/app/uploads/2022/12/Dpizza-de-pepperoni-caseira-portal-minha-receita.jpg';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string  = 'abc';
  pessoa: any = {
    nome: 'João',
    idade: 30
  }

  nomeDoCurso: string = 'Angular';
  valorInicial: number = 10;

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyup(evento: any){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor.value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
}



