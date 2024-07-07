// ** Import Share Component
import Layout from "../components/Layout/Layout";
import Login from "../components/Sections/Login";
import Register from "../components/Sections/Register";
import Tips from "../components/Sections/Tips";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Tips />
        <Login />
        <Register />
      </Layout>
    </>
  );
}

export default App;
