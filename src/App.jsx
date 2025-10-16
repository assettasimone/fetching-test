import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLaoyout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLaoyout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
