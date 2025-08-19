import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class ApiService {

    apiUrl = "http://localhost:3000/api";

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<any> {
        return this.http.get(`${this.apiUrl}/list`);
    }

    registerEmployees(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

}
