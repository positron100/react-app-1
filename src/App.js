import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    // all the code must be in a single tag
    <>
    {/* Navbar component */}
    <Navbar title="textutils" about="about us"/>

    {/* Text Box component */}
    <TextForm heading="Enter the text to analyze : "/>
    </>
  );
}

export default App;
