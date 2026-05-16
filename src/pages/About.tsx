import { motion } from "motion/react";

export function About() {
  const team = [
    { name: "Benedicta Apuamah", title: "Founder", bio: "Pharmacist, global health expert, and SDG advocate with experience on international projects supported by the UN, CDC, and Global Fund. She currently works with the Ulysseus European University Alliance in Austria." },
    { name: "Fredrick Apuamah", title: "Board of Trustees Chairman", bio: "Brings strong leadership and people management skills, with experience managing over 400 workers at CCECC. Combines excellent communication with a proven safety and operations track record." },
    { name: "Dr. Oritseweyinmi Erikowa-Orighoye", title: "Board Member", bio: "Paediatrician and Communications & Research Specialist passionate about youth development, public health, and gender inclusion. Pursuing a PhD in Nutrition and Dietetics at Leeds Beckett University." },
    { name: "Neil McCluskey", title: "Board Member", bio: "Seasoned Project Manager with over 20 years across finance, telecoms, and network implementation. Co-founder of Total Quest and Taurus Mobile, speaking four languages fluently." },
    { name: "Abubakar Bagudu Dallatun Kalgo", title: "Board Member", bio: "Media consultant, entrepreneur, and motivational speaker. State secretary of the Federation of Agricultural Commodities Association of Nigeria, Kebbi state chapter." },
    { name: "Wadi Victoria Ben-Hirki", title: "Board Member", bio: "Ashoka changemaker and former ONE Champion representing youth voices at global platforms including Y20 Summit and AU Regional Consultations. 2019 Diana Award recipient." }
  ];

  const aims = [
    "Advocacy & Awareness", "Policy & Rights Protection", "Strategic Partnerships", "Skills Development & Education",
    "Legislative Engagement", "Scholarships & Capacity Building", "Resource Access & Support Systems", "Health & Well-Being Services"
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4">
      {/* Header Bento Box */}
      <section className="col-span-1 md:col-span-12 bg-indigo-950 text-white rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Institutional Governance</h1>
          <p className="text-indigo-200 text-lg md:text-xl lg:px-12 mx-auto">
             Girls for Development Goals Foundation is a registered non-governmental, non-partisan, and nonprofit organization that drives positive change through impactful community development initiatives.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="col-span-1 md:col-span-6 bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
         <div className="text-orange-500 font-serif italic text-sm font-semibold mb-3">Purpose</div>
         <h2 className="font-bold font-serif text-3xl text-indigo-950 mb-4">Our Mission</h2>
         <p className="text-slate-600 text-lg leading-relaxed">
            A world where every girl and young woman has the knowledge, skills, and opportunities to thrive, achieve her full potential, and lead a healthy, fulfilling life.
         </p>
      </section>

      <section className="col-span-1 md:col-span-6 bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
         <div className="text-indigo-500 font-serif italic text-sm font-semibold mb-3">Future</div>
         <h2 className="font-bold font-serif text-3xl text-indigo-950 mb-4">Our Vision</h2>
         <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
            To empower girls and young women by providing access to education, mentorship, healthcare, and economic opportunities through technology, advocacy, and community-driven programs, ensuring they have the resources to succeed.
         </p>
      </section>

      {/* Aims & Objectives */}
      <section className="col-span-1 md:col-span-12 bg-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-950 mb-8 pb-6 border-b border-slate-200">Aims and Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aims.map((aim, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 h-full">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />
              </div>
              <p className="font-semibold text-indigo-950 text-sm mt-1">{aim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Advisory Board */}
      <section className="col-span-1 md:col-span-12 bg-white rounded-3xl p-8 md:p-12 border border-slate-200">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-3 block">Leadership</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-950 mb-6">Global Advisory Board</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our leadership team is composed of dedicated domain experts globally committed to executing our institutional mandate with absolute compliance, transparency, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-900 rounded-full mb-6 flex items-center justify-center text-white font-serif text-4xl shadow-inner border-4 border-white">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold font-serif text-xl text-indigo-950 mb-2">{member.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-4 bg-orange-100 px-3 py-1.5 rounded">{member.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
