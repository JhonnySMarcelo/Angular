import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DecimalPipe, CurrencyPipe, DatePipe, JsonPipe],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {

  // No date o indice do mes comeca em 0
  livro: any = {
    titulo: 'titulo do livro',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://google.com'
  }

}
