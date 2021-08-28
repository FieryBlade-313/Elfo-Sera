import { NavBarBlock, EntityObjectBlock } from './componentBlock'

function App() {
  return (
    <div>
      <NavBarBlock names={['root', 'home', 'usr']} />
      <EntityObjectBlock content={[{ name: "Home", type: "folder" }, { name: "index.js", type: 'file' }, { name: "index.js", type: 'file' }, { name: "index.js", type: 'file' }, { name: "index.js", type: 'file' }, { name: "index.js", type: 'file' }]} />
    </div>
  );
}

export default App;
