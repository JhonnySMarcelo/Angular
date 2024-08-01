import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{
  //O HostListener escuta eventos no hospedeiro da diretiva
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  //O HostBinding permite a utlizacao de um atributo ou classe HTML como variável
  @HostBinding('style.backgroundColor')  backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  // Nome do Input property com o mesmo nome da diretiva
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
