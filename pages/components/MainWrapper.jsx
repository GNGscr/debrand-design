"use client";
import React, {useRef} from "react";
import IntroSlider from "./IntroSlider";
import SectionTransition from "./SectionTransition";
import Header from "./Header";
import ProjectsSection from './ProjectsSection';
import useMediaQuery from "../hooks/useMediaQuery";

export default function MainWrapper() {
    const ref = useRef(null);
    const container = useRef();
    const media = useMediaQuery(ref);

    return (
        <div ref={ref} className="main-wrapper">
            <IntroSlider media={media} />
            {
                media === 'desktop'
                ? <div className="top-screen h-screen left-0 relative">
                    <SectionTransition media={media} />
                  </div>
                : <ProjectsSection media={media} container={container} />
            }
            <Header media={media} />
        </div>
    )
}