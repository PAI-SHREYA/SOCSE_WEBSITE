import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "./pages/home"
import {Login} from "./pages/login"
import {Contact} from "./pages/Contact";
import {Club} from "./pages/clubs";
import { Register } from "./pages/register";
import { Error } from "./pages/Error";
import { Navbar } from "./Components/navbar";
import { Magazine } from "./pages/Magazine/App";
import { AddMagazine } from "./pages/Magazine/AddMagazine";

// import { Logout } from "./pages/logout";
// import { Footer } from "./Components/footer";
// import {Navbar} from "../src/Components/navbar"

const App = () =>
{
  const isLoginPage = location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
    {/* <Navbar></Navbar> */}
    {/* <h1>Hello</h1> */}
    <BrowserRouter>
    {!isLoginPage && <Navbar />}
    {/* <Navbar></Navbar> */}
    <Routes>
        <Route path="/" element= {<Home />} />
        {/* <Route path="/about" element= {<About />} /> */}
        <Route path="/login" element= {<Login />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/clubs" element= {<Club />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/magazine" element= {<Magazine />} />
        <Route path="/magazine/add" element={<AddMagazine />}/>

        <Route path="*" element= {<Error />} />
        {/* <Route path="/logout" element={<Logout />}/> */}

    </Routes>
    </BrowserRouter>
    {/* <Footer></Footer> */}
    </>

  )
 
};  

export default App;