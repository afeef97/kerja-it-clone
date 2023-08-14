import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/jobs/:slug",
            element: <Job />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
