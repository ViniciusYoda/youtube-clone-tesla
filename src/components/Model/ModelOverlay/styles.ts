import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  min-height: 620px;
  margin-top: -100vh;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`
