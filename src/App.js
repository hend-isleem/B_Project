import "./App.css";
import Input from "./componenets/Input";
import logoo from "./pics/unnamed11.png";
import pic1 from "./pics/brain11.png";
import pic2 from "./pics/brain22.png";
function App() {
  return (
    <div className="App">
      {/* <h1>منحة ناهض الريس للأذكياء :)</h1> */}
      {/* <div className="responsive-image">
        <img src={pic1} alt="" className="responsive-image__image1"></img>
        <header className="App-header">
          <Input />
        </header>
        <img src={pic2} alt="" className="responsive-image__image2"></img>
      </div>
      <footer className="footer">
        <img src={logoo} className="under" alt="logo" />
      </footer> */}
      <header className="App-header">
        <Input />
      </header>
      <footer className="footer">
        <h3>شكرًا لك لخوض تجربة التحدّي، بالتوفيق دومًا✨</h3>
      </footer>
    </div>
  );
}

export default App;
