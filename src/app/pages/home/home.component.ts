import { Component } from '@angular/core';
// Components
import { ProductCardComponent } from '../../components/product-card/product-card.component';
// Globals
import { products } from '../../../globals';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Dummy Product Data
  products: any[] = products;
  categories: any[] = [
    'Mobiles',
    'Laptops',
    'Accessories',
    'Clothes',
    'Shoes',
    'Caps',
  ];
  selectedCategory: string = '';
  filteredProducts: any[] = [];

  constructor() {
    this.filteredProducts = products;
  }

  filterProducts(category: string) {
    if (this.selectedCategory === category) {
      this.selectedCategory = '';
      this.filteredProducts = products;
    } else {
      this.selectedCategory = category;
      this.filteredProducts = products.filter(
        (product) => product.category == category
      );
    }
  }
}
