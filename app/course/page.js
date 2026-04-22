"use client";

import { useState } from "react";

const modules = [
  {
    num: "01",
    title: "Money Foundations",
    desc: "Understand your relationship with money, build a budget that actually works, and set goals that stick.",
    lessons: ["Your money personality and what it means","Building a budget that doesn't feel like punishment","Setting financial goals you'll actually hit","The pay-yourself-first method","Understanding net worth and how to grow it"],
    tags: ["Budgeting","Money Mindset","Goal Setting"],
    free: true,
  },
  {
    num: "02",
    title: "The NZ Banking System",
    desc: "How NZ banks work, what they look for, and how to position yourself as a strong borrower before you even apply.",
    lessons: ["How NZ banks make their lending decisions","What a credit score is and how to improve yours","Understanding debt-to-income ratios","How to read a bank statement the way a lender does","Preparing your financials for a mortgage application"],
    tags: ["Credit","Serviceability","Bank Policy"],
    free: false,
  },
  {
    num: "03",
    title: "Buying Your First Home",
    desc: "Deposits, pre-approvals, LVR rules, and everything from first step to settlement day.",
    lessons: ["Understanding your deposit options in NZ","LVR rules and what they mean for you","Getting pre-approved — the right way","From offer to settlement day","Working with lawyers, valuers, and inspectors"],
    tags: ["LVR","Pre-Approval","Settlement"],
    free: false,
  },
  {
    num: "04",
    title: "KiwiSaver Unlocked",
    desc: "Most Kiwis are in the wrong fund and don't know it. Learn how to optimise KiwiSaver to actually work for you.",
    lessons: ["How KiwiSaver actually works","Choosing the right fund type for your age and goals","Contribution strategies to maximise your balance","Using KiwiSaver for your first home","What happens to your KiwiSaver when you retire"],
    tags: ["Fund Types","Contributions","Withdrawals"],
    free: true,
  },
  {
    num: "05",
    title: "Mortgages Demystified",
    desc: "Fixed vs floating, interest-only, offset accounts — and how to structure your mortgage to pay it off faster.",
    lessons: ["Fixed vs floating — how to decide","How the OCR affects your mortgage rate","Mortgage structures that save you money","Offset accounts and revolving credit explained","Strategies to pay your mortgage off faster"],
    tags: ["Fixed vs Floating","OCR Impact","Repayment"],
    free: false,
  },
  {
    num: "06",
    title: "Protecting and Growing Wealth",
    desc: "Insurance basics, investment principles, and how to build long-term wealth in the NZ context.",
    lessons: ["Why insurance matters and what you actually need","Life, income, and trauma cover explained","Introduction to investing in NZ","Property investment fundamentals","Building a long-term wealth plan"],
    tags: ["Insurance","Investing","Property"],
    free: false,
  },
];

