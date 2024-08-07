import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular','.NET'];

    constructor(private _logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this._logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this._logService.consoleLog(`Criando novo curso: ${curso}`);
        this.cursos.push(curso);
        // Emitir evento para componente que contém a mesma instancia dos serviço
        this.emitirCursoCriado.emit(curso);

        // Um serviço com eventos staticos não é necessário ser injetado para acessar o emissor
        // Emitir evento para qualquer componente através de um emissor estático
        CursosService.criouNovoCurso.emit(curso);       
    }
}