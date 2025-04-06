import HeaderTemplate from './templates/header/header'
import FooterTemplate from './templates/footer/footer'
import RootRouter from './navigation/route'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderTemplate />
      <RootRouter />
      <FooterTemplate />
    </div>
  );
}

export default App;
