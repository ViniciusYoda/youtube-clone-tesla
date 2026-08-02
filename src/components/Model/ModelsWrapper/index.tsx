import React, { useCallback, useRef, useState } from 'react'

import ModelsContext, { CarModel } from '../ModelsContext'
import ModelOverlay from '../ModelOverlay'

import { Container, OverlaysRoot } from './styles'

interface Props {
  children?: React.ReactNode
}

const ModelsWrapper: React.FC<Props> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => {
      const modelIndex = state.findIndex(item => item.modelName === model.modelName)

      if (modelIndex === -1) return [...state, model]

      const nextState = [...state]
      nextState[modelIndex] = model
      return nextState
    })
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state =>
      state.filter(model => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find(item => item.modelName === modelName) || null
    },
    [registeredModels]
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper
