import { Pipe, PipeTransform } from '@angular/core';
import { Prodcut } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Prodcut[], filterText: string): Prodcut[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Prodcut)=> (p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)):value;
  }

}
