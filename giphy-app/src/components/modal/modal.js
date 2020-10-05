import React from 'react';
import './Modal.scss';
import Util from '../../util/functions/modalFunctions'



const Modal = (props) => {  
  return (
    <div
      className="Modal"
      style={{
        transform: props.openModal ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.openModal ? '1' : '0',
      }}
    >
      <div className="modalCloseButtonContainer">
        <button onClick={(e) => Util.handleCloseModal(props.setOpenModal)}>×</button>
      </div>
      <div className="modalProject">
        <div className="projectNameImage">
          <div className="projectImage">
            <img src={backgroundImage} alt={name} />
          </div>
          <div className="projectName">
            <h1>{name}</h1>
          </div>
        </div>

        <div className="separator"></div>

        <div className="projectDescriptionTechnologies">
          
        </div>
      </div>
    </div>
  );
};

export default Modal;