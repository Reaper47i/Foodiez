import "./App.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <div className="w-full h-screen flex flex-col">
        <nav className="flex w-full h-11 fixed bg-transparent z-10 items-center px-2">
          Navbar
        </nav>
        <section className="mt-11 w-100 h-max">
          <MainPage />
        </section>
      </div>
    </div>
  );
}

export default App;
