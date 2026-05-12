import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface TabItem {
  id: string;
  label: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-forms-page',
  imports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css',
})
export class FormsPage {

  // ======================================================
  // ACTIVE TAB
  // ======================================================

  activeTab = signal('template');

  tabs: TabItem[] = [
    {
      id: 'template',
      label: 'Template Driven Form',
    },
    {
      id: 'reactive',
      label: 'Reactive Form',
    },
    {
      id: 'signal',
      label: 'Signal Form (Upcoming)',
    },
  ];

  // ======================================================
  // TEMPLATE DRIVEN FORM
  // ======================================================

  templateUser = {
    name: '',
    email: '',
    role: '',
  };

  // ======================================================
  // REACTIVE FORM
  // ======================================================

  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.registrationForm =
      this.fb.group({
        fullName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
          ],
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ],
        ],

        confirmPassword: [
          '',
          Validators.required,
        ],

        role: [
          '',
          Validators.required,
        ],

        companyName: [''],

        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          zip: ['', Validators.required],
        }),

        questions: this.fb.array([]),
      },
      {
        validators: this.passwordMatchValidator,
      });

    this.listenRoleChanges();

    this.addQuestion();
  }

  // ======================================================
  // PASSWORD VALIDATOR
  // ======================================================

  passwordMatchValidator(
    form: FormGroup
  ) {

    const password =
      form.get('password')?.value;

    const confirmPassword =
      form.get('confirmPassword')?.value;

    return password === confirmPassword
      ? null
      : {
          passwordMismatch: true,
        };
  }

  // ======================================================
  // COMPANY FIELD DYNAMIC VALIDATION
  // ======================================================

  listenRoleChanges() {

    this.registrationForm
      .get('role')
      ?.valueChanges.subscribe((role) => {

        const companyField =
          this.registrationForm.get(
            'companyName'
          );

        if (role === 'Company') {

          companyField?.setValidators([
            Validators.required,
          ]);

        } else {

          companyField?.clearValidators();

        }

        companyField?.updateValueAndValidity();

      });
  }

  // ======================================================
  // FORM ARRAY
  // ======================================================

  get questions(): FormArray {

    return this.registrationForm.get(
      'questions'
    ) as FormArray;
  }

  addQuestion() {

    this.questions.push(
      new FormControl(
        '',
        Validators.required
      )
    );
  }

  removeQuestion(index: number) {

    this.questions.removeAt(index);
  }

  // ======================================================
  // SUBMIT
  // ======================================================

  submitTemplateForm() {

    console.log(
      'Template Form',
      this.templateUser
    );
  }

  submitReactiveForm() {

    if (
      this.registrationForm.invalid
    ) {

      this.registrationForm.markAllAsTouched();

      return;
    }

    console.log(
      'Reactive Form',
      this.registrationForm.value
    );
  }

  // ======================================================
  // INTERVIEW QUESTIONS
  // ======================================================

  interviewQuestions: InterviewQuestion[] = [
    {
      question:
        'What is the difference between Template Driven and Reactive Forms?',
      answer:
        'Template-driven forms are simpler and mostly handled in HTML, while reactive forms are model-driven and managed entirely in TypeScript.',
    },
    {
      question:
        'What is FormGroup?',
      answer:
        'FormGroup is a collection of FormControls that tracks the value and validity of a group of form fields.',
    },
    {
      question:
        'What is FormControl?',
      answer:
        'FormControl represents a single form input element.',
    },
    {
      question:
        'What is FormBuilder?',
      answer:
        'FormBuilder is a helper service that simplifies creating FormGroup and FormControl objects.',
    },
    {
      question:
        'What is FormArray?',
      answer:
        'FormArray manages dynamic collections of form controls.',
    },
    {
      question:
        'Difference between setValue() and patchValue()?',
      answer:
        'setValue() updates all fields and requires complete structure, while patchValue() updates partial fields.',
    },
    {
      question:
        'How do you validate password and confirm password?',
      answer:
        'Using a custom validator that compares both field values.',
    },
    {
      question:
        'How do you dynamically add validators?',
      answer:
        'Using setValidators(), clearValidators(), and updateValueAndValidity().',
    },
  ];

}
