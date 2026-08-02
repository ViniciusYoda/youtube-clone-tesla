import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import {
    Container,
    Header,
    Logo,
    Navigation,
    MenuButton,
    Burger,
    Footer
} from './styles'

const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll()  

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

    return (
        <Container>
            <Header>
                <Logo aria-label="Página inicial" />
                <Navigation aria-label="Navegação principal">
                    <span>Model S</span>
                    <span>Model 3</span>
                    <span>Model X</span>
                    <span>Model Y</span>
                </Navigation>
                <MenuButton type="button" aria-label="Abrir menu">
                    <Burger />
                </MenuButton>
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <span>Electric motion</span>
                    </li>
                    <li>
                        <span>Design concept</span>
                    </li>
                    <li>
                        <span>React + Framer Motion</span>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}   

export default UniqueOverlay
