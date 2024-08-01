import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightMouseDirective],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {

}
