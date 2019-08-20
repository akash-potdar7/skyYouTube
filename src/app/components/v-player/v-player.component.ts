import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-player',
  templateUrl: './v-player.component.html',
  styleUrls: ['./v-player.component.scss']
})
export class VPlayerComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onSignOut() {
    this.router.navigate(['login']);
  }

}
