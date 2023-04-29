export default () => {
  const buttons = document.querySelectorAll(`.form__button`);
  const counter = document.querySelector(`.game__counter`);

  let l = 0;
  let c = 0;
  class Timer {
    constructor(duration, container) {
      this.duration = duration;

      container.innerHTML = `<span>00</span>:<span>00</span>`;

      this.markup = {
        container,
        s: container.firstElementChild,
        ms: container.firstElementChild.nextElementSibling
      };
    }

    start() {
      this.startTime = Date.now();
      this.draw();
    }

    draw() {
      const pastTime = Date.now() - this.startTime;

      if (pastTime >= this.duration) {
        requestAnimationFrame(() => {
          this.setValue(this.duration);
        });
      } else {
        requestAnimationFrame(() => {
          this.setValue(pastTime);
          this.draw();
        });
      }
    }

    setValue(ms = 0) {
      const time = new Date(ms);

      if (l === time.getSeconds()) {
        c++;
      } else {
        console.log(l, c);
        l = time.getSeconds();
        c = 0;
      }

      const data = [
        time.getSeconds(),
        time.getMilliseconds()
      ]
        .map((v) => String(v).padStart(2, `0`).slice(0, 2));

      this.markup.s.textContent = data[0];
      this.markup.ms.textContent = data[1];
    }
  }

  const timer = new Timer(5000, counter);

  buttons.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      timer.start();
    });
  });
};
