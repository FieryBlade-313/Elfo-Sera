import { NavBarElement, EntityObject } from './component'

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

const EntityObjectBlock = (props) => {
    const elem = props.content.map((e, i) => {
        return <EntityObject name={e.name} type={e.type} />
    })

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
        }}>
            {elem}
        </div>
    );
}


export {
    NavBarBlock,
    EntityObjectBlock,
};