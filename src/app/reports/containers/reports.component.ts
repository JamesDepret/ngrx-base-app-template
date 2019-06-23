import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ps-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p> report works!!! </p>
  `,
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
