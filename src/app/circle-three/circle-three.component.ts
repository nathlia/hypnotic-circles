import { AnimationBuilder, animate, style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-three',
  templateUrl: './circle-three.component.html',
  styleUrls: ['./circle-three.component.scss']
})
export class CircleThreeComponent implements OnInit {
  constructor(
    private animationBuilder: AnimationBuilder,
    private elementRef: ElementRef) 
    { }

  ngOnInit(): void {
   this.playAnimation();
  }

  playAnimation(): void {
    const animationSteps = [];
    for (let i = 0; i <= 100; i += 5) {
      const scale = i / 2; // Calculate the scale value from 0 to 50
      const step = animate('5s', style({ transform: `scale(${scale})` }));
      animationSteps.push(step);
    }
    
    const animation = this.animationBuilder.build(animationSteps);
    const player = animation.create(this.elementRef.nativeElement.querySelector('.circle.three'));
    
    setTimeout(() => {
      player.play();
    }, 2000); // Start the animation after 2 seconds
  }
}

