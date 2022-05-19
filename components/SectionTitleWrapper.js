import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function SectionTitleWrapper() {
  return (
    <div className="my-4 md:my-6">
      <SectionTitle />
      <div className="relative h-0 w-full">
        <motion.div
          animate={{
            width: ["0%", `100%`, `100%`, "0%"],
            marginLeft: ["0px", "0px", "auto", "auto"],
          }}
          transition={{
            delay: 1,
            duration: 1,
            times: [0, 0.3, 0.6, 1],
          }}
          className="gradient-oceanic relative bottom-[48px] h-[48px] w-0 rounded-md bg-gradient-to-r md:bottom-[60px] md:h-[60px]"
        ></motion.div>
      </div>
    </div>
  );
}
