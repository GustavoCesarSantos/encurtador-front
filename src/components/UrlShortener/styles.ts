import styled from 'styled-components';
import { colors } from '../../shared/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

export const InputUrlShortener = styled.input`
    width: 530px;
    height: 50px;
    padding: 10px;
    outline: none;
    border: 1px solid #B0B0B0;
    border-radius: 6px 0px 0px 6px;
    background-color: #FFFFFF;
    font-size: .8rem;
    font-family: "Roboto Mono", sans-serif;
    box-sizing: border-box;

    &::placeholder {
        color: #666666; 
    }
`;

export const ButtonUrlShortener = styled.button`
    cursor: pointer;
    width: 130px;
    height: 50px;
    padding: 12px 24px;
    border:none;
    border-radius: 0px 6px 6px 0px;
    outline: none;
    font-size: 1rem;
    font-family: "Roboto Mono", sans-serif;
    font-weight: bold;
    color: ${colors.buttonColorMain};
    background-color: ${colors.buttonBackgroundColorMain};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${colors.buttonBackgroundColorHoover};
    }
`;

export const ShortenedUrl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 652px;
    height: 100px;
    margin-top: 25px;
    padding: 0px 1em 0px 1em;
    outline: none;
    font-size: 24px;
    font-family: "Roboto Mono", sans-serif;
    border: 1px solid #B0B0B0;
    border-radius: 6px 0px 0px 6px;
    background-color: #FFFFFF;
    box-sizing: border-box;
`;

export const CopyButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    border: 3px dashed;
    border-radius: 10px;
    background-color: #ffffff;

    &:hover {
        color: rgba(48, 108, 199, 1);
        border-color: rgba(48, 108, 199, 1);
    }
`;
