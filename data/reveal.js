const reveal = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "tween", delay: i * 0.1 },
  }),
};

export default reveal;
