import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloComponent } from "./ciclo/ciclo.component";
import { NgIf } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from "./diretiva-ngswitch/diretiva-ngswitch.component";
import { OperadorElvisComponent } from "./operador-elvis/operador-elvis.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, DataBindingComponent, CicloComponent, NgIf, DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    OperadorElvisComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}
