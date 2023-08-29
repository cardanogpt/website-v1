import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupButton = (props) => {
  return (
    <Popup trigger={<button className='popup-button'>{props.text}</button>} position="right center" modal>
        <div className='popup'>Coming Soon!!</div>
    </Popup>
  )
}

export default PopupButton;

