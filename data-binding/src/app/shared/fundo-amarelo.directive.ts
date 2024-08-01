import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Adição da tag p no seletor indica que essa diretiva afetara apenas essas tags, sem tag afeta todas que tilizarem essa diretiva

@Directive({
  selector: 'p[fundoAmarelo]',
  standalone: true
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    //Essa forma não é recomendada devido a vunerabilidade
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Forma recomendada
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color','yellow');
   }

}
