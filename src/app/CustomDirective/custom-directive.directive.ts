import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private tempRef : TemplateRef<any>, private conRef : ViewContainerRef) {} 
    
    @Input() set appCustomDirective(condition: boolean)
    {
      if (!condition) {
        this.conRef.createEmbeddedView(this.tempRef);
      }
      else {
      this.conRef.clear();        }
      }

}
