import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import RouteLoading from "./components/RouteLoading";
import RouteSeo from "./components/RouteSeo";
import "./App.css";
import "./components/styles/RouteStates.css";

const enableVercelInsights =
  import.meta.env.VITE_ENABLE_VERCEL_INSIGHTS === "true";

const VercelAnalytics = enableVercelInsights
  ? lazy(() =>
      import("@vercel/analytics/react").then((m) => ({ default: m.Analytics }))
    )
  : null;

const VercelSpeedInsights = enableVercelInsights
  ? lazy(() =>
      import("@vercel/speed-insights/react").then((m) => ({
        default: m.SpeedInsights,
      }))
    )
  : null;

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";
import { routerBasename } from "./utils/publicUrl";

const App = () => {
  return (
    <BrowserRouter basename={routerBasename()}>
      <RouteSeo />
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense
                fallback={<RouteLoading />}
              >
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<RouteLoading />}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<RouteLoading />}>
              <Play />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {enableVercelInsights && VercelAnalytics && VercelSpeedInsights && (
        <Suspense fallback={null}>
          <VercelAnalytics />
          <VercelSpeedInsights />
        </Suspense>
      )}
    </BrowserRouter>
  );
};

export default App;
