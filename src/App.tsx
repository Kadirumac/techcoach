import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderedContent from "./RenderedContent";
import { selectAdmin, setOpenAdminMode } from "./features/reducers/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./pages/Admin/Admin";
import { useParams } from "react-router-dom";
import "./assets/styles/index.scss"

function App() {
  const { openAdminMode } = useSelector(selectAdmin);
  const dispatch = useDispatch()
  if (window.location.pathname === "/admin") {
    dispatch(setOpenAdminMode(true))
  }
  return (
    <div className="App">
      {!openAdminMode ? <RenderedContent /> : <Admin />}
    </div>
  );
}

export default App;
