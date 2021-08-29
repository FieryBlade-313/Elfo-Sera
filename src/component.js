import './mainStyle.css'
import Modal from './Modal'
import folderImg from './assets/folder.png'
import fileImg from './assets/file.png'
import newButtonImg from './assets/add_new_button.png'
import backBtn from './assets/arrow_up.png'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useState } from 'react'

const NavBarElement = (props) => {
    return (
        <div className='navBarElement' style={{ color: (props.last ? '#2E2F2F' : '#858B8F') }}>
            {props.name}
        </div>
    );
}

const BackButton = (props) => {
    return (
        <img style={{
            maxHeight: '60px',
            maxWidth: '60px',
            margin: '10px 6px',
            transform: 'Rotate(-90deg)',
        }} src={backBtn} alt={props.type} />
    )
}

const ContentObject = (props) => {

    return (
        <div>
            <ContextMenuTrigger id={"contentOptions" + props.i}>
                <div className='content'>
                    <ContentImage type={props.type} extension={props.extension} />
                    <span>{props.name}</span>
                </div>
            </ContextMenuTrigger>

            <ContextMenuBlock modalOpenState={props.modalOpenState} i={props.i} />
        </div>
    );
}

const ContextMenuBlock = (props) => {

    const handleClick = (e, data) => {
        if (data.action === 'rename')
            props.modalOpenState(true);
        else if (data.action === 'delete')
            console.log('delete')
    }

    return (
        <ContextMenu id={"contentOptions" + props.i} className='optionHolder'>
            <MenuItem data={{ action: 'rename' }} onClick={handleClick}>
                <div className='contextOption'>Rename</div>
            </MenuItem>
            <MenuItem data={{ action: 'delete' }} onClick={handleClick}>
                <div className='contextOption' style={{ color: '#FF5B45' }}>Delete</div>
            </MenuItem>
        </ContextMenu>
    );
}

const ContentImage = (props) => {
    const imgDict = {
        'folder': {
            'image': folderImg,
            'style': {
                display: 'none',
            }
        },
        'file': {
            'image': fileImg,
            'style': {
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                fontSize: '0.8em',
                padding: '2px 5px',
                borderRadius: '5px',
                backgroundColor: '#CF3817',
                color: 'white',
                textAlign: 'center',
            }
        },
    };

    return (
        <div style={{
            position: 'relative',
            display: 'block',
        }}>
            <img style={{
                maxHeight: '50px',
                maxWidth: '50px',
                margin: '5px 0',
            }} src={imgDict[props.type]['image']} alt={props.type} />
            <span style={imgDict[props.type]['style']}>{props.extension}</span>
        </div>

    );
}

const AddContent = (props) => {

    return (
        <div className='addButton'>
            <img style={{
                maxHeight: '150px',
                maxWidth: '100px',
                margin: '5px 0',
                display: 'block',
            }} src={newButtonImg} alt='add' onClick={(e) => props.modalOpenState(true)} />
        </div>
    );
}

const RenameModal = (props) => {

    const [name, setName] = useState('');

    const modalContent = <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <h3>Rename</h3>
        <input placeholder='name' onChange={(e) => setName(e.target.value)}></input>
    </div>

    return (
        <Modal modalOpenState={props.modalOpenState} modalContent={modalContent} buttonText='Rename' submitHandler={() => console.log(name)} />
    );
}

const AddModal = (props) => {

    const [name, setName] = useState('');
    const [isFile, setFileSelectState] = useState(true);
    const selectedColor = '#4AB7FF';
    const defaultColor = '#F0F0F0';

    const modalContent = <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <h3>Create New</h3>
        <div style={{
            margin: '10px',
        }}>
            <div className='contentSelector contentSelectorFile' style={{
                backgroundColor: isFile ? selectedColor : defaultColor,
                color: isFile ? 'white' : 'black',
            }} onClick={(e) => setFileSelectState(true)}>File</div>
            <div className='contentSelector  contentSelectorFolder' style={{
                backgroundColor: !isFile ? selectedColor : defaultColor,
                color: !isFile ? 'white' : 'black',
            }} onClick={(e) => setFileSelectState(false)}>Folder</div>
        </div>
        <input placeholder={((isFile) ? 'file' : 'folder') + ' name'} onChange={(e) => setName(e.target.value)}></input>
    </div>

    return (
        <Modal modalOpenState={props.modalOpenState} modalContent={modalContent} buttonText='Create' submitHandler={() => console.log(name)} />
    );
}

export {
    NavBarElement,
    ContentObject,
    AddContent,
    BackButton,
    RenameModal,
    AddModal,
};