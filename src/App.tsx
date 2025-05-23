import Navbar from "./Components/Navbar/Navbar";
import Home from "./Sections/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-[10v]">
        <Home />
      </main>
    </>
  );
}

export default App;
