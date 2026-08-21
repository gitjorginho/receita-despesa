import { Component } from '@angular/core';

// 1. Importe os módulos do Angular Material que vai usar
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFabButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
 imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatFabButton,
    MatTableModule,
    MatIconModule
  ],
  selector: 'app-produto',
  styleUrl: './produto.css',
  templateUrl: './produto.html',
})

export class Produto {
  nome = '';
  preco = '';
  descricao = '';
  productList = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250, descricao: 'RGB Switch Blue' },
    { id: 2, nome: 'Mouse Gamer', preco: 120, descricao: 'DPI regulável' }
  ];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'descricao'];
  header: string[] =  ['nome','preco'];
  items = [
    { id: 1, nome: 'Teclado Mecânico', preco: 250, descricao: 'gggg' },
    { id: 2, nome: 'Mouse Gamer', preco: 120, descricao: 'ffff' }
  ]
}
