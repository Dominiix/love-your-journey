export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#0f2744] via-[#1a3a5c] to-[#1e4a7a] px-[5%] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(180,130,42,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(180,130,42,0.12)] border border-[rgba(180,130,42,0.25)] text-white/80 px-4 py-1.5 rounded text-xs font-bold mb-6 tracking-widest uppercase">
              New Zealand&apos;s Financial Education Platform
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Take control of your{" "}
              <em className="not-italic text-[#d4a44c]">financial future.</em>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-9 max-w-xl">
              Real, practical financial education built for New Zealanders — from first homes to KiwiSaver, mortgages to money mindset. No jargon. No overseas fluff. Just what actually works here.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/course" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-7 py-4 rounded-md transition-all">
                Start the Course
              </a>
              <a href="/course" className="border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-md transition-all">
                See What&apos;s Inside
              </a>
            </div>
            <div className="flex gap-10 mt-11 pt-10 border-t border-white/10 flex-wrap">
              {[["500+","Kiwis Enrolled"],["6","Core Modules"],["NZ","Built for Aotearoa"],["4.9","Student Rating"]].map(([val,label])=>(
                <div key={label}>
                  <div className="text-3xl font-extrabold text-white leading-none">{val}</div>
                  <div className="text-xs text-white/45 mt-1.5 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="relative">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-[3px] border-[rgba(180,130,42,0.35)]">
                <img src="/julius.jpeg" alt="Julius Capilitan" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-white text-xl font-bold mb-1">Julius Capilitan</div>
              <div className="text-white/50 text-sm mb-4">Mortgage Broker &amp; Financial Educator</div>
              <div className="w-10 h-0.5 bg-[#b8832a] mx-auto mb-4 rounded opacity-60" />
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Julius has helped hundreds of New Zealand families navigate mortgages, KiwiSaver, and financial planning. His mission: make financial education accessible to every Kiwi.
              </p>
              <div className="flex gap-2 justify-center flex-wrap">
                {["Mortgage Broker","Financial Adviser","Century 21"].map(b=>(
                  <span key={b} className="bg-white/[0.06] border border-white/12 text-white/70 px-3 py-1.5 rounded text-xs font-semibold">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#faf8f4] border-t border-b border-[#e4e9f0] py-5 px-[5%]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-12 flex-wrap">
          {["Built for New Zealand","Licensed Mortgage Brokers","NZ-Specific Content","No Hidden Costs","4.9 Star Rating"].map((item,i)=>(
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <div className="w-1 h-1 rounded-full bg-[#b8832a] opacity-70" />}
              <span className="text-[#5a6a7a] text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHO IT'S FOR */}
      <section className="py-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">Who It&apos;s For</span>
            <h2 className="text-4xl font-extrabold text-[#0f2744] mt-4 mb-3 tracking-tight">This course was built for you</h2>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto">Whether you&apos;re just starting out or trying to get ahead, LoveYourJourney meets you where you are.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["First Home Buyers","Ready to get on the ladder","Step-by-step guidance through deposits, pre-approvals, LVR rules, and everything in between — in plain English."],
              ["Young Professionals","Earning, but not sure where it's going","Learn to budget, invest, and build wealth from the ground up — before bad habits take hold."],
              ["New Families","Growing your whanau and your plan","Understand KiwiSaver, insurance, and how to set your kids up right from the start."],
              ["New to New Zealand","Learning how it all works here","Banking, KiwiSaver, mortgages — the NZ financial system explained clearly, without assumptions."],
              ["Existing Homeowners","Making sure you're on the best deal","Understand when and how to refinance, and what your mortgage structure should actually look like."],
              ["Aspiring Investors","Ready to grow beyond one home","A grounded introduction to property investment in the New Zealand market, without the hype."],
            ].map(([label,title,desc])=>(
              <div key={label} className="bg-[#faf8f4] border border-[#e4e9f0] rounded-xl p-7 hover:border-[rgba(184,131,42,0.4)] hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-xs font-bold tracking-widest uppercase text-[#b8832a] mb-3">{label}</div>
                <h3 className="font-bold text-[#0f2744] mb-2">{title}</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24 px-[5%] bg-[#0f2744]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">The Course</span>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">Six modules. One clear path.</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">Each module is practical, NZ-specific, and designed to move you forward.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {[
              ["01","Money Foundations","Budgeting, money mindset, and goal setting that sticks.",["Budgeting","Money Mindset","Goal Setting"]],
              ["02","The NZ Banking System","How banks assess you and how to position yourself well.",["Credit","Serviceability","Bank Policy"]],
              ["03","Buying Your First Home","Deposits, pre-approvals, LVR rules, and settlement day.",["LVR","Pre-Approval","Settlement"]],
              ["04","KiwiSaver Unlocked","Optimise your KiwiSaver fund and contributions.",["Fund Types","Contributions","Withdrawals"]],
              ["05","Mortgages Demystified","Fixed vs floating, structuring, and paying off faster.",["Fixed vs Floating","OCR Impact","Repayment"]],
              ["06","Protecting and Growing Wealth","Insurance, investing, and long-term wealth in NZ.",["Insurance","Investing","Property"]],
            ].map(([num,title,desc,tags])=>(
              <div key={num} className="bg-[rgba(15,39,68,0.95)] p-7 hover:bg-[rgba(26,58,92,0.98)] transition-all">
                <div className="text-xs font-bold tracking-widest uppercase text-[#b8832a] mb-3">Module {num}</div>
                <h3 className="text-white font-bold mb-2.5">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t=>(
                    <span key={t} className="bg-white/[0.05] border border-white/10 text-white/50 text-xs px-2.5 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-[5%] bg-[#faf8f4]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">Student Stories</span>
            <h2 className="text-4xl font-extrabold text-[#0f2744] mt-4 mb-3 tracking-tight">Real Kiwis. Real results.</h2>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto">People who sat down, did the work, and changed their financial future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["SK","Sarah K.","First home buyer, Auckland","I honestly didn't think buying a home was possible for me at 27. After going through the course I understood exactly what the bank was looking for, sorted my KiwiSaver, and settled on my first home six months later."],
              ["ML","Mark & Lisa","New to NZ, Wellington","We moved to New Zealand from the Philippines three years ago and had no idea how anything worked here. The KiwiSaver and banking modules were eye-opening. Wish we'd found this earlier."],
              ["JT","James T.","Homeowner, Christchurch","Julius explains things in a way that actually makes sense. I'd been confused about fixed vs floating rates for two years — after module five I finally got it. We're saving $200 a month."],
            ].map(([init,name,detail,quote])=>(
              <div key={name} className="bg-white border border-[#e4e9f0] rounded-xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_,i)=>(
                    <div key={i} className="w-3 h-3 bg-[#b8832a]" style={{clipPath:"polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)"}} />
                  ))}
                </div>
                <p className="text-[#1a1a2e] text-sm leading-relaxed mb-5">{quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e4e9f0]">
                  <div className="w-10 h-10 rounded-full bg-[#0f2744] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{init}</div>
                  <div>
                    <div className="font-bold text-sm text-[#0f2744]">{name}</div>
                    <div className="text-xs text-[#5a6a7a] mt-0.5">{detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-[5%] bg-[#0f2744]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Pricing</span>
            <h2 className="text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">Start free. Go further when you&apos;re ready.</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">Every package includes NZ-specific content and real support from the team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {name:"Starter",price:"Free",desc:"Get started with the foundations — no card needed.",features:["Module 1: Money Foundations","Module 4: KiwiSaver Unlocked","All free calculators","First Home Buyer checklist","Community forum access"],cta:"Get Started Free",featured:false},
              {name:"Journey",price:"$197",desc:"The full course. Everything you need to go from confused to confident.",features:["All 6 core modules","NZ mortgage strategy guide","KiwiSaver optimisation toolkit","All free calculators","Lifetime updates"],cta:"Enrol Now — $197",featured:true},
              {name:"Journey + Advice",price:"$397",desc:"Full course plus a personalised strategy session with Julius.",features:["Everything in Journey","60-min strategy call with Julius","Personalised financial roadmap","Mortgage pre-approval support","Priority email support"],cta:"Book Your Spot",featured:false},
            ].map(({name,price,desc,features,cta,featured})=>(
              <div key={name} className={`rounded-2xl p-8 flex flex-col relative ${featured ? "bg-white border-2 border-[rgba(184,131,42,0.5)]" : "bg-white/[0.04] border border-white/10"}`}>
                {featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b8832a] text-white text-xs font-bold px-4 py-1.5 rounded tracking-widest uppercase">Most Popular</div>}
                <div className={`text-xs font-bold tracking-widest uppercase mb-5 ${featured ? "text-[#5a6a7a]" : "text-white/45"}`}>{name}</div>
                <div className={`text-5xl font-extrabold tracking-tight leading-none mb-2 ${featured ? "text-[#0f2744]" : "text-white"}`}>{price}</div>
                <div className={`text-sm mb-7 pb-6 border-b leading-relaxed ${featured ? "text-[#5a6a7a] border-[#e4e9f0]" : "text-white/40 border-white/08"}`}>{desc}</div>
                <ul className="flex flex-col gap-3 flex-1">
                  {features.map(f=>(
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${featured ? "text-[#1a1a2e]" : "text-white/65"}`}>
                      <div className="w-4 h-4 border border-[rgba(184,131,42,0.5)] rounded flex items-center justify-center text-[#b8832a] text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-7 w-full py-3.5 rounded-md font-bold text-sm transition-all ${featured ? "bg-[#b8832a] hover:bg-[#d4a44c] text-white" : "border border-white/20 hover:border-white/50 text-white/70 hover:text-white bg-transparent"}`}>
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-24 px-[5%] bg-[#0f2744]">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Free Download</span>
          <h2 className="text-3xl font-extrabold text-white mt-4 mb-3 tracking-tight">Get the First Home Buyer Checklist</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">A plain-English checklist covering every step of the home buying journey in New Zealand. Used by over 500 Kiwis.</p>
          <div className="flex gap-0 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3.5 rounded-l-md bg-white/[0.06] border border-white/12 text-white placeholder-white/30 outline-none focus:border-[rgba(184,131,42,0.5)] text-sm"/>
            <button className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-6 py-3.5 rounded-r-md text-sm transition-all whitespace-nowrap">Send It</button>
          </div>
          <p className="text-white/25 text-xs mt-3">No spam. Unsubscribe any time.</p>
        </div>
      </section>

    </main>
  );
}