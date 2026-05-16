import { FileText, ArrowUpRight, Send } from "lucide-react";

export function Resources() {
  const reports = [
    { year: "2024", title: "GDGF Annual Impact Report", size: "2.4 MB" },
    { year: "2023", title: "Strategic Retrospective", size: "1.8 MB" },
    { year: "2022", title: "Foundation Initial Audit", size: "1.1 MB" },
  ];

  const articles = [
    { date: "April 2025", title: "1st Quarter 2025 Newsletter", desc: "An exclusive look at our successful fundraising dinner in Innsbruck and celebration of essay competition winners." },
    { date: "March 2025", title: "Celebrating Women's Voices", desc: "Global stories of empowerment from Nigeria, Uganda, Sweden, and Italy recorded for IWD." },
    { date: "March 2024", title: "Inspire Inclusion: Supporting Female Farmers", desc: "A reflection on our initiative equipping women farmers in Obiaruku to combat food insecurity." }
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4">
      {/* Header */}
      <section className="col-span-1 md:col-span-12 bg-white text-indigo-950 rounded-3xl p-8 md:p-12 border border-slate-200 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Resource Hub</h1>
      </section>

      {/* Reports Section - Bento Box styled */}
      <section className="col-span-1 md:col-span-12 bg-slate-100 rounded-3xl p-8 md:p-10 border border-slate-200">
         <h2 className="font-serif text-3xl font-bold text-indigo-950 mb-2">Annual Reports & Financials</h2>
         <p className="text-slate-500 text-xs mb-8 uppercase tracking-widest font-bold">Detailed breakdowns & Impact Analysis</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 flex items-center gap-6 hover:shadow-lg transition-shadow group cursor-pointer hover:border-indigo-300">
              <div className="w-20 h-28 bg-slate-50 shadow-md border border-slate-200 flex-shrink-0 flex flex-col p-2 items-center justify-center relative">
                <div className="w-full h-1.5 bg-indigo-900 absolute top-0 left-0"></div>
                <div className="text-[7px] font-bold text-center leading-tight mt-1 text-slate-400">ANNUAL<br/>REPORT</div>
                <div className="text-sm font-bold text-indigo-900 mt-2">{report.year}</div>
                <FileText className="w-4 h-4 text-orange-500 mt-2"/>
              </div>
              <div>
                <h3 className="font-bold text-indigo-950 text-base md:text-lg group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">{report.title}</h3>
                <div className="text-xs font-bold text-slate-400 mt-3 flex items-center gap-2 uppercase tracking-wide bg-slate-100 w-fit px-2 py-1 rounded">
                  PDF • {report.size}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog & Newsletters */}
      <section className="col-span-1 lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-200">
         <h2 className="font-serif text-3xl font-bold text-indigo-950 mb-2">Newsletters & Articles</h2>
         <p className="text-slate-500 text-xs mb-8 uppercase tracking-widest font-bold">Advocacy & Thought Leadership</p>
         <div className="grid grid-cols-1 gap-4">
           {articles.map((article, idx) => (
             <div key={idx} className="p-6 border border-slate-200 bg-slate-50 rounded-2xl group hover:border-indigo-300 transition-colors cursor-pointer hover:bg-white hover:shadow-sm">
               <div className="flex justify-between items-start mb-3">
                 <span className="text-[10px] font-bold px-2.5 py-1 bg-orange-100 text-orange-700 rounded-md uppercase tracking-wider">{article.date}</span>
               </div>
               <h3 className="font-serif font-bold text-xl md:text-2xl text-indigo-950 mb-2 group-hover:text-indigo-600 transition-colors">{article.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.desc}</p>
               <span className="text-xs font-bold text-indigo-600 uppercase flex items-center gap-1 tracking-wider">
                 Read <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
               </span>
             </div>
           ))}
         </div>
      </section>

      {/* Newsletter Signup */}
      <section className="col-span-1 lg:col-span-5 bg-indigo-950 rounded-3xl p-8 md:p-10 border border-slate-200 flex flex-col justify-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
        <div className="relative z-10 w-full max-w-sm mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Global Network</h2>
          <p className="text-indigo-200 text-sm mb-10 leading-relaxed font-light">
            Subscribe to our institutional newsletter to receive quarterly field updates, impact reports, and partnership opportunities.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Organizational email" 
              className="w-full px-5 py-4 bg-white/10 text-white placeholder-indigo-300 border border-indigo-800 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white/15 text-sm font-medium transition-all"
              required
            />
            <button 
              type="submit" 
              className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-indigo-400 text-[10px] mt-6 text-center tracking-wide">We adhere to rigorous global data protection standards.</p>
        </div>
      </section>
    </div>
  );
}
