import closeImg from './assets/close.png'
import './Modal.css'

const Modal = (props) => {
    return (
        <div className='backgroundModal'>
            <div className='modal'>
                <img style={{
                    maxHeight: '10px',
                    maxWidth: '10px',
                    margin: '10px',
                    alignSelf: 'flex-end',
                }} src={closeImg} alt='close' onClick={() => props.modalOpenState(false)} />
                {props.modalContent}
                <button className="submit" onClick={props.submitHandler}>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default Modal;