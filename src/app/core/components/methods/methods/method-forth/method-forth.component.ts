import { Component } from '@angular/core';
import { otherMethodsRequest } from '../models/otherMethod-request.model'
import { MethodsService } from '../../../../../features/methods/services/methods.service';
import { Subscription } from 'rxjs';
import { Object } from '../../../../../features/models/object.model';


@Component({
  selector: 'app-method-forth',
  templateUrl: './method-forth.component.html',
  styleUrl: './method-forth.component.css'
})
export class MethodForthComponent {
  model: otherMethodsRequest;
  private methodRequestSubscription?: Subscription;
  teachers: Object[] = [];
  showTeachers: boolean = false;
  constructor(private methodService: MethodsService) {
    this.model = {
      FirstName: '',
      LastName: '',
      SubjectName: '',
    };
  }

  onFormSubmit()
  {
    
    this.methodRequestSubscription = this.methodService.forthMethod(this.model).subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.showTeachers= true;
      },
      error: (error) => {
        console.error('Error:', error);
        // Handle the error, e.g., display an error message to the user
      }
    });
  }

  ngOnDestroy(): void {
    this.methodRequestSubscription?.unsubscribe();
  }
}
