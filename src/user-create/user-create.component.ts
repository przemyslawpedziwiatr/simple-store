import { Component } from '@angular/core';
import { UserCreateStoreService, User } from '../user-store/user-create-store.service';

@Component({
  selector: 'srs-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  constructor(private userStore: UserCreateStoreService) { }

  save() {
    this.userStore.save();
  }
}