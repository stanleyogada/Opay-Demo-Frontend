import { RouterProvider } from "react-router-dom";

import useSplash from "./hooks/useSplash";
import ROUTER from "./router";
import SplashScreen from "../SplashScreen";

function App() {
  const { isAppLoading } = useSplash();

  console.log({ isAppLoading });

  if (isAppLoading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={ROUTER} />;
}

export default App;
