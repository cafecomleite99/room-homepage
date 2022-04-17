import styled from "styled-components";

export const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;

  & > .image-carousel {
    display: flex;
    position: relative;
    overflow: hidden;
    width: 60%;

    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(36, 36, 38,50%), transparent);
    }

    & > .content {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      left: ${(props) => `-${props.position}%`};

      transition: left 300ms ease-in-out;
      
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        flex: none;
      }
    }

  }

  & > .description {
    position: relative;
    width: 40%;

    & > .buttons {
      position: absolute;
      display: flex;

      @media (min-width: 1025px) {
          left: 0;
          bottom: 0;          
      }

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background-color: ${(props) => props.theme.black};
        padding: 26px;
        user-select: none;

        &:hover {
          background-color: ${(props) => props.theme.veryDarkGray};
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    & .image-carousel{
        height: 60vh;
        width: 100%;
    }

    & .description{
        width: 100%;


        & .buttons{
            top: -80px;
            right: 0;
    
            & div:hover{
              background-color:${(props) => props.theme.black};
            }
        }
    }

  }
`;
