"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Linkedin, GraduationCap, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm tracking-wider uppercase"
          >
            Prospective MS Student 
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance"
          >
            Ahmadullah Hridoy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty"
          >
            An undergraduate senior year student of Materials Science and Engineering with a strong background in{" "}
            <span className="text-primary">computational materials</span>,{" "}
            <span className="text-primary">nanotechnology</span>, and{" "}
            <span className="text-primary">hydrogen fuel technology</span>. Currently preparing for graduate admission and seeking opportunities in research roles focused on sustainable material applications and energy solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadullah.hridoy@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm group-hover:underline">E-mail</span>
            </Link>
            <Link
              href="https://linkedin.com/in/ahmadullah-hridoy"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm group-hover:underline">LinkedIn</span>
            </Link>
            <Link
            href="https://scholar.google.com/citations?user=&user=2mjb&user=2mjbdoAAAAAJ"
            target="_blank"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
>
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm group-hover:underline">Google Scholar</span>
            </Link>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(+880) 1776 250287</span>
            </span>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Profile image decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none hidden lg:block"
      >
        <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-card">
          <Image
            src="/profile.jpg"
            alt="Ahmadullah Hridoy"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          {/* Grid overlay effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 288 384">
              <defs>
                <pattern id="grid-overlay" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="url(#gridGradient)" strokeWidth="1" />
                </pattern>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "rgb(139, 219, 249)", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(139, 219, 249)", stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-overlay)" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
