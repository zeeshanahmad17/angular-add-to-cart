import { Component, Input, inject, input } from '@angular/core';
// Services
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;

  productService = inject(ProductService);

  // Determine the number of filled stars based on the product's rating
  getStarCount(rating: number): number {
    let stars: number = 0;
    stars = Math.floor(rating); // Return the integer part of the rating (number of filled stars)
    return stars;
  }

  hasHalfStar(rating: number): boolean {
    let halfStar: boolean = false;
    halfStar = rating % 1 !== 0; // Returns true if there's a decimal part (half-filled star)
    return halfStar;
  }

  addToCartHandler(product: any) {
    this.productService.addToCart.next(product);
  }
}
