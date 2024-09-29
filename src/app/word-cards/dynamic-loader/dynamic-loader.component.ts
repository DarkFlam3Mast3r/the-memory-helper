import { Component, ViewChild, ViewContainerRef,ComponentFactoryResolver  } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dynamic-loader',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dynamic-loader.component.html',
  styleUrl: './dynamic-loader.component.css'
})
export class DynamicLoaderComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent() {
    const factory = this.resolver.resolveComponentFactory(CardComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.frontTitle = 'Dynamic Title';
    componentRef.instance.frontContent = 'Dynamic Content';
  }

  clearComponents() {
    this.container.clear();
  }
}
