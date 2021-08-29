import { useState } from 'react';
import {
    NavBarElement,
    ContentObject,
    AddContent,
    BackButton,
    RenameModal,
    AddModal,
} from './component'

const NavBarBlock = (props) => {
    const elem = props.stack.map((content, i) => {
        if (i === props.stack.length - 1)
            return <NavBarElement last={true} name={content.name} key={i} />
        return <NavBarElement last={false} name={content.name} key={i} />
    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
        }}>
            <BackButton stack={props.stack} handleNavStack={props.handleNavStack} />
            {elem}
        </div>
    );
};

const ContentBlock = (props) => {

    const [isOpen, setAddModalState] = useState(false);
    const elemFolders = []
    var i = 0;
    for (var folder in props.content.folders) {
        elemFolders.push(<ContentObject stack={props.stack} handleSelected={props.handleSelected} handleNavStack={props.handleNavStack} currFolder={props.content} handleCurrFolder={props.handleCurrFolder} content={props.content.folders[folder]} key={i} modalOpenState={props.modalOpenState} i={i} />)
        i++;
    }

    const elemFiles = []

    for (var file in props.content.files) {
        elemFiles.push(<ContentObject stack={props.stack} handleSelected={props.handleSelected} handleNavStack={(thrash) => { }} currFolder={props.content} handleCurrFolder={props.handleCurrFolder} content={props.content.files[file]} key={i} modalOpenState={props.modalOpenState} i={i} />)
        i++;
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'left',
                flexWrap: 'wrap',
            }}>
                {elemFolders}
                {elemFiles}
                <AddContent modalOpenState={setAddModalState} />
            </div>
            {isOpen && <AddModalManager currFolder={props.content} handleCurrFolder={props.handleCurrFolder} modalOpenState={setAddModalState} />}
        </div>
    );
}

const RenameModalManager = (props) => {

    return (
        <RenameModal currFolder={props.currFolder} handleCurrFolder={props.handleCurrfolder} selected={props.selected} modalOpenState={props.modalOpenState} />
    );
}

const AddModalManager = (props) => {

    return (
        <AddModal currFolder={props.currFolder} handleCurrFolder={props.handleCurrFolder} modalOpenState={props.modalOpenState} />
    );
}

export {
    NavBarBlock,
    ContentBlock,
    RenameModalManager,
};