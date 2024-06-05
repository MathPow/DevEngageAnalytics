import Spline from "@splinetool/react-spline";
import React from "react";

export default function SplineViewer() {
  return (
    <Spline
      className="absolute left-0 right-0 top-0 -z-10 w-10"
      scene="https://prod.spline.design/cEGK4BVdk2pDyxvF/scene.splinecode"
    />
  );
}
