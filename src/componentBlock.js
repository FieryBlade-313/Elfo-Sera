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
    const elem = props.names.map((name, i) => {
        if (i === props.names.length - 1)
            return <NavBarElement last={true} name={name} key={i} />
        return <NavBarElement last={false} name={name} key={i} />
    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
        }}>
            <BackButton />
            {elem}
        </div>
    );
};

const ContentBlock = (props) => {

    const [isOpen, setAddModalState] = useState(false);

    const elem = props.content.map((e, i) => {
        return <ContentObject name={e.name} type={e.type} extension={e.extension} key={i} modalOpenState={props.modalOpenState} i={i} />
    })

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'left',
                flexWrap: 'wrap',
            }}>
                {elem}
                <AddContent modalOpenState={setAddModalState} />
            </div>
            {isOpen && <AddModalManager modalOpenState={setAddModalState} />}
        </div>
    );
}

const RenameModalManager = (props) => {

    return (
        <RenameModal modalOpenState={props.modalOpenState} />
    );
}

const AddModalManager = (props) => {

    return (
        <AddModal modalOpenState={props.modalOpenState} />
    );
}

export {
    NavBarBlock,
    ContentBlock,
    RenameModalManager,
};