import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngAfterViewInit(): void {
    setInterval(() => {
      this.startAnimationLoop();
    }, 5000); // Adjust the interval as needed
    
  }

  startAnimationLoop(): void {
    const container = this.containerRef.nativeElement;
  
    setTimeout(() => {
      const circleGroup = this.createCircleGroup();
      container.appendChild(circleGroup);

      // Start animation for this group
      this.playAnimationForCircle(circleGroup);
      // If there are 9 or more groups, remove the first one  
      this.eraseGroup9(container);
      
    }, 5000); // Adjust the delay between each group (in milliseconds)
  }

  eraseGroup9(container : any): void {
    // Count the number of circle groups
    const numCircleGroups = container.childElementCount;
    if (numCircleGroups >= 9) {
      // If there are 9 or more groups, remove the first one with a disappearing animation
      const firstGroup = container.firstElementChild;
      firstGroup.classList.add('disappear');

      // After the animation duration, remove the first group
      setTimeout(() => {
        container.removeChild(firstGroup);
      }, 1000); // Adjust the animation duration (in milliseconds)
    }
  }

  createCircleGroup(): HTMLDivElement {
    const circleGroup = document.createElement('div');
    circleGroup.classList.add('circle-group');

    const circleOne = document.createElement('div');
    circleOne.classList.add('circle', 'one');

    const circleTwo = document.createElement('div');
    circleTwo.classList.add('circle', 'two');

    const circleThree = document.createElement('div');
    circleThree.classList.add('circle', 'three');

    circleGroup.appendChild(circleOne);
    circleGroup.appendChild(circleTwo);
    circleGroup.appendChild(circleThree);

    return circleGroup;
  }

  playAnimationForCircle(circleGroup: HTMLDivElement): void {
    const circles = circleGroup.childNodes;

    // Define the animation steps for the circle
    const animationSteps = [];
    for (let i = 0; i <= 100; i += 5) {
      const scale = i / 2; // Calculate the scale value from 0 to 50
      const step = animate('5s', style({ transform: `scale(${scale})`, zIndex: 1 }));
      animationSteps.push(step);
    }

    // Build the animation
    const animation = this.animationBuilder.build(animationSteps);

    // Play the animation for each circle with a staggered delay
    circles.forEach((circle: any, index: number) => {
      // Calculate the delay for the current circle
      const delay = index * 1500; // Adjust delay as needed
      const player = animation.create(circle, { delay });
      player.play();
    
    });
  }
}
