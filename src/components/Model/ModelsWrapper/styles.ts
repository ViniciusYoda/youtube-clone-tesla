import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const OverlaysRoot = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`
