import "./styles/App.css";
import { RootLayout } from "./layouts";
import { About, Home, Project, Resume } from "./pages";
// create react navigation mechanism using react-router-dom
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Create browser router  navigation
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Project />}>
        <Route path=":projectId" element={<Project />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
