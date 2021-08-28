import './mainStyle.css'
import folderImg from './assets/folder.png'
import fileImg from './assets/file.png'
import newButtonImg from './assets/add_new_button.png'

const NavBarElement = (props) => {
    return (
        <div className='navBarElement'>
            {props.name}
        </div>
    );
}

const ContentObject = (props) => {

    return (
        <div className='content'>
            <ContentImage type={props.type} extension={props.extension} />
            <span>{props.name}</span>
        </div>
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
                padding: '2px 8px',
                borderRadius: '7px',
                backgroundColor: '#CF3817',
                color: 'white',
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
            }} src={imgDict[props.type]['image']} />
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
            }} src={newButtonImg} />
        </div>
    );
}

export {
    NavBarElement,
    ContentObject,
    AddContent,
};