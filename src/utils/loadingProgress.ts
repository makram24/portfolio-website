type ProgressController = {
  loaded: () => Promise<number>;
  clear: () => void;
};

let activeProgress: ProgressController | null = null;

export const setProgress = (
  setLoading: (value: number) => void
): ProgressController => {
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
