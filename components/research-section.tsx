"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Beaker, Sun, Atom, Zap, Leaf } from "lucide-react"

const projects = [
  {
    title: "Perovskite Solar Cells",
    icon: Sun,
    description: "First-principles DFT calculations and SCAPS-1D simulations on novel perovskite absorber layers. Investigating electronic, optical, and photovoltaic properties of layered perovskite structures.",
    tags: ["DFT", "SCAPS-1D", "Photovoltaics"],
  },
  {
    title: "Hydrogen Production via Water Splitting",
    icon: Atom,
    description: "DFT simulations to investigate the catalytic activity of novel materials for water splitting and CO₂ reduction. Exploring electronic structures, adsorption energies, and charge transfer characteristics.",
    tags: ["DFT", "Catalysis", "Green Hydrogen"],
  },
  {
    title: "Hydrogen Storage and Safety",
    icon: Zap,
    description: "DFT and MD simulations on metal hydrides (XZrH₃), MOFs, and carbon-based nanostructures to predict hydrogen storage, thermodynamic stability, and mechanical behavior.",
    tags: ["MD Simulation", "Metal Hydrides", "MOFs"],
  },
  {
    title: "Ferroelectric Solar Cell (Thesis)",
    icon: Beaker,
    description: "Designed and fabricated a ferroelectric solar cell using poled PVDF integrated with CTS layer. Studying ferroelectric polarization effects on carrier separation.",
    tags: ["Thesis", "PVDF", "CTS"],
  },
  {
    title: "Green Synthesis of Nanoparticles",
    icon: Leaf,
    description: "Synthesized Ag₂O and Cu₂O nanoparticles via eco-friendly green synthesis routes. Characterized using XRD, SEM, UV-Vis spectroscopy, and FTIR.",
    tags: ["Nanoparticles", "Green Synthesis", "Characterization"],
  },
]

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">02.</span>
            Research Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Focused on computational materials science, renewable energy, and sustainable technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded font-mono"
                    >
                      {tag}
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
