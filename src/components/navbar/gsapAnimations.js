import { gsap } from 'gsap';

let tl = null;

function timeLine(body) {
  tl = gsap.timeline({
    paused: true,
    onStart: () => {
      body.classList.add('noscroll');
    },
    onReverseComplete: () => {
      body.classList.remove('noscroll');
    },
  });

  tl.set('.menu__images__canvas', { autoAlpha: 0 })
    .to('.menu__informations', {
      scaleX: 1,
      duration: 1.2,
      ease: 'Expo.easeInOut',
      transformOrigin: 'left center',
    })
    .fromTo(
      '.menu__images',
      {
        width: 0,
      },
      {
        width: '40%',
        duration: 1.5,
        ease: 'Expo.easeInOut',
        transformOrigin: 'left center',
      }
    )
    .from(
      '.menu__links ul li',
      {
        autoAlpha: 0,
        ease: 'Expo.easeInOut',
        duration: 2,
        stagger: 0.1,
        y: 20,
      },
      '<-.3'
    )
    .to('.menu__images__canvas', { autoAlpha: 1, duration: 1 }, '>-1');
  //prevent from seeing nav image on loading page
  gsap.set('.menu', { autoAlpha: 1 });
  return tl;
}

export default timeLine;
