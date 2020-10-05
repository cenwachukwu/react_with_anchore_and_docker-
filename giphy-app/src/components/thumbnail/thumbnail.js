import React from 'react';
import './thumbnail.scss';
import Util from '../../util/functions/modalFunctions'


const Thumbnail = (props) => {
    
  return (
   <div>
       {props.nameProps.name.map((name, index) => {
           return(
            <div className="Box" key={index}>
                <button onClick={(e) => Util.handleOpenModalClick(props.setOpenModal, props.application)}>{name}</button>
            </div>
           )
       })}

        {props.application.map((imageUrl, index) => {
            // console.log(imageUrl.images.original.url)
            const imgSrc = imageUrl.images.original.url
           return(
            <div className="ImageBox" key={index}>
                <img src={imgSrc}/>
            </div>
           )
       })}
   </div>
  );
};

export default Thumbnail;