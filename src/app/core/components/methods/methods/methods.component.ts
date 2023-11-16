import { Component, OnDestroy } from '@angular/core';
import { methodsRequest } from './models/method-request.model';
import { MethodsService } from '../../../../features/methods/services/methods.service';
import { Subscription } from 'rxjs';
import { Object } from "../../../../features/models/object.model"
@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.css'
})
export class MethodsComponent implements OnDestroy {
  model: methodsRequest;
  private methodRequestSubscription?: Subscription;
  students: Object[] = []; 
  showStudents: boolean = false;
  constructor(private methodService: MethodsService) {
    this.model = {
      FirstName: '',
      LastName: ''
    };
  }
  
  onFormSubmit()
  {
    
    this.methodRequestSubscription = this.methodService.firstMethod(this.model).subscribe({
      next: (students) => {
        this.students = students;
        this.showStudents = true;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.methodRequestSubscription?.unsubscribe();
  }

  
}
