import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor],
  providers: [CursosService],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService){
    this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
