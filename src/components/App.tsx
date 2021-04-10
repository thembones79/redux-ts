import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container content">
        <h1 className="m-1">Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
