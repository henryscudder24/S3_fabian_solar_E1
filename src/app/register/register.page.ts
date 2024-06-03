import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private router: Router, private location: Location) { }

  register() {
    // Aquí puedes añadir lógica de registro
    this.router.navigate(['/login']);
  }

  goBack() {
    this.location.back();
  }
}
