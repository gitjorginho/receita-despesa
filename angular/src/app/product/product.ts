import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule,MatIconModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];

  // Campos do formulário
  nomeInput = '';
  precoInput = 0;
  quantidadeInput = 0;

  productBeingEdited: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.productList = this.productService.getProducts();
  }

  save(): void {
    if (!this.nomeInput.trim()) return;

    if (this.productBeingEdited) {
      this.productService.updateProduct({
        id: this.productBeingEdited.id,
        nome: this.nomeInput,
        preco: this.precoInput,
        quantidade: this.quantidadeInput
      });
      this.productBeingEdited = null;
    } else {
      this.productService.addProduct({
        nome: this.nomeInput,
        preco: this.precoInput,
        quantidade: this.quantidadeInput
      });
    }

    this.clearForm();
    this.refreshList();
  }

  edit(product: Product): void {
    this.productBeingEdited = product;
    this.nomeInput = product.nome;
    this.precoInput = product.preco;
    this.quantidadeInput = product.quantidade;
  }

  delete(id: number): void {
    this.productService.deleteProduct(id);
    this.refreshList();
  }

  clearForm(): void {
    this.nomeInput = '';
    this.precoInput = 0;
    this.quantidadeInput = 0;
    this.productBeingEdited = null;
  }
}
