import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import ImageTransformer from './index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const url = "http://tianshan.ca/filesystem";
const name = "/Users/developer/T9/travels/processed/s25-queenstown-new-zealand/jpeg/20260214_145435.jpeg";
const list = [
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251130_225239.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251202_080503.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251206_092438.jpeg",
  "/Users/developer/T9/travels/processed/174-alison/jpeg/20251207_121220.jpeg",
];
const onDelete = () => {
  console.log("onDelete-started");
}
const getViewEndPoint = (name) => {
  return "http://tianshan.ca/filesystem/view?name=" + name;
}
const ImageContainer = () => {
  return (
    <div className='container'>
        <Header/>
        <ImageTransformer
          name={name} 
        />
        <Footer/>
    </div>
  )
}
const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <div className='container'></div>
        <Footer/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/image-viewer" element={<ImageContainer/>} />
      </Routes>
    </Router>
  )
}

export default App
