import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CursosService{
    private cursos: string[] = ['Angular','.NET'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
}