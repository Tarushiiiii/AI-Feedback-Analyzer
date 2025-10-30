// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <Layout />,
//     children: [
//       // { index: true, element: <Dashboard />, handle: { header: 'Dashboard' } },
//       // { path: "about_us", element: <AboutUs />, handle: { header: 'About Us' } },
//       // { path: "reports", element: <Reports />, handle: { header: 'Reports' } },
//       // { path: "map", element: <Map />, handle: { header: 'Map' } },
//       // { path: "calculate_hmpi", element: <CalculateHMPI />, handle: { header: 'Calculate HMPI' } },
//       // { path: "analysis", element: <Analysis />, handle: { header: 'Analysis' } },
//       // { path: "methodology", element: <Methodology />, handle: { header: 'Methodology' } },
//       // { path: "suggestions", element: <Suggestion />, handle: { header: 'Suggestion' } },
//       // { path: "settings", element: <Settings />, handle: { header: 'Settings' } },
//       { path: "/", element: <LandingPage /> },
//       { path: "*", element: <h1>Not Found</h1> },
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors">
//       <Navbar />
//       <main className="p-6 text-slate-800 dark:text-white">
//         {/* your routes */}
//       </main>
//     </div>
//   );
// }
// export default App;

import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors">
      {/* <NavBar /> */}
      <LandingPage />

      <main className="p-6 text-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/features" element={<h1>Features Page</h1>} />
          <Route path="/pricing" element={<h1>Pricing Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
