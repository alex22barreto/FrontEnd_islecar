import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-formatoVentas',
  templateUrl: './formatoVentas.component.html',
  styleUrls: ['./formatoVentas.component.scss']
})
export class FormatoVentasComponent implements OnInit {

  products = [];
  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  prodDscripcion = new FormControl('');
  prodPrecioUnitario = new FormControl('');
  prodDescuento = new FormControl('');
  prodPrecioTotal = new FormControl('');
  prodCantidadDisponible = new FormControl('');
  idProducto = 0;
  codigoProducto="";
  input_cantidad= 0;
  input_fecha:Date;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      //this.products = products;
      this.websiteList = products;
    });
  }
  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

  changeWebsite(e) {
    console.log(e.target.value);
    var ID = e.target.value;
    
    this.productsService.getProduct(ID)
      .subscribe(product => {
        console.log(product);
        this.prodDscripcion.setValue(product.Detalle+"\n"+product.Descripcion);
        this.prodCantidadDisponible.setValue(product.Cantidad);
        this.codigoProducto=product.CodigoProducto.replace('SHA', 'AERO');
        this.idProducto=product.PK_Productos;
        this.productsService.getProductIPFSvalor(this.codigoProducto)
          .subscribe(productValor => {
            this.prodPrecioUnitario.setValue(productValor.valor);
          });
      });
  }

  valorOrden(event: any) {
    this.input_cantidad=event.target.value;
    this.productsService.getProductIPFSdescuento(this.codigoProducto, this.input_cantidad)
    .subscribe(productDescuento => {
      this.prodDescuento.setValue(productDescuento.porcentajeDescuento);
      this.productsService.getValorTotalproducto(this.idProducto, this.input_cantidad, this.prodPrecioUnitario.value, this.prodDescuento.value)
      .subscribe(valorTotal => {
        this.prodPrecioTotal.setValue(valorTotal);
      });
    });
    
    console.log(event.target.value);
    
  }

  seleccionarFecha(event: any) {
    
    this.input_fecha=event.target.value;
    console.log(event.target.value);
    console.log(this.input_fecha);
    
  }

  guardarOrden() {
    
    
    console.log(this.input_fecha);
    this.productsService.postGuardadOrdenVenta(this.codigoProducto, this.input_cantidad, this.prodPrecioUnitario.value, this.prodDescuento.value, this.input_fecha, this.prodPrecioTotal.value, this.prodCantidadDisponible.value, this.idProducto)
      .subscribe(gardarResult => {
        console.log(gardarResult);
        //if(gardarResult.status==200){
          //alert("Registro exitoso");
        //}
        
      });
      alert("Registro exitoso");
      //this.router.navigate(['./admin/products']);
    
  }

}
