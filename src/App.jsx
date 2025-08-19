import React, { useState } from "react";
import TicketForm from "./TicketForm.jsx";
import TicketReady from "./TicketGen.jsx";

function App(params) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data)
    setSubmitted(true)
  }
  return(
    <>
    {!submitted ? (<TicketForm onSubmit={handleFormSubmit}/> ) :
    (<TicketReady name={formData.name}
                  email={formData.email}
                  userName={formData.userName}
                  avatar={formData.avatar} />
    )}
    </>
  )
}
export default App