import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'ShopComp',
 templateUrl: './ShopComp.html',
 styleUrls: ['./ShopComp.scss'],
 standalone: true,
 imports: [CommonModule, RouterOutlet],
 providers: [],
})
export class ShopComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
