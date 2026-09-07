import { Component  ,
   ElementRef, QueryList,
   viewChild, signal , viewChildren , computed
  } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child-demo',
  styleUrl: './view-child-demo.css',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo{


   //var emp:string  = "Madan";

   //@ViewChild('employeeName')   employeeName  !:  ElementRef<HTMLInputElement>;


   //fresher has to fix........

   employeeName = viewChild<ElementRef<HTMLInputElement>>('employeeName');
   selectedEmployeeName = signal('');


   employeeEmail = viewChild<ElementRef<HTMLInputElement>>('employeeEmail');
   selectedEmployeeEmail = signal('');
  

   employeeNameSt:string= "";
   employeeEmailSt:string= "";

   ShowEmployee(){
        this.employeeNameSt = this.employeeName()?.nativeElement.value ?? "";
        this.selectedEmployeeName.set(this.employeeNameSt);
        //console.log(this.employeeNameSt);
        // console.log(this.employeeName.nativeElement.value);
   }


   ShowEmail(){
        this.employeeEmailSt = this.employeeEmail()?.nativeElement.value ?? "";
        this.selectedEmployeeEmail.set(this.employeeEmailSt);
   }


   //@ViewChildren('employee')  employees !: QueryList<ElementRef<HTMLInputElement>>
   //viewChild<ElementRef<HTMLInputElement>>('employeeName');
   employees =  viewChildren<ElementRef<HTMLInputElement>>('employees'); 
   employeeList :string[] = [];

   employeeCount  = computed(()=> this.employees().length);
   //employees is the List of htmlinputelements
   showEmployees(){
        this.employeeList=[];
        
        this.employees().forEach((employee)=>{
                const name = employee.nativeElement.value;
                if(name){
                  this.employeeList.push(name)
                }
                console.log(this.employeeList);
        })

         
        
   }
}
