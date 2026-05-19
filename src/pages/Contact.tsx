import { MapPin, Mail, Globe, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4">
      {/* Header */}
      <section className="col-span-1 md:col-span-12 bg-white text-indigo-950 rounded-3xl p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <div className="max-w-xl text-center md:text-left">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">Get Involved</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Engage With Us</h1>
          <p className="text-slate-600 text-lg md:text-xl font-light">
            We actively seek international partnerships, funding opportunities, and dedicated volunteers to expand our reach.
          </p>
        </div>
        <div className="flex items-center gap-5 border border-slate-200 bg-slate-50 p-5 rounded-2xl shadow-sm self-center md:self-auto w-full md:w-auto">
           <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6"/>
           </div>
           <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-0.5">Status</p>
              <p className="text-base text-indigo-950 font-bold">Accepting Proposals</p>
           </div>
        </div>
      </section>

      {/* Global Operations / Contact Info */}
      <section className="col-span-1 md:col-span-5 bg-indigo-950 text-white rounded-3xl p-6 md:p-8 border border-slate-200">
         <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-orange-400">Global Operations</h2>
         <p className="text-indigo-200 text-base mb-12 leading-relaxed">
           For strategic synergies, financial audit requests, or program inquiries, reach out to our administration lines.
         </p>

         <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="p-3 bg-indigo-900 border border-indigo-800 text-indigo-300 rounded-xl h-fit">
                <Mail className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-indigo-400 mb-1.5">Digital Inquiries</h4>
                <a href="mailto:foundationghef@gmail.com" className="text-white hover:text-orange-400 transition-colors font-medium text-sm md:text-base tracking-wide">
                  foundationghef@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="p-3 bg-indigo-900 border border-indigo-800 text-indigo-300 rounded-xl h-fit">
                <MapPin className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-indigo-400 mb-1.5">Headquarters (Nigeria)</h4>
                <address className="not-italic text-indigo-100 text-sm leading-relaxed">
                  No. 3, Esimike Estate, <br/>
                  Utagbuno Junction, Obiaruku, <br/>
                  Delta State, Nigeria.
                </address>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="p-3 bg-indigo-900 border border-indigo-800 text-indigo-300 rounded-xl h-fit">
                <Globe className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-indigo-400 mb-1.5">Liaison Offices</h4>
                <address className="not-italic text-indigo-100 text-sm leading-relaxed mb-4">
                  No. 12, Yari House, Emir Haruna,<br/>
                  Near Ajala Motors, Birnin-Kebbi,<br/>
                  Kebbi State, Nigeria.
                </address>
                <div className="h-px w-12 bg-indigo-800 mb-4"></div>
                <address className="not-italic text-indigo-100 text-sm leading-relaxed">
                  26 E.C Odilison Close, GRA,<br/>
                  Asaba, Delta State, Nigeria.
                </address>
              </div>
            </div>
         </div>
      </section>

      {/* Contact Form */}
      <section className="col-span-1 md:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200">
         <h3 className="font-serif text-3xl font-bold text-indigo-950 mb-8">Send a Message</h3>
         <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Organization / Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject / Intent</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors text-indigo-950 font-medium">
                <option>Strategic Partnership</option>
                <option>Grant / Funding Inquiry</option>
                <option>Volunteer Application</option>
                <option>General Information</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full md:w-auto mt-6 px-10 py-4 bg-indigo-900 text-white font-bold uppercase tracking-widest rounded-xl text-xs hover:bg-orange-600 transition-colors md:float-right flex gap-3 items-center justify-center">
              Submit Inquiry <ArrowRight className="w-4 h-4" />
            </button>
         </form>
      </section>
    </div>
  );
}
