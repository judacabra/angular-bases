import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})

export class CounterComponent {
  constructor() { }

  ngOnInit(): void {
    this.hideMinusButton();
  }

  public counter: number = 0;

  /**
   * increaseBy
   */
  public increaseBy( value: number ): void {
    this.counter += value;
    this.switchShowButton();
  }

  /**
   * hideMinusButton
   */
  public hideMinusButton(): void {
    document.getElementById('minus')!.style.display = 'None';
    document.getElementById('reset')!.style.display = 'None';
  }

  /**
   * showMinusButton
   */
  public showMinusButton(): void {
    document.getElementById('minus')!.style.display = 'Inline-block';
    document.getElementById('reset')!.style.display = 'Inline-block';
  }

  /**
   * reset
   */
  public resetCounter(): void {
    this.counter = 0 ;
    this.switchShowButton();
  }

  /**
   * switchShowButton
   */
  public switchShowButton(): void {
    if (this.counter <= 0 ){
      this.hideMinusButton();
    } else {
      this.showMinusButton();
    }
  }
}
