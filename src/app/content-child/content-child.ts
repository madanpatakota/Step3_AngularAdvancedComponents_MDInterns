import { Component , ContentChild , ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-content-child',
  styleUrl: './content-child.css',
  templateUrl: './content-child.html',
})
export class ContentChildComponent {

  @ContentChild('employee')   employee !: ElementRef<HTMLParagraphElement>
    

  firstEmployeeName = '';
  ShowEmployee(){
    //this.firstEmployeeName = this.employee.nativeElement

    this.firstEmployeeName = this.employee.nativeElement.textContent.trim();
     console.log(this.employee);
  }


  @ContentChildren('employee') employees !: QueryList<ElementRef<HTMLParagraphElement>>;

  empList:string[] = []
  
  //BUtton clicked
  ShowEmployees(){
    this.employees.forEach((employee:ElementRef<HTMLParagraphElement>)=>{
          let empName = employee.nativeElement.textContent.trim();
          if(empName){
            this.empList.push(empName);
          }
    })

  }

}
