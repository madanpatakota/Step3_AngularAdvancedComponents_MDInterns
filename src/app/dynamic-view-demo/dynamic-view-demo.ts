import { Component , TemplateRef, viewChild, ViewContainerRef } from '@angular/core';

import { NotificaitonComponent } from '../notificaiton/notificaiton';

@Component({
  imports: [],
  selector: 'app-dynamic-view-demo',
  styleUrl: './dynamic-view-demo.css',
  templateUrl: './dynamic-view-demo.html',
})
export class DynamicViewDemo {


    numbers = [1, 2 , 3 , 4];


    //viewcontainerref
    //templateref
    //elementref

    welcomeTemplate   = viewChild.required<TemplateRef<unknown>>('welcomeTemplate');
    templateContainer = viewChild.required('templateContainer', {read:ViewContainerRef});
    showWelcomeTemplate(){
      // inside in this click event i have to write down the logic for display the Welcome message realted stuff
      this.templateContainer().createEmbeddedView(this.welcomeTemplate());
      //console.log(this.welcomeTemplate);
    }

    loginTemplate123   = viewChild.required<TemplateRef<unknown>>('loginTemplate');
    
    showLoginTempalte(){
      this.templateContainer().clear();
      this.templateContainer().createEmbeddedView(this.loginTemplate123());
    }
    
employeeFormTemplate = viewChild.required<TemplateRef<unknown>>('employeeFormTemplate');
    showEmployeeTempalte(){
      this.templateContainer().clear();
      this.templateContainer().createEmbeddedView(this.employeeFormTemplate());
    }

   // templateContainer = viewChild.required('templateContainer', {read:ViewContainerRef});

    componentContainaer  = viewChild.required('componentContainaer', {read: ViewContainerRef});
    loadNotification(){
      this.componentContainaer().clear();
      this.componentContainaer().createComponent(NotificaitonComponent);
    }

}
