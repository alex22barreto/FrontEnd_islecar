import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../../core/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AutenticacionService
  ) { }

  ngOnInit() {
  }

}
