import styled from 'styled-components';

import { colors } from '../../../shared/colors';

export const Container = styled.div`
  height: 100%;
  min-height: 100%;
  font-family: "Roboto Mono", sans-serif;
  background-color: ${colors.backgroundMain};
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid #B0B0B0;
  padding-top: 24px;
`;

export const Title = styled.h1`
  color: ${colors.logoMain};
  font-weight: bold;
  font-size: 2rem;
  margin: 0px 0px 15px 15px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 24px;
`;

export const Th = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #B0B0B0;
  color: ${colors.headerBackgroundColorMain};
`;

export const Td = styled.td`
  padding: 25px 0px 15px 15px;
  border-bottom: 1px solid #B0B0B0;
  color: ${(props) => props.theme.text};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.text};
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${(props) => props.theme.text};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #ff4444;
`;
