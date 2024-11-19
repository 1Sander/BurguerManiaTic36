import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'pedido', component: PedidoComponent }, // Página de pedidos
  { path: 'cardapio', component: CardapioComponent }, // Página do cardápio
];