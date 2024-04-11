import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef;
  constructor(private animationBuilder: AnimationBuilder, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.addNewCircle();
    }, 5000); // Adjust the interval as needed
  }

  addNewCircle(): void {
    const container = this.containerRef.nativeElement;
  
    // Create a container for the circles
    const circleGroup = document.createElement('div');
    circleGroup.classList.add('circle-group');
  
    // Create circle elements
    const circleOne = document.createElement('div');
    circleOne.classList.add('circle', 'one');
    const circleTwo = document.createElement('div');
    circleTwo.classList.add('circle', 'two');
    const circleThree = document.createElement('div');
    circleThree.classList.add('circle', 'three');
  
    // Append circle elements to the circle group
    circleGroup.appendChild(circleOne);
    circleGroup.appendChild(circleTwo);
    circleGroup.appendChild(circleThree);
  
    // Append the circle group to the container with delay
    setTimeout(() => {
      container.appendChild(circleGroup);
      this.playAnimationForCircle(circleGroup);
    }, 1000); // Adjust delay as needed
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

    // Create an animation player for the current circle
    const player = animation.create(circle, { delay });

    // Set up an event listener for when the animation completes
    player.onDone(() => {
      // Restart the animation for the current circle
      player.play();
    });

    // Play the animation for the current circle
    player.play();
  });
  
}

  ngOnInit(): void {
    //this.playAnimation();
  }

  playAnimation(): void {
    // Get all circle elements
    const circles = this.elementRef.nativeElement.querySelectorAll('.circle');

    // Define the animation steps for each circle
    const animationSteps = [];
    for (let i = 0; i <= 100; i += 5) {
      const scale = i / 2; // Calculate the scale value from 0 to 50
      const step = animate('5s', style({ transform: `scale(${scale})` }));
      animationSteps.push(step);
    }

    // Build the animation
    const animation = this.animationBuilder.build(animationSteps);

    // Play the animation for each circle with a staggered delay
    circles.forEach((circle: any, index: number) => {
      // Calculate the delay for the current circle
      const delay = index * 2000; // Adjust delay as needed

      // Create an animation player for the current circle
      const player = animation.create(circle, { delay });

      // Set up an event listener for when the animation completes
      player.onDone(() => {
        // Restart the animation for the current circle
        player.play();
      });

      // Play the animation for the current circle
      player.play();
    });
  }
}
