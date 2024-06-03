import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router, private location: Location) { }

  login() {
    // Lógica de autenticación
    this.router.navigate(['/home']);
  }

  espacio2() {
    // solo de prueba para probar el servicio files creado
    this.router.navigate(['/myspace']);
  }


  goBack() {
    this.location.back();
  }
}
