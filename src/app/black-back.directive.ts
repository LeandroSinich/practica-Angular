import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlackBack]'
})
export class BlackBackDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.color = 'white';
  }

}
