import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Header title={'yellow world!'}/>
      <Blogs/>
    </div>
  );
}

export default App;
