import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon?: string;
    class?: string;
    root?: string,
    leaf?:string,
    children?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '', children: [], root: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { 
      path: '/ventas', 
      title: 'Ventas',  
      icon:'ni-shop text-green', 
      class: '',
      root: 'Ventas',
      children: [
        {
          path: '/ventas', 
          title: 'Ventas1', 
          icon:'ni-shop text-green', 
          class: '',
          leaf: 'Ventas',
          children: []
        },
        {
          path: '/ventas', 
          title: 'Ventas2', 
          icon:'ni-shop text-green', 
          class: '',
          leaf: 'Ventas',
          children: []
        }
      ]
    },
    { path: '/inventario', title: 'Inventario',  icon:'ni-chart-bar-32 text-Primary', class: '', children: [{ path: '/inventario', title: 'Inventario',  icon:'ni-chart-bar-32 text-Primary', class: '', children: [], root: '' }], root: '' },
    { path: '/compras', title: 'Compras',  icon:'ni-cart text-orange', class: '', children: [], root: '' },
    { path: '/ordenes', title: 'Ordenes',  icon:'ni-single-copy-04 text-info', class: '', children: [], root: '' },
    { path: '/alertas', title: 'Alertas',  icon:'ni-bell-55 text-red', class: '', children: [], root: '' },
    { path: '/smartcontract', title: 'SmartContract',  icon:'ni-paper-diploma text-blue', class: '', children: [], root: '' },
    { path: '/#', title: 'Text-speech',  icon:'ni-note-03 text-yellow', class: '', children: [], root: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '', children: [], root: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '', children: [], root: '' }
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
