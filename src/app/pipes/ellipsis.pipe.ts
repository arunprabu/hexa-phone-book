import { Pipe, PipeTransform } from '@angular/core';

//decorator
@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if(args){
      value = value.substr(0, args); 
    }
    return value + "...";
    
    
  }

}
