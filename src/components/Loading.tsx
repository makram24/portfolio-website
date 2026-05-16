import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import { config } from "../config";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = setTimeout(() => setLoaded(true), 600);
    const t2 = setTimeout(() => setIsLoaded(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [percent]);

  useEffect(() => {
    if (!isLoaded) return;
    let cancelled = false;
    import("./utils/initialFX").then((module) => {
      if (cancelled) return;
      setClicked(true);
      setTimeout(() => {
        if (cancelled) return;
        module.initialFX?.();
        setIsLoading(false);
      }, 900);
    });
    return () => {
      cancelled = true;
    };
  }, [isLoaded, setIsLoading]);

  const displayPercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div className={`loading-root ${clicked ? "loading-root--exit" : ""}`}>
      <div className="loading-bg" aria-hidden>
        <span className="loading-orb loading-orb--1" />
        <span className="loading-orb loading-orb--2" />
      </div>

      <div className="loading-screen">
        <div className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}>
          <div
            className={`loading-card ${loaded ? "loading-card--ready" : ""}`}
          >
            <p className="loading-eyebrow">
              {loaded ? "Ready" : "Loading portfolio"}
            </p>
            <h1 className="loading-name">{config.developer.fullName}</h1>
            <p className="loading-role">{config.developer.subtitle}</p>

            <div className="loading-progress">
              <div
                className="loading-progress-fill"
                style={{ width: `${displayPercent}%` }}
              />
            </div>

            <div className="loading-footer">
              {!loaded ? (
                <span className="loading-percent">{displayPercent}%</span>
              ) : (
                <span className="loading-enter">
                  Welcome <span aria-hidden>→</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

type ProgressController = {
  loaded: () => Promise<number>;
  clear: () => void;
};

let activeProgress: ProgressController | null = null;

export const setProgress = (setLoading: (value: number) => void): ProgressController => {
  activeProgress?.clear();

  let percent = 0;
  let interval: ReturnType<typeof setInterval> | undefined;

  const tick = () => {
    if (percent <= 50) {
      percent = Math.min(50, percent + Math.round(Math.random() * 5));
    } else if (percent < 88) {
      percent = Math.min(88, percent + Math.round(Math.random() * 2));
    }
    setLoading(percent);
  };

  setLoading(0);
  interval = setInterval(tick, 120);

  const clear = () => {
    if (interval) {
      clearInterval(interval);
      interval = undefined;
    }
    if (activeProgress === controller) {
      activeProgress = null;
    }
  };

  const loaded = () =>
    new Promise<number>((resolve) => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        } else {
          clearInterval(interval);
          interval = undefined;
          resolve(percent);
        }
      }, 16);
    });

  const controller = { loaded, clear };
  activeProgress = controller;
  return controller;
};
