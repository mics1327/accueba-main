import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitBtnAdm = props => {
    const navigate = useNavigate();
  
    const navigateAdmPage = () => {
      navigate('/AdminPage');
    };
    
    return (
        <Button onClick={navigateAdmPage} className="button">Submit</Button>
    )
}

export default SubmitBtnAdm