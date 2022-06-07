import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from './btn/btn.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>welcome to {{ title }}!</h1>

    <h1>Taschenrechner</h1>
    <main role="main">
      <div id="calc">
        <app-display [out]="out"></app-display>
        <fieldset>
          <app-btn (ping)="input($event)" value="7"></app-btn>
          <app-btn (ping)="input($event)" value="8"></app-btn>
          <app-btn (ping)="input($event)" value="9"></app-btn>
          <app-btn (ping)="operator('+')" value="+"></app-btn>
          <app-btn (ping)="input($event)" value="4"></app-btn>
          <app-btn (ping)="input($event)" value="5"></app-btn>
          <app-btn (ping)="input($event)" value="6"></app-btn>
          <app-btn (ping)="operator('-')" value="-"></app-btn>
          <app-btn (ping)="input($event)" value="1"></app-btn>
          <app-btn (ping)="input($event)" value="2"></app-btn>
          <app-btn (ping)="input($event)" value="3"></app-btn>
          <app-btn (ping)="operator('x')" value="×"></app-btn>
          <app-btn (ping)="input($event)" value="."></app-btn>
          <app-btn (ping)="input($event)" value="0"></app-btn>
          <app-btn (ping)="clear()" value="C"></app-btn>
          <app-btn (ping)="operator('/')" value="÷"></app-btn>
          <app-btn (ping)="result()" value="="></app-btn>
        </fieldset>
      </div>
    </main>
  `,
  imports: [CommonModule, DisplayComponent, BtnComponent],
  standalone: true,
  styles: [
    `
      #calc {
        background: royalblue;
        border: 1px solid darkblue;
        border-radius: 0.5em;
        box-shadow: inset 0 0 5px white;
        display: inline-block;
        padding: 1em 0;
        text-align: center;
        width: 15em;
      }

      #calc fieldset {
        border: none;
        margin: 0 auto;
        padding-bottom: 0;
      }

      #calc button {
        cursor: pointer;
        margin: 5px 2%;
        width: 18%;
      }

      #usage {
        display: inline-block;
        padding: 0 0 0 2em;
        vertical-align: top;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ng-calc';
  overwrite = true;
  displayValue: any[] = [0];
  out = '';

  clear() {
    this.displayValue = [0];
    this.out = this.displayValue.join('');
    this.overwrite = true;
  }

  input(c: string) {
    if (
      this.displayValue.length === 1 &&
      this.displayValue[0] === 0 &&
      c != '.'
    ) {
      this.displayValue = [];
    }

    this.displayValue.push(c);
    this.out = this.displayValue.join('');
    this.overwrite = false;
  }

  operator(c: '-' | '+' | 'x' | '/') {
    this.displayValue.push(c);
    this.out = this.displayValue.join('');
    this.overwrite = false;
  }

  result(noDisplay = false) {
    let input = this.displayValue.join('');
    let r = 0;
    // replace × with * and ÷ with / for eval()
    input = input.replace(/x/g, '*').replace(/÷/g, '/');
    // remove anything else that is not allowed here
    input = input.replace(/[^0-9. +\-*\/]/g, '');
    try {
      r = eval(input);
    } catch (e) {
      r = 0;
    }
    if (noDisplay !== true) {
      this.out = String(r);
      this.overwrite = true;
    }
    return r;
  }
}
