import "./styles/App.css"
import React, { useEffect, useState } from "react"

import { RootLayout } from "./layouts"
import { About, Home, Project } from "./pages"
import DSA from "./pages/DSA"
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
      <Route path="/DSA" element={<DSA />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App" />
    </RouterProvider>
  )
}

export default App
