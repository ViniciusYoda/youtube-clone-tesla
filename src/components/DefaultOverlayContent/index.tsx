import React from 'react'

import { Container, Heading, Buttons } from './styles'

interface Props {
    label: string
    eyebrow: string
    description: string
    specs: string[]
}

const DefaultOverlayContent: React.FC<Props> = ({
    label,
    eyebrow,
    description,
    specs
}) => {
    return (
        <Container>
            <Heading>
                <span>{eyebrow}</span>
                <h1>{label}</h1>
                <p>{description}</p>
                <ul>
                    {specs.map(spec => <li key={spec}>{spec}</li>)}
                </ul>
            </Heading>

            <Buttons>
                <button type="button">Configurar</button>
                <button type="button" className="glass">Ver disponibilidade</button>
            </Buttons>
        </Container>
    )
}

export default DefaultOverlayContent
