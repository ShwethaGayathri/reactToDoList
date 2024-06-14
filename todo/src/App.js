import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TODOHero from './components/TODOHero';
import Form from './components/Form';
import TODOList from './components/TODOList';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <TODOHero todos_completed={0} tot_todos={0}/>
      <Form/>
      <TODOList todos={[]} />
    </div>
  );
}

export default App;
