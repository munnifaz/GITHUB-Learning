import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return <p id="octocat">Fork me? Fork you, @octocat!</p>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
