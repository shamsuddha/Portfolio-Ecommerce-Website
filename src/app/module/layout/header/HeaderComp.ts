import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  @ViewChild('drawer') drawer!: MatSidenav;
  isMobile = false;
  opened = false; // Initially closed

  constructor(private breakpointObserver: BreakpointObserver) {  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
      this.opened = !this.isMobile; // Sidenav closed on mobile initially
    });
  };

  // Method to toggle the drawer state
  toggleDrawer(): void {
    this.opened = !this.opened;
  }

  // Method to close the drawer explicitly
  closeDrawer(): void {
    this.drawer.close();
    this.opened = false;
  }

  // Log message when drawer starts closing
  onDrawerClosed(): void {
    console.log('Drawer is closing...');
  }


}
