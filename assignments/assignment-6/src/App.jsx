import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Module 6 Assignment" />
      <Content />
      <Footer
        fullName="Kaiser Ahmed Tushar"
        occupation="Software Engineer"
        favoriteQuote="Change is the only Constant"
      />
    </div>
  );
}

export default App;
