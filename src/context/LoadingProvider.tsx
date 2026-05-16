import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

/** No 3D loader — use native scroll + initialFX (desktop 3D is >1024 only). */
const shouldSkipLoader = () => window.innerWidth <= 1024;

function runInitialFXWhenReady() {
  let attempts = 0;
  const maxAttempts = 120;

  const tryRun = () => {
    const intro = document.querySelector(".landing-intro h1");
    if (!intro) {
      attempts += 1;
      if (attempts < maxAttempts) {
        requestAnimationFrame(tryRun);
      }
      return;
    }

    import("../components/utils/initialFX").then((module) => {
      module.initialFX?.();
    });
  };

  requestAnimationFrame(tryRun);
}

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => !shouldSkipLoader());
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("is-site-loading", isLoading);
    return () => {
      document.body.classList.remove("is-site-loading");
    };
  }, [isLoading]);

  useEffect(() => {
    if (!shouldSkipLoader()) return;
    runInitialFXWhenReady();
  }, []);

  // Desktop: never leave the app stuck if the 3D model never reaches 100%
  useEffect(() => {
    if (shouldSkipLoader()) return;

    const fallbackMs = 22000;
    const timeout = setTimeout(() => {
      setIsLoading((prev) => {
        if (!prev) return prev;
        import("../components/utils/initialFX").then((module) => {
          module.initialFX?.();
        });
        return false;
      });
    }, fallbackMs);

    return () => clearTimeout(timeout);
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
