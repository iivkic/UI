import { Injectable } from '@angular/core';
import { methodsRequest } from '../../../core/components/methods/methods/models/method-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Object } from '../../models/object.model';
import { Subjects } from '../../models/subject.model';
import { otherMethodsRequest } from '../../../core/components/methods/methods/models/otherMethod-request.model';
@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http: HttpClient) { }

  firstMethod(model: methodsRequest): Observable<Object[]> {
    return this.http.post<Object[]>(`https://localhost:7099/api/FirstMethod`, model);
  }

  secondMethod(model: methodsRequest): Observable<Subjects[]> {
    return this.http.post<Subjects[]>(`https://localhost:7099/api/SecondMethod`, model);
  }

  thirdMethod(model: methodsRequest): Observable<Subjects[]> {
    return this.http.post<Subjects[]>(`https://localhost:7099/api/ThirdMethod`, model);
  }
  forthMethod(model: otherMethodsRequest): Observable<Object[]> {
    return this.http.post<Object[]>(`https://localhost:7099/api/FourthMethod`, model);
  }
}
