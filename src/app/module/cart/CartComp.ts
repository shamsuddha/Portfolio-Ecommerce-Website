import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'CartComp',
 templateUrl: './CartComp.html',
 styleUrls: ['./CartComp.scss'],
 standalone: true,
 imports: [CommonModule, RouterOutlet],
 providers: [],
})
export class CartComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
