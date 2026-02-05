"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

const references = [

  {
    name: "Maliha Rahman",
    title: "Assistant Professor",
    department: "Department of Materials Science & Engineering (DMSE)",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    email: "maliha@mse.ruet.ac.bd",
  },
  {
    name: "Md Rafsan Jani Rudro",
    title: "Lecturer",
    department: "Department of Materials Science & Engineering (DMSE)",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    email: "rafsanjanirudro@mse.ruet.ac.bd",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg mr-4">06.</span>
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Currently preparing for graduate admission and seeking opportunities in research roles focused on sustainable material applications and energy solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmadullah.hridoy@gmail.com"
              className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  ahmadullah.2hridoy@gmail.com
                </p>
              </div>
            </Link>

            <Link
              href="https://linkedin.com/in/ahmadullah-hridoy"
              target="_blank"
              className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  ahmadullah-hridoy <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground">(+880) 1776 250287</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Dhopadaha-6670, Santhia, Pabna, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">References</h3>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-semibold text-foreground">{ref.name}</h4>
                  <p className="text-sm text-primary">{ref.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ref.department}</p>
                  <p className="text-xs text-muted-foreground">{ref.institution}</p>
                  <Link
                    href={`mailto:${ref.email}`}
                    className="text-xs text-primary hover:underline mt-2 inline-block"
                  >
                    {ref.email}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
