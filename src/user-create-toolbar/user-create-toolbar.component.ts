import { Component } from '@angular/core';
import { UserCreateStoreService } from '../user-store/user-create-store.service';

@Component({
  selector: 'srs-user-create-toolbar',
  templateUrl: './user-create-toolbar.component.html',
  styleUrls: ['./user-create-toolbar.component.css']
})
export class UserCreateToolbarComponent {

  constructor(private userStore: UserCreateStoreService) { }

  addUser() {
    this.userStore.add();
  }

}