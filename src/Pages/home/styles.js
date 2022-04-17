import styled from "styled-components";

export const HomeWrapper = styled.div`

    display: flex;
    flex-direction: column;

    height: 100vh;
    margin: 0 auto;

    & .upper{
        height: 60%;
    }
    
    & .lower{
        position: relative;
        display: flex;
        height: 40%;

        & .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 32px;
            width: calc(30% + 80px);

            & .content{
                margin: auto;
                
                & h4{
                    font-weight: 600;
                    margin-bottom: 32px;
                    letter-spacing: 2px;
                    max-width: 416px;
                }
    
                & p{
                    line-height: 24px;
                    font-size: 12px;
                    color: ${props => props.theme.darkGray};
                    max-width: 416px;
                }
            }

        }

        & img:first-child{
            width: calc(30% + 80px);
            object-fit: cover;
        }
        
        & img:last-child{
            width: calc(40% - 160px);
            object-fit: cover;
        }
    }

    @media (max-width: 1024px){
        height: auto;

        & .lower {
            flex-direction: column;
            
            & .container {
                width: 100%;
            }

            & img:first-child, img:last-child{
                width: 100%;
            }
        }



    }
`
