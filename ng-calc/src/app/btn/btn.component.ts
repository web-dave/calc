import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="ping.emit(value)">{{ value }}</button> `,
  styles: [
    `
      button {
        cursor: pointer;
        margin: 5px 2%;
        width: 18%;
      }
    `,
  ],
})
export class BtnComponent {
  @Input() value: string = '';
  @Output() ping = new EventEmitter<string>();
}
