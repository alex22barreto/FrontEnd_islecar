import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Product } from './../../models/product.model';
import { ProductDetalle } from './../../models/productDetalle.model';
import { IPFSvalor } from './../../models/IPFSvalor.model';
import { IPFSdescueto } from './../../models/IPFSdescueto.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }



  getAllProducts() {

    return this.http.post<Product[]>(`listaProductosTerminados`,"");

  }

  getProduct(message: string) {
    console.log(message);
    return this.http.post<ProductDetalle>(`ConsultarInventarioBigQuery`,
    {"message":message}
    );
  }

  getProductIPFSvalor(codigoProducto: string) {

    return this.http.post<IPFSvalor>(`consultarDatosIPFS`,{
      "codigo": codigoProducto,
      "tipoOperaciones":"2",
      "cantidad":"1",
      "fuente":"1"
    });
  }

  getProductIPFSdescuento(codigoProducto: string, cantidad:number) {

    return this.http.post<IPFSdescueto>(`consultarDatosIPFS`,{
      "codigo": codigoProducto,
      "tipoOperaciones":"2",
      "cantidad":cantidad,
      "fuente":"2"
    });
  }

  getValorTotalproducto(producto: number, cantidad:number, precio:number, descuento:number) {

    return this.http.post<any>(`valorTotalProducto`,{
      "producto": producto,
      "precio": precio,
      "cantidad": cantidad,
      "descuento": descuento
    });
  }

  postGuardadOrdenVenta(codigoProducto: string, cantidad:number, precioUnitario:number, descuento:number, fecha:Date, precioTotal:number, cantidadDisponible:number, pK_Productos:number ) {

    return this.http.post<any>(`guardarOrdenProducto`,{
      "fecha": fecha,
      "cantidad": cantidad,
      "descuento": descuento,
      "codigoProducto": codigoProducto,
      "precioUnitario": precioUnitario,
      "precioTotal": precioTotal,
      "cantidadDisponible": cantidadDisponible,
      "pK_Productos": pK_Productos,
      "operacion":2
    });
  }


}
