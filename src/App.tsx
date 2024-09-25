import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <main className="font-nunito">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
