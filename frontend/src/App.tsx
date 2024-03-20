// ** Import Shared Components
import Layout from "../components/Layout/Layout.tsx";
import Login from "../components/Sections/Login.tsx";
import Register from "../components/Sections/Register.tsx";
import Calendar from "../components/Snippets/Calendar";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* <Calendar /> */}
      <Login />
      <Register />
    </Layout>
  );
}

export default App;
