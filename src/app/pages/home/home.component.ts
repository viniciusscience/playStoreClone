import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  urlImg = [
    { nome: '../../../assets/bt-5.jpg', text: 'Digital', plat: 'PC' },
    { nome: '../../../assets/bt-1.jpg', text: 'Deluxe', plat: 'DIGITAL PS4' },
    { nome: '../../../assets/bt-4.jpg', text: 'Premiun', plat: 'MOBILE' },
    {
      nome: '../../../assets/bt-hardline.jpg',
      text: '',
      plat: 'DIGITAL DESKTOP',
    },
  ];
}
