import { NavBarElement, ContentObject, AddContent } from './component'

const NavBarBlock = (props) => {
    const elem = props.names.map((name, i) => {
        return <NavBarElement name={name + " /"} key={i} />
    });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
        }}>
            {elem}
        </div>
    );
};

const ContentBlock = (props) => {
    const elem = props.content.map((e, i) => {
        return <ContentObject name={e.name} type={e.type} extension={e.extension} />
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