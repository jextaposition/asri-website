import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/font' element={<Fonts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Fonts() {
  return (
    <di>
      <h2 className='apoc'>Apoc</h2>
      <h2 className='buda-light'>Buda-Light</h2>
      <h2 className='bw'>Bw Gradual DEMO ExtraBold</h2>
      <h2 className='carlton'>Carlton Std Regular</h2>
      <h2 className='cicle-italic'>Cicle_Fina_Italic</h2>
      <h2 className='cicle-fina'>Cicle_Fina</h2>
      <h2 className='cicle-gordita-italic'>Cicle_Gordita_Italic</h2>
      <h2 className='cicle-gordita'>Cicle_Gordita</h2>
      <h2 className='cicle-semi-italic'>Cicle_Semi_Italic</h2>
      <h2 className='cicle-semi'>Cicle_Semi</h2>
      <h2 className='cosi'>Cosi Azure</h2>
      <h2 className='dekar-light'>Dekar Light</h2>
      <h2 className='dekar'>Dekar</h2>
      <h2 className='neuemontreal-bold'>NeueMontreal-Bold</h2>
      <h2 className='neuemontreal-bolditalic'>NeueMontreal-BoldItalic</h2>
      <h2 className='neuemontreal-italic'>NeueMontreal-Italic</h2>
      <h2 className='neuemontreal-light'>NeueMontreal-Light</h2>
      <h2 className='neuemontreal-lightitalic'>NeueMontreal-LightItalic</h2>
      <h2 className='neuemontreal-medium'>NeueMontreal-Medium</h2>
      <h2 className='neuemontreal-mediumitalic'>NeueMontreal-MediumItalic</h2>
      <h2 className='neuemontreal-regular'>NeueMontreal-Regular</h2>
    </di>
  );
}

export default App;
