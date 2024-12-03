import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonModule } from '../../components/button/button.module';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export interface Pedido {
  nome: string;
  ativo: boolean;
  quantidade?: number; // Opcional, mas utilizado no formulário
  observacao?: string; // Opcional, mas utilizado no formulário
}

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [HeaderComponent, ButtonModule, FormsModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent {
  pedido: Pedido = {
    nome: '', // Nome do pedido
    ativo: true, // Inicialmente, o pedido está ativo
    quantidade: undefined,
    observacao: undefined,
  };

  constructor(private http: HttpClient) {}

  // Método para finalizar o pedido
  finalizarPedido() {
    if (!this.pedido.nome || !this.pedido.quantidade) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    this.http.post('http://localhost:5023/pedidos', this.pedido).subscribe({
      next: (response) => {
        console.log('Pedido finalizado', response);
        alert('Pedido enviado com sucesso!');
        this.pedido = { nome: '', ativo: true }; // Limpar o formulário após o envio
      },
      error: (err) => {
        console.error('Erro ao finalizar pedido', err);
        alert('Erro ao enviar o pedido. Tente novamente.');
      },
    });
  }
}
