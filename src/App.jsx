import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./registerForm";
import { useEffect, useState } from "react";

function App() {
    
  const [formTitle, setFormTitle] = useState();

  
   useEffect(() => {
        setFormTitle('Registration');
    }, []);

  return (
    <>
      <RegisterForm formTitle={formTitle}  />
    </>
  );
}

export default App;
