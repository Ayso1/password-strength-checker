import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  isPasswordSmall(): boolean {
    return this.password.length > 0 && this.password.length <= 7;
  }

  isPasswordEasy(): boolean {
    const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
    return pattern.test(this.password);
  }

  isPasswordMedium(): boolean {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      this.password
    );

    return (
      this.password.length >= 8 &&
      ((hasLetters && hasSymbols) ||
        (hasLetters && hasDigits) ||
        (hasDigits && hasSymbols))
    );
  }

  isPasswordStrong(): boolean {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      this.password
    );

    return this.password.length >= 8 && hasLetters && hasDigits && hasSymbols;
  }

  checkPasswordStrength(): void {
    // This function is called whenever the password field changes
    // You can remove this method if not needed for any additional logic
  }
}
