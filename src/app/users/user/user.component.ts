import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.queryParams['qulity']);
    // console.log(this.route.snapshot.fragment);
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
    this.route.queryParams.subscribe((query: Params) => {
      console.log(query);
    });
  }
}
