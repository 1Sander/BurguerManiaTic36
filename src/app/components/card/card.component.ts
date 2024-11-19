import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = 'Card';
  @Input() description: string = 'Descrição do card';
  @Input() ingredients: string = 'Ingredientes do card';
  @Input() image: string = './assets/burguer.png';
}
