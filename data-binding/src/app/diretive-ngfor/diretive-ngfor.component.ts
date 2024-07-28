import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretive-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './diretive-ngfor.component.html',
  styleUrl: './diretive-ngfor.component.css'
})
export class DiretiveNgforComponent {

  cursos: string[] = ["Angular","Java"];

}
