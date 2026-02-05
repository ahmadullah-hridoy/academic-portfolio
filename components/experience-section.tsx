"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Users } from "lucide-react"

const experiences = [
  {
    type: "research",
    title: "Undergraduate Thesis",
    organization: "Dept. of MSE, RUET",
    role: "Fabrication of ferroelectric solar cell",
    supervisor: "Supervisor: Dr. Md. Aminul Islam",
    period: "May 2025 - Ongoing",
    location: "Rajshahi",
    highlights: [
      "Designed a CTS-based thin-film solar cell with ferroelectric PVDF layer",
      "Synthesized Cu₂SnS₃ (CTS) absorber via hydrothermal method",
      "Fabricated PVDF layer with controlled thickness and polarization",
    ],
  },
  {
    type: "research",
    title: "Research Internship",
    organization: "NESCO (Northern Electricity Supply Company Ltd.)",
    role: "Power Distribution & Energy Systems Research",
    period: "March 2025 - April 2025",
    location: "Rajshahi",
    highlights: [
      "Exploring integration of advanced materials for grid reliability",
      "Investigating materials selection in thermal management",
      "Utilizing MATLAB/ETAP for simulation and analysis",
    ],
  },
]

const leadership = [
  {
    title: "Joint Secretary",
    organization: "RUET Materials Club",
    period: "July 2025 - Ongoing",
    highlights: [
      "Organized 2 technical workshops on DFT: CASTEP and Actuator-based materials",
      "Successfully organized Industry-Academia Collaboration Meet (IACM) 2025",
    ],
  },
  {
    title: "Assistant Finance Secretary",
    organization: "RUET Materials Club",
    period: "February 2025 - July 2025",
    highlights: [],
  },
  {
    title: "Executive Member",
    organization: "RUET Carrier Forum (RCF)",
    period: "September 2023",
    highlights: ["Organized a career fair at RUET, connecting students with top industries"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">05.</span>
            Experience
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Research Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.organization}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <p className="text-primary text-sm">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                    {exp.supervisor && (
                      <p className="text-xs text-muted-foreground italic">{exp.supervisor}</p>
                    )}
                    {exp.highlights.length > 0 && (
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Leadership
            </h3>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={role.title + role.organization}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{role.title}</h4>
                      <span className="text-xs text-muted-foreground font-mono">{role.period}</span>
                    </div>
                    <p className="text-primary text-sm">{role.organization}</p>
                    {role.highlights.length > 0 && (
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        {role.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
