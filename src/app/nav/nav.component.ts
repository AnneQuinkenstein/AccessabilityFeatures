import {Component, inject, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ListItemFocusable} from "../list-item-focusable.directive";
import {NavListKeyManager} from "../nav-list-key-manager.directive";


@Component({
  selector: 'tib-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    NavListKeyManager,
    ListItemFocusable,
  ]
})
export class NavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  public navItems = [
    {
      title: 'Menu',
      route: '',
    },
    {
      title: 'Publikation erstellen',
      route: 'form',
    },
    {
      title: 'Autor:innen aus Berlin',
      route: 'pubBl',
    },
    {
      title: 'Publikationen im Jahr',
      route: 'pubYear',
    },
  ];

  constructor() {}

  ngOnInit() {}


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


}
