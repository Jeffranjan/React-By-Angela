import "./App.css";
import Footer from "./footer.jsx";
import Notes from "./Notes.jsx";

function App() {
  return (
    <>
      <div className="h-screen bg-[#ebeaeb]">
        <div className="bg-yellow-500">
          <h1 className="text-3xl font-semibold text-white p-3 pl-5">Keeper</h1>
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
