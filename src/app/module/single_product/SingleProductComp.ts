import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'SingleProductComp',
 templateUrl: './SingleProductComp.html',
 styleUrls: ['./SingleProductComp.scss'],
 standalone: true,
 imports: [CommonModule, RouterOutlet],
 providers: [],
})
export class SingleProductComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
