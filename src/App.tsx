import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Detail, Home, Results } from "./pages";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Results />} />
          <Route path='/items/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
