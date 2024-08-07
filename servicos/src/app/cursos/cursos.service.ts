import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular','.NET'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        // Emitir evento para componente que contém a mesma instancia dos serviço
        this.emitirCursoCriado.emit(curso);

        // Um serviço com eventos staticos não é necessário ser injetado para acessar o emissor
        // Emitir evento para qualquer componente através de um emissor estático
        CursosService.criouNovoCurso.emit(curso);       
    }
}