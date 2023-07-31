import React from 'react'
import "./Modal.css"
import ModalContent from './MdalContent'
export default function Modal(props) {
  return (
    <div className='modal'>
<ModalContent closebutton1={props.closehandlerbutton}></ModalContent>
    </div>
  )
}
