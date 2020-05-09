import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileContainer } from './profile.container';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileContainer, FormProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
