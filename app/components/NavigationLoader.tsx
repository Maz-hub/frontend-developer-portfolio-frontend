import { useNavigation } from "react-router";
import { useEffect, useState } from "react";

const NavigationLoader = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (navigation.state === "loading") {
      setProgress(30);
      const timer = setTimeout(() => setProgress(90), 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(100);
      const timer = setTimeout(() => setProgress(0), 300);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 z-[9999] h-1 w-full">
      <div
        className="h-full bg-light-yellow shadow-lg"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default NavigationLoader;
