import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../models/producto';


@Component({

    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [ProductoService],
    styleUrls: ['../../assets/productos-list.css'],
})


export class ProductosListComponent {
    public titulo: string;
    public productos:Producto[];
    public confirmado;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productoService: ProductoService) {
        this.titulo = 'Lista de Productos';

    }


    ngOnInit() {
        console.log(`Se ha cargado el componente ${this.titulo}`);
        this.getProductos();
    }


    getProductos(){
        this._productoService.getProductos().subscribe(
            result=>{
                    this.productos = result; 
            },
            error=>{
                console.log(<any>error);
            });
    }

    borrarConfirm(id){
        this.confirmado=id;

    }

    cancelarConfirm(){
        this.confirmado=null;

    }

    onDeleteProducto(id){

        this._productoService.deleteProducto(id).subscribe(
            result => {
                    this.getProductos();
            },
            error => {
                console.log(<any>error);
            }
        );



    }



}

