import {Component, inject, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
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
import { A11yModule } from '@angular/cdk/a11y';


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
    A11yModule,
  ]
})
export class NavComponent implements OnInit, AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('initialFocusLink') initialFocusLink!: ElementRef;

  public navItems = [
    {
      title: 'Autor:innen aus Berlin',
      route: 'pubBl',
      fokus: 'true'
    },
    {
      title: 'Publikationen im Jahr',
      route: 'pubYear'
    },
    {
      title: 'Publikation erstellen',
      route: 'form'
    },
  ];

  constructor() {}

  ngOnInit() {}


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngAfterViewInit() {
    this.initialFocusLink.nativeElement.focus();
  }

}
