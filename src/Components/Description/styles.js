import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    height: 100%;
    animation: ${props => props.anim};

    & section {
        max-width: 416px;
    }

    & h3{
        font-size: 32px;
        margin-bottom: 32px;
        text-align: left;
    }
    
    & p{
        color: ${props => props.theme.darkGray};
        line-height: 24px;
        font-size: 12px;
    }

    & a{
        display: ${props => props.button ? 'block' : 'none' };
        width: 100%;
        padding: 32px 0;
        font-size: 12px;
        text-decoration: none;
        color: ${props => props.theme.black};
        letter-spacing: 6px;

        & img{
            margin-left: 32px;
        }

        &:hover{
            color: ${props => props.theme.darkGray};
        }
    }

    @keyframes shower {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }

        100% {
            opacity: 100%;
            transform: translateY(0);
        }
    }
`