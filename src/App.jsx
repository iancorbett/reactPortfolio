// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";



// function App() {
  

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />

//           <Route path="*" element={<NotFound />}/>
//           </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

