import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';


import * as fromRoot from '../../state/reducers';
import { LayoutActions } from '../state/actions';

@Component({
  selector: 'ps-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: Implement proper links and navigation fields here
  template: `
    <ps-layout>
      <ps-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
        <ps-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" icon="book" hint="View your report collection">
          My Collection
        </ps-nav-item>
        <ps-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/reports/find" icon="search" hint="Search for a report!">
          Browse Reports
        </ps-nav-item>
        <ps-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)">
          Sign In
        </ps-nav-item>
        <ps-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </ps-nav-item>
      </ps-sidenav>
      <ps-toolbar (openMenu)="openSidenav()">
        Reports Collection
        <span class="spacer"></span>
        <mat-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">favorite</mat-icon>
        <mat-icon class="example-icon" aria-hidden="false" aria-label="Example delete icon">delete</mat-icon>
      </ps-toolbar>
      <router-outlet></router-outlet>
    </ps-layout>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = of(true);
  }
  
  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }
  closeSidenav() {
    this.store.dispatch(LayoutActions.closeSidenav());
  }
  logout() {
    this.closeSidenav();

    // TODO: add logout functionality
    console.log("confirm logout");
  }
}
