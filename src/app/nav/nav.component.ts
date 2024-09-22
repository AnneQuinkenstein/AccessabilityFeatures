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
  private router = inject(Router);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChildren(NavItemDirective) navItems!: QueryList<NavItemDirective>;
  keyManager!: ListKeyManager<NavItemDirective>;

  items = [
    { label: 'Menu', route: '/' },
    { label: 'Publikation erstellen', route: '/form' },
    { label: 'Autor:innen aus Berlin', route: '/pubBl' },
    { label: 'Publikationen im Jahr', route: '/pubYear' }
  ];


  ngAfterViewInit() {
    console.log('navItems:', this.navItems);
    this.keyManager = new ListKeyManager(this.navItems).withWrap().withVerticalOrientation();
    this.keyManager.setFirstItemActive();
    console.log('keyManager:', this.keyManager);
  }

  onKeydown(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
    console.log('Key pressed:', event.key);
    console.log('Active item index:', this.keyManager.activeItemIndex);
    console.log('Active item:', this.keyManager.activeItem?.getLabel());
    if (event.key === 'Enter' && this.keyManager.activeItem) {
      console.log('Enter pressed');
      console.log('Active item:', this.keyManager.activeItemIndex);
      const activeIndex = this.keyManager.activeItemIndex!;
      console.log('Active item route', this.items[activeIndex].route);
      this.router.navigateByUrl(this.items[activeIndex].route);
      console.log('Ende');
    }
  }

}
