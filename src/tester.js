import { Folder } from './objectDefinition.js';

var root = new Folder("root", null);
var home = root.AddFolder("Home");
var file = root.AddFile("index.js");

console.log(file.GetExtension())

root.DebugDisplay();

home.AddFile("sample1.jpg");
home.AddFile("sample2.jpg");
home.AddFile("sample3.jpg");
home.AddFolder("user");

// home.DebugDisplay();

home.Rename("Home_new");
file.Rename("Index.pp");

// home.DebugDisplay();
root.DebugDisplay();

home.Delete();
file.Delete();

root.DebugDisplay();