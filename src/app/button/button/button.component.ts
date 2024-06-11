import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({ required: true}) text!: string;
  @Input({ required: true}) bgColor!: string;
  @Input({ required: true }) clickFunction!: () => void;
}
