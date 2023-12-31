import './App.css';
import Header from "./Header.png"
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={Header} className="App-logo img-fluid" alt="header"/>
        </header>
        <main>
          <Dictionary defaultKeyword="hello"/>
        </main>
        <footer className="App-footer"><small>Coded by Julia Julian and <a href="https://github.com/Jdalyjulian/dictionary-project" target="_blank" rel="noreferrer" >open-sourced</a></small></footer>
      </div>
    </div>
  );
}