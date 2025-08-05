"use client";
import React, { useRef, useState } from "react";
import IntroSlider from "./IntroSlider";
import SectionTransition from "./SectionTransition";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import useMediaQuery from "../hooks/useMediaQuery";

export default function MainWrapper() {
  const ref = useRef(null);
  const container = useRef();
  const media = useMediaQuery(ref);
  const [isOverflowHidden, setIsOverflowHidden] = useState(true);

  return (
    <div
      ref={ref}
      className="main-wrapper"
      style={isOverflowHidden ? { overflowY: "hidden", height: "100vh" } : {}}
    >
      <IntroSlider
        media={media}
        setOverlow={() => setIsOverflowHidden(false)}
      />
      {media === "desktop" ? (
        <div className="top-screen h-screen left-0 relative">
          <SectionTransition media={media} />
        </div>
      ) : (
        <ProjectsSection media={media} container={container} />
      )}
      <Header media={media} />
    </div>
  );
}
