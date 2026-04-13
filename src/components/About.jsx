'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const taglineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 640) {
        gsap.from(leftRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })

        gsap.from(rightRef.current, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })
      } else {
        gsap.from([leftRef.current, rightRef.current], {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }

      gsap.from(taglineRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: taglineRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div
          ref={taglineRef}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
            01 — Our Story
          </span>
          <div className="flex-1 hr-gradient" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Big headline */}
          <div ref={leftRef}>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-8"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              We Built This
              <br />
              for the Ones
              <br />
              the Algorithms
              <br />
              <span className="gradient-text">Ignored.</span>
            </h2>

            {/* Visual accent */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-orange-500 rounded-full" />
              <div className="w-4 h-1 bg-orange-500/30 rounded-full" />
              <div className="w-2 h-1 bg-orange-500/15 rounded-full" />
            </div>
          </div>

          {/* Right: Story copy */}
          <div ref={rightRef} className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              DineWise was born from a single, infuriating truth: brilliant
              restaurants — with incredible food and passionate teams — were
              losing to mediocre competitors who simply knew how to play the
              digital game better.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We bridge that gap. We combine performance marketing, data
              intelligence, and deep industry knowledge to make your restaurant
              the first choice — on every platform, for every customer searching
              nearby.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We don&apos;t do generic. Every strategy we build is tailored to
              your cuisine, your location, and your growth stage — because
              what works for a cloud kitchen is not what scales a fine-dining
              brand.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🎯', text: 'Performance-first approach' },
                { icon: '📊', text: 'Data at every decision' },
                { icon: '🏆', text: 'Results you can measure' },
                { icon: '🤝', text: 'Your growth, our obsession' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="glass rounded-xl p-4 flex items-start gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-600 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
