import styled, { css } from "styled-components"

/*
  Styles for homepage
*/

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`

export const Card = styled.div`
  width: 1096px;
  max-width: 1096px;
  margin-bottom: auto;
  margin-top: 50px;

  @media (max-width: 1127px) {
    flex-direction: column-reverse;
    padding: 0px;
    max-width: 600px;
  }

  @media (max-width: 685px) {
    max-width: 100%;
    .border {
      display: none;
    }
  }
`

export const BioCard = styled.div`
  padding: 80px;
  display: flex;
  border-radius: 15px;
  position: relative;

  // photo outter
  & > :nth-child(3) > :nth-child(1) {
    border-radius: 10px;
  }

  @media (max-width: 485px) {
    padding: 20px;
  }
`

export const getVerticalBorderCss = (position: "left" | "right") => css`
  content: "";
  top: 0px;
  display: block;
  position: absolute;
  height: 50px;
  width: 5px;
  ${position === "left" &&
  css`
    left: 0px;
  `}
  ${position === "right" &&
  css`
    right: 0px;
  `}
`

export const getHorizontalBorderCss = (position: "left" | "right") => css`
  content: "";
  top: 0px;
  display: block;
  position: absolute;
  height: 5px;
  width: 50px;
  ${position === "left" &&
  css`
    left: 0px;
  `}

  ${position === "right" &&
  css`
    right: 0px;
  `}
`
export const BioBorders = styled.div<{ type: "top-left" | "top-right" }>`
  &::before,
  &::after {
    background: ${(p) => p.theme.border};
  }

  @media (max-width: 685px) {
    display: none;
  }

  ${(p) =>
    p.type === "top-left" &&
    css`
      &::before {
        ${getVerticalBorderCss("left")}
      }

      &::after {
        ${getHorizontalBorderCss("left")}
      }
    `}

  ${(p) =>
    p.type === "top-right" &&
    css`
      &::before {
        ${getVerticalBorderCss("right")}
      }

      &::after {
        ${getHorizontalBorderCss("right")}
      }
    `}
`

export const Posts = styled.div`
  padding: 0 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 20px;
  }

  @media (max-width: 485px) {
    padding: 20px;
  }
`

export const PhotoContainer = styled.div`
  width: 320px;
  height: 320px;
  margin-right: 80px;
  align-self: center;
  border-radius: 10px;
  .photo {
    width: 320px;
    height: 320px;
    transform: scale(1.2);
    border-radius: 10px;
    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 1127px) {
    display: none;
  }
`

export const Bio = styled.div`
  display: flex;
  max-width: 390px;
  flex-direction: column;
  margin-right: 80px;
  margin-top: auto;
  width: auto;
  @media (max-width: 1127px) {
    margin-right: 0;
    margin: 0 auto;
  }

  @media (max-width: 485px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const Name = styled.div`
  position: relative;
  h1 {
    margin-top: 0;
    top: 0px;
    left: 0px;
    color: ${(p) => p.theme.title.color1};
    display: block;
    font-size: 4rem;
    position: relative;
  }

  h1:nth-child(2) {
    top: 0;
    left: 5px;
    color: ${(p) => p.theme.title.color2};
    position: absolute;
  }

  h1:nth-child(3) {
    top: 5px;
    left: 0px;
    color: ${(p) => p.theme.title.color3};
    position: absolute;
  }

  h1:nth-child(4) {
    top: -5px;
    left: 0px;
    color: ${(p) => p.theme.title.color4};
    position: absolute;
  }

  @media (max-width: 1127px) {
    h1 {
      text-align: center;
    }

    h1:nth-child(1) {
      opacity: 0;
    }
  }

  @media (max-width: 485px) {
    position: relative;
    margin: 0 auto;
    h1 {
      top: 0px;
      left: 0px;
      display: block;
      font-size: 2rem !important;
    }

    h1:nth-child(2) {
      top: 0;
      left: 3px !important;
      position: absolute;
    }

    h1:nth-child(3) {
      top: 3px !important;
      left: 0px;
      position: absolute;
    }

    h1:nth-child(4) {
      top: -3px !important;
      left: 0px;
      position: absolute;
    }
  }
`

export const SemiTitle = styled.h2`
  color: ${(p) => p.theme.text1};
  margin: 0;
  @media (max-width: 1127px) {
    text-align: center;
  }

  @media (max-width: 1127px) {
    text-align: center;
  }
`

export const BioDescription = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(p) => p.theme.text1};
`

export const SocialMedia = styled.div`
  & > a {
    color: ${(p) => p.theme.text1};
    margin-right: 10px;
  }
`
