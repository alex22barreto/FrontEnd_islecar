import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../../core/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-missing-password',
  templateUrl: './missing-password.component.html',
  styleUrls: ['./missing-password.component.scss']
})
export class MissingPasswordComponent implements OnInit {

  constructor(
    public authService: AutenticacionService
  ) { }

  ngOnInit() {
  }

}
