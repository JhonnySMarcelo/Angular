import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { NgFor } from '@angular/common';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@Component({
  selector: 'app-criar-curso',
  standalone: true,
  imports: [NgFor, ReceberCursoCriadoComponent],
  providers: [CursosService],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css'
})
export class CriarCursoComponent implements OnInit{

  cursos: string[] = [];

  constructor(private _cursosService: CursosService){ }
  ngOnInit(): void {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string){
    this._cursosService.addCurso(curso);
  }

}
