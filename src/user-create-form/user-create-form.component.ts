import { Component } from '@angular/core';
import { UserCreateStoreService, User } from '../user-store/user-create-store.service';

@Component({
  selector: 'srs-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent {
  users$ = this.userStore.users$;
  
  constructor(private userStore: UserCreateStoreService) { }
}