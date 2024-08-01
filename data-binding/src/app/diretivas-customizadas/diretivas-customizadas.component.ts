import { Component } from '@angular/core';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { HighlightDirective } from '../shared/highlight.directive';
import { NgElseDirective } from '../shared/ng-else.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-diretivas-customizadas',
  standalone: true,
  imports: [FundoAmareloDirective, HighlightMouseDirective, HighlightDirective, NgElseDirective, NgIf],
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.css'
})
export class DiretivasCustomizadasComponent {
  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
