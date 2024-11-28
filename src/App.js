import './App.css';
import { useState } from 'react';
import Hero from './Components/Hero'
import Proyectos from './Components/Proyectos'
import DeveloperSection from './Components/DeveloperSection';
import Contact from './Components/Contact'
import Loader from './Components/Loader';
import Email from './Components/Email';


function App() {

  const [loading, setLoading] = useState(true)


  return (
    <div className="App">
      {
        loading ? (
          <Loader />
        )
        :
        (
          <>
          <Hero />
          <Proyectos />
          <DeveloperSection loading={loading} setLoading={setLoading} />
          <Email />
          <Contact />
          </>
        )
      }
    </div>
  );
}

export default App;
