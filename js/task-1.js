// Плагин это класс CountdownTimer, экземпляр которого создает
// новый таймер с настройками.

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(`${selector}`);
    this.days = this.selector.querySelector(`span[data-value="days"]`);
    this.hours = this.selector.querySelector(`span[data-value="hours"]`);
    this.mins = this.selector.querySelector(`span[data-value="mins"]`);
    this.secs = this.selector.querySelector(`span[data-value="secs"]`);
    this.timer();
    this.fistTime();
  }
  fistTime() {
    const timeOther = this.targetDate.getTime() - Date.now();
    if (timeOther <= 0) {
      this.lasttime(0);
    }
  }

  lasttime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.displaytimer(days, hours, mins, secs);
  }

  displaytimer(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
  timer() {
    const timerId = setInterval(() => {
      const timeOther = this.targetDate.getTime() - Date.now();
      // console.log(222);
      if (timeOther <= 0) {
        clearInterval(timerId);
        this.lasttime(0);
        // console.log(111)
        return;
      }
      this.lasttime(timeOther);
    }, 1000);
  }
}
const counter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 3, 10, 17, 2),
});