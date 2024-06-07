// App.jsx
import Sidebar from "./components/sidebar";
import MainContent from "./components/MainContent";
import Footer from './components/Footer';
import './styles/components/app.sass';

function App() {
  return (
    <div>
      <div id="portfolio">
        <h1>João Salles</h1>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
