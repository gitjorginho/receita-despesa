import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250, quantidade: 5 },
    { id: 2, nome: 'Mouse Gamer', preco: 150, quantidade: 10 }
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const nextId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    this.products.push({ id: nextId, ...product });
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
