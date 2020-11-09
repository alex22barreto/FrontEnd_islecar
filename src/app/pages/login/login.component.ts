import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutenticacionService } from './../../core/services/autenticacion/autenticacion.service';

var config = {
  apiKey: "AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE",
  authDomain: "test-ips-8ebdf.firebaseapp.com",
};

var userIdToken = null;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    public authService: AutenticacionService
  ) {}

  ngOnInit() {
    
  }
  ngOnDestroy() {
  }

  logeogmail(){
    console.log("abre funcion logeo google");
    //firebase.initializeApp(config);
  }

}
