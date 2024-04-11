import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-two',
  templateUrl: './circle-two.component.html',
  styleUrls: ['./circle-two.component.scss']
})
export class CircleTwoComponent implements OnInit {
  constructor(
    private animationBuilder: AnimationBuilder,
     private elementRef: ElementRef) { }

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
    const player = animation.create(this.elementRef.nativeElement.querySelector('.circle.two'));
    
    setTimeout(() => {
      player.play();
    }, 1500); // Start the animation after 1.5 seconds
  }
}
