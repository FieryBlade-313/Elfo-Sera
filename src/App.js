import { useState } from 'react';
import {
  NavBarBlock,
  ContentBlock,
  RenameModalManager,
} from './componentBlock'


function App() {

  const [isOpen, setOpenState] = useState(false);

  return (
    <div>
      <NavBarBlock names={['root', 'home', 'usr']} />
      <ContentBlock content={[]} modalOpenState={setOpenState} />
      {isOpen && <RenameModalManager modalOpenState={setOpenState} />}
    </div >
  );
}

export default App;
