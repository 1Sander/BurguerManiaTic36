import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from './models/cliente';
import { Produto } from './models/produto';
import { CommonModule } from '@angular/common'; // Importação necessária
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Adiciona CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BurgueMania';
  http = inject(HttpClient);
  url = 'http://localhost:5023/';
  clientes$?: Observable<Cliente[]>;
  produtos$?: Observable<Produto[]>;

  ngOnInit(): void {
    this.obterClientes();
    this.obterProdutos();
  }

  obterClientes() {
    this.clientes$ = this.http.get<Cliente[]>(`${this.url}clientes`)
  }

  obterProdutos() {
    this.produtos$ = this.http.get<Produto[]>(`${this.url}produtos`)
  }
}
