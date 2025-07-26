import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'app-products',
  imports: [CommonModule, JsonPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  productStore = inject(ProductStore);
  
  ngOnInit() {
    this.productStore.loadProducts();
  }
}
