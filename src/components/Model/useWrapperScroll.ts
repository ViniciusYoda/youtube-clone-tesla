import { useContext, useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

import ModelsContext from './ModelsContext'

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext)

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (wrapper) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = wrapper
        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollYProgress.set(fullScroll > 0 ? scrollTop / fullScroll : 0)
      }

      updateScrollValue()
      wrapper.addEventListener('scroll', updateScrollValue, { passive: true })

      return () => wrapper.removeEventListener('scroll', updateScrollValue)
    }
  }, [wrapperRef, scrollY, scrollYProgress])

  return { scrollY, scrollYProgress }
}
