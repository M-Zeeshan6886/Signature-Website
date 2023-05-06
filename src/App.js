import "./App.css";
import {
  About,
  Contactus,
  CreateSignature,
  EditCard,
  Forgetpassord,
  Home,
  Pricing,
  Privacy,
  ProfileLayout,
  SignIn,
  SignUp,
} from "./modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgetpassword" element={<Forgetpassord />} />
          <Route path="/" element={<Home />} />
          <Route path="/createsignature" element={<CreateSignature />} />
          <Route path="/editecard" element={<EditCard />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<ProfileLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
