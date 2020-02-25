import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserCreateFormComponent } from '../user-create-form/user-create-form.component';
import { UserCreateTabComponent } from '../user-create-tab/user-create-tab.component';
import { UserCreateToolbarComponent } from '../user-create-toolbar/user-create-toolbar.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule {}


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
   UserCreateComponent,
   UserCreateFormComponent,
   UserCreateTabComponent,
   UserCreateToolbarComponent
  ],
  exports: [
    UserCreateComponent,
  ]
})
export class UserModule { }