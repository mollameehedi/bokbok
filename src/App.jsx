
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
        <Route path="/" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>

    </Route>
       
  )
);
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
