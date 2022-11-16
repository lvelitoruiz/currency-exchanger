import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  constructor(
    private route: ActivatedRoute) {

      this.route.params
        .subscribe((params) => { 
          console.log ('[DEBUG]', params);
        });
  }

}
