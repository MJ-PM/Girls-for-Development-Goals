import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";
import { cn } from "../utils";

const PROJECTS = [
  { title: "Campaign Against Teenage Pregnancy", category: "Education", status: "Completed", summary: "Addressed 300 secondary school students in Obiaruku, Delta State, to educate young individuals on the importance of standing against teenage pregnancy.", documentFile: "Campaign against teenage pregnancy.pdf" },
  { title: "A Love Letter to Myself", category: "Healthcare", status: "Completed", summary: "Reaching 3,000 students across 5 schools with interactive Q&A sessions on menstrual hygiene and distributing sanitary pads.", documentFile: "Love Letter to myself.pdf" },
  { title: "The Sister's Show Partnership", category: "Education", status: "Completed", summary: "Collaborated with a U.S.-based initiative to spark meaningful conversations on women's and girls' health, STDs, and career paths.", documentFile: "The Sister's Show Partnership.pdf" },
  { title: "The Bloody Cup Campaign", category: "Healthcare", status: "Completed", summary: "Partnered with AllMatters to distribute 150 menstrual cups in rural communities to counter period poverty.", documentFile: "GDGF_Bloody_Cup_Campaign_2020_2021.pdf" },
  { title: "Tech Skills for Female Entrepreneurs", category: "Tech", status: "Completed", summary: "Free online training designed to help young female entrepreneurs build businesses and establish global brands.", documentFile: "Tech Skills for Female Entrepreneurs.pdf" },
  { title: "Project Girl Child", category: "Healthcare", status: "Completed", summary: "Collaborated with Sisters By Heart Global Initiative to support girls with menstrual hygiene management training.", documentFile: "Project Girl Child.pdf" },
  { title: "Investing in Women Farmers", category: "Economic Growth", status: "Completed", summary: "Provided small grants to support women farmers in Obiaruku, acknowledging their crucial role in food production.", documentFile: "GDGF_IWD2024_Women_Farmers_Obiaruku.pdf" },
  { title: "Girls Vision Essay Competition", category: "Education", status: "Completed", summary: "Organized an essay competition with over 50 applicants to remind girls of the value of education.", documentFile: "Girls Vision essay competition.pdf" },
  { title: "Jollof Rice for Everyone", category: "Community", status: "Completed", summary: "A community drive to provide nourishing meals and bring smiles to families.", documentFile: "Jollof Rice for Everyone.pdf" },
  { title: "Menstruation Amidst Covid", category: "Healthcare", status: "Completed", summary: "Supported girls and women with critical menstrual hygiene kits directly during the pandemic lockdowns.", documentFile: "GDGF_Menstruation_Amidst_COVID19_2020.pdf" }
];

const CATEGORIES = ["All", "Education", "Healthcare", "Tech", "Economic Growth", "Community"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.category === activeCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4">
      {/* Header Bento Box */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-950 mb-4 md:mb-6">Field Initiatives</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg lg:text-xl font-light">
          A transparent overview of our concrete impact and community programs across sub-Saharan Africa.
        </p>
      </section>

      {/* Project Filterable Grid */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-6 border border-slate-200 flex flex-col min-h-[400px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 gap-4 border-b border-slate-200 pb-5">
          <h2 className="text-3xl font-serif font-bold text-indigo-950 flex items-center gap-3">
            <Filter className="w-6 h-6 text-slate-400"/> Active Initiatives
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={cn("px-4 py-2 rounded-full text-xs font-bold transition-all border", activeCategory === cat ? "bg-indigo-900 text-white border-indigo-900 shadow-md" : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100")}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} key={project.title} className="p-5 border border-slate-200 bg-slate-50 rounded-2xl flex flex-col hover:border-indigo-300 hover:shadow-lg transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className={cn("text-[9px] font-bold px-2 py-1 rounded-md uppercase", project.status === "Completed" ? "bg-indigo-100 text-indigo-700" : "bg-orange-100 text-orange-700")}>{project.status}</span>
                  <span className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">{project.category}</span>
                </div>
                <h4 className="font-bold text-lg text-indigo-950 mb-2 font-serif leading-tight group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600 text-xs mb-4 flex-grow leading-relaxed">{project.summary}</p>
                <a href={project.documentFile ? `/${project.documentFile}` : "#"} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 hover:text-orange-600 transition-colors flex items-center gap-1.5 w-fit mt-auto cursor-pointer">
                  Read Reports <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 text-base">No initiatives found for this category.</div>
          )}
        </div>
        {filteredProjects.length > 8 && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-indigo-50 text-indigo-600 font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-indigo-100 transition-colors"
            >
              {showAll ? "Show Less" : "See Other Projects"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
