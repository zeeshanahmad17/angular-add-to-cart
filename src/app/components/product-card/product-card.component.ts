import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;

  // Determine the number of filled stars based on the product's rating
  getStarCount(rating: number): number {
    return Math.floor(rating); // Return the integer part of the rating (number of filled stars)
  }

  // Check if the rating has a decimal part (for half-filled star)
  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0; // Returns true if there's a decimal part (half-filled star)
  }
}