import { Component, OnDestroy } from '@angular/core';
import { methodsRequest } from '../models/method-request.model';
import { MethodsService } from '../../../../../features/methods/services/methods.service';
import { Subscription } from 'rxjs';
import { Subjects } from '../../../../../features/models/subject.model';

 
@Component({
  selector: 'app-method-sec',
  templateUrl: './method-sec.component.html',
  styleUrl: './method-sec.component.css'
})
export class MethodSecComponent implements OnDestroy {
  model: methodsRequest;
  private methodRequestSubscription?: Subscription;
  subNames: Subjects[] = []; 
  showSubjects: boolean = false;
  constructor(private methodService: MethodsService) {
    this.model = {
      FirstName: '',
      LastName: ''
    };
  }
  
  onFormSubmit()
  {
    
    this.methodRequestSubscription = this.methodService.secondMethod(this.model).subscribe({
      next: (subNames) => {
        this.subNames = subNames;
        this.showSubjects= true;
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
