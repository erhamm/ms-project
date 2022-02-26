import "./App.css";
import Login from "./pages/login/login";
import { Button } from "antd";
function App() {
  return (
    <div className="App">
      <Login />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
