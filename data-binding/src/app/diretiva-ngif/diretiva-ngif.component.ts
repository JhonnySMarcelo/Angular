import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [NgIf],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  cursos: string[] = ['Angular'];
  mostarCursos: boolean = false;

  onMostrarCursos(){
    this.mostarCursos = !this.mostarCursos;
  }
}
