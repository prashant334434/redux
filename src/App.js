import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import IceCreameContainer from "./components/IceCreameContainer";
import NewCake from "./components/NewCake";
import UsersContainer from "./components/UsersContainer";
import store from "./redux/Cakes/Store";

function App() {
  return (
    <Provider store={store}>
    {/* <div className="App">
     <CakeContainer/>
     <NewCake/>
     <IceCreameContainer/>
    </div> */}
    <UsersContainer/>
    </Provider>
  );
}

export default App;
