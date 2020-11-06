import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { InsumosService } from './../../../core/services/insumos/insumos.service';

@Component({
  selector: 'app-formatoCompras',
  templateUrl: './formatoCompras.component.html',
  styleUrls: ['./formatoCompras.component.scss']
})
export class FormatoComprasComponent implements OnInit {

  products = [];
  listMateriales: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
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
    private insumosService: InsumosService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  
  fetchProducts() {
    this.insumosService.getAllProducts()
    .subscribe(products => {
      //this.products = products;
      this.listMateriales = products;
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
    
    this.insumosService.getProduct(ID)
      .subscribe(product => {
        console.log(product);
        this.prodDscripcion.setValue(product.NombreMaterial);
        this.prodCantidadDisponible.setValue(product.SaldoActual);
        this.codigoProducto=product.CodigoMaterial;
        this.idProducto=product.PK_Materiales;
        this.insumosService.getProductIPFSvalor(this.codigoProducto)
          .subscribe(productValor => {
            this.prodPrecioUnitario.setValue(productValor.valor);
          });
      });
  }

  valorOrden(event: any) {
    this.input_cantidad=event.target.value;
    this.insumosService.getProductIPFSdescuento(this.codigoProducto, this.input_cantidad)
    .subscribe(productDescuento => {
      this.prodDescuento.setValue(productDescuento.porcentajeDescuento);
      this.insumosService.getValorTotalproducto(this.idProducto, this.input_cantidad, this.prodPrecioUnitario.value, this.prodDescuento.value)
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
    this.insumosService.postGuardadOrdenVenta(this.codigoProducto, this.input_cantidad, this.prodPrecioUnitario.value, this.prodDescuento.value, this.input_fecha, this.prodPrecioTotal.value, this.prodCantidadDisponible.value, this.idProducto)
      .subscribe(gardarResult => {
        console.log(gardarResult);
      });
      //this.router.navigate(['./admin/products']);
    
  }

}
