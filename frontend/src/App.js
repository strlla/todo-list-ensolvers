import TaskProvider from "./contexts/TaskContext";
import FolderProvider from "./contexts/FolderContext";
import Main from './components/Main'

function App() {
  return (
    <FolderProvider>
      <TaskProvider>
        <Main />
      </TaskProvider>
    </FolderProvider>
  );
}

export default App;
