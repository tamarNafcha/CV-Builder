import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators,AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

//עבור טופס זה בחרתי להשתמש ב Reactive Form 
// מכיוון שהוא מאפשר קינון טפסים ודינאמיות- מערכים דינאמיים (במקרה זה הקורסים ופרטי ההשכלה) .

// Reactive Form is used here because it supports nested forms and dynamic FormArrays

@Component({
  selector: 'app-education-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './education-form.html',
  styleUrl: './education-form.css',
})
export class EducationForm {

  // Emits form data to parent component for real-time updates (child -> parent communication)
  @Output() educationChanged = new EventEmitter<any>();

  educationForm = new FormGroup({
    educations: new FormArray([this.createEducationItem()])
  });

  get educations(): FormArray {
    return this.educationForm.get('educations') as FormArray;
  }

  createEducationItem(): FormGroup {
    return new FormGroup({
      institution: new FormControl('', Validators.required),
      degreeType: new FormControl('', Validators.required),
      domain: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      finishDate: new FormControl('', Validators.required),
      studStatus: new FormControl('', Validators.required),
      gradesAvg: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]),
      mainCourses: new FormArray([this.createCourse()]),
      excellence: new FormControl(false),
      shortDescription: new FormControl('', Validators.required)
    },{ validators: this.dateOrderValidator() });
  }
  
  ngOnInit() {
  this.educationForm.valueChanges.subscribe(value => {
    console.log('education changed:', value);

    // Send updated form data to parent component
    this.educationChanged.emit(value);
  });
}

  createCourse(): FormControl {
    return new FormControl('', Validators.required);
  }

  getCourses(index: number): FormArray {
    return this.educations.at(index).get('mainCourses') as FormArray;
  }

  addEducation(): void {
    this.educations.push(this.createEducationItem());
  }

  removeEducation(index: number): void {
    if (this.educations.length > 1) {
      this.educations.removeAt(index);
    }
  }

  addCourse(educationIndex: number): void {
    this.getCourses(educationIndex).push(this.createCourse());
  }

  removeCourse(educationIndex: number, courseIndex: number): void {
    const courses = this.getCourses(educationIndex);

    if (courses.length > 1) {
      courses.removeAt(courseIndex);
    }
  }

  dateOrderValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const startDate = group.get('startDate')?.value;
    const finishDate = group.get('finishDate')?.value;
    const studStatus = group.get('studStatus')?.value;

    if (studStatus === 'current') {
      return null;
    }

    if (!startDate || !finishDate) {
      return null;
    }

    return new Date(finishDate) >= new Date(startDate)
      ? null
      : { dateOrder: true };
  };
}

updateFinishDateValidator(index: number): void {
  const educationGroup = this.educations.at(index) as FormGroup;
  const studStatus = educationGroup.get('studStatus')?.value;
  const finishDateControl = educationGroup.get('finishDate');

  if (!finishDateControl) return;

  if (studStatus === 'current') {
    finishDateControl.clearValidators();
    finishDateControl.setValue('');
  } else {
    finishDateControl.setValidators(Validators.required);
  }

  finishDateControl.updateValueAndValidity();
  educationGroup.updateValueAndValidity();
}

}