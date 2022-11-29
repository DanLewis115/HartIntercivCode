import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CountdownConfig, CountdownEvent, CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  @ViewChild(CountdownComponent) counter!: CountdownComponent;
  title = 'Time Remaining';
  config: CountdownConfig = { leftTime: 3000 };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.http.get('https://localhost:5001/api/Timer').subscribe({
      next: response => {
        this.counter.config.leftTime = Number(response);
        this.counter.restart();
      },
      error: error => console.log(error),
      complete: () => console.log('Retrieved start time')
    });
  }

  handleEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.http.put('https://localhost:5001/api/Timer', null).subscribe({
        error: error => console.log(error),
        complete: () => console.log('Notified end time'),
      });
    }
  }

}
