import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imageUrl = 'assets/logo.png';
  emailInput = "";
  passwordInput = "";
  nomCompletInput = "";
  currentForm = true;

  login() {
    if (this.emailInput == "" || this.passwordInput == "") {
      this.showMessage('error', 'Email ou mot de passe incorecte')
    } else {
      this.showMessage('success', 'Connexion avec succées')
    }

    this.emailInput = "";
    this.passwordInput = "";
  }

  register(){
    if (this.emailInput == "" || this.passwordInput == "" || this.nomCompletInput == "") {
      this.showMessage('error', 'Veuillez remplir tout les champs')
    }else if(this.emailInput == "" || this.passwordInput.length < 8 || this.nomCompletInput == ""){
      this.showMessage('error', 'veuillez entrer un mot de passe de plus de 9 caractère')
    }else {
      this.showMessage('success', 'Connexion avec succées')
      this.switchForm()

      this.emailInput ="";
      this.passwordInput = "";
      this.nomCompletInput = "";
    }





  }

  showMessage(icon: any, message: any) {
    Swal.fire({
      icon: icon,
      title: message
    });
  }

  switchForm(){
    this.currentForm = !this.currentForm;
  }


}


