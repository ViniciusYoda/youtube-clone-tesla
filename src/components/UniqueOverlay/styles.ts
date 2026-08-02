import styled from 'styled-components'
import { LogoSVG, BurgerSVG } from './IconSVG'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  pointer-events: none;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 50;
  min-height: 66px;
  padding: 0 clamp(20px, 4vw, 56px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(4, 7, 10, 0.48), transparent);
  color: #fff;
  pointer-events: auto;
`

export const Logo = styled(LogoSVG)`
  width: 76px;
  height: 20px;
  cursor: pointer;

  path {
    fill: #fff;
  }
`

export const Navigation = styled.nav`
  display: none;
  align-items: center;
  gap: 28px;

  span {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  @media (min-width: 850px) {
    display: flex;
  }
`

export const MenuButton = styled.button`
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: rgba(6, 10, 14, 0.2);
  cursor: pointer;
  backdrop-filter: blur(12px);
`

export const Burger = styled(BurgerSVG)`
  width: 17px;
  height: 12px;

  path {
    fill: #fff;
  }
`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  pointer-events: none;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;

      & + li {
        margin: 10px 0 0;
      }

      span {
        color: rgba(255, 255, 255, 0.62);
      }
    }
  }

  margin-bottom: 18px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`
