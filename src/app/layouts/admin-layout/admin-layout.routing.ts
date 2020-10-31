import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'ventas',         component: VentasComponent },
    { path: 'inventario',         component: InventarioComponent },
    { path: 'compras',         component: ComprasComponent },
    { path: 'ordenes',         component: OrdenesComponent },
    { path: 'alertas',         component: AlertasComponent },
    { path: 'smartcontract',         component: SmartcontractComponent },
    { path: 'textspeech',         component: TextspeechComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
