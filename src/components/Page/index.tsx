import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const models = [
    {
        modelName: 'Model S',
        eyebrow: 'Performance elétrica',
        description: 'Potência silenciosa para viagens sem limites.',
        image: '/images/cars/model-s.jpg',
        imagePosition: 'center 62%',
        specs: ['Até 634 km', '0–100 em 3,2 s']
    },
    {
        modelName: 'Model 3',
        eyebrow: 'Feito para todos os dias',
        description: 'Tecnologia intuitiva, autonomia e design essencial.',
        image: '/images/cars/model-3.jpg',
        imagePosition: 'center 58%',
        specs: ['Até 629 km', 'Tração integral']
    },
    {
        modelName: 'Model X',
        eyebrow: 'Espaço extraordinário',
        description: 'Conforto premium para até sete passageiros.',
        image: '/images/cars/model-x.jpg',
        imagePosition: 'center 52%',
        specs: ['Até 576 km', 'Portas Falcon Wing']
    },
    {
        modelName: 'Model Y',
        eyebrow: 'Versatilidade elevada',
        description: 'Um SUV elétrico pronto para qualquer caminho.',
        image: '/images/cars/model-y.jpg',
        imagePosition: 'center 55%',
        specs: ['Até 600 km', '2.138 L de carga']
    }
]

const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {models.map(model => (
                        <ModelSection
                            key={model.modelName}
                            modelName={model.modelName}
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(5, 8, 12, 0.42) 0%, rgba(5, 8, 12, 0.04) 42%, rgba(5, 8, 12, 0.68) 100%), url(${model.image})`,
                                backgroundPosition: model.imagePosition
                            }}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={model.modelName}
                                    eyebrow={model.eyebrow}
                                    description={model.description}
                                    specs={model.specs}
                                />
                            }
                        />
                    ))}
                </div>

                <Spacer />

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}

export default Page
