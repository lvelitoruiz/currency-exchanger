import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  @Input() from: string = '';
  @Input() to: string = '';

  constructor(
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        // update with query params
        this.to = params.to;
        this.from = params.from;
      });
  }

}
