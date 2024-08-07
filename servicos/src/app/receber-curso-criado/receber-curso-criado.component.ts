import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-receber-curso-criado',
  standalone: true,
  imports: [NgIf],
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.css'
})
export class ReceberCursoCriadoComponent implements OnInit {
  
  curso: string = '';

  constructor(private _cursosService: CursosService){ }

  ngOnInit(): void {
    this._cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
