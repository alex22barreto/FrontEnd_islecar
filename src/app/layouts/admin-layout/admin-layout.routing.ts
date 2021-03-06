import { Routes } from '@angular/router';

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
import { CategoriasInsumoComponent } from '../../pages/Indicadores/categoriasInsumo/categoriasInsumo.component';
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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'ventas_cliente',         component: Ventas_clienteComponent },
    { path: 'ventas_clusters',         component: Ventas_clustersComponent },
    { path: 'ventas_prediccion',         component: Ventas_prediccionComponent },
    { path: 'ventas_productos',         component: Ventas_productosComponent },
    { path: 'ventas_segmentoCliente',         component: Ventas_segmentoClienteComponent },
    { path: 'ventas_valorProducto',         component: Ventas_valorProductoComponent },
    { path: 'inventariosABC',         component: InventariosABCComponent },
    { path: 'rotacionInventarios',         component: RotacionInventariosComponent },
    { path: 'ventasCruzadas',         component: VentasCruzadasComponent },
    { path: 'ventasTipoClientePresentacion',         component: VentasTipoClientePresentacionComponent },
    { path: 'ventasTipoClienteReferencia',         component: VentasTipoClienteReferenciaComponent },
    { path: 'categoriasInsumo',         component: CategoriasInsumoComponent },
    { path: 'insumos',         component: InsumosComponent },
    { path: 'materia_prima',         component: Materia_primaComponent },
    { path: 'producto_terminado',         component: Producto_terminadoComponent },
    { path: 'compras_proveedor',         component: Compras_proveedorComponent },
    { path: 'ordenes_sugeridas',         component: Ordenes_sugeridasComponent },
    { path: 'requerimiento_accesorios',         component: Requerimiento_accesoriosComponent },
    { path: 'requerimiento_insumos',         component: Requerimiento_insumosComponent },
    { path: 'alerta_desabastesimiento',         component: Alerta_desabastesimientoComponent },
    { path: 'alerta_sobreabastesimiento',         component: Alerta_sobreabastesimientoComponent },
    { path: 'formatoVentas',         component: FormatoVentasComponent },
    { path: 'formatoCompras',         component: FormatoComprasComponent },
    { path: 'googleDriveConexion',         component: GoogleDriveConexionComponent },
    { path: 'textspeech',         component: TextspeechComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
