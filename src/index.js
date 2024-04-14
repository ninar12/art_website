import React from "react"
import ReactDOM from "react-dom/client"
import "./pages/index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { BannerAnimation } from "./utils/BannerAnimation"
import About from "./pages/About"
import Shop from "./pages/Shop"
import { Suspense } from "react"
//import Loading  from "./pages/Loading"
//import App from "./pages/App"
const App = React.lazy(() => import("./pages/App"))
const Loading = React.lazy(() => import("./pages/Loading"))

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/contact" />
        <Route
          path="/shop"
          element={
            <Suspense
              fallback={
                <div style={{ backgroundColor: "red" }}>Loading...</div>
              }>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div style={{ backgroundColor: "red" }}>Loading...</div>
              }>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          }
        />{" "}
      </Routes>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
