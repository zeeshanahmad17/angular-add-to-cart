import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartItems: any[] = [];
  isCartPopoverVisible = false;
  productService = inject(ProductService);
  totalAmount: number = 0;
  totalItemCount: number = 0;

  constructor() {
    this.productService.addToCart.subscribe((res) => {
      this.cartItems.unshift(res);
      this.totalItemCount = this.cartItems.length;
      this.getTotalAmount();
    });
  }

  toggleCartPopover() {
    this.isCartPopoverVisible = !this.isCartPopoverVisible;
  }

  getTotalAmount() {
    this.totalAmount = this.cartItems.reduce(
      (total, item) =>
        total +
        (item.discountedPrice !== null && item.discountedPrice !== undefined
          ? item.discountedPrice
          : item.originalPrice),
      0
    );
  }

  onRemoveItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.getTotalAmount();
      this.totalItemCount = this.cartItems.length;
    }
  }
}
