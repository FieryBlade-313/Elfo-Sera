import './mainStyle.css'
import folderImg from './assets/folder.png'
import fileImg from './assets/file.png'

const NavBarElement = (props) => {
    return (
        <div className='navBarElement'>
            {props.name}
        </div>
    );
}

const EntityObject = (props) => {
    return (
        <div className='content'>
            <img style={{
                maxHeight: '50px',
                maxWidth: '50px',
                margin: '5px 0',
                display: 'block',
            }} src={props.type === 'folder' ? folderImg : fileImg} />
            <span>{props.name}</span>
        </div>
    );
}

export {
    NavBarElement,
    EntityObject,
};