import UrlShortener from '../UrlShortener';
import { MainSubtitle, MainTitle, RootContainer } from './styles';

const App = () => {
    return (
        <RootContainer>
            <MainTitle>5Bits</MainTitle>
            <MainSubtitle>Encurte, compartilhe, acompanhe</MainSubtitle>
            <UrlShortener />
        </RootContainer>
    );
};

export default App;
