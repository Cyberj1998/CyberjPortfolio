import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero'
import Proyectos from './Components/Proyectos'
import DeveloperSection from './Components/DeveloperSection';
import Contact from './Components/Contact'
import Email from './Components/Email';
import BentoGrid from './Components/BentoGrid';


function App() {
  
  const [loading, setLoading] = useState(true)
  const[lenguage,setLenguage]=useState('english')

  return (
    <div className="App bg-[#212121]">
          <>
            <Header setLenguage={setLenguage} lenguage={lenguage} />
            <Hero lenguage={lenguage} />
            <Proyectos lenguage={lenguage} />
            <BentoGrid lenguage={lenguage} />
            <DeveloperSection lenguage={lenguage} loading={loading} setLoading={setLoading} />
            <Email />
            <Contact />
          </>
    </div>
  );
}

export default App;
