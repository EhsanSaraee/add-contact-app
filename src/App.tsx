import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './Pages/AddEdit';
import Home from './Pages/Home';
import Info from './Pages/Info';

const App = () => {
   return (
      <BrowserRouter>
         <ToastContainer />
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/addContact" element={<AddEdit />} />
               <Route path="/editContact/:id" element={<AddEdit />} />
               <Route path="/info/:id" element={<Info />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

export default App;
