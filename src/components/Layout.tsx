import { NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../utils";

const NAV_LINKS = [
  { name: "About us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resources", path: "/resources" },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDonationOpen(true);
    window.addEventListener("open-donate-modal", handleOpen);
    return () => window.removeEventListener("open-donate-modal", handleOpen);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("1016948001");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans p-4 md:p-6 gap-4">
      {/* Header */}
      <header className="sticky top-0 z-50 h-20 bg-white border border-slate-200 rounded-3xl shrink-0 shadow-sm max-w-7xl mx-auto w-full">
        <div className="px-6 h-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/logo2.jpeg" alt="GDGF Logo" className="h-12 md:h-14 w-auto object-contain rounded-md" />
            <span className="font-serif font-bold text-indigo-950 uppercase text-xs md:text-sm tracking-wide max-w-[160px] md:max-w-[200px] leading-tight">
              Girls for Development Goals Foundation
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn("transition-colors hover:text-indigo-600 py-2", isActive ? "text-indigo-600" : "")
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className="bg-indigo-900 text-white px-5 py-2.5 rounded-full hover:bg-indigo-950 transition-colors ml-2">
              Partner with Us
            </NavLink>
            <button 
              onClick={() => setIsDonationOpen(true)}
              className="bg-orange-500 text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors cursor-pointer"
            >
              Donate
            </button>
          </nav>

          <button className="md:hidden text-indigo-950 hover:text-indigo-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-0 z-40 bg-slate-50 pt-20 pb-8 px-6 flex flex-col justify-center items-center gap-6 md:hidden top-24">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => cn("text-2xl font-serif font-bold transition-colors", isActive ? "text-indigo-600" : "text-indigo-950")}>
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 bg-indigo-900 text-white px-8 py-3 rounded-full font-bold shadow-md text-center w-64">
              Partner with Us
            </NavLink>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDonationOpen(true);
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-md text-center w-64 cursor-pointer"
            >
              Donate
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full max-w-7xl mx-auto bg-slate-50 rounded-3xl">
        <Outlet />
      </main>

      <footer className="bg-indigo-950 text-white pt-16 pb-8 px-8 rounded-3xl mt-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-indigo-800/50 pb-12">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo2.jpeg" alt="GDGF Logo" className="h-14 w-auto object-contain rounded-md bg-white p-1" />
              <span className="font-serif font-bold text-indigo-200 uppercase text-xs md:text-sm tracking-wide max-w-[200px] leading-tight">
                Girls for Development Goals Foundation
              </span>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the next generation by providing access to education, mentorship, healthcare, and economic opportunities to create a more inclusive world.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">Quick Links</h4>
            <ul className="space-y-3 gap-2 flex flex-col items-start">
              {NAV_LINKS.map(link => (
                <NavLink key={link.name} to={link.path} className="text-sm text-indigo-200 hover:text-white transition-colors">{link.name}</NavLink>
              ))}
              <button 
                onClick={() => setIsDonationOpen(true)}
                className="text-sm text-indigo-200 hover:text-white transition-colors cursor-pointer text-left font-sans"
              >
                Donate / Support
              </button>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">Contact</h4>
            <address className="not-italic text-sm text-indigo-200 space-y-3">
              <p>foundationghef@gmail.com</p>
              <p>No. 3, Esimike Estate, <br/>Utagbuno Junction, Obiaruku,<br/> Delta State, Nigeria</p>
            </address>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-indigo-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Girls for Development Goals Foundation.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1DZqsQNKEZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/girls4developmentgoals?igsh=MTNyMGpsemZmNWdidQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/girls-for-development-goals-foundation/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/ghefoundationng?s=21&t=IOcRUAsAu7hWx2qngIju2g" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Donation Details Modal */}
      <AnimatePresence>
        {isDonationOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDonationOpen(false)}
              className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 z-10 flex flex-col gap-6"
            >
              {/* Close button */}
              <button
                onClick={() => setIsDonationOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-2">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full w-fit block">
                  Support Our Mission
                </span>
                <h3 className="text-2xl font-serif font-bold text-indigo-950">
                  Bank Transfer Details
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Your donations directly support local empowerment, menstrual hygiene resources, healthcare drives, and education for the girl child.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
                    Bank Name
                  </span>
                  <span className="text-base font-bold text-indigo-950">
                    Zenith Bank
                  </span>
                </div>

                <div className="border-t border-slate-200/50 pt-3">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
                    Account Name
                  </span>
                  <span className="text-base font-bold text-indigo-950">
                    Girls for Development Goals
                  </span>
                </div>

                <div className="border-t border-slate-200/50 pt-3">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
                    Account Number
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <span className="text-2xl font-mono font-bold text-indigo-900 tracking-wider">
                      1016948001
                    </span>
                    <button
                      onClick={handleCopy}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer",
                        copied
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-white text-indigo-950 border-slate-200 hover:bg-slate-100"
                      )}
                    >
                      {copied ? (
                        <>
                          <Check size={14} /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 text-center leading-relaxed">
                Thank you so much for your generous support! Please include "Donation" or "Support" as your bank payment reference.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
