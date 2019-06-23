import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ps-sidenav',
  template: `
    <mat-sidenav #sidenav [opened]="open" (keydown.escape)="sidenav.close()" (closedStart)="closeMenu.emit()" disableClose>
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
      <h2 id="close" (click)="sidenav.close()" class="m-0 p-4">Close</h2>
    </mat-sidenav>
  `,
  styles: [
    `
      mat-sidenav {
        width: 300px;
      }
      #close {
        position: fixed;
        width: 300px;
        left: 0;
        bottom: 0;
        background-color: #D4D4D4;
        text-align: center;
        cursor: pointer;
      }
    `,
  ],
})
export class SidenavComponent {
  @Input() open = false;
  @Output() closeMenu = new EventEmitter();
}
