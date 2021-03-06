import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>404: Not Found</mat-card-title>
      <mat-card-content>
        <p>Hey! It looks like this page doesn't exist yet.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button routerLink="/">Take Me Home</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
      .mat-raised-button {
        background: var(--mainColor);
      }
    `,
  ],
})
export class NotFoundPageComponent {}
