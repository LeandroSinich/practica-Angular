import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.startsWith('@') && value.length>3? 'esta bien' : 'le faltan el arroba o mas caracteres';
  }

}
