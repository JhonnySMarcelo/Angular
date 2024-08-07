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
  
  constructor(private _cursosService: CursosService){
  }

  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }
}
