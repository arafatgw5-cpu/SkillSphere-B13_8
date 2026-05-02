"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TopInstructors from "./TopInstructors";

export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-28 px-4 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        {/* 🔥 Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Learn from Industry Experts and grow your career.
          </p>

          <Link
            href="/courses"
            className="btn bg-orange-500 text-white mt-6 hover:bg-orange-600"
          >
            Explore Courses
          </Link>
        </motion.div>
      </section>

      <TopInstructors />
    </>
  );
}