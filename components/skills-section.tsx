"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Code, Database, Microscope, PenTool, FileSpreadsheet } from "lucide-react"

const skillCategories = [
  {
    title: "Computational Materials Tools",
    icon: Cpu,
    skills: ["Materials Studio", "Quantum ESPRESSO", "VESTA", "BURAI"],
  },
  {
    title: "Materials Modeling & Simulation",
    icon: Microscope,
    skills: ["Density Functional Theory (DFT)", "Molecular Dynamics (MD)", "Machine Learning (ML)"],
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "MATLAB", "C"],
  },
  {
    title: "Characterization & Analysis",
    icon: FileSpreadsheet,
    skills: ["XRD (X'Pert High Score Plus)", "SEM (ImageJ)", "FTIR", "UV-Vis Spectroscopy (Origin Pro)", "DLS Particle Size Analyzer", "DTA", "DSC", "TGA"],
  },
  {
    title: "Database & Data Analysis",
    icon: Database,
    skills: ["MySQL", "Microsoft SQL", "Microsoft PowerBI", "Tableau"],
  },
  {
    title: "CAD & Design Tools",
    icon: PenTool,
    skills: ["SolidWorks", "Autodesk AutoCAD", "Canva", "Microsoft Office Suites"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">04.</span>
            Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1.5 bg-secondary text-muted-foreground rounded-full hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
