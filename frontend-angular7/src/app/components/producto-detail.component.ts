import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../../services/global';

@Component({

    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
    styleUrls: ['../../assets/producto-detail.css'],
    providers: [ProductoService]
})

export class ProductoDetailComponent {
    public titulo: string;
    public producto: Producto;

    constructor(private _productoService: ProductoService, private _route: ActivatedRoute, private _router: Router) {
        this.titulo = 'Detalle del producto';
    }


    ngOnInit() {
        console.log(`Se ha cargado el componente ${this.titulo}`);
        this.getProducto();
    }

    getProducto(){
        this._route.params.forEach((params: Params) =>{
            let id=params['id'];
            this._productoService.getProducto(id).subscribe(
                response=>{
                    this.producto=response;
                },
                error=>{
                    console.log(<any>error);
                }


            );


        })
    }





}

