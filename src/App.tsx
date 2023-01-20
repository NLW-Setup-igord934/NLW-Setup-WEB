import "./styles/global.css";

import { Habit } from "./components/Habit";

function App() {
  return (
    <div className="App">
      <Habit completed={50} />
      <Habit completed={40} />
      <Habit completed={30} />
      <Habit completed={20} />
    </div>
  );
}

export default App;
