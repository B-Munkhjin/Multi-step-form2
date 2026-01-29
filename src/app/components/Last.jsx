import { motion } from "framer-motion";

const Last = () => {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="m-auto relative top-45.5 w-120 h-full rounded-lg p-8 bg-white gap-7 ">
        <div className="flex flex-col h-32.25 gap-2 justify-start">
          <img src="./pinecone.png" className="w-15 h-15" />
          <h1 className="font-semibold text-[26px] text-[#202124] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            You're All Set 🔥
          </h1>
          <p className="text-lg text-[#8E8E8E] ">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Last;
