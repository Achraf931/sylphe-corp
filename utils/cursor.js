import { gsap } from 'gsap/dist/gsap'
import { lerp } from "./utils";

// Grab the mouse position and set it to mouse state
let pos = { x: 0, y: 0 };
let mouse = { x: 0, y: 0 };
if (process.client) {
  pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  mouse = { x: pos.x, y: pos.y };
}

export default class Cursor {
  constructor(el) {
    // Varibles
    this.Cursor = el;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll(".mouse-hover");
    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 1 },
      y: { previous: 0, current: 0, amt: 1 },
    };

    const speed = 0.35;
    gsap.set(this.Cursor, {xPercent: -this.Cursor.offsetWidth, yPercent: -this.Cursor.offsetHeight});
    const xSet = gsap.quickSetter(this.Cursor, "x", "px");
    const ySet = gsap.quickSetter(this.Cursor, "y", "px");

    window.addEventListener("mousemove", e => {
      this.cursorConfigs.x.current = mouse.x = e.x - this.Cursor.offsetWidth / 2;
      this.cursorConfigs.y.current = mouse.y = e.y - this.Cursor.offsetHeight / 2;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet((mouse.x - pos.x) + this.Cursor.offsetWidth);
      ySet((mouse.y - pos.y) + this.Cursor.offsetHeight);
    });

    this.tl = gsap.timeline({ease: 'power3.out'})

    this.onMouseMoveEv = () => {
      // Set cursor opacity to 1 when hovered on screen
      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      // Execute scale function
      this.onScaleMouse();

      // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
      requestAnimationFrame(() => this.render());
      // Clean up function
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    // Scale cursor animation
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }

  checkMouseText(link) {
    let text = '';

    if (link.classList.contains('click-hover')) {
      text = 'Click'
    }
    else if (link.classList.contains('slide-hover')) {
      text = 'Slide'
    }
    else if (link.classList.contains('show-hover')) {
      text = 'Show\u000AVideo'
    }
    else if (link.classList.contains('scroll-hover')) {
      text = 'Scroll\u000ALeft'
    }
    return text;
  }

  onScaleMouse() {
    let p = document.createElement('p')
    p.setAttribute('class', 'font-bold text-white cursor-text leading-3')
    this.Cursor.appendChild(p)
    // Loop through all items
    this.Item.forEach(link => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(":hover")) {
        this.ScaleCursor(this.Cursor, 64, this.Cursor.children[0], this.checkMouseText(link));
      }
      //On mouse enter scale the media-cursor to .8
      link.addEventListener("mouseenter", () => {
        this.ScaleCursor(this.Cursor, 64, this.Cursor.children[0], this.checkMouseText(link));
      });
      //On mouse enter scale the media-cursor to 0
      link.addEventListener("mouseleave", () => {
        this.UnScaleCursor(this.Cursor, 12, this.Cursor.children[0]);
      });
    })

    // Loop through all items
    /*this.Item.forEach(link => {
      /!*!// If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(":hover")) {
        this.ScaleCursor(this.Cursor, 64, this.Cursor.children[0], 'Test');
      }
      //On mouse enter scale the media-cursor to .8
      link.addEventListener("mouseenter", () => {
        this.ScaleCursor(this.Cursor, 64, this.Cursor.children[0], 'Test');
      });
      //On mouse enter scale the media-cursor to 0
      link.addEventListener("mouseleave", () => {
        this.UnScaleCursor(this.Cursor, 12, this.Cursor.children[0], '');
      });*!/
      /!*!//Hover on a tag to expand to 1.2
      link.children[1].addEventListener("mouseenter", () => {
        this.Cursor.classList.add("media-blend");
        this.ScaleCursor(this.Cursor.children[0], 1.2);
      });
      // Bring scale back down .8
      link.children[1].addEventListener("mouseleave", () => {
        this.Cursor.classList.remove("media-blend");
        this.ScaleCursor(this.Cursor.children[0], 0.8);
      });*!/
    });*/
  }

  ScaleCursor(el, size, textElem, text) {
    this.tl
      .play()
      .to(el, {
      duration: 0.4,
      minHeight: `${size}px`,
      minWidth: `${size}px`,
    })
      .to(textElem,
        {
        innerHTML: text,
        display: 'block',
        duration: 0.2,
          done: true
      }, '-=0.2');
  }

  UnScaleCursor(el, size, textElem) {
    this.tl
      .to(textElem,
        {
        innerHTML: '',
        display: 'none',
        duration: 0.2,
      })
      .to(el, {
      duration: 0.4,
      minHeight: `${size}px`,
      minWidth: `${size}px`,
        done: true
    });
  }

  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;

    // lerp
    for (const key in this.cursorConfigs) {
      // key will be x & y
      // WTF IS LERP?
      // Lerp - A lerp returns the value between two numbers at a specified, decimal midpoint:
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      );
    }
    // Setting the cursor x and y to our cursor html element
    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
    // RAF
    requestAnimationFrame(() => this.render());
  }
}
