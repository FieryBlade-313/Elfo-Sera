class ContentClass {
    constructor(name, parent, type) {
        this.name = name;
        this.parent = parent != null ? parent : this;
        this.type = type;
    }

    Rename(name) {
        this.name = name;
    }
}

class File extends ContentClass {
    constructor(name, parent) {
        super(name, parent, 'file');
    }

    Rename(name) {
        if (name in this.parent.files)
            throw "Duplicate"
        else {
            delete this.parent.files[this.name];
            super.Rename(name);
            this.parent.files[name] = this;
        }
    }

    Delete() {
        delete this.parent.files[this.name];
    }

    GetExtension() {
        return this.name.substring(this.name.lastIndexOf('.'));
    }

}

class Folder extends ContentClass {

    constructor(name, parent) {
        super(name, parent, 'folder');
        this.folders = {};
        this.files = {};

    }

    Rename(name) {
        if (name in this.parent.folders)
            throw "Duplicate";
        else {
            delete this.parent.folders[this.name];
            super.Rename(name);
            this.parent.folders[name] = this;
        }
    }

    Delete() {
        delete this.parent.folders[this.name];
    }

    AddFolder(name) {
        if (name in this.folders)
            throw "Duplicate";
        else {
            this.folders[name] = new Folder(name, this);
            return this.folders[name];
        }

    }

    AddFile(name) {
        if (name in this.files)
            throw "Duplicate";
        else {
            this.files[name] = new File(name, this);
            return this.files[name]
        }
    }

    DebugDisplay() {
        console.log(`\n------\nFolder : ${this.name}\n------\n`)
        console.log("Folders\n------");
        for (var name in this.folders)
            console.log(name);
        console.log("\nFiles\n------");
        for (var name in this.files)
            console.log(name);
    }
}

export {
    Folder,
    File,
};