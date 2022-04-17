import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 80px;
  padding: 32px;
  margin: 32px;
  z-index: 1;

  & .iconContainer {
    display: none;
  }

  & .logoContainer {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;


    & .logo {
      height: 18px;
    }
  }

  & menu {
    margin-left: 64px;

    & ul {
      display: flex;

      color: ${(props) => props.theme.white};
      font-weight: 600;
      list-style: none;

      & li {
        position: relative;
        display: flex;
        align-items: center;
        height: 48px;
        padding: 0 32px;
        margin-right: 8px;

        &:hover {
          cursor: pointer;

          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0px;
            left: calc(50% - 16px);
            width: 32px;
            height: 3px;
            background-color: ${(props) => props.theme.white};
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-between;

    margin: 0;

    background-color: ${(props) => (props.active ? "white" : "transparent")};

    & .iconContainer {
      display: flex;
      align-items: center;
      width: 36px;
      height: 36px;
      padding: 4px;

      & img {
        width: 100%;
        object-fit: cover;
      }
    }

    .logoContainer {
        display: ${(props) => (props.active ? "none" : "flex")};
    }

    & menu {
      display: ${(props) => (props.active ? "flex" : "none")};
      margin-left: 32px;

      & ul {
        color: ${(props) => props.theme.black};
        gap: 16px;
        justify-content: space-between;

        & li{
            padding: 0;
            font-size: 10pt;

        }
      }
    }
  }
`;
