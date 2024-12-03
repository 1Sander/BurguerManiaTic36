import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardModule } from '../../components/card/card.module';
import { ButtonModule } from '../../components/button/button.module';
import { DetalhesComponent } from '../../views/detalhes/detalhes.component';
import { CommonModule } from '@angular/common'; // Importação necessária
import { HttpClient } from '@angular/common/http'; // Para fazer a requisição HTTP
import { Observable } from 'rxjs'; // Para lidar com dados assíncronos

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardModule, ButtonModule, DetalhesComponent],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  title = 'CARDÁPIO';
  produtos$!: Observable<any[]>; // Observable para armazenar os produtos
  selectedCard: any = null;
  maxCardsToShow: number = 3;  // Quantidade inicial de cards a mostrar
  produtos: any[] = []; // Lista de produtos completa

  constructor(private http: HttpClient) {} // Injeta o HttpClient

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Método para carregar os produtos
  carregarProdutos() {
    this.produtos$ = this.http.get<any[]>('http://localhost:5023/produtos');
    this.produtos$.subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  // Método para exibir todos os produtos
  showAllCards(): void {
    this.maxCardsToShow = this.produtos.length; // Mostrar todos os produtos
  }

  // Método para selecionar um card
  selectCard(card: any) {
    this.selectedCard = this.selectedCard === card ? null : card;
  }

  // Limpar a seleção de card
  clearSelection() {
    this.selectedCard = null;
  }
}
