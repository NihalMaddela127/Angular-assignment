import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Istudents } from '../dashcomp/casesensitive';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toObservable } from '@angular/forms/src/validators';
import { Observable } from 'rxjs/Observable';
import { Iaspirant } from './newaspirant.component';
import 'rxjs/add/operator/map';

@Injectable()
export class AspirantFormService{
    result;
    constructor(private http:HttpClient){
    }

    getAspirants() {
        return this.http.get<Iaspirant[]>('http://localhost:3000/api/db');
    }  
    
    addData(newData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // const names = newData.firstName;
    // const branchs = newData.branchName;
    // const prefLangs = newData.prefLangName;
    // const colleges = newData.collegeName;
    // const  percents = newData.percentName;

    return new Promise((resolve, reject) => {

    return this.http.post<Istudents[]>('http://localhost:3000/db/addData', newData).subscribe(res =>{
        resolve(res);
    },
    err =>{
        reject(err);
    });
    });
}
}
