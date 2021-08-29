import {
    NavBarElement,
    ContentObject,
    AddContent,
    BackButton,
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
    const elem = props.content.map((e, i) => {
        return <ContentObject name={e.name} type={e.type} extension={e.extension} key={i} />
    })

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
        }}>
            {elem}
            <AddContent />
        </div>
    );
}

export {
    NavBarBlock,
    ContentBlock,
};