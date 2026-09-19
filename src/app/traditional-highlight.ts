import { Directive , HostBinding , HostListener} from "@angular/core";


// ngif ngswith ngclass ngstyle
// Directive as a property of the element



@Directive({
    selector :'[appTradionalHighlight]'
})
export class TraditioanlHighlightDirective{


   @HostBinding('style.color')  
   fontcolor = 'blue';

    @HostBinding('style.font-weight') 
    fWeight   = 'bold'

    @HostBinding('style.font-size')
    hostfontsize = '30px';



    @HostListener('mouseenter')
    onMouseEnter(){
          this.fontcolor = 'green';
          this.fWeight   = 'normal'
    }

    @HostListener('mouseleave')
    onmouseLeave(){
          this.fontcolor = 'blue';
          this.fWeight = 'bold'
    }

    @HostListener('click')
    onClick(){
        //  this.backgroundColor123444 = 'yellow'
        //alert("test");
        this.fontcolor = 'red';
    }


}