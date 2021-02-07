/*CSS*/

import './css/main.css';
import './css/main.css.map';

/* Components*/ 

import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';


function App() {
  return (
    <div className="App">
      <Header />
    <section className="main">
        <Sidebar />
        <Content />
    </section>
    </div>
  );
}

export default App;
