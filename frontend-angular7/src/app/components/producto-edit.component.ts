import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../../services/global';

@Component({

    selector: 'producto-edit',
    templateUrl: '../views/producto-edit.html',
    providers: [ProductoService]
})

export class ProductoEditComponent {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;
    public hideImg;

    constructor(private _productoService: ProductoService, private _route: ActivatedRoute, private _router: Router) {
        this.titulo = 'Editar producto';
        this.producto = new Producto(1,"","",1,"");


    }

    hideImage() {
        this.hideImg = true;
    }

    ngOnInit() {
        console.log(`Se ha cargado el componente ${this.titulo}`);
        this.hideImg = false;

        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._productoService.getProducto(id).subscribe(
                response => {
                        this.producto = response;
                },
                error => {
                    console.log(<any>error);
                }


            );


        })
    }


    ////NUEVO CODE

    onSubmit() {
            this.updateProducto();
    }


    updateProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._productoService.editProducto(id, this.producto).subscribe(
                result => {
                        this._router.navigate(['/productos']);
                },
                error => {
                    
                    console.log(<any>error);
                }

            );
        });

    }




    fileChangeEvent(fileInput: any) {

        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }





}

