import { BrowserRouter } from 'react-router-dom';
import Header from './common/Header';
import Routers from './Routers/Routers';
import './App.css';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Container>
          <Routers />
        </Container>
     </BrowserRouter>
    </div>
  );
}

export default App;
