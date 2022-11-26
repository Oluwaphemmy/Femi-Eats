import Category from "./components/Category";
import Food from "./components/Food";
import HeadlinCard from "./components/HeadlinCard";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlinCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
