import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  template: ` <output>{{ out }}</output> `,
  styles: [
    `
      output {
        display: block;
        height: 1.5em;
        background: white;
        text-align: right;
        font-size: 100%;
        padding-right: 5%;
        margin: 5px 6%;
      }
    `,
  ],
})
export class DisplayComponent {
  @Input() out = '';
}
