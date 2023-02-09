import { Component, OnInit } from '@angular/core';
import { CandidatesModel } from 'src/app/models/CandidatesModel';
import { LanguagesModel } from 'src/app/models/languagesModel';
import { CandidatesService } from 'src/app/services/candidates.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  candidates: CandidatesModel[];
  languages: LanguagesModel[];
  language: LanguagesModel;
  year = new Date().getFullYear();
  constructor(private candidatesManagement: CandidatesService) { }

  ngOnInit(): void {
    this.getCandidates();
    this.getLanguages();
  }

  getCandidates() {
    this.candidatesManagement.getAllCandidates()
      .subscribe(value =>
        this.candidates = value
      );
  }
  getLanguages() {
    this.candidatesManagement.getAllLanguages()
      .subscribe(value =>
        this.languages = value
      );
  }


}
