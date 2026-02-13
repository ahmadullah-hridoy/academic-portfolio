"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const journals = [
  {
    title: "A DFT and MD Analysis to Predict Hydrogen Storage, Mechanical, Thermodynamic, Electronic, and Optical Characteristics of Novel Perovskite Hydrides XZrH₃ (X= Mg, Ca, and Sr)",
    authors: "A. Hridoy, S. M. Nabil, and A. K. M. A. Habib",
    journal: "International Journal of Hydrogen Energy",
    year: "2026",
    doi: "https://doi.org/10.1016/j.ijhydene.2026.153533",
  },
  {
    title: "Recent Progress in Photocatalytic Green Hydrogen Production Using Rare Earth Metal-Based Photocatalysts",
    authors: "A. Hridoy, M. T. Rahman, R. B. Siddique, M. Y. Arafat, and A. K. M. A. Habib",
    journal: "Journal of Rare Earths",
    year: "2025",
    doi: "https://doi.org/10.1016/j.jre.2025.12.020",
  },
  {
    title: "Defect Engineering in Nanomaterials: A Pathway to Enhanced Hydrogen Storage Performance",
    authors: "A. Hridoy, R. B. Siddique, N. I. Alam, A. K. M. A. Habib, M. A. R. Tonmoy, M. A. Zaed, and R. Saidur",
    journal: "International Journal of Energy Research",
    year: "2026",
    doi: "https://doi.org/10.1155/er/5418933",
  },
]

const conferences = [
  {
    title: "Strategies for Improved Efficiency of Hydrogen Storage in Metal-Organic Frameworks: A Comprehensive Review",
    authors: "A. Hridoy, R. B. Siddique, M. A. R. Tonmoy, M. H. Mahmud, and A. K. M. A. Habib",
    conference: "8th ICMIEE 2025, Khulna, Bangladesh",
    doi: "https://doi.org/10.38032/scse.2025.3.38",
  },
  {
    title: "Ag (111) Monolayer-Based Plasmonic Optical Sensor for Detecting VOCs: A First-Principles Analysis",
    authors: "A. Hridoy, S. M. Nabil, and A. K. M. A. Habib",
    conference: "7th IEEE EICT 2025, Khulna, Bangladesh",
    status: "Accepted",
  },
  {
    title: "The First-principles study of the structural, optoelectronic, and photocatalytic properties of lead-free halide perovskite RbGeCl₃ for CO₂ photo-degradation application",
    authors: "A. Hridoy, S. M. Nabil, A. Khan, J. Alam, and J. F. Mim",
    conference: "8th ICMERE 2025, Chattogram, Bangladesh",
    status: "Accepted",
  },
  {
    title: "A Comprehensive Overview of Generating Hydrogen Using Perovskite Materials",
    authors: "M. R. I. Lamun, M. S. A. H. Simul, and A. Hridoy",
    conference: "8th ICMIEE 2025, Khulna, Bangladesh",
    status: "Accepted",
  },

]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAllConferences, setShowAllConferences] = useState(false)

  return (
    <section id="publications" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">03.</span>
            Publications
          </h2>
          <p className="text-muted-foreground mb-12">
            <Link
              href="https://scholar.google.com/citations?user=ahmadullah-hridoy"
              target="_blank"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              View on Google Scholar <ExternalLink className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>

        {/* Journals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Journal Articles
          </h3>
          <div className="space-y-4">
            {journals.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-primary font-mono">{pub.journal}</span>
                  <span className="text-muted-foreground">({pub.year})</span>
                  {pub.status && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                      {pub.status}
                    </span>
                  )}
                  {pub.doi && (
                    <Link
                      href={pub.doi}
                      target="_blank"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      DOI <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Conference Proceedings
          </h3>
          <div className="space-y-4">
            {(showAllConferences ? conferences : conferences.slice(0, 2)).map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-primary font-mono">{pub.conference}</span>
                  {pub.status && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                      {pub.status}
                    </span>
                  )}
                  {pub.doi && (
                    <Link
                      href={pub.doi}
                      target="_blank"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      DOI <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {conferences.length > 2 && (
            <button
              onClick={() => setShowAllConferences(!showAllConferences)}
              className="mt-4 text-primary hover:underline flex items-center gap-1 text-sm"
            >
              {showAllConferences ? (
                <>
                  Show less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show all {conferences.length} conferences <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
