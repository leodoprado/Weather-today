import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    background: #433477;
`

export const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    animation: flipHeader 2s;

    @keyframes flipHeader {
        from {
            transform: rotateX(90deg);
        }
        to {
            transform: rotateX(0deg);
        }
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 25px;
    font-weight: 700;
    color: #cfcfcf;
`

export const ContainerInput = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);

    input {
        background-color: transparent;
        border: 0;
        width: 400px;
        font-size: 25px;
        color: #cfcfcf;
        outline: none;
        margin-right: 8px;
    }

    button {
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.5s;
    }

    button:hover {
        transform: scale(1.2);
    }
`

export const ContainerContentWeather = styled.div`
    font-size: 30px;
    color: #cfcfcf;
`