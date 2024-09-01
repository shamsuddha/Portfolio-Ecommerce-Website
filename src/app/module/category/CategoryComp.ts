import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
 selector: 'CategoryComp',
 templateUrl: './CategoryComp.html',
 styleUrls: ['./CategoryComp.scss'],
 standalone: true,
 imports: [CommonModule, RouterOutlet],
 providers: [],
})
export class CategoryComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
