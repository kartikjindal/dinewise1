import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const isMobile = () =>
  typeof window !== 'undefined' && window.innerWidth < 640

/**
 * Fade up a single element or NodeList on scroll
 */
export function fadeUp(target, vars = {}) {
  if (isMobile()) return

  const defaults = {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  }

  return gsap.from(target, { ...defaults, ...vars })
}

/**
 * Stagger children on scroll
 */
export function staggerFadeUp(parent, childSelector, vars = {}) {
  if (isMobile()) return

  const children = parent.querySelectorAll(childSelector)
  if (!children.length) return

  return gsap.from(children, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...vars,
  })
}

/**
 * Split text reveal: wraps words in overflow:hidden divs and slides up
 */
export function splitTextReveal(element, vars = {}) {
  if (!element) return

  const text = element.textContent
  const words = text.split(' ')

  element.innerHTML = words
    .map(
      (w) =>
        `<span class="word-wrapper"><span class="word-inner" style="display:inline-block">${w}&nbsp;</span></span>`
    )
    .join('')

  const inners = element.querySelectorAll('.word-inner')

  return gsap.from(inners, {
    y: '105%',
    opacity: 0,
    duration: 0.9,
    ease: 'power4.out',
    stagger: 0.05,
    delay: vars.delay || 0,
    ...vars,
  })
}

/**
 * Parallax depth effect
 */
export function parallax(element, yAmount = 80) {
  if (isMobile()) return

  return gsap.to(element, {
    y: yAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

/**
 * Animated counter
 */
export function animateCounter(element, target, suffix = '') {
  const obj = { val: 0 }

  return gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      element.textContent =
        Math.round(obj.val).toLocaleString('en-GB') + suffix
    },
  })
}
