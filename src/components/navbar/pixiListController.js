import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';

export default class PortfolioListController {
  constructor(navStatus) {
    /**
     * @type {{navigation: string, states: {navigationSlideUp: string, navigationScrolled: string, navigationFixed: string}}}
     */

    this.DOM = {
      portfolio: '.js-portfolio',
      portfolioItem: '.js-portfolio-item',
      portfolioPreviewList: '.js-portfolio-preview-list',
      portfolioPreviewItem: '.js-portfolio-preview-item',
      portfolioCanvas: '.js-portfolio-canvas',
    };
    this.navStatus = navStatus;
    /**
     *
     * @type {Element}
     */
    this.portfolio = document.querySelector(this.DOM.portfolio);

    /**
     *
     * @type {NodeListOf<Element>}
     */
    this.portfolioItems = document.querySelectorAll(this.DOM.portfolioItem);

    /**
     *
     * @type {Element}
     */
    this.portfolioPreviewList = document.querySelector(
      this.DOM.portfolioPreviewList
    );

    /**
     *
     * @type {NodeListOf<Element>}
     */
    this.portfolioPreviewItems = document.querySelectorAll(
      this.DOM.portfolioPreviewItem
    );

    /**
     *
     * @type {Element}
     */
    this.portfolioCanvas = document.querySelector(this.DOM.portfolioCanvas);

    this.app = null;

    this.displacementTimeline = null;
  }
  updateNavStatus(navStatus) {
    this.navStatus = navStatus;
  }

  init() {
    if (this.portfolio !== null) {
      this.portfolioEvents();
      this.portfolioController();
    } else {
      console.error(`${this.DOM.portfolio} does not exist in the DOM!`);
    }
  }

  portfolioEvents() {
    for (let i = 0; i < this.portfolioItems.length; i++) {
      this.portfolioItems[i].addEventListener('mouseenter', () => {
        this.portfolioItemMouseenter(i + 1); 
      });

      this.portfolioItems[i].addEventListener('mouseleave', () => {
        this.portfolioItemMouseleave();
      });
    }
  }

  portfolioController() {
    const imageContainer = document.querySelector('.menu__images__canvas');
    let canvasContainer = imageContainer.getBoundingClientRect();
    const canvasWidth = window.innerWidth - canvasContainer.x;

    const canvasHeight = canvasContainer.height;

    this.app = new PIXI.Application({
      width: canvasWidth,
      height: canvasHeight,
      resolution: window.devicePixelRatio,
      transparent: true,
    });

    this.portfolioCanvas.appendChild(this.app.view);

    const displacementMapFile = this.portfolioCanvas.getAttribute(
      'data-displacement-map'
    );

    const displacementMap = new PIXI.Sprite.from(displacementMapFile);

    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementMap
    );

    displacementMap.name = displacementMapFile;
    displacementMap.anchor.set(0.5);
    displacementMap.scale.set(1);
    displacementMap.width = canvasWidth;
    displacementMap.height = canvasHeight;
    displacementMap.position.set(canvasWidth / 2, canvasHeight / 2);

    this.app.stage.filterArea = this.app.screen;
    this.app.stage.filters = [displacementFilter];

    this.app.stage.addChild(displacementMap);

    for (let i = 0; i < this.portfolioItems.length; i++) {
      const imageFile = this.portfolioPreviewItems[i].getAttribute(
        'data-portfolio-preview'
      );

      const texture = new PIXI.Texture.from(imageFile);

      const image = new PIXI.Sprite(texture);

      image.name = imageFile;
      image.alpha = 0;
      image.width = canvasWidth;
      image.height = canvasHeight;

      this.app.stage.addChild(image);
    }

    this.displacementTimeline = gsap.timeline({
      paused: true,
    });

    const canvasElement = this.portfolioCanvas.querySelector('canvas');

    this.displacementTimeline
      .add('start')
      .fromTo(
        canvasElement,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.4,
          autoAlpha: 1,
          ease: 'power3.out',
        },
        'start'
      )
      .fromTo(
        canvasElement,
        {
          scale: 1.5,
        },
        {
          duration: 0.8,
          scale: 1,
          ease: 'power3.out',
        },
        'start'
      )
      .fromTo(
        displacementFilter.scale,
        {
          x: 150,
          y: 150,
        },
        {
          duration: 1.6,
          x: 0,
          y: 0,
          ease: 'power3.out',
          onComplete: () => {},
        },
        'start'
      );
  }

  portfolioItemMouseenter(index) {
    if (this.navStatus === true) {
      gsap.to(this.app.stage.children[index], {
        duration: 0.6,
        alpha: 1,
        ease: 'power3.out',
        onStart: () => {
          this.displacementTimeline.restart().pause();
          this.displacementTimeline.play();
        },
      });
    }
  }

  portfolioItemMouseleave() {
    gsap.to(this.app.stage.children, {
      duration: 0.4,
      alpha: 0,
      ease: 'power3.out',
    });
  }
}
