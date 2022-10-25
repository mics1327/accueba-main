import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitBtnEmp = props => {
    const navigate = useNavigate();

    const navigateToEmpPage = () =>{
        navigate('/EmployeePage')
    };
    
    return (
        <Button onClick={navigateToEmpPage} className="btn-submit-emp">Submit</Button>
    )
}

export default SubmitBtnEmp