import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Index";
import Home from "./pages/Index";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
