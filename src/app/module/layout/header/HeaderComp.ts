import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HeaderTopComp } from './header_top/HeaderTopComp';
import { MenuComp } from "./menu/MenuComp";

@Component({
  selector: 'HeaderComp',
  templateUrl: './HeaderComp.html',
  styleUrls: ['./HeaderComp.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatMenuModule, MatSidenavModule, HeaderTopComp, MenuComp],
  providers: [],
})
export class HeaderComp implements OnInit {

  constructor() { }

  ngOnInit(): void { };


}
