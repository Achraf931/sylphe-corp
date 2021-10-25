import { gsap } from 'gsap/dist/gsap'
import { lerp } from "./utils";

export default class Cursor {
  constructor(el, position, mouse_position) {
    // Varibles
    this.Cursor = el;
    let pos = position;
    let mouse = mouse_position;
    this.Cursor.style.opacity = 0;
    this.Item = document.querySelectorAll(".mouse-hover");
    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 1 },
      y: { previous: 0, current: 0, amt: 1 },
    };

    const speed = 0.35;
    gsap.set(this.Cursor, {xPercent: -50, yPercent: -50});
    const xSet = gsap.quickSetter(this.Cursor, "x", "px");
    const ySet = gsap.quickSetter(this.Cursor, "y", "px");

    window.addEventListener("mousemove", e => {
      this.cursorConfigs.x.current = mouse.x = e.x;
      this.cursorConfigs.y.current = mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
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
    let text = '',
      size = 12;

    if (link.classList.contains('simple-hover')) {
      size = 24
    }
    /*else if (link.classList.contains('pen-hover')) {
      console.log(this.Cursor.children)
      text = `<svg xmlns="http://www.w3.org/2000/svg" width="26.48" height="28.801" viewBox="0 0 26.48 28.801">
                <g id="CRAYON" transform="matrix(-0.259, -0.966, 0.966, -0.259, -1299.344, 1118.55)">
                  <path id="Tracé_5560" data-name="Tracé 5560" d="M761.217,1604.911l.745,1.14a1.586,1.586,0,0,1-.461,2.2l-.107.069-.8.525a1.575,1.575,0,0,1-2.18-.459l-.75-1.147Z" transform="translate(-25.163 -40.866)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_996" data-name="Rectangle 996" width="4.244" height="1.532" transform="translate(731.663 1565.084) rotate(-33.171)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_997" data-name="Rectangle 997" width="4.244" height="24.398" transform="translate(718.316 1544.661) rotate(-33.165)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Tracé_5561" data-name="Tracé 5561" d="M716.832,1538.307a.107.107,0,0,1,.028.018l1,.8a.128.128,0,0,1-.008.208l-.67.437a.129.129,0,0,1-.2-.075l-.22-.824-.111-.41A.131.131,0,0,1,716.832,1538.307Z" transform="translate(0)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Tracé_5562" data-name="Tracé 5562" d="M718.606,1540.733l3.871,3.1-3.552,2.322-1.267-4.714-.02-.078.15-.1.669-.437Z" transform="translate(-0.608 -1.496)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
              </svg>`
    }*/
    else if (link.classList.contains('click-hover')) {
      text = 'Click'
      size = 64
    }
    else if (link.classList.contains('slide-hover')) {
      text = 'Slide'
      size = 64
    }
    else if (link.classList.contains('show-hover')) {
      text = 'Show\u000AVideo'
      size = 64
    }
    else if (link.classList.contains('scroll-hover')) {
      text = 'Scroll\u000ALeft'
      size = 64
    }
    return {text, size};
  }

  onScaleMouse() {
    let p = document.createElement('p')
    p.setAttribute('class', 'font-bold text-white cursor-text leading-3')
    this.Cursor.appendChild(p)
    // Loop through all items
    this.Item.forEach(link => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(":hover")) {
        this.ScaleCursor(this.Cursor, this.checkMouseText(link).size, this.Cursor.children[0], this.checkMouseText(link).text);
      }
      //On mouse enter scale the media-cursor to .8
      link.addEventListener("mouseover", () => {
        this.ScaleCursor(this.Cursor, this.checkMouseText(link).size, this.Cursor.children[0], this.checkMouseText(link).text);
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
      .fromTo(el, {
        minHeight: '12px',
        minWidth: '12px'
      },{
      duration: 0.2,
      minHeight: `${size}px`,
      minWidth: `${size}px`,
    })
      .to(textElem,
        {
        innerHTML: text,
        display: 'block',
        duration: 0.1
      }, '-=0.1');
  }

  UnScaleCursor(el, size, textElem) {
    this.tl
      .to(textElem,
        {
        innerHTML: '',
        display: 'none',
        duration: 0.1,
      })
      .to(el, {
      duration: 0.2,
        minHeight: `${size}px`,
        minWidth: `${size}px`
    });
  }

  render(mouse = this.Cursor) {
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
