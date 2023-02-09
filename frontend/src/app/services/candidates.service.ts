import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatesModel } from '../models/CandidatesModel';
import { LanguagesModel } from '../models/languagesModel';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  BASE_URL = "http://localhost:4000/api/giusonManagement/";
  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<CandidatesModel[]> {
    return this.http.get<CandidatesModel[]>(this.BASE_URL);
  }

  getAllLanguages(): Observable<LanguagesModel[]> {
    return this.http.get<LanguagesModel[]>(this.BASE_URL + "languages");
  }

 
}
