import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEdit from './Pages/AddEdit';
import Home from './Pages/Home';
import Info from './Pages/Info';

const App = () => {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/addContact" element={<AddEdit />} />
               <Route path="/editContact/:id" element={<AddEdit />} />
               <Route path="/info/:id" element={<Info />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;
