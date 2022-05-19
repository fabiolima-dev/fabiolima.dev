export default function SectionTitle() {
  return (
    <h1 className="gradient-oceanic my-6 w-fit bg-gradient-to-r bg-clip-text text-center text-5xl font-extrabold text-transparent text-white md:text-6xl">
      Fabio Lima.
    </h1>
  );
}

{
  /* <div className="md: my-2">
<AnimatePresence>
  {!section && (
    <motion.h1
      key="Home title"
      animate={{
        background:
          "linear-gradient(to right, var(--gradient-oceanic-one), var(--gradient-oceanic-two), var(--gradient-oceanic-three))",
        WebkitBackgroundClip: "text",
        WebkitTextStrokeColor: "currentcolor",
        WebkitTextStrokeWidth: 0,
      }}
      transition={{ delay: 1.5 }}
      exit={{ opacity: 0, transition: { duration: 0, delay: 0.3 } }}
      ref={titleRef}
      className={`w-max bg-transparent text-5xl font-bold leading-tight [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white] md:text-6xl md:leading-tight`}
    >
      Fabio Lima.
    </motion.h1>
  )}
</AnimatePresence>
<div
  style={{ width: `${titleWidth}px` }}
  className="absolute top-[32px] h-16 md:top-[56px] md:h-20"
>
  <AnimatePresence>
    {!section && (
      <motion.div
        key="Home title box"
        animate={{
          width: ["0px", `${titleWidth}px`, `${titleWidth}px`, "0px"],
          marginLeft: ["0px", "0px", "0px", "auto"],
        }}
        transition={{
          delay: 1,
          ease: "easeInOut",
          duration: 1,
          times: [0, 0.3, 0.6, 1],
        }}
        className="gradient-oceanic relative h-16 rounded-md bg-gradient-to-r md:h-20"
      ></motion.div>
    )}
  </AnimatePresence>
</div>
</div> */
}
