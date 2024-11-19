import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardModule } from '../../components/card/card.module';
import { ButtonModule } from '../../components/button/button.module';
import { DetalhesComponent } from '../../views/detalhes/detalhes.component';
import { CommonModule } from '@angular/common'; // Importação necessária

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [HeaderComponent, CommonModule , CardModule, ButtonModule, DetalhesComponent],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent {
  title = 'CARDÁPIO';
  cards = [
    {
      title: 'X-Vegan',
      description: 'descrição do card X-Vegan ',
      ingredients: 'Pão integral, hambúrguer vegetal, alface, tomate, queijo vegano e maionese vegana.',
      price: 25,
    },
    {
      title: 'X-Fitness',
      description: 'descrição do card X-Fitness',
      ingredients: 'Pão 7 grãos, hambúrguer de frango grelhado, alface, tomate, queijo light e maionese de abacate.',
      price: 20,
    },
    {
      title: 'X-Infarto',
      description: 'descrição do card X-Infarto',
      ingredients: 'Pão australiano, hambúrguer de carne, bacon, queijo cheddar e molho barbecue.',
      price: 30,
    },
  ];
  selectedCard: any = null;

  selectCard(card: any) {
    this.selectedCard = this.selectedCard === card ? null : card;
  }

  clearSelection() {
    this.selectedCard = null;
  }
}
