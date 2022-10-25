import React, { useState } from 'react';
import { AdmModal } from '../Modals/AdmModal';
import { EmpModal } from '../Modals/EmpModal';
import "./LoginBtn.css";
import ID from '../TextFields/ID';
import Password from '../TextFields/Password';

export default function LoginBtn(){
    const [show, setShow] = useState(false)
    return (<>
    <div className="btn-toolbar">
        <div className="btn-grp">
            <button onClick={() => setShow(true)}>Admin Login</button>
                <AdmModal title="Admin Login" onClose={()=> setShow(false)} show={show}>
                    <ID />
                    <Password />
                </AdmModal>
            
            <button onClick={() => setShow(true)}>Employee Login</button>
                <EmpModal title="Login" onClose={()=> setShow(false)} show={show}>
                    <ID />
                    <Password />
                </EmpModal>
            </div>
         </div>
    </>)
}