export default function Course() {
  const [openModule, setOpenModule] = useState(null);

  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f2744] via-[#1a3a5c] to-[#1e4a7a] px-[5%] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,130,42,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] mb-4 block">The Course</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Six modules.<br />
              <em className="not-italic text-[#d4a44c]">One clear path.</em>
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Real, practical financial education built for New Zealanders. No jargon, no overseas fluff — just what actually works here.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <a href="#pricing" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-7 py-4 rounded-md transition-all text-sm">
                Enrol Now
              </a>
              <a href="#modules" className="border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-md transition-all text-sm">
                See All Modules
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[["6","Modules"],["30+","Lessons"],["Self-paced","Learn anywhere"],["NZ","100% local"]].map(([val,label])=>(
                <div key={label} className="bg-white/[0.05] border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-white font-extrabold text-xl leading-none mb-1">{val}</div>
                  <div className="text-white/45 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Course card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
            <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-[rgba(184,131,42,0.3)] flex-shrink-0">
            <img src="/julius.jpeg" alt="Julius Capilitan" className="w-full h-full object-cover object-top" />
            </div>              <div>
                <div className="text-white font-bold">Julius Capilitan</div>
                <div className="text-white/45 text-sm">Mortgage Broker & Financial Educator</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Plain-English explanations — no jargon",
                "Built specifically for the NZ market",
                "Self-paced — learn at your own speed",
                "Lifetime access and free updates",
                "30-day money-back guarantee",
                "Real tools: calculators and checklists",
              ].map(f=>(
                <div key={f} className="flex items-center gap-3 text-sm text-white/65">
                  <div className="w-4 h-4 border border-[rgba(184,131,42,0.4)] rounded flex items-center justify-center text-[#b8832a] text-xs font-bold flex-shrink-0">✓</div>
                  {f}
                </div>
              ))}
            </div>
            <a href="#pricing" className="block w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-4 rounded-lg text-sm text-center transition-all">
              Start the Course
            </a>
            <p className="text-white/25 text-xs text-center mt-3">Free Starter option available — no card required</p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-[5%] bg-[#faf8f4]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">Who It&apos;s For</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 mb-3 tracking-tight">Built for everyday Kiwis</h2>
            <p className="text-[#5a6a7a] text-base max-w-xl mx-auto leading-relaxed">You don&apos;t need a finance background. You just need to want to get ahead.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["First Home Buyers","Understand exactly what the bank needs from you — and get there faster."],
              ["Young Professionals","Build wealth from the ground up before bad financial habits take hold."],
              ["New to New Zealand","Learn how KiwiSaver, mortgages, and NZ banking actually work."],
              ["Existing Homeowners","Make sure you're on the right mortgage structure and not overpaying."],
              ["New Families","Protect your whanau with the right insurance and financial plan."],
              ["Aspiring Investors","Understand the NZ property market before you make your next move."],
            ].map(([title,desc])=>(
              <div key={title} className="bg-white border border-[#e4e9f0] rounded-xl p-6 hover:border-[rgba(184,131,42,0.3)] hover:-translate-y-1 hover:shadow-md transition-all">
                <h3 className="font-bold text-[#0f2744] mb-2">{title}</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-20 px-[5%] bg-[#0f2744]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Course Modules</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">What you&apos;ll learn</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">Click any module to see the full lesson breakdown.</p>
          </div>
          <div className="flex flex-col gap-3">
            {modules.map((mod, i) => (
              <div key={mod.num} className="bg-white/[0.04] border border-white/[0.09] rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full flex items-center gap-5 p-5 sm:p-6 text-left hover:bg-white/[0.04] transition-all"
                >
                  <div className="text-xs font-bold tracking-widest uppercase text-[#b8832a] w-16 flex-shrink-0">MOD {mod.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-white font-bold">{mod.title}</span>
                      {mod.free && <span className="bg-[rgba(26,122,74,0.2)] border border-[rgba(26,122,74,0.3)] text-[#4ade80] text-xs font-bold px-2.5 py-0.5 rounded">Free</span>}
                    </div>
                    <p className="text-white/45 text-sm mt-1 leading-relaxed hidden sm:block">{mod.desc}</p>
                  </div>
                  <div className="flex gap-2 items-center flex-shrink-0">
                    <div className="flex gap-1.5 flex-wrap justify-end hidden sm:flex">
                      {mod.tags.map(t=>(
                        <span key={t} className="bg-white/[0.05] border border-white/10 text-white/40 text-xs px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <div className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 text-sm transition-transform ${openModule === i ? "rotate-45" : ""}`}>+</div>
                  </div>
                </button>
                {openModule === i && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-white/[0.06]">
                    <p className="text-white/50 text-sm leading-relaxed mt-4 mb-4 sm:hidden">{mod.desc}</p>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/30 mb-3 mt-4">Lessons in this module</div>
                    <div className="flex flex-col gap-2">
                      {mod.lessons.map((lesson, li) => (
                        <div key={lesson} className="flex items-center gap-3 text-sm text-white/60">
                          <div className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/30 text-xs flex-shrink-0">{li + 1}</div>
                          {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">Student Stories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 mb-3 tracking-tight">Real Kiwis. Real results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["SK","Sarah K.","First home buyer, Auckland","I honestly didn't think buying a home was possible for me at 27. After going through the course I understood exactly what the bank was looking for, and settled on my first home six months later."],
              ["ML","Mark & Lisa","New to NZ, Wellington","We moved from the Philippines three years ago and had no idea how anything worked here. The KiwiSaver and banking modules were eye-opening. Wish we'd found this earlier."],
              ["JT","James T.","Homeowner, Christchurch","Julius explains things in a way that actually makes sense. After module five I finally understood my mortgage structure — and we're saving $200 a month because of it."],
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
      <section id="pricing" className="py-20 px-[5%] bg-[#0f2744]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">Start free. Go further when you&apos;re ready.</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">Every package includes NZ-specific content and real support from the team behind the course.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {name:"Starter",price:"Free",sub:"",desc:"Get started with the foundations — no card needed.",features:["Module 1: Money Foundations","Module 4: KiwiSaver Unlocked","All free calculators","First Home Buyer checklist","Community forum access"],cta:"Get Started Free",featured:false,note:"No card required"},
              {name:"Journey",price:"$197",sub:" NZD",desc:"The full course. Everything you need to go from confused to confident.",features:["All 6 core modules","NZ mortgage strategy guide","KiwiSaver optimisation toolkit","All free calculators","Community forum access","Lifetime updates"],cta:"Enrol Now — $197",featured:true,note:"One-time payment, lifetime access"},
              {name:"Journey + Advice",price:"$397",sub:" NZD",desc:"Full course plus a personalised strategy session with Julius.",features:["Everything in Journey","60-min strategy call with Julius","Personalised financial roadmap","Mortgage pre-approval support","Priority email support","Referral to specialist advisers"],cta:"Book Your Spot",featured:false,note:"Limited availability each month"},
            ].map(({name,price,sub,desc,features,cta,featured,note})=>(
              <div key={name} className={`rounded-2xl p-8 flex flex-col relative ${featured?"bg-white border-2 border-[rgba(184,131,42,0.5)]":"bg-white/[0.04] border border-white/10"}`}>
                {featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b8832a] text-white text-xs font-bold px-4 py-1.5 rounded tracking-widest uppercase whitespace-nowrap">Most Popular</div>}
                <div className={`text-xs font-bold tracking-widest uppercase mb-5 ${featured?"text-[#5a6a7a]":"text-white/45"}`}>{name}</div>
                <div className={`text-5xl font-extrabold tracking-tight leading-none mb-1 ${featured?"text-[#0f2744]":"text-white"}`}>
                  {price}<span className={`text-base font-normal ${featured?"text-[#5a6a7a]":"text-white/40"}`}>{sub}</span>
                </div>
                <div className={`text-sm mb-6 pb-6 border-b leading-relaxed ${featured?"text-[#5a6a7a] border-[#e4e9f0]":"text-white/40 border-white/[0.08]"}`}>{desc}</div>
                <ul className="flex flex-col gap-3 flex-1 mb-7">
                  {features.map(f=>(
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${featured?"text-[#1a1a2e]":"text-white/65"}`}>
                      <div className="w-4 h-4 border border-[rgba(184,131,42,0.5)] rounded flex items-center justify-center text-[#b8832a] text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`block w-full py-3.5 rounded-lg font-bold text-sm text-center transition-all ${featured?"bg-[#b8832a] hover:bg-[#d4a44c] text-white":"border border-white/20 hover:border-white/50 text-white/70 hover:text-white"}`}>
                  {cta}
                </a>
                <p className={`text-xs text-center mt-3 ${featured?"text-[#5a6a7a]":"text-white/25"}`}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 tracking-tight">Good questions deserve honest answers.</h2>
          </div>
          <div className="flex flex-col divide-y divide-[#e4e9f0]">
            {[
              ["Is this course only for first home buyers?","Not at all. While a lot of the content is relevant to first home buyers, the course covers budgeting, KiwiSaver, mortgage structuring, and wealth building — so whether you're starting out or already own a home, there's real value here."],
              ["Is everything specific to New Zealand?","Yes. Every module — from the banking system to KiwiSaver to mortgage structures — is built around how things actually work here in Aotearoa. No overseas examples, no irrelevant content."],
              ["How long does the course take?","You can move through it at your own pace. Most people work through a module a week and finish in six weeks. There's no deadline and you keep lifetime access."],
              ["Does this replace financial advice?","No — and we're upfront about that. This course builds your financial literacy so that when you sit down with an adviser or mortgage broker, you understand what they're telling you."],
              ["Can I get a refund if it's not right for me?","Yes. If you go through the course and don't find it useful, we'll refund you within 30 days. No awkward process — just let us know."],
            ].map(([q,a],i)=>(
              <FAQItem key={i} question={q} answer={a} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-[5%] bg-gradient-to-br from-[#0f2744] to-[#1a3a5c]">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Get Started</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">Your financial future starts here.</h2>
          <p className="text-white/55 text-base leading-relaxed mb-8">Start with the free modules today — no credit card, no commitment. Just better financial knowledge for your journey ahead.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="#pricing" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-8 py-4 rounded-md transition-all text-sm">Start for free</a>
            <a href="/contact" className="border border-white/25 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-md transition-all text-sm">Talk to Julius first</a>
          </div>
        </div>
      </section>

    </main>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-[#0f2744] text-base">{question}</span>
        <div className={`w-6 h-6 rounded-full border-2 border-[rgba(184,131,42,0.4)] flex items-center justify-center text-[#b8832a] text-sm font-bold flex-shrink-0 transition-transform ${open?"rotate-45":""}`}>+</div>
      </button>
      {open && <p className="text-[#5a6a7a] text-sm leading-relaxed pb-5">{answer}</p>}
    </div>
  );
}