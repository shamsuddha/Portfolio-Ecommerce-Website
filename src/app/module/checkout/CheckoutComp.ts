import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'CheckoutComp',
 templateUrl: './CheckoutComp.html',
 styleUrls: ['./CheckoutComp.scss'],
 standalone: true,
 imports: [CommonModule, RouterOutlet],
 providers: [],
})
export class CheckoutComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
