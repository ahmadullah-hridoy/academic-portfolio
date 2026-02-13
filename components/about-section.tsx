"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Target, Briefcase, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const researchInterests = [
    "Computational Materials",
    "Nanocomposite",
    "Hydrogen Fuel Production, Storage, and Safety",
    "Nanomaterials Synthesis & Characterization",
    "Solar Energy",
    "Thin Film Technology",
  ]

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">01.</span>
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Rajshahi University of Engineering & Technology (RUET)</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  B.Sc. in Materials Science and Engineering
                </p>
                <p className="text-sm text-muted-foreground">March 2022 – Ongoing</p>
                <p className="text-primary font-mono text-sm mt-2">CGPA: 3.58/4.00</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
            <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div >
                <h3 className="text-lg font-semibold text-foreground mb-2">Achievement</h3>
                <p className="text-muted-foreground" >
                  .Achieved University Merit Scholarship <span className="text-primary font-medium">4 times</span>
                </p>
                <p className="text-muted-foreground">
                  .Won <span className="text-primary font-medium">First Runner Up Prize</span> for poster at RUET University Day Poster Presentation Competition 
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border h-full">
              <Target className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
