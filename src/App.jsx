import React from "react"
import "./styles/App.css"
import { RootLayout } from "./layouts"
import { About, Home, Project } from "./pages"
// create react navigation mechanism using react-router-dom
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
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
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  )
}

export default App
