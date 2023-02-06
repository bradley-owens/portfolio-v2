import useDeviceSize from "./useDeviceSize";

export function AnimationStyle(delayTime) {
  const [width] = useDeviceSize();

  if (width > 1000) {
    return {
      hidden: {
        x: 40,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        x: -40,
        scale: 1,
        opacity: 1,
        transition: {
          delay: delayTime,
        },
      },
    };
  } else {
    return {
      hidden: {
        y: 40,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        y: -40,
        scale: 1,
        opacity: 1,
        transition: {
          delay: delayTime,
        },
      },
    };
  }
}
