import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
};

export default App;
