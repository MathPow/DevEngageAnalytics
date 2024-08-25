import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export function useHomePageMotion() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const aboutInfoCard1Ref = useRef(null);
  const aboutInfoCard2Ref = useRef(null);
  const aboutInfoCard3Ref = useRef(null);
  const isAboutInfoCard1InView = useInView(aboutInfoCard1Ref);
  const isAboutInfoCard2InView = useInView(aboutInfoCard2Ref);
  const isAboutInfoCard3InView = useInView(aboutInfoCard3Ref);
  const testCardRef = useRef(null);
  const isTestCardInView = useInView(testCardRef);
  const infoSection1Ref = useRef<HTMLDivElement>(null);
  const infoSection2Ref = useRef<HTMLDivElement>(null);
  const isInfoSection1InView = useInView(infoSection1Ref);
  const isInfoSection2InView = useInView(infoSection2Ref);
  const contributingInfoCard1Ref = useRef(null);
  const contributingInfoCard2Ref = useRef(null);
  const contributingInfoCard3Ref = useRef(null);

  const isContributingInfoCard1InView = useInView(contributingInfoCard1Ref);
  const isContributingInfoCard2InView = useInView(contributingInfoCard2Ref);
  const isContributingInfoCard3InView = useInView(contributingInfoCard3Ref);

  const [hasBeenInView, setHasBeenInView] = useState({
    aboutInfoCard1: false,
    aboutInfoCard2: false,
    aboutInfoCard3: false,
    testCard: false,
    infoSection1: false,
    infoSection2: false,
    contributingInfoCard1: false,
    contributingInfoCard2: false,
    contributingInfoCard3: false,
  });

  useEffect(() => {
    if (isAboutInfoCard1InView && !hasBeenInView.aboutInfoCard1) {
      setHasBeenInView((prevState) => ({ ...prevState, aboutInfoCard1: true }));
    }
  }, [isAboutInfoCard1InView]);

  useEffect(() => {
    if (isAboutInfoCard2InView && !hasBeenInView.aboutInfoCard2) {
      setHasBeenInView((prevState) => ({ ...prevState, aboutInfoCard2: true }));
    }
  }, [isAboutInfoCard2InView]);

  useEffect(() => {
    if (isAboutInfoCard3InView && !hasBeenInView.aboutInfoCard3) {
      setHasBeenInView((prevState) => ({ ...prevState, aboutInfoCard3: true }));
    }
  }, [isAboutInfoCard3InView]);

  useEffect(() => {
    if (isTestCardInView && !hasBeenInView.testCard) {
      setHasBeenInView((prevState) => ({ ...prevState, testCard: true }));
    }
  }, [isTestCardInView]);

  useEffect(() => {
    if (isInfoSection1InView && !hasBeenInView.infoSection1) {
      setHasBeenInView((prevState) => ({ ...prevState, infoSection1: true }));
    }
  }, [isInfoSection1InView]);

  useEffect(() => {
    if (isInfoSection2InView && !hasBeenInView.infoSection2) {
      setHasBeenInView((prevState) => ({ ...prevState, infoSection2: true }));
    }
  }, [isInfoSection2InView]);

  useEffect(() => {
    if (isContributingInfoCard1InView && !hasBeenInView.contributingInfoCard1) {
      setHasBeenInView((prevState) => ({ ...prevState, contributingInfoCard1: true }));
    }
  }, [isContributingInfoCard1InView]);

  useEffect(() => {
    if (isContributingInfoCard2InView && !hasBeenInView.contributingInfoCard2) {
      setHasBeenInView((prevState) => ({ ...prevState, contributingInfoCard2: true }));
    }
  }, [isContributingInfoCard2InView]);

  useEffect(() => {
    if (isContributingInfoCard3InView && !hasBeenInView.contributingInfoCard3) {
      setHasBeenInView((prevState) => ({ ...prevState, contributingInfoCard3: true }));
    }
  }, [isContributingInfoCard3InView]);

  return {
    titleRef,
    descriptionRef,
    aboutInfoCard1Ref,
    aboutInfoCard2Ref,
    aboutInfoCard3Ref,
    testCardRef,
    infoSection1Ref,
    infoSection2Ref,
    contributingInfoCard1Ref,
    contributingInfoCard2Ref,
    contributingInfoCard3Ref,
    hasBeenInView,
  };
}
