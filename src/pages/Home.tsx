import { motion } from "motion/react";
import { ArrowRight, BookOpen, Heart, Activity, Globe, Download } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Short CTA */}
      <section className="col-span-1 md:col-span-5 bg-indigo-900 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-center order-2 lg:min-h-[400px]">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">Join the Movement for Generational Impact</h2>
        <p className="text-indigo-200 text-base mb-8 max-w-sm">We welcome strategic partnerships, grants, and dedicated volunteers to expand our reach worldwide.</p>
        <Link to="/contact" className="w-fit px-8 py-4 bg-white text-indigo-900 font-bold uppercase tracking-widest hover:bg-slate-100 rounded-xl transition-colors text-xs mt-auto inline-flex items-center justify-center">
          Become a Partner
        </Link>
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
    </div>
  );
}
