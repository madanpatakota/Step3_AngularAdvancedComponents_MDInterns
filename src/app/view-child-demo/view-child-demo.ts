import { Component  , ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child-demo',
  styleUrl: './view-child-demo.css',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo {


   //var emp:string  = "Madan";

   @ViewChild('employeeName')   employeeName  !:  ElementRef<HTMLInputElement>;

   employeeNameSt = ""
   ShowEmployee(){
        this.employeeNameSt = this.employeeName.nativeElement.value;
        // console.log(this.employeeName);
        // console.log(this.employeeName.nativeElement.value);
   }



   @ViewChildren('employee')  employees !: QueryList<ElementRef<HTMLInputElement>>


   employeeList :string[] = [];
   //employees is the List of htmlinputelements
   ShowEmployees(){
        this.employees.forEach((employee)=>{
                 //console.log(employee);
                //console.log(employee.nativeElement.value);

                // " John         ";
                // "John";

                // "";

                const name = employee.nativeElement.value.trim();
                if(name){
                  this.employeeList.push(name)
                }
        })
   }
}
