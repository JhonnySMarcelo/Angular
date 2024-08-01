import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  standalone: true
})
export class HighlightMouseDirective {
  
  //O HostListener escuta eventos no hospedeiro da diretiva
  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = 'yellow';
  }
  
   @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = 'white';
  }

  //O HostBinding permite a utlizacao de um atributo ou classe HTML como variável
  @HostBinding('style.backgroundColor')  backgroundColor!: string;

  // // Caso seja necessario alguma modificação antes de passar o valor pode ser o usado o Get dos Getters and Setters do TypeScript
  // private backgroundColor2!: string;
  // @HostBinding('style.backgroundColor')  get SetColor(){
  //   //Código para modificação vai aqui
  //   return this.backgroundColor2;
  // }
  constructor() { }

}
