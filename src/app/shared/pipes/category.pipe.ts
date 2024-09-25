import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Financeiro': return 'trending_up';

      case 'BestSellerPabloMarçal': return 'warning_off';
    }
    return 'stat 0';
  }

}
