import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = 'Card';
  // Alterado para refletir a descrição completa (fullDescription)
  @Input() description: string = 'Descrição do card';
  // Alterado para refletir os ingredientes (baseDescription)
  @Input() ingredients: string = 'Ingredientes do card';
  @Input() image: string = './assets/burguer.png';
}