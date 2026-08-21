import { Component } from '@angular/core';

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
  nome:string = '';
  preco:number = 0;
  descricao:string = '';
  marca:string = 'sdf';

  productList: ModelProduto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250, descricao: 'RGB Switch Blue',marca: 'asd' },
    { id: 2, nome: 'Mouse Gamer', preco: 120, descricao: 'DPI regulável', marca: 'asd'}
  ];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao','actions'];
  store(){
    const novoProduto: ModelProduto = {
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      marca: this.marca,
    };

    // Adiciona o novo produto ao array (reproduzindo uma mudança imutável para atualizar a tabela)
    this.productList = [...this.productList, novoProduto];
    console.log(this.productList)

  }
  edit(product :ModelProduto){
    console.log(product)
  }
  delete(prod :ModelProduto){
    console.log('apagar')
  }

}
