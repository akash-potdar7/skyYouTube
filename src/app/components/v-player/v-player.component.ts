import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-v-player',
  templateUrl: './v-player.component.html',
  styleUrls: ['./v-player.component.scss']
})
export class VPlayerComponent implements OnInit {

  constructor (
    private auth: AuthService
  ) {}

  ngOnInit() {
  }

  onSignOut() {
    this.auth.signOut();
  }

}
