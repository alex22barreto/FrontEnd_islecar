import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Materiales } from './../../models/materiales.model';
import { MaterialDetalle } from './../../models/materialDetalle.model';
import { IPFSvalor } from './../../models/IPFSvalor.model';
import { IPFSdescueto } from './../../models/IPFSdescueto.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'any'
})
export class InsumosService {

  constructor(
    private http: HttpClient
  ) { }



  getAllProducts() {

    return this.http.post<Materiales[]>(`ListarMateriales`,"");

  }

  getProduct(message: string) {
    return this.http.post<MaterialDetalle>(`inventarioMaterial`,
    {"message":message}
    );
  }

  getProductIPFSvalor(codigoProducto: string) {

    return this.http.post<IPFSvalor>(`consultarDatosIPFS`,{
      "codigo": codigoProducto,
      "tipoOperaciones":"1",
      "cantidad":"1",
      "fuente":"1"
    });
  }

  getProductIPFSdescuento(codigoProducto: string, cantidad:number) {

    return this.http.post<IPFSdescueto>(`consultarDatosIPFS`,{
      "codigo": codigoProducto,
      "tipoOperaciones":"1",
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
    if(cantidadDisponible==null){
      console.log("reconoce null");
      
      cantidadDisponible=0;
    }
    console.log(fecha);
    console.log(cantidad);
    console.log(descuento);
    console.log(codigoProducto);
    console.log(precioUnitario);
    console.log(precioTotal);
    console.log(cantidadDisponible);
    console.log(pK_Productos);

    return this.http.post<any>(`guardarOrdenProducto`,{
      "fecha": fecha,
      "cantidad": cantidad,
      "descuento": descuento,
      "codigoProducto": codigoProducto,
      "precioUnitario": precioUnitario,
      "precioTotal": precioTotal,
      "cantidadDisponible": cantidadDisponible,
      "pK_Productos": pK_Productos,
      "operacion":1
    });
  }


}
