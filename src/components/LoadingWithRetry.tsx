import "@/styles/loading.css";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface LoadingWithRetryProps {
  useEffectVar: any;
}

export default function LoadingWithRetry({ useEffectVar }: LoadingWithRetryProps) {
  const [isRetryShowned, setIsRetryShowned] = useState(false);

  useEffect(() => {
    setIsRetryShowned(false);
    function showRetry() {
      setIsRetryShowned(true);
    }
    const timerId: NodeJS.Timeout = setTimeout(showRetry, 5000);
  }, [useEffectVar]);

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col">
      <Loading />
      {isRetryShowned && (
        <Button className="h-8 px-0" size={"sm"} onClick={reloadPage}>
          Retry
        </Button>
      )}
    </div>
  );
}
