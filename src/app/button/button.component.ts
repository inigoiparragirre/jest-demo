import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button class="{{className}}" (click)="onClick($event)">{{title}}</button>
  `
})
export class ButtonComponent {
  @Input() className = 'success';
  @Input() title = 'Button Test';
  @Output() click = new EventEmitter();

  onClick( $event: any ) {
    this.click.emit($event);
  }
}
