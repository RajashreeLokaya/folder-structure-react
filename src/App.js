import Folder from "./component/folder";
import { folderList } from "./data/folderData";

function App() {
  return (
    <>
      <Folder explorer={folderList} />
    </>
  );
}

export default App;
