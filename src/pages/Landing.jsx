import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import About from '../components/About'
import CTA from '../components/CTA'
import Differentials from '../components/Differentials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import WhatsAppButton from '../components/WhatsAppButton'
import InstagramWidget from '../components/InstagramWidget'

function Landing() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (hash) {
      const el = document.getElementById(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.hash, location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function updateScrollProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    function updatePointerGlow(event) {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`)
      document.documentElement.style.setProperty('--my', `${event.clientY}px`)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('mousemove', updatePointerGlow)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('mousemove', updatePointerGlow)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function updateTheme() {
      const hour = new Date().getHours()
      const nightTime = hour >= 19 || hour < 7
      const shouldUseDark = mediaQuery.matches || nightTime
      document.documentElement.classList.toggle('dark', shouldUseDark)
    }

    updateTheme()
    const intervalId = window.setInterval(updateTheme, 60_000)
    mediaQuery.addEventListener('change', updateTheme)

    return () => {
      window.clearInterval(intervalId)
      mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [])

  useEffect(() => {
    const parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'))
    let rafId = 0

    function updateParallax() {
      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute('data-parallax-speed') ?? '0.08')
        const parent = element.parentElement

        if (!parent) return

        const rect = parent.getBoundingClientRect()
        const centerOffset = window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)
        const translateY = centerOffset * speed
        element.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`
      })

      rafId = 0
    }

    function requestParallaxUpdate() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateParallax)
      }
    }

    requestParallaxUpdate()
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true })
    window.addEventListener('resize', requestParallaxUpdate)

    return () => {
      window.removeEventListener('scroll', requestParallaxUpdate)
      window.removeEventListener('resize', requestParallaxUpdate)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden pb-20 sm:pb-0">
      <div className="scroll-progress-wrap" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
      <Navbar />
      <main className="lux-main">
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Journey />
        <Testimonials />
        <FAQ />
        <CTA />
        <div className="container-base mt-10 flex justify-center">
          <InstagramWidget />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Landing
