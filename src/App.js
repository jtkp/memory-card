import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;

// header div
  // title/logo img
// content div
  // scores div
    // current score div
      // 'Current score: {scoreCurr}'
    // best score div
      // 'Best score: {scoreBest}'
  // cards div
    // cardx12 div
      // image img
      // caption text
// footer
  // text
