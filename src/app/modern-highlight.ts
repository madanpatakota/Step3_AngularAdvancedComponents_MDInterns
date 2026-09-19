import { Directive , HostBinding , HostListener} from "@angular/core";


// ngif ngswith ngclass ngstyle
// Directive as a property of the element



@Directive({
    selector :'[appModrenHighlight]',
    host:{
       '[style.color]': 'fontcolor',
       '[style.font-weight]' : 'fWeight',
       '[style.font-size]' : 'hostfontsize',
       '(mouseenter)' : 'onMouseEnter()',
       '(mouseleave)' : 'onmouseLeave()',
       '(click)' : 'onClick()'
    }
})
export class ModernHighlightDirective{


   //@HostBinding('style.color')  
   fontcolor = 'blue';

    //@HostBinding('style.font-weight') 
    fWeight   = 'bold'

    //@HostBinding('style.font-size')
    hostfontsize = '30px';
    
    //@HostListener('mouseenter')
    onMouseEnter(){
          this.fontcolor = 'green';
          this.fWeight   = 'normal'
    }

   // @HostListener('mouseleave')
    onmouseLeave(){
          this.fontcolor = 'blue';
          this.fWeight = 'bold'
    }

    //@HostListener('click')
    onClick(){
        //  this.backgroundColor123444 = 'yellow'
        //alert("test");
        this.fontcolor = 'red';
    }


}