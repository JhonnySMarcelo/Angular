import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: true,
  imports: [],
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.css'
})
export class DiretivaNgclassComponent {

  meuFavorito: boolean = false;

  onClick() {
    this.meuFavorito = !this.meuFavorito;
    }
}
