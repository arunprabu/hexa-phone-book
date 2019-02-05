import { Directive, ElementRef, Renderer } from '@angular/core';

//decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer ) {
    console.log("Inside my custom attr directive colorizer");

    //1. identify the hosting element 
    console.log(this.elementRef.nativeElement);
    //2. colorize the same element  
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.height = '300px';


    //but, there's an angular way
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 
      'background-color',
      'red'
    );

    //ToDo: ref 
    // https://github.com/arunprabu/e_y_mean_ng4/blob/master/mean_with_ng4/my-custom-directive/src/app/directives/colorizer.directive.ts

    //https://github.com/arunprabu/e_y_mean_ng4/tree/master/mean_with_ng4/my-custom-directive/src/app/directives
  }


}
