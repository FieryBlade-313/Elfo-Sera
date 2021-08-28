import { NavBarBlock, ContentBlock } from './componentBlock'

function App() {
  return (
    <div>
      <NavBarBlock names={['root', 'home', 'usr']} />
      <ContentBlock content={[{ name: "Home", type: "folder" }, { name: "index.js", type: 'file', extension: '.js' }]} />
    </div>
  );
}

export default App;
