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
import { Ventas_clienteComponent } from '../../pages/Ventas/ventas_cliente/ventas_cliente.component';
import { Ventas_clustersComponent } from '../../pages/Ventas/ventas_clusters/ventas_clusters.component';
import { Ventas_prediccionComponent } from '../../pages/Ventas/ventas_prediccion/ventas_prediccion.component';
import { Ventas_productosComponent } from '../../pages/Ventas/ventas_productos/ventas_productos.component';
import { Ventas_segmentoClienteComponent } from '../../pages/Ventas/ventas_segmentoCliente/ventas_segmentoCliente.component';
import { Ventas_valorProductoComponent } from '../../pages/Ventas/ventas_valorProducto/ventas_valorProducto.component';
import { InventariosABCComponent } from '../../pages/Indicadores/inventariosABC/inventariosABC.component';
import { RotacionInventariosComponent } from '../../pages/Indicadores/rotacionInventarios/rotacionInventarios.component';
import { VentasCruzadasComponent } from '../../pages/Indicadores/ventasCruzadas/ventasCruzadas.component';
import { VentasTipoClientePresentacionComponent } from '../../pages/Indicadores/VentasTipoClientePresentacion/VentasTipoClientePresentacion.component';
import { VentasTipoClienteReferenciaComponent } from '../../pages/Indicadores/VentasTipoClienteReferencia/VentasTipoClienteReferencia.component';
import { InsumosComponent } from '../../pages/Inventario/insumos/insumos.component';
import { Materia_primaComponent } from '../../pages/Inventario/materia_prima/materia_prima.component';
import { Producto_terminadoComponent } from '../../pages/Inventario/producto_terminado/producto_terminado.component';
import { Compras_proveedorComponent } from '../../pages/Compras/compras_proveedor/compras_proveedor.component';
import { Ordenes_sugeridasComponent } from '../../pages/Compras/ordenes_sugeridas/ordenes_sugeridas.component';
import { Requerimiento_accesoriosComponent } from '../../pages/Ordenes/requerimiento_accesorios/requerimiento_accesorios.component';
import { Requerimiento_insumosComponent } from '../../pages/Ordenes/requerimiento_insumos/requerimiento_insumos.component';
import { Alerta_desabastesimientoComponent } from '../../pages/Alertas/alerta_desabastesimiento/alerta_desabastesimiento.component';
import { Alerta_sobreabastesimientoComponent } from '../../pages/Alertas/alerta_sobreabastesimiento/alerta_sobreabastesimiento.component';
import { FormatoVentasComponent } from '../../pages/formularios/formatoVentas/formatoVentas.component';
import { FormatoComprasComponent } from '../../pages/formularios/formatoCompras/formatoCompras.component';
import { GoogleDriveConexionComponent } from '../../pages/GoogleDriveConexion/GoogleDriveConexion.component';
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
    Ventas_clienteComponent,
    Ventas_clustersComponent,
    Ventas_prediccionComponent,
    Ventas_productosComponent,
    Ventas_segmentoClienteComponent,
    Ventas_valorProductoComponent,
    InventariosABCComponent,
    RotacionInventariosComponent,
    VentasCruzadasComponent,
    VentasTipoClientePresentacionComponent,
    VentasTipoClienteReferenciaComponent,
    InsumosComponent,
    Materia_primaComponent,
    Producto_terminadoComponent,
    Compras_proveedorComponent,
    Ordenes_sugeridasComponent,
    Requerimiento_accesoriosComponent,
    Requerimiento_insumosComponent,
    Alerta_desabastesimientoComponent,
    Alerta_sobreabastesimientoComponent,
    FormatoVentasComponent,
    FormatoComprasComponent,
    GoogleDriveConexionComponent,
    TextspeechComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
