import { motion } from 'framer-motion'
import { Link, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Code, Shield, Users, FileText } from 'lucide-react'
import Background3D from './components/Background3D'
import profileImg from './assets/profile.png'
import './index.css'

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

const textReveal = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function App() {
  return (
    <div className="app">
      <Background3D />
      
      {/* Hero Section */}
      <section className="hero container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient">AHMAD TALKIM</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Professional Web Developer & Digital Marketer
          </motion.p>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span><MapPin size={18} /> Palembang, Indonesia</span>
            <span><Phone size={18} /> +62 853 7341 44277</span>
            <span><Mail size={18} /> talkima324@gmail.com</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <div className="glass-card about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -60, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={profileImg} alt="Ahmad Talkim" className="profile-pic" />
          </motion.div>
          <motion.div 
            className="about-text"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.h2 variants={textReveal} className="text-gradient">Tentang Saya</motion.h2>
            <motion.p variants={textReveal}>
              Saya adalah seorang profesional yang berdedikasi dengan pengalaman luas di berbagai bidang teknologi dan layanan. 
              Dengan keahlian selama <strong>3 tahun dalam pembuatan website</strong> dan <strong>4 tahun di Digital Marketing</strong>, 
              saya menggabungkan aspek teknis dan strategi pemasaran untuk menciptakan solusi digital yang berdampak.
            </motion.p>
            <motion.div className="stats-grid" variants={staggerContainer}>
              {[
                { val: "3+", label: "Tahun Web Dev" },
                { val: "4+", label: "Tahun Marketing" },
                { val: "2+", label: "Tahun CS" },
                { val: "1", label: "Tahun Pengajar" }
              ].map((stat, i) => (
                <motion.div key={i} className="stat-item" variants={fadeInUp}>
                  <h3 className="text-gradient">{stat.val}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="container">
        <div className="timeline-grid">
          <motion.div {...fadeInUp} className="glass-card">
            <h2 className="text-gradient"><Briefcase /> Pengalaman Kerja</h2>
            <div className="timeline-item">
              <motion.h3 variants={textReveal}>PT Melia Sejahtera</motion.h3>
              <motion.p variants={textReveal} className="role">Admin | Feb 2021 - Mei 2022</motion.p>
              <motion.p variants={textReveal}>Mengelola administrasi operasional dan memastikan efisiensi alur kerja perusahaan.</motion.p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="glass-card">
            <h2 className="text-gradient"><BookOpen /> Pendidikan</h2>
            <div className="timeline-item">
              <motion.h3 variants={textReveal}>SMA Negeri 1 Lempuing Jaya</motion.h3>
              <motion.p variants={textReveal} className="role">IPS Education | 2018 - 2021</motion.p>
              <motion.p variants={textReveal}>Lulus dengan pemahaman kuat dalam aspek sosial dan komunikasi.</motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="container">
        <motion.h2 variants={fadeInUp} className="section-title"><span className="text-gradient">Kemampuan Utama</span></motion.h2>
        <motion.div 
          className="skills-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { icon: <Code />, label: "Developer", color: "#3b82f6" },
            { icon: <Shield />, label: "IT Security", color: "#22d3ee" },
            { icon: <Users />, label: "Customer Service", color: "#f472b6" },
            { icon: <Users />, label: "Teamwork", color: "#fbbf24" },
            { icon: <Briefcase />, label: "IT Support", color: "#10b981" },
            { icon: <FileText />, label: "Administration", color: "#8b5cf6" },
            { icon: <FileText />, label: "Excel & Word", color: "#ec4899" }
          ].map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <p>{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <motion.h2 variants={fadeInUp} className="section-title"><span className="text-gradient">Hasil Karya Developer</span></motion.h2>
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            {
              title: "E-Commerce Modern",
              desc: "Platform belanja online dengan integrasi pembayaran dan desain responsif.",
              link: "https://github.com/",
              tech: ["React", "Node.js", "Three.js"]
            },
            {
              title: "Dashboard Analytics",
              desc: "Sistem pemantauan data real-time dengan visualisasi grafik interaktif.",
              link: "https://github.com/",
              tech: ["React", "Chart.js", "Firebase"]
            },
            {
              title: "Company Profile 3D",
              desc: "Website profil perusahaan dengan animasi 3D yang mendalam.",
              link: "https://github.com/",
              tech: ["React", "Three.js", "Framer Motion"]
            }
          ].map((project, index) => (
            <motion.div 
              key={index}
              className="glass-card project-card"
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <motion.h3 variants={textReveal}>{project.title}</motion.h3>
              <motion.p variants={textReveal}>{project.desc}</motion.p>
              <motion.div className="tech-stack" variants={staggerContainer}>
                {project.tech.map((t, i) => <motion.span key={i} variants={textReveal} className="tech-tag">{t}</motion.span>)}
              </motion.div>
              <motion.a variants={textReveal} href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                Lihat Demo <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Awards & Social */}
      <section className="container">
        <div className="footer-grid">
          <motion.div {...fadeInUp} className="glass-card">
            <h2 className="text-gradient"><Award /> Penghargaan</h2>
            <div className="award-item">
              <motion.h3 variants={textReveal}>Developer Website</motion.h3>
              <motion.p variants={textReveal}>Pengembangan Website | Jan 2019</motion.p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="glass-card">
            <h2 className="text-gradient"><Link /> Media Sosial</h2>
            <motion.p variants={textReveal}>Hubungi saya atau lihat portofolio lainnya di Facebook:</motion.p>
            <motion.a 
              variants={textReveal}
              href="https://www.facebook.com/share/1BGmsMNHi7/" 
              target="_blank" 
              rel="noreferrer" 
              className="portfolio-link"
              whileHover={{ x: 5 }}
            >
              Buka Facebook <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <footer className="container">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2026 Ahmad Talkim. Dibuat dengan 3D Animation & React.
        </motion.p>
      </footer>
    </div>
  )
}
