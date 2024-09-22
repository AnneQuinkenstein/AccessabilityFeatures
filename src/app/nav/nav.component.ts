import { inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { NavItemDirective } from '../nav-item-directive/nav-item-directive.component';

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
    NavItemDirective
  ]
})
export class NavComponent implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChildren(NavItemDirective) navItems!: QueryList<NavItemDirective>;
  keyManager!: ListKeyManager<NavItemDirective>;

  items = [
    { label: 'Publikation erstellen', route: '/form' },
    { label: 'Autor:innen aus Berlin', route: '/pubBl' },
    { label: 'Publikationen im Jahr', route: '/pubYear' }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.keyManager = new ListKeyManager(this.navItems).withWrap();
  }

  onKeydown(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
    if (event.key === 'Enter' && this.keyManager.activeItem) {
      const activeIndex = this.keyManager.activeItemIndex!;
      this.router.navigate([this.items[activeIndex].route]);
    }
  }
}
