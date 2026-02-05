"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadullah.hridoy@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/ahmadullah-hridoy"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <span className="text-muted-foreground flex items-center gap-2">
              <Phone className="w-5 h-5" />
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Designed & Built by{" "}
            <span className="text-primary">Ahmadullah Hridoy</span>
          </p>
          
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
