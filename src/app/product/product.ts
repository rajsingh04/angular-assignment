import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input()
  product: any;
  @Output()
  detailsClicked = new EventEmitter<any>();
  onClickDetails() {
    this.detailsClicked.emit(this.product);
  }
}
