import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
