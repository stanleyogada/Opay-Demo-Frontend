import { RouterProvider } from "react-router-dom";

import SplashScreen from "@components/SplashScreen";
import Modal from "@components/Modal";

import useSplash from "./hooks/useSplash";
import ROUTER from "./router";

function App() {
  const { isAppLoading } = useSplash();

  if (isAppLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Modal />
      <div data-app-container>
        <RouterProvider router={ROUTER} />;
      </div>
    </>
  );
}

export default App;
