import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ps-toolbar',
  template: `
    <mat-toolbar>
      <mat-toolbar-row>
        <button mat-icon-button (click)="openMenu.emit()">
          <mat-icon>menu</mat-icon>
        </button>
        <ng-content></ng-content>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    `
      .mat-toolbar {
        background: var(--mainColor);
      }
    `,
  ],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
