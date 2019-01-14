import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = '/';

  constructor( private http: HttpClient ) { }

  get( path ) {
    return new Promise(( resolve, reject ) => {
      this.http.get( `${this.apiUrl}/${path}` )
      .subscribe(
        res => resolve( res ),
        err => reject( err )
      )
    })
  }

  post( path, body ) {
    return new Promise(( resolve, reject ) => {
      this.http.post( `${this.apiUrl}/${path}`, body )
      .subscribe(
        res => resolve( res ),
        err => reject( err )
      )
    })
  }

}
