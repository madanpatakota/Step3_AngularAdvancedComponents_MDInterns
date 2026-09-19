import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // host: 
  // {
  //   '[style.color]'      : 'fontcolor',
  //   '[style.font-weight]': 'fWeight',
  //   '[style.background-color]': 'backgroundColor123444',
  //   '(mouseenter)'       : "onmouseEnter123()",
  //   '(mouseleave)'       : "onmouseleave345()",
  //   '(click)'            : "onclick789()"
  // }
})



// @hostbidning and @hostlistenr
// :host{
//     font-size:25px;
//     font-weight: bold;
//     color:blue
// }
export class App {

    
   @HostBinding('style.color')  
   fontcolor = 'blue';
  
   @HostBinding('style.font-weight') 
   fWeight   = 'bold'

   @HostBinding('style.font-size')
   hostfontsize = '30px';

    @HostListener('mouseenter')
    onMouseEnter1234(){
          this.fontcolor = 'green';
          this.fWeight   = 'normal'
    }

    @HostListener('mouseleave')
    onmouseleave345(){
          this.fontcolor = 'blue';
          this.fWeight = 'bold'
    }

    @HostListener('click')
    onclick789(){
        //  this.backgroundColor123444 = 'yellow'
        //alert("test");
        this.fontcolor = 'red';
    }
  
}
