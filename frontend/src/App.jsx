// import { Outlet, Navigate } from "react-router-dom";
// import { SignedIn, SignedOut } from "@clerk/clerk-react";

// function App() {
//   return (
//     <>
//       <SignedIn>
//         <Outlet />
//       </SignedIn>

//       <SignedOut>
//         <Navigate to="/login" /> // after making landing page redirecting to landing page 
//       </SignedOut>
//     </>
//   );
// }

// export default App;


// for cheking the routing and layout


import { Outlet } from "react-router-dom";

function App() {
  return <Outlet />;
}

export default App;