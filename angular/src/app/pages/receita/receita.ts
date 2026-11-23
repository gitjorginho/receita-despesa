import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReceitaItem {
  id?: number;
  descricao: string;
  valor: number;
  categoria?: string;
  data?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/receita';

  listar(): Observable<ReceitaItem[]> {
    return this.http.get<ReceitaItem[]>(this.apiUrl);
  }

  criar(receita: ReceitaItem): Observable<ReceitaItem> {
    return this.http.post<ReceitaItem>(this.apiUrl, receita);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
