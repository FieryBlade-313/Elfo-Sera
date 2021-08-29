import { useState } from 'react';
import { Folder } from './objectDefinition.js';
import {
  NavBarBlock,
  ContentBlock,
  RenameModalManager,
} from './componentBlock'


function App() {

  var root = new Folder('root', null);
  var home = root.AddFolder("Home");
  var usr = home.AddFolder("Usr");
  root.AddFile('index.js');
  root.AddFile('sample.pdf');
  const [currFolder, setCurrFolder] = useState(usr);
  const [isOpen, setOpenState] = useState(false);
  const [selected, setSelected] = useState(null);

  var [navStack, setNavStack] = useState([root, home, usr])

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
      <NavBarBlock stack={navStack} handleNavStack={handleNavStack} />
      <ContentBlock content={currFolder} stack={navStack} handleSelected={handleSelected} handleNavStack={handleNavStack} modalOpenState={setOpenState} handleCurrFolder={handleCurrFolder} />
      {isOpen && <RenameModalManager selected={selected} modalOpenState={setOpenState} handleCurrFolder={handleCurrFolder} />}
    </div >
  );
}

export default App;
