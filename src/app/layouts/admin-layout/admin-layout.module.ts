import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VentasComponent } from '../../pages/ventas/ventas.component';
import { InventarioComponent } from '../../pages/inventario/inventario.component';
import { ComprasComponent } from '../../pages/compras/compras.component';
import { OrdenesComponent } from '../../pages/ordenes/ordenes.component';
import { AlertasComponent } from '../../pages/alertas/alertas.component';
import { SmartcontractComponent } from '../../pages/smartcontract/smartcontract.component';
import { TextspeechComponent } from '../../pages/textspeech/textspeech.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    VentasComponent,
    InventarioComponent,
    ComprasComponent,
    OrdenesComponent,
    AlertasComponent,
    SmartcontractComponent,
    TextspeechComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
