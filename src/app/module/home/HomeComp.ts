import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'HomeComp',
  templateUrl: './HomeComp.html',
  styleUrls: ['./HomeComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule],
  providers: [],
})
export class HomeComp implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
