import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: min(100%, 1180px);
  padding: 0 24px;
`

export const Heading = styled.div`
  margin-top: clamp(108px, 16vh, 170px);
  width: 100%;
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 22px rgba(0, 0, 0, 0.35);

  > span {
    display: inline-block;
    margin-bottom: 9px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0.78;
  }

  > h1 {
    font-size: clamp(46px, 7vw, 82px);
    font-weight: 500;
    letter-spacing: -0.055em;
    line-height: 0.98;
  }

  > p {
    margin-top: 14px;
    font-weight: normal;
    font-size: clamp(14px, 1.6vw, 17px);
    line-height: 1.5;
    opacity: 0.86;
  }

  > ul {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 18px;

    li {
      list-style: none;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;

      & + li::before {
        content: '';
        display: inline-block;
        width: 3px;
        height: 3px;
        margin: 0 24px 3px 0;
        border-radius: 50%;
        background: currentColor;
        opacity: 0.55;
      }
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
  margin-bottom: clamp(54px, 9vh, 92px);

  > button {
    min-width: min(100%, 250px);
    padding: 14px 30px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.94);
    color: #0a0d11;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 180ms ease, background 180ms ease;

    &:hover {
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 4px;
    }

    &.glass {
      border-color: rgba(255, 255, 255, 0.46);
      background: rgba(11, 17, 24, 0.32);
      color: #fff;
      backdrop-filter: blur(14px);

      &:hover {
        background: rgba(11, 17, 24, 0.55);
      }
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
