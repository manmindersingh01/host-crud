
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Users from './pages/Users'
import UpdateData from "./pages/UpdateData";
import Success from "./pages/Success";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/update/:id" element={<UpdateData />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
