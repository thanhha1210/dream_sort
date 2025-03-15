import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Background from './components/Background'
import Page2 from './components/Page2'; 

export default function App() {
  return (
    <>
      <Page1 />z
      <Background />
    </>
    // <Router>
    //   <Routes>
        
    //     <Route path="/" element={<Page1 />} />
    //     <Route path="/page2" element={<Page2 />} />
    //   </Routes>
    // </Router>
  );
}
