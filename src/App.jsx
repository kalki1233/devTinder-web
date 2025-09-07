import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import { Feed } from "./components/Feed";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/" element={<Feed />} index={true} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
