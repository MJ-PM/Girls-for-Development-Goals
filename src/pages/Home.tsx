import { motion } from "motion/react";
import { ArrowRight, BookOpen, Heart, Activity, Globe, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { triggerDonate } from "../utils";

export function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4">
      {/* Hero Section */}
      <section className="col-span-1 md:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 flex flex-col justify-center relative overflow-hidden order-1 lg:min-h-[400px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-2xl opacity-50 -mr-20 -mt-20"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 w-full flex-grow flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-indigo-950 leading-tight mb-6">
            Shaping the Future <br className="hidden lg:block"/>
            Through <span className="italic">Empowerment</span>.
          </h1>
          <p className="text-slate-600 text-lg max-w-lg leading-relaxed mb-10">
            We provide access to education, mentorship, healthcare, and economic opportunities to nurture development-driven girls and youths with healthy minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link to="/contact" className="bg-orange-500 text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group">
              Partner With Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="/Girls4DevGoals%20Annual%20Report.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-800 px-6 py-4 rounded-xl font-bold text-sm border border-slate-200 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Read Annual Report <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Short CTA with Hero Image Background */}
      <section 
        className="col-span-1 md:col-span-5 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-center order-2 lg:min-h-[400px] relative overflow-hidden group shadow-md"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(30, 27, 75, 0.85), rgba(30, 27, 75, 0.95)), url('/Pic 1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-indigo-950/10 transition-colors duration-500"></div>
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <span className="text-orange-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-3">FEATURED SPOTLIGHT</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">Join the Movement for Generational Impact</h2>
            <p className="text-indigo-200 text-sm md:text-base mb-8 max-w-sm leading-relaxed">We welcome strategic partnerships, grants, and dedicated volunteers to expand our reach worldwide.</p>
          </div>
          <Link to="/contact" className="w-fit px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-orange-600 rounded-xl transition-all text-xs inline-flex items-center justify-center shadow-lg shadow-indigo-950/50 hover:scale-105 active:scale-95 duration-200 mt-auto">
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Impact Tracker */}
      {[
        { number: "2400+", label: "Girls Empowered", color: "text-indigo-300", bg: "bg-indigo-900", icon: <Heart className="w-5 h-5" /> },
        { number: "800+", label: "Products Distributed", subtext: "500+ disposable pads • 300+ menstrual cups", color: "text-orange-500", bg: "bg-white border-slate-200", icon: <Activity className="w-5 h-5" /> },
        { number: "15+", label: "Communities", color: "text-slate-400", bg: "bg-white border-slate-200", icon: <Globe className="w-5 h-5" /> },
        { number: "100%", label: "Commitment", color: "text-green-500", bg: "bg-white border-slate-200", icon: <Heart className="w-5 h-5" /> },
      ].map((stat, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className={`col-span-1 border md:col-span-3 rounded-2xl p-4 flex flex-col justify-between order-3 min-h-[110px] ${stat.bg} ${stat.bg.includes('bg-indigo') ? 'text-white' : 'text-indigo-950'}`}>
          <div className={`${stat.color} font-serif italic text-sm font-semibold mb-2`}>{stat.icon}</div>
          <div>
            <div className="font-serif text-xl md:text-2xl font-bold">{stat.number}</div>
            <div className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${stat.bg.includes('bg-indigo') ? 'text-indigo-200' : 'text-slate-500'}`}>{stat.label}</div>
            {stat.subtext && <div className={`text-[9px] font-bold mt-1.5 ${stat.bg.includes('bg-indigo') ? 'text-indigo-300' : 'text-slate-400/80'}`}>{stat.subtext}</div>}
          </div>
        </motion.div>
      ))}

      {/* Pillars Section */}
      {[
        { icon: <Heart className="w-5 h-5" />, title: "Health & Well-being", sdg: "SDG 3", color: "bg-green-100 text-green-700", desc: "Menstrual hygiene management, SRHR, and nutrition." },
        { icon: <BookOpen className="w-5 h-5" />, title: "Quality Education", sdg: "SDG 4", color: "bg-indigo-100 text-indigo-700", desc: "Access to education, scholarships, and digital literacy." },
        { icon: <Globe className="w-5 h-5" />, title: "Gender Equality", sdg: "SDG 5", color: "bg-orange-100 text-orange-700", desc: "Advocacy for rights, policy engagement, and leadership." },
        { icon: <Activity className="w-5 h-5" />, title: "Economic Growth", sdg: "SDG 8", color: "bg-blue-100 text-blue-700", desc: "Skills training, employability, and entrepreneurship." }
      ].map((pillar, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="col-span-1 md:col-span-6 lg:col-span-3 bg-slate-100 rounded-2xl p-4 md:p-5 border border-slate-200 flex flex-col order-4 hover:border-indigo-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
             <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${pillar.color}`}>{pillar.sdg}</span>
             <div className="text-slate-400">{pillar.icon}</div>
          </div>
          <h3 className="font-bold text-base text-indigo-950 mb-1 mt-auto font-serif">{pillar.title}</h3>
          <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
        </motion.div>
      ))}

      {/* Project Photos Grid Section */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 order-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
          <div>
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Impact In Action</span>
            <h2 className="font-serif text-3xl font-bold text-indigo-950 mt-3 mb-2">Our Field Work</h2>
            <p className="text-slate-500 text-sm max-w-xl">Real snapshots showing our active projects, resource distribution, and community empowerment initiatives.</p>
          </div>
          <Link to="/projects" className="text-sm font-bold text-indigo-900 hover:text-orange-500 transition-colors inline-flex items-center gap-1.5 shrink-0 group">
            View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { src: "/Pic 2.jpeg", alt: "GDGF Outreach Photograph 2" },
            { src: "/Pic 3.jpeg", alt: "GDGF Outreach Photograph 3" },
            { src: "/Pic 4.jpeg", alt: "GDGF Outreach Photograph 4" },
            { src: "/Pic 5.jpeg", alt: "GDGF Outreach Photograph 5" },
            { src: "/Pic 6.jpeg", alt: "GDGF Outreach Photograph 6" },
          ].map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm group cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-indigo-950/20 group-hover:bg-indigo-950/0 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support / Bank Details Section */}
      <section className="col-span-1 md:col-span-12 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-white border border-indigo-800 shadow-xl flex flex-col items-center text-center relative overflow-hidden order-6">
        {/* Background Decorative Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl space-y-5 relative z-10 flex flex-col items-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 bg-white/10 px-3.5 py-1.5 rounded-full">SUPPORT OUR WORK</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">Every Contribution Empowers a Girl Child</h2>
          <p className="text-indigo-200 text-sm md:text-base leading-relaxed max-w-2xl">
            Your generous support goes directly toward funding hygiene kits, school uniforms, educational scholarships, digital literacy toolkits, and community development programs. Together, we can break cycles of limitation and build future leaders.
          </p>
          <div className="pt-4">
            <button
              onClick={triggerDonate}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-orange-950/30 cursor-pointer"
            >
              Support via Donation <Heart className="w-4 h-4 fill-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

