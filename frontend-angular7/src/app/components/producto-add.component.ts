import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../../services/global';

@Component({

    selector: 'productos-add',
    templateUrl: '../views/productos-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;

    constructor(private _serviceProductoService: ProductoService, private _route: ActivatedRoute, private _router: Router) {
        this.titulo = 'Crear Productos';
        this.producto = new Producto(0, "", "", 0, "");

    }


    ngOnInit() {
        console.log(`Se ha cargado el componente ${this.titulo}`);

    }


    onSubmit(){
        this.saveProducto();
    }


    saveProducto() {
        this._serviceProductoService.addProducto(this.producto).subscribe(
            result => {
                    this._router.navigate(['/productos']);
            },
            error => {
                console.log(<any>error);
            }
        );

    }


    

    fileChangeEvent(fileInput: any) {

        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }



}

