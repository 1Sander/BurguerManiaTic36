import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [class.primary-button]="isPrimary"
      [class.secondary-button]="!isPrimary"
      [routerLink]="routerLink"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,  // Desabilita o encapsulamento de estilos
})
export class ButtonComponent {
  @Input() isPrimary: boolean = false;
  @Input() routerLink?: string;
}
