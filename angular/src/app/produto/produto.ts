import { Component,OnInit } from '@angular/core';

// 1. Importe os módulos do Angular Material que vai usar
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFabButton } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModelProduto } from  './produto.model'
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
@Component({
 imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatFabButton,
    MatButton,
    MatTableModule,
    MatIconModule
  ],
  selector: 'app-produto',
  styleUrl: './produto.css',
  templateUrl: './produto.html',
})


export class Produto {
  private apiUrl = 'http://localhost:3000/product';
  nome:string = '';
  preco:number = 0;
  descricao:string = '';
  marca:string = 'sdf';
  desc: string = '';
  productList = new MatTableDataSource<ModelProduto>([]);
  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao','actions'];
  constructor(private http: HttpClient){

  }

  ngOnInit() {

    this.loadProducts();
  }

  loadProducts() {
    this.http.get<ModelProduto[]>(this.apiUrl).subscribe({
      next: (produtos) => {
        this.productList.data = produtos
        this.desc = this.productList.data[0].descricao
      },
      error:(erro: any) => {

      }

    })
  }

  store(){
    const novoProduto: ModelProduto = {
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
    };
    this.http.post<ModelProduto>(this.apiUrl,novoProduto).subscribe({
      next: (produto: ModelProduto) => {

        this.productList.data = [...this.productList.data,produto]

      },
      error:(erro: any) => {

      }

    })



    // Adiciona o novo produto ao array (reproduzindo uma mudança imutável para atualizar a tabela)
    // this.productList = novoProduto;
    console.log(this.productList)

  }
  edit(product :ModelProduto){
    console.log(product)
  }
  delete(prod :ModelProduto){
    console.log('apagar')
  }

}
