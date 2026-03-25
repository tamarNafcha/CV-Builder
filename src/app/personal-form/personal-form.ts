import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 

// עבור טופס זה בחרתי להשתמש ב- Template Driven Form,
//מכיוון שמדובר בטופס פשוט יחסית, ללא צורך בלוגיקה מורכבת או מבנה דינאמי.

// Template Driven Form is used here because the form is simple
// and does not require complex logic or a dynamic structure.


@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-form.html',
  styleUrl: './personal-form.css',
})
export class PersonalForm {

  // Emits form data to parent component for real-time updates (child → parent communication)
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

    // Send updated form data to parent component
    this.personalChanged.emit(this.personalData);
  }
}