"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const leftColumnVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", stiffness: 100 },
    },
  };

  const rightColumnVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", stiffness: 100 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 justify-between flex items-center gap-6 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div
        className="space-y-6 min-h-screen w-full mx-auto max-w-sm px-6 py-10 sm:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]"
        variants={leftColumnVariants}>
        <motion.div variants={itemVariants}>
          <Image
            src="/logo.svg"
            alt=""
            width={200}
            height={100}
            className="py-12"
          />
        </motion.div>
        <motion.div className="space-y-2" variants={itemVariants}>
          <h1 className="text-2xl md:text-3xl font-bold">Welcome</h1>
          <p className="text-sm text-gray-500">
            Your One-Stop Shop for Effortless Fleet Management
          </p>
        </motion.div>

        <motion.form
          action=""
          className="flex flex-col gap-4"
          variants={formVariants}>
          <motion.div className="w-full" variants={itemVariants}>
            <label htmlFor="username" className="font-semibold">
              Username / email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-primary"
            />
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-primary"
            />
          </motion.div>

          <motion.a
            href="#"
            className="text-primary text-sm self-end font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}>
            Forgot Password?
          </motion.a>

          <motion.button
            type="submit"
            className="px-4 py-2 rounded-full bg-primary text-white shadow-primary/70 shadow-md"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Login
          </motion.button>
        </motion.form>

        <motion.div
          className="text-center text-xs justify-self-end"
          variants={itemVariants}>
          Powered by <span className="font-bold">360ExpertSolutions</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-1/2 py-10 max-sm:hidden"
        variants={rightColumnVariants}>
        <Image
          src="/images/login_bg.svg"
          alt=""
          width={1000}
          height={700}
          priority
          className="w-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}
