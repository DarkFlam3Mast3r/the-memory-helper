import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCardColor]',
  standalone: true
})
export class CardColorDirective {
  @Input('appCardColor')lastTimeChecked: Date;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.updateColor();
  }
  private updateColor() {
    // console.log('lasttimechecked :',this.lastTimeChecked)
    const now = new Date();
    const elapsed = now.getTime() - new Date(this.lastTimeChecked).getTime();

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;

    let color = '';

    if (elapsed < 20 * minute) {
      color = '#83A6C0'; // 20分钟
    } else if (elapsed < hour) {
      color = '#A9C3D4'; // 1小时
    } else if (elapsed < day) {
      color = '#CFDBE9'; // 1天
    } else if (elapsed < week) {
      color = '#E4F0F5'; // 1周
    } else if (elapsed < month) {
      color = '#F7C3DE'; // 1个月
    } else {
      color = '#FE675C'; // 记忆曲线（超过1个月）
    }

    // console.log('time:',elapsed)

    this.el.nativeElement.style.backgroundColor = color;
  }
}
