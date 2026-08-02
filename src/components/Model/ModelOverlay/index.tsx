import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useTransform } from 'framer-motion'

import useWrapperScroll from '../useWrapperScroll'
import { CarModel } from '../ModelsContext'

import { Container } from './styles'

interface Props {
  model: CarModel
  children?: React.ReactNode
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll()

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: model.sectionRef.current?.offsetHeight ?? 0
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    let animationFrameId: number | undefined

    function onResize() {
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = window.requestAnimationFrame(() => {
        setDimensions(getSectionDimensions())
      })
    }

    setDimensions(getSectionDimensions())
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [getSectionDimensions])

  const sectionScrollProgress = useTransform(
    scrollY,
    y =>
      dimensions.offsetHeight > 0
        ? (y - dimensions.offsetTop) / dimensions.offsetHeight
        : 0
  )
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )
  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none'
  )

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>
}

export default ModelOverlay
