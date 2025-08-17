import { Component } from '@angular/core';
import { ProductComponent } from './product/product';
import productData from '../assets/products.json';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CurrencyPipe, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productList = productData.products;
  searchText: string = '';
  selectedProduct: any = null;

  getFilterProducts(): any {
    if (!this.searchText.trim) return this.productList;
    return this.productList.filter(
      (p) =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openDetails(product: any) {
    this.selectedProduct = product;
  }
  closeDetails() {
    this.selectedProduct = null;
  }
}
