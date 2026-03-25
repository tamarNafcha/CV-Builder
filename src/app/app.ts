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

  // Receives data from child component and stores it for display
  
  onPersonalChanged(data: any) {
    this.personalDetails = data;
  }

  onEducationChanged(data: any) {
    this.educationList = data.educations;
  }
}



