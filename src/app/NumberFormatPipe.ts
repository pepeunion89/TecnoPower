import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    // Formatear el número con punto como separador de miles y coma como separador decimal
    const parts = value.toFixed(2).split('.');
    const formattedValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + parts[1];
    return formattedValue;
  }
}