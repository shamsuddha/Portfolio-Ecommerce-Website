import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'HeaderComp',
  templateUrl: './HeaderComp.html',
  styleUrls: ['./HeaderComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [],
})
export class HeaderComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
