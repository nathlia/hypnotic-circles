import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  finalDate!: string;
  countdown!: string;
  private timerSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.updateCountdown(); // Update immediately
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  updateCountdown(): void {
    // Get the target time in GMT-3 (Brazil time)
    const targetTime = new Date('2024-04-17T12:00:00-03:00');
  
    // Calculate the time difference
    const currentTime = new Date();
    const timeDifference = targetTime.getTime() - currentTime.getTime();
  
    // Convert time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // Format the countdown string
    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

       // Format the final date string
       const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
       this.finalDate = targetTime.toLocaleDateString('en-US', options);
  }
}
