import {useState} from 'react'
import InstructionWindowImg from '../assets/img/instruction-window.svg'
import CloseWindowImg from '../assets/img/close-window-btn.svg'
import './InstructionWindow.css'

function InstructionWindow() {
    const [instructionVisible, setInstructionVisible] = useState(true);

    function closeInstructions(){
        setInstructionVisible(false);
    }

  return (
        <div className={instructionVisible ? 'window-container display-flex' : 'window-container display-none'}>
            <div className='img-container'>
                <img src={InstructionWindowImg} className='instructions' alt="Instruction window" />
                <img src={CloseWindowImg} alt="Close Window" className='close-btn' onClick={ closeInstructions }/>
            </div>
        </div>
  )
}

export default InstructionWindow