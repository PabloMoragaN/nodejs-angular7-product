import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, XHRBackend } from '@angular/http';//npm i @angular/http
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';



import { Producto } from '../app/models/producto';
import { GLOBAL } from './global';
import { stringify } from '@angular/core/src/render3/util';



@Injectable()

export class ProductoService {

    public url: string;

    constructor(public _http: HttpClient) {

        this.url = GLOBAL.url;
    }

    getProductos():Observable<any> {
       return this._http.get(this.url+"productos");

    }

    getProducto(id):Observable<any>{
        return this._http.get(this.url+'producto/'+id);
    }
    
    addProducto(producto: Producto):Observable<any>{
        let json= JSON.stringify(producto);

       // let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type','application/json');

        console.log(json);

        return this._http.post(this.url+'productos',json,{headers:headers});

    }


    editProducto(id,producto:Producto):Observable<any>{
        let json= JSON.stringify(producto);

     
        let headers = new HttpHeaders().set('Content-Type','application/json');
         


        return this._http.put(this.url+'update-producto/'+id,json,{headers:headers});


    }

    deleteProducto(id):Observable<any>{
        return this._http.delete(this.url+'delete-producto/'+id);

    }



}

