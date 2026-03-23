import { Component } from '@angular/core';
import { PersonalForm } from './personal-form/personal-form';
import { EducationForm } from './education-form/education-form';
import { CvPreview } from './cv-preview/cv-preview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonalForm, EducationForm, CvPreview],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  personalDetails = {};
  educationList: any[] = [];

  onPersonalChanged(data: any) {
    // console.log('parent got:', data); עבור בדיקות
    this.personalDetails = data;
  }

  onEducationChanged(data: any) {
    // console.log('education from child:', data); עבור בדיקות 
    this.educationList = data.educations;
  }
}



