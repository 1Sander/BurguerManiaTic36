import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para diretivas do Angular
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule], // Inclui funcionalidades básicas do Angular
  exports: [CardComponent],
})
export class CardModule {}
