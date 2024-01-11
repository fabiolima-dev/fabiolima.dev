const reveal = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: { type: "tween", delay: i * 0.1, duration: 0.5 },
  }),
};

export default reveal;
