/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cloud,
  Code,
  Brain,
  ChevronRight,
} from "lucide-react";
import profileImg from "./assets/img/profile.jpg";

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
    whileTap={{ scale: 0.95 }}
    className="p-3 glass-card rounded-full transition-colors duration-300"
    aria-label={label}
  >
    <Icon size={20} />
  </motion.a>
);

const SkillCard = ({
  title,
  skills,
  icon: Icon,
}: {
  title: string;
  skills: string[];
  icon: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl glow-hover transition-all duration-500"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
              >
                Muhammad Haikal Firmansyah
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/60 font-medium mb-8 max-w-xl leading-relaxed"
              >
                Penggemar DevOps <span className="text-accent/50 mx-1">|</span>{" "}
                Solusi Cloud <span className="text-accent/50 mx-1">|</span>{" "}
                Ketua Google Developer Groups
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start gap-4"
              >
                <SocialLink
                  href="https://github.com/haikal23095"
                  icon={Github}
                  label="GitHub"
                />
                <SocialLink
                  href="http://linkedin.com/in/muhammad-haikal-firmansyah"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:firmansyahhaikal86@gmail.com"
                  icon={Mail}
                  label="Email"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
              Siapakah Saya
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
            Mahasiswa Teknik Informatika tingkat akhir dengan passion untuk
            membangun{" "}
            <span className="text-white font-medium">
              infrastruktur yang scalable
            </span>{" "}
            dan aplikasi web modern. Saat ini saya memimpin{" "}
            <span className="text-white font-medium">
              Google Developer Groups
            </span>{" "}
            di Universitas Trunojoyo Madura serta menjelajahi{" "}
            <span className="text-white font-medium">Deep Learning</span> untuk
            solusi yang lebih cerdas.
          </p>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
              Kompetensi Utama
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard
              title="DevOps"
              icon={Cloud}
              skills={[
                "GCP",
                "Alibaba Cloud",
                "Docker",
                "Terraform",
                "Kubernetes",
                "CI/CD",
              ]}
            />
            <SkillCard
              title="Backend"
              icon={Code}
              skills={[
                "PHP",
                "Laravel",
                "Python",
                "Node.js",
                "PostgreSQL",
                "Redis",
              ]}
            />
            <SkillCard
              title="AI/ML"
              icon={Brain}
              skills={["Vertex AI", "Deep Learning", "TensorFlow", "NLP"]}
            />
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="glass-card p-12 rounded-[2rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
              Siap melihat karya saya?
            </h2>
            <motion.a
              href="https://porto.firmansyahdev.my.id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-black transition-colors duration-300 relative z-10"
            >
              LIHAT PROYEK SAYA
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Firmansyah. Dibuat dengan bantuan AI.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Tersedia untuk peluang baru
          </div>
        </footer>
      </main>
    </div>
  );
}
