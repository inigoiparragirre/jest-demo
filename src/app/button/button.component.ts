import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  template: `
    <button class="{{className}}" (click)="onClick($event)">{{title}}</button>
  `;
})
export class ButtonComponent {
  @Input() className = 'success';
  @Input() title = '';
  @Output() click = new EventEmitter();

  onClick( $event: any ) {
    this.click.emit($event);
  }
}
