import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppData } from '../models/cert.app.model';
import { ICert } from '../models/cert.model';


const  headerDict ={

  'Content-Type': 'application/json',

};




@Injectable({
  providedIn: 'root'
})

export class CertService {

  userNameSource = new BehaviorSubject<string>('');
  userName = this.userNameSource.asObservable();
  
  constructor(private http:HttpClient) { }

  _url:string = "http://vc2:90/GetAppInfo";
  update:string="http://vc2:90/updateCert";
  revert:string="http://vc2:90/revertcert";

  getCertDetails(appData:AppData):Observable<ICert[]>{
    let formData:any = new FormData();
    formData.append('AppId',appData.appId);
    formData.append('CorpId',appData.corpId);

    for (var pair of formData.entries()){
      console.log(pair[0]+','+pair[1]);
    }
    return this.http.post<ICert[]>(`${this._url}`, JSON.stringify(Object.fromEntries(formData)),
    
    {headers:new HttpHeaders(headerDict),}
    );
  }

  updateCert(appData:AppData):Observable<ICert[]>{

   let formData:any = new FormData();
    formData.append('AppId',appData.appId);
    formData.append('CorpId',appData.corpId);

    for (var pair of formData.entries()){
      console.log(pair[0]+','+pair[1]);
    }
    return this.http.post<ICert[]>(`${this.update}`, JSON.stringify(Object.fromEntries(formData)),
    
    {headers:new HttpHeaders(headerDict),}
    );
  }

  revertCert(appData:AppData):Observable<ICert[]>{

    let formData:any = new FormData();
    formData.append('AppId',appData.appId);
    formData.append('CorpId',appData.corpId);

    for (var pair of formData.entries()){
      console.log(pair[0]+','+pair[1]);
    }
    return this.http.post<ICert[]>(`${this.update}`, JSON.stringify(Object.fromEntries(formData)),
    
    {headers:new HttpHeaders(headerDict),}
    );
    
  }
}
