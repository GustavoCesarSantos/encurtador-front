import styled from 'styled-components';
import { colors } from '../../shared/colors';

export const RootContainer = styled.div`
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Roboto Mono", sans-serif;
    background-color: ${colors.backgroundMain};
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainTitle = styled.h1`
    font-size: 7rem;
    font-weight: bold;
    text-align: center;
    color: ${colors.logoMain};
`;

export const MainSubtitle = styled.span`
  color: ${colors.logoSecondary};
  font-size: 1rem;
  font-weight: 500;
`;
