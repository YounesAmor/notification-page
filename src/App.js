import "./App.css";
import Notifications from "./components/notifications";

function App() {
  return (
    <div className="App bg-veryLightGrayishBlue">
      <div className="lg:mx-350px sm:mx-12px sm:min-h-screen sm:min-w-screen flex items-center justify-center  lg:my-0 lg:h-screen">
        <Notifications />
      </div>
    </div>
  );
}

export default App;
