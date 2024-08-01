import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {

}
