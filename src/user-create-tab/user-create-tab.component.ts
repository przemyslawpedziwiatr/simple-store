import { Component } from "@angular/core";
import { UserCreateStoreService, User } from '../user-store/user-create-store.service';

@Component({
  selector: "srs-user-create-tab",
  templateUrl: "./user-create-tab.component.html",
  styleUrls: ["./user-create-tab.component.css"]
})
export class UserCreateTabComponent {
  users$ = this.userStore.users$;
  
  constructor(private userStore: UserCreateStoreService) { }

   userLabel(user: User) {
    return `${user.form.getRawValue().firstName} ${user.form.getRawValue().lastName}`;
  }

  remove(user: User) {
    this.userStore.remove(user);
  }

  select(user: User) {
    this.userStore.select(user);
  }
}
