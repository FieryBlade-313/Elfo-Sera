import { useState } from 'react';
import { Folder } from './objectDefinition.js';
import {
  NavBarBlock,
  ContentBlock,
  RenameModalManager,
} from './componentBlock'


function App() {

  var root = new Folder('root', null);
  const [currFolder, setCurrFolder] = useState(root);
  const [isOpen, setOpenState] = useState(false);
  const [selected, setSelected] = useState(null);

  var [navStack, setNavStack] = useState([root])

  function handleCurrFolder(newCurrFolder) {
    setCurrFolder(newCurrFolder);
  }

  function handleNavStack(newNavStack) {
    handleCurrFolder(newNavStack[newNavStack.length - 1]);
    setNavStack(newNavStack);
  }

  function handleSelected(newSelected) {
    setSelected(newSelected);
  }

  return (
    <div>
      <NavBarBlock stack={navStack} handleNavStack={handleNavStack} handleCurrFolder={handleCurrFolder} />
      <ContentBlock content={currFolder} stack={navStack} handleSelected={handleSelected} handleNavStack={handleNavStack} modalOpenState={setOpenState} handleCurrFolder={handleCurrFolder} />
      {isOpen && <RenameModalManager selected={selected} modalOpenState={setOpenState} handleCurrFolder={handleCurrFolder} />}
    </div >
  );
}

export default App;
