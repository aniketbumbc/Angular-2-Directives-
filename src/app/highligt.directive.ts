import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective {
@HostListener('mouseenter') mouseover(){
this.backgroundColor='black';
};

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor='green';
  };
@HostBinding('style.backgroundColor')get setcolor(){
return this.backgroundColor;
};
private backgroundColor='orange';
  constructor() {
  //  this.elmref.nativeElement.style.backgroundColor="pink";
  }

}
