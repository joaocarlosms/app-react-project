import styled from 'styled-components';

export const MainContainer = styled.div `
    display: flex;
    justify-content: center;
`

export const GlassContainer = styled.div `
    display: block;
    max-width: 72vw;
    margin-top: 10vh;
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.56);
    padding: 50px;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.6px);
    -webkit-backdrop-filter: blur(11.6px);
`
export const LogoContainer = styled.div `
    display: inline-block;
    font: 30px;
    font-weight: 600;
    margin-top: -10px;

    @media screen and (max-width: 720px) {
        font-size: 22px;
    }
`

export const UlNavLinks = styled.ul `
    margin: 0;
    float: right;
    display: flex;
    list-style: none;

    li {
        display: inline-block;
        margin-left: 30px;
        font-size: 17px;
        font-weight: 300;

        @media screen and (max-width: 720px) {
            font-size: 13px;
        }
    }
`

export const ContentContainer = styled.div `
    display: flex;
    width: 100%;

    @media screen and (max-width:1075px) {
        flex-direction: column;    
    }
`

export const MainContent = styled.div `
    margin-top: 10vh;
    display: inline-block;
    padding: 20px;

    h2 {
        font-size: 35px;
        
        @media screen and (max-width: 720px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 16px;
        line-height: 23px;

        @media screen and (max-width: 720px) {
            font-size: 15px;
        }
    }

    button {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        font-size: 15px;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            border-color: #fa3419;
            background-color: #fa3419;
        }

        @media screen and (max-width: 720px) {
            font-size: 13px;
        }
    }
`

export const ImageWrapper = styled.div `
    display: flex;
    margin-top: 5vh;
    position: relative;

    img {
        max-width: 500px;
    }

    @media screen and (max-width: 720px) {
        max-width: 400px;
    }
`

export const AttrebuteContainer = styled.div `
    position: absolute;
    bottom: 20px;
    right: 0;
    font-size: 12px;
`