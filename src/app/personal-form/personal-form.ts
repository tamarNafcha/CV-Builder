import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-form.html',
  styleUrl: './personal-form.css',
})
export class PersonalForm {
  @Output() personalChanged = new EventEmitter<any>()
  
  @ViewChild('personalForm') personalForm!: NgForm;;

  personalData = {
    fullName: '',
    email: '',
    phone: '',
    description: ''
  };

  updateField(field: string, value: string) {
    this.personalData = {
      ...this.personalData,
      [field]: value
    };

  this.personalChanged.emit(this.personalData);
  }
}