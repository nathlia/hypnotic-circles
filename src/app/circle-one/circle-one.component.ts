import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-one',
  templateUrl: './circle-one.component.html',
  styleUrls: ['./circle-one.component.scss']
})
export class CircleOneComponent implements OnInit {

  private player!: AnimationPlayer;

  constructor(private animationBuilder: AnimationBuilder, private elementRef: ElementRef) { }

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
    const player = animation.create(this.elementRef.nativeElement.querySelector('.circle.one'));
    player.onDone(() => {
      // Restart the animation when it's done
      setTimeout(() => {
        this.playAnimation(); // Recursively call playAnimation after a delay
      }, 4000); // Adjust the delay as needed
    });
    player.play();
  }
}
