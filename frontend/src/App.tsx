// ** Import Share Component
import Layout from "../components/Layout/Layout";
import Login from "../components/Sections/Login";
import Register from "../components/Sections/Register";
import Fixtures from "../components/Sections/Fixtures";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Fixtures />
        <Login />
        <Register />
      </Layout>
    </>
  );
}

export default App;
