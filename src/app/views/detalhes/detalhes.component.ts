import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.component.html',
  imports: [CommonModule , NgOptimizedImage],
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() ingredients: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}