import { Component } from '@angular/core';
import { EncapsulaitonA } from './encapsulaiton-a/encapsulaiton-a';
import { EncapsulaitonB } from './encapsulaiton-b/encapsulaiton-b';

@Component({
  imports: [EncapsulaitonA,EncapsulaitonB],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
