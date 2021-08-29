import './mainStyle.css'
import folderImg from './assets/folder.png'
import fileImg from './assets/file.png'
import newButtonImg from './assets/add_new_button.png'
import backBtn from './assets/arrow_up.png'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

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
            <ContextMenuTrigger id="contentOptions">
                <div className='content'>
                    <ContentImage type={props.type} extension={props.extension} />
                    <span>{props.name}</span>
                </div>
            </ContextMenuTrigger>

            <ContextMenuBlock />
        </div>
    );
}

const ContextMenuBlock = () => {
    return (
        <ContextMenu id="contentOptions" className='optionHolder'>
            <MenuItem data={{ action: 'rename' }}>
                <div className='contextOption'>Rename</div>
            </MenuItem>
            <MenuItem data={{ foo: 'delete' }}>
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

const AddContent = () => {

    return (
        <div className='addButton'>
            <img style={{
                maxHeight: '150px',
                maxWidth: '100px',
                margin: '5px 0',
                display: 'block',
            }} src={newButtonImg} alt='add' />
        </div>
    );
}

export {
    NavBarElement,
    ContentObject,
    AddContent,
    BackButton,
};