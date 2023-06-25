import FunctionContextComponent from "./FunctionContextComponent";
// import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
