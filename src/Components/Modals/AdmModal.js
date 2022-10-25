import React from "react";
import { CSSTransition } from 'react-transition-group'
import "./modal.css";
import SubmitBtnAdm from "../Buttons/SubmitLoginAdm";

export const AdmModal = props => {
    return(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300}}>
        <div className={`modal ${props.show ? 'show' : ''}`}onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                    <button onClick={props.onClose} className="button">Close</button>
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <SubmitBtnAdm />
                    </div>
            </div>
        </div>
        </CSSTransition>
    )
}
