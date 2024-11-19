import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonModule } from '../../components/button/button.module';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [HeaderComponent , ButtonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {

}
