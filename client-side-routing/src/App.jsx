import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2 className="text-xl">Home Page</h2>;
}

function About() {
  return <h2 className="text-xl">About Page</h2>;
}

function Contact() {
  return <h2 className="text-xl">Contact Page</h2>;
}

function App() {
  return (
    <div className="p-5 grid place-items-center">

      {/* Navigation */}
      <nav className="flex gap-10 mb-10">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
