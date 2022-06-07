import styled from 'styled-components';
import UrlShortener from './components/UrlShortener/UrlShortener';

function App() {
    return (
        <Div>
            <MainTitle>Curtinhas</MainTitle>
            <UrlShortener />
        </Div>
    );
}

const Div = styled.div`
    height: 100vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto Mono", sans-serif;
    background-color: #d9d9d9;
`;

const MainTitle = styled.h1`
    margin-bottom: 175px;
    font-size: 96px;
    font-weight: bold;
    text-align: center
`;

export default App;
