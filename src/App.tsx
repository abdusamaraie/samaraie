import "./styles/App.css"
import React from "react"
import { RootLayout } from "./layouts"
import DSA, { About, Home, Project } from "./pages"
// create react navigation mechanism using react-router-dom
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider, // Add this import
} from "react-router-dom"

const LazyResume = React.lazy(() => import("./pages/Resume"))

// Create browser router navigation
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Project />}>
        <Route path=":projectId" element={<Project />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route
        path="/resume"
        element={
          <React.Suspense fallback="Loading Resume">
            <LazyResume />
          </React.Suspense>
        }
      />
      <Route path="/DSA" element={<DSA />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
