import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter, ChevronLeft, ChevronRight } from "lucide-react";
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

const GALLERY_PHOTOS = [
  "/Pic 1.jpeg",
  "/Pic 2.jpeg",
  "/Pic 3.jpeg",
  "/Pic 4.jpeg",
  "/Pic 5.jpeg",
  "/Pic 6.jpeg"
];

function FlyerImage({ baseName, alt }: { baseName: string; alt: string }) {
  const extensions = [".jpeg", ".jpg", ".png", ".webp"];
  const [extIndex, setExtIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const src = `/${baseName}${extensions[extIndex]}`;

  const handleError = () => {
    if (extIndex < extensions.length - 1) {
      setExtIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-6 text-center border border-dashed border-slate-300 rounded-2xl">
        <span className="text-indigo-400 text-[10px] font-mono font-bold tracking-widest mb-1">FLYER PREVIEW</span>
        <span className="text-indigo-950 font-serif font-bold text-sm leading-tight">{alt}</span>
        <p className="text-slate-400 text-[10px] mt-2 max-w-[200px]">
          Please upload a flyer titled "{baseName}" (.jpeg, .jpg, or .png) in the root/public directory.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      loading="lazy"
    />
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
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

      {/* Visual Gallery Highlights Section */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-200">
        {/* Active Photo Display with absolute controls */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] w-full border border-slate-200 bg-slate-900 shadow-md group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhotoIndex}
              initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={GALLERY_PHOTOS[activePhotoIndex]}
                alt={`GDGF Field Action Photograph ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1))}
            aria-label="Previous Photo"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-white text-indigo-950 shadow-md transition-all hover:scale-105 active:scale-95 z-20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setActivePhotoIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1))}
            aria-label="Next Photo"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-white text-indigo-950 shadow-md transition-all hover:scale-105 active:scale-95 z-20 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators / Progress Dot HUD Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {GALLERY_PHOTOS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                aria-label={`Go to photo ${idx + 1}`}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  activePhotoIndex === idx
                    ? "bg-white scale-125 px-2"
                    : "bg-white/40 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Project Section */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-orange-600 bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Ongoing Project
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-indigo-950 leading-tight">
            Empowering 100+ Girls in Abraka with Sustainable Period Care
          </h2>
          <p className="text-indigo-900 font-medium text-base md:text-lg mt-3 max-w-3xl leading-relaxed">
            Girls for Development Goals Foundation partners with The Cup Foundation and Lunette to put dignity, health, and the environment back into the hands of young women.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Major Campaign Flyer */}
          <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-24">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group relative">
              <img
                src="/project_flyer.jpeg"
                alt="EMPOWERHER With NextGenFlow Campaign Flyer"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/40 to-transparent p-4 text-white text-xs font-sans text-center">
                <span className="font-bold text-orange-400 block uppercase font-mono text-[10px] tracking-widest">Major Campaign Flyer</span>
                EMPOWERHER With NextGenFlow — Delta &amp; Kebbi State, Nigeria
              </div>
            </div>
          </div>

          {/* Right Column: Project Description */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
            {/* Block 1 */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-indigo-950">
                A period should never put a girl's future on hold
              </h3>
              <p className="text-slate-600 leading-relaxed">
                For too many girls and young women, menstruation still means missed school, missed opportunities, and quiet shame. The cost of disposable pads, the lack of clean and private facilities, and the silence around menstruation all add up to a barrier that holds girls back month after month.
              </p>
              <p className="text-slate-600 leading-relaxed">
                At the Girls for Development Goals Foundation, we believe menstrual health is not a luxury — it is a matter of dignity, education, and equality. That is why we are proud to announce our partnership with The Cup Foundation and Lunette to empower 100+ girls and young women in Abraka with sustainable menstrual care and the knowledge to use it with confidence.
              </p>
            </div>

            {/* Block 2: What we are doing */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-indigo-950">
                What we are doing
              </h3>
              <p className="text-slate-600">Through this initiative, participants will receive:</p>
              <ul className="space-y-2 text-slate-700 font-medium pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>A Lunette menstrual cup</strong> — a safe, reusable, medical-grade silicone product</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Structured menstrual health education</strong> covering the menstrual cycle, hygiene, and myth-busting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Hands-on training</strong> on how to use, clean, and care for a cup correctly</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                  <span><strong>Ongoing support</strong> so that no girl is left to figure it out alone</span>
                </li>
              </ul>
              <p className="text-slate-600 pt-2 italic text-xs border-t border-slate-200/60">
                Education comes first. Every girl learns about her body and her options in a respectful, judgment-free space led by trained female facilitators — and the choice to use a cup always remains entirely her own.
              </p>
            </div>

            {/* Block 3: Why menstrual cups? */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-indigo-950">
                Why menstrual cups?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A menstrual cup is a small, flexible cup made from medical-grade silicone that collects menstrual flow rather than absorbing it. It can be worn for up to 12 hours at a time and reused cycle after cycle. For girls in low-resource settings, the benefits are life-changing:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                  <h4 className="font-bold text-indigo-950 text-sm mb-1">One cup. Up to 10 years.</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    With proper care, a single menstrual cup can last as long as a decade — replacing thousands of disposable pads and tampons over its lifetime. For a girl and her family, that means real, lasting savings instead of a recurring monthly expense.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                  <h4 className="font-bold text-indigo-950 text-sm mb-1">Better for her, better for the planet.</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Disposable pads are made largely of plastic and can take 500 to 800 years to break down. Over a lifetime, one person can use anywhere from 5,000 to 15,000 disposable products. A single menstrual cup can replace 2,000 to 3,000 of those disposables — dramatically cutting the mountain of waste left behind. When you multiply that across 100+ girls, the impact on plastic waste in our community is enormous.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80">
                  <h4 className="font-bold text-indigo-950 text-sm mb-1">Confidence and freedom.</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Worn correctly, a cup is comfortable, leak-resistant, and reliable — freeing girls to stay in school, play, study, and live fully, every day of the month.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 4: More than products */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
              <h3 className="font-serif text-xl font-bold text-indigo-950">
                More than products — a movement
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This programme is about more than handing out cups. It is about breaking the silence around menstruation, equipping girls with accurate knowledge, and nurturing a generation of confident young women who can pass that knowledge on to their peers, sisters, and communities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By combining education with sustainable products, we are tackling two challenges at once: protecting the health and dignity of girls today, and protecting our environment for tomorrow.
              </p>
            </div>

            {/* Block 5: Join us */}
            <div className="bg-indigo-950 text-white rounded-2xl p-6 space-y-3 shadow-md">
              <h3 className="font-serif text-xl font-bold text-orange-400">
                Join us
              </h3>
              <p className="text-indigo-100 leading-relaxed">
                Together with The Cup Foundation and Lunette, we are proving that small changes can spark big impact — for girls, for communities, and for the planet.
              </p>
              <p className="text-indigo-200 text-xs pt-2 border-t border-indigo-900/80">
                To learn more about our work, partner with us, or support menstrual health education in your community, get in touch.
              </p>
              <div className="pt-2 font-serif font-bold text-orange-300 text-sm italic">
                Healthy girls. Empowered futures. A cleaner planet.
              </div>
            </div>
          </div>
        </div>
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
