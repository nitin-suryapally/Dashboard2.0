import NavBar from "./components/NavBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { CiBellOn } from "react-icons/ci";


import VerticalNavBar from "./components/VerticalNavbar";
function App() {
  return (
    <div className="flex flex-col sm:flex-row overflow-y-scroll max-h-screen overflow-x-hidden">
      <div className="flex flex-col sm:flex-row w-full  pt-14 sm:pt-4 pl-8 pb-8 pr-12 mx-4 gap-8 relative">
        <VerticalNavBar />
        <div className="absolute top-0 right-0 mt-4 mr-4 sm:hidden ">
          <CiBellOn className="w-10 h-10" />
        </div>
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
