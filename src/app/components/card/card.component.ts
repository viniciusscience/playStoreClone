import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cover: string = '';
  @Input() text = [
    { name: 'Deluxe' },
    { name: 'Deluxe' },
    { name: 'Premiun' },
    { name: 'Deluxe' },
  ];
}
