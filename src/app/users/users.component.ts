import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './users.data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: { id: number; name: string; email: string }[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
    this.users.push(
      new User('mousa nageh', '200moussa200@gmail.com').getUser()
    );
  }

  goToUser() {
    this.route;
  }

  ngOnInit(): void {}
}
