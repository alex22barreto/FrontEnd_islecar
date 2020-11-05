import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon?: string;
    class?: string;
    children?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '', children: [], root: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { 
      path: '', 
      title: 'Ventas',  
      icon:'ni-shop text-green', 
      class: '',
      children: [
        {
          path: '/ventas_cliente', 
          title: 'ventas cliente', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        },
        {
          path: '/ventas_clusters', 
          title: 'ventas clusters', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        },
        {
          path: '/ventas_prediccion', 
          title: 'ventas prediccion', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        },
        {
          path: '/ventas_productos', 
          title: 'ventas productos', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        },
        {
          path: '/ventas_segmentoCliente', 
          title: 'ventas segmentoCliente', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        },
        {
          path: '/ventas_valorProducto', 
          title: 'ventas valorProducto', 
          icon:'ni-shop text-green', 
          class: '',          
          children: []
        }
      ]
    },
    { 
      path: '', 
      title: 'Inventario',  
      icon:'ni-chart-bar-32 text-Primary', 
      class: '', 
      children: [
        { 
          path: '/insumos', 
          title: 'insumos',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        },
        { 
          path: '/materia_prima', 
          title: 'materia prima',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        },
        { 
          path: '/producto_terminado', 
          title: 'producto_terminado',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        }
      ]
	  },
    { 
      path: '', 
      title: 'Compras',  
      icon:'ni-cart text-orange', 
      class: '', 
      children: [
        { 
          path: '/compras_proveedor', 
          title: 'compras proveedor',  
          icon:'ni-cart text-orange', 
          class: '', 
          children: []
        },{ 
          path: '/ordenes_sugeridas', 
          title: 'ordenes sugeridas',  
          icon:'ni-cart text-orange', 
          class: '', 
          children: []
        }
      ]
    },
    { 
      path: '', 
      title: 'Ordenes',  
      icon:'ni-single-copy-04 text-info', 
      class: '', 
      children: [
        { 
          path: '/requerimiento_accesorios', 
          title: 'requerimiento accesorios',  
          icon:'ni-single-copy-04 text-info', 
          class: '', 
          children: []
        },
        { 
          path: '/requerimiento_insumos', 
          title: 'requerimiento insumos',  
          icon:'ni-single-copy-04 text-info', 
          class: '', 
          children: []
        }
      ]
    },
    { 
      path: '/', 
      title: 'Alertas',  
      icon:'ni-bell-55 text-red', 
      class: '', 
      children: [
        { 
          path: '/alerta_desabastesimiento', 
          title: 'alerta desabastesimiento',  
          icon:'ni-bell-55 text-red', 
          class: '', 
          children: []
        },
        { 
          path: '/alerta_sobreabastesimiento', 
          title: 'alerta sobreabastesimiento',  
          icon:'ni-bell-55 text-red', 
          class: '', 
          children: []
        }
      ]
    },
    { 
      path: '/smartcontract', 
      title: 'SmartContract',  
      icon:'ni-paper-diploma text-blue', 
      class: '', 
      children: []
    },
    { 
      path: '', 
      title: 'Indicadores',  
      icon:'ni-chart-bar-32 text-Primary', 
      class: '', 
      children: [
        { 
          path: '/inventariosABC', 
          title: 'inventario ABC',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        },
        { 
          path: '/rotacionInventarios', 
          title: 'rotacion Inventarios',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        },
        { 
          path: '/ventasCruzadas', 
          title: 'ventas Cruzadas',  
          icon:'ni-chart-bar-32 text-Primary', 
          class: '', 
          children: []
        }
      ]
	  },
    { path: '/#', title: 'Text-speech',  icon:'ni-note-03 text-yellow', class: '', children: []},
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '', children: []},
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '', children: []}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
