import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-messages ui-messages-error">
      {{ text }}
    </div>
  `,
  styles: []
})
export class MessageComponent {

  @Input() control: FormControl;
  @Input() text: string;
  @Input() error: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  } 
}
