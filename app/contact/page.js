"use client";

import { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("book");
  const [submitted, setSubmitted] = useState(false);
  const [selectedDay, setSelectedDay] = useState(25);
  const [selectedTime, setSelectedTime] = useState("1:00 PM");
  const [selectedType, setSelectedType] = useState("strategy");

  const times = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
  const unavailable = ["9:00 AM","12:00 PM","4:00 PM"];
  const availableDays = [23,24,25,28,29,30];
  const pastDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] px-[5%] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute right-[-80px] top-[-80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,131,42,0.07),transparent_65%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] mb-4 block">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Talk to Julius.<br />
            <em className="not-italic text-[#d4a44c]">No sales pitch.</em><br />
            Just honest advice.
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-lg mb-10">
            Whether you want to book a strategy session, ask a question, or find out if you&apos;re ready to buy — the right place to start is a conversation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              {id:"book", title:"Book a Strategy Call", desc:"60 minutes with Julius. Walk away with a clear financial roadmap."},
              {id:"message", title:"Send a Question", desc:"Not ready for a call? Send a message and we'll get back to you within one business day."},
              {id:"course", title:"Course Enquiry", desc:"Questions about enrolment, pricing, or whether the course is right for you."},
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`text-left p-5 rounded-xl border transition-all ${activeTab === opt.id ? "bg-[rgba(184,131,42,0.12)] border-[rgba(184,131,42,0.35)]" : "bg-white/[0.05] border-white/10 hover:bg-white/[0.08]"}`}
              >
                <div className="text-white font-bold text-sm mb-2">{opt.title}</div>
                <div className="text-white/45 text-xs leading-relaxed">{opt.desc}</div>
                <div className="text-[#b8832a] text-xs font-bold mt-3">Choose this ›</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="max-w-[1200px] mx-auto px-[5%] py-14">
        <div className="flex gap-0 border-b-2 border-[#e4e9f0] mb-12">
          {[{id:"book",label:"Book a Strategy Call"},{id:"message",label:"Send a Message"},{id:"course",label:"Course Enquiry"}].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 -mb-[2px] transition-all whitespace-nowrap ${activeTab === tab.id ? "border-[#b8832a] text-[#0f2744]" : "border-transparent text-[#5a6a7a] hover:text-[#0f2744]"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* BOOK A CALL */}
        {activeTab === "book" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div className="bg-[#0f2744] rounded-xl p-7 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden border-[3px] border-[rgba(184,131,42,0.3)]">
                  <img src="/julius.jpeg" alt="Julius Capilitan" className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-white font-bold text-lg mb-1">Julius Capilitan</div>
                <div className="text-white/45 text-sm mb-4">Mortgage Broker & Financial Adviser</div>
                <div className="w-7 h-0.5 bg-[#b8832a] mx-auto mb-4 rounded opacity-60" />
                <p className="text-white/55 text-sm leading-relaxed mb-5">A strategy call with Julius isn&apos;t a sales meeting — it&apos;s a working session where you leave with a clear plan.</p>
                <div className="flex flex-col gap-3 text-left">
                  {[["T","60-minute video or phone call"],["Z","Via Zoom, Google Meet, or phone"],["NZ","New Zealand clients only"],["R","Roadmap sent within 24 hours"]].map(([icon,text])=>(
                    <div key={text} className="flex items-center gap-3 text-sm text-white/55">
                      <div className="w-7 h-7 rounded-lg bg-[rgba(184,131,42,0.12)] border border-[rgba(184,131,42,0.2)] flex items-center justify-center text-[#b8832a] text-xs font-bold flex-shrink-0">{icon}</div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#faf8f4] border border-[#e4e9f0] rounded-xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#5a6a7a] mb-4">What happens in the call</div>
                <div className="flex flex-col gap-3">
                  {[
                    "Julius reviews your current financial position — income, savings, debts, KiwiSaver.",
                    "You share your goal — first home, refinancing, investment, or general planning.",
                    "Julius gives you an honest assessment of where you stand and what needs to change.",
                    "You leave with a clear written roadmap and specific next steps.",
                  ].map((step,i)=>(
                    <div key={i} className="flex gap-3 items-start text-sm text-[#1a1a2e]">
                      <div className="w-6 h-6 rounded-full bg-[#0f2744] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i+1}</div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[rgba(184,131,42,0.07)] border border-[rgba(184,131,42,0.2)] rounded-xl p-5">
                <div className="font-bold text-[#0f2744] text-sm mb-2">Already on the Journey + Advice package?</div>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">Your strategy call is included — no payment needed. Select &quot;Included in package&quot; as your call type below.</p>
              </div>
            </div>

            {submitted ? (
              <div className="bg-white border border-[#e4e9f0] rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#edf7f2] border-2 border-[rgba(26,122,74,0.2)] flex items-center justify-center mx-auto mb-5 text-2xl text-[#1a7a4a]">✓</div>
                <div className="text-xl font-extrabold text-[#0f2744] mb-3">You&apos;re booked in.</div>
                <p className="text-[#5a6a7a] text-sm leading-relaxed mb-6">Julius will confirm your session shortly. A calendar invite and Zoom link will be sent to your email.</p>
                <div className="bg-[#faf8f4] rounded-xl p-5 text-left mb-6">
                  {[["Call type","Strategy Session — 60 min"],["Date",`${selectedDay} April 2026`],["Time",selectedTime],["With","Julius Capilitan"]].map(([l,v])=>(
                    <div key={l} className="flex justify-between py-2 border-b border-[#e4e9f0] last:border-0 text-sm">
                      <span className="text-[#5a6a7a]">{l}</span>
                      <span className="font-semibold text-[#0f2744]">{v}</span>
                    </div>
                  ))}
                </div>
                <button onClick={()=>setSubmitted(false)} className="bg-[#0f2744] text-white font-bold px-8 py-3 rounded-lg text-sm">Book another time</button>
              </div>
            ) : (
              <div className="bg-white border border-[#e4e9f0] rounded-xl p-7">
                <div className="font-bold text-[#0f2744] text-lg mb-1">Reserve your time with Julius</div>
                <p className="text-[#5a6a7a] text-sm mb-6 leading-relaxed">Select a call type, pick a date and time, and fill in your details.</p>
                <div className="text-xs font-bold tracking-wide uppercase text-[#5a6a7a] mb-3">Call type</div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{id:"strategy",label:"Strategy Session",desc:"60 min — mortgage, KiwiSaver, planning",price:"$200 NZD"},{id:"package",label:"Included in Package",desc:"Journey + Advice students — no charge",price:"Free"}].map(t=>(
                    <button key={t.id} onClick={()=>setSelectedType(t.id)} className={`text-left p-4 rounded-xl border-2 transition-all ${selectedType===t.id?"border-[#b8832a] bg-[rgba(184,131,42,0.05)]":"border-[#e4e9f0] hover:border-[rgba(184,131,42,0.3)]"}`}>
                      <div className="font-bold text-[#0f2744] text-sm mb-1">{t.label}</div>
                      <div className="text-[#5a6a7a] text-xs mb-2">{t.desc}</div>
                      <div className="text-[#b8832a] text-xs font-bold">{t.price}</div>
                    </button>
                  ))}
                </div>
                <div className="text-xs font-bold tracking-wide uppercase text-[#5a6a7a] mb-3">Select a date — April 2026</div>
                <div className="grid grid-cols-7 gap-1 mb-5">
                  {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d=>(
                    <div key={d} className="text-center text-xs font-bold text-[#5a6a7a] py-1">{d}</div>
                  ))}
                  <div />
                  {Array.from({length:30},(_,i)=>i+1).map(day=>{
                    const isPast = pastDays.includes(day);
                    const isAvail = availableDays.includes(day);
                    const isSelected = selectedDay === day;
                    return (
                      <button key={day} onClick={()=>isAvail && setSelectedDay(day)}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all
                          ${isSelected?"bg-[#0f2744] text-white font-bold":
                            isPast?"text-[#e4e9f0] cursor-default":
                            isAvail?"text-[#1a1a2e] font-semibold hover:bg-[#faf8f4] cursor-pointer":
                            "text-[#e4e9f0] cursor-default"}`}>
                        {day}
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs font-bold tracking-wide uppercase text-[#5a6a7a] mb-3">Select a time — NZST</div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {times.map(t=>{
                    const isUnavail = unavailable.includes(t);
                    const isSel = selectedTime === t;
                    return (
                      <button key={t} onClick={()=>!isUnavail && setSelectedTime(t)}
                        className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all
                          ${isUnavail?"bg-[#faf8f4] border-[#e4e9f0] text-[#e4e9f0] cursor-not-allowed":
                            isSel?"border-[#b8832a] bg-[rgba(184,131,42,0.07)] text-[#0f2744]":
                            "border-[#e4e9f0] text-[#5a6a7a] hover:border-[rgba(184,131,42,0.35)] hover:text-[#0f2744]"}`}>
                        {t}
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs font-bold tracking-wide uppercase text-[#5a6a7a] mb-3">Your details</div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="First name" />
                  <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="Last name" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="Email address" type="email" />
                  <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="Phone number" type="tel" />
                </div>
                <select className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-3 text-[#5a6a7a]">
                  <option value="">What&apos;s your main goal for this call?</option>
                  <option>Buying my first home</option>
                  <option>Refinancing an existing mortgage</option>
                  <option>KiwiSaver optimisation</option>
                  <option>General financial planning</option>
                  <option>Property investment</option>
                </select>
                <textarea className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-5 resize-none h-24" placeholder="Anything else Julius should know before the call? (optional)" />
                <button onClick={()=>setSubmitted(true)} className="w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-4 rounded-lg text-sm transition-all">
                  Confirm Booking
                </button>
                <p className="text-xs text-[#5a6a7a] text-center mt-3 leading-relaxed">Julius will confirm via email within a few hours. Rescheduling available up to 24 hours before your call.</p>
              </div>
            )}
          </div>
        )}

        {/* SEND A MESSAGE */}
        {activeTab === "message" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0f2744] mb-3">Not ready for a call? That&apos;s fine.</h2>
                <p className="text-[#5a6a7a] text-base leading-relaxed">Send Julius a question and the team will get back to you within one business day. No question is too basic — that&apos;s what LoveYourJourney is here for.</p>
              </div>
              <div className="flex flex-col gap-3">
                {[["@","Email","hello@loveyourjourney.co.nz"],["NZ","Based in","Wellington, New Zealand"]].map(([icon,label,value])=>(
                  <div key={label} className="flex items-center gap-4 p-4 bg-[#faf8f4] border border-[#e4e9f0] rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-[#0f2744] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{icon}</div>
                    <div>
                      <div className="font-bold text-[#0f2744] text-sm">{label}</div>
                      <div className="text-[#5a6a7a] text-sm mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-[#5a6a7a] mb-3">Follow Julius</div>
                <div className="flex gap-3">
                  {["LinkedIn","Facebook","Instagram"].map(s=>(
                    <button key={s} className="flex items-center gap-2 px-4 py-2.5 bg-[#faf8f4] border-2 border-[#e4e9f0] rounded-lg text-sm font-semibold text-[#5a6a7a] hover:border-[#b8832a] hover:text-[#0f2744] transition-all">{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e4e9f0] rounded-xl p-7">
              <div className="font-bold text-[#0f2744] text-lg mb-1">Send a message</div>
              <p className="text-[#5a6a7a] text-sm mb-6">The team responds within one business day, Monday to Friday.</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="First name" />
                <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="Last name" />
              </div>
              <input className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-3" placeholder="Email address" type="email" />
              <select className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-3 text-[#5a6a7a]">
                <option value="">What&apos;s your question about?</option>
                <option>Mortgages</option>
                <option>KiwiSaver</option>
                <option>First home buying</option>
                <option>The course</option>
                <option>Something else</option>
              </select>
              <textarea className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-5 resize-none h-32" placeholder="Ask anything — no question is too basic..." />
              <button className="w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-4 rounded-lg text-sm transition-all">Send Message</button>
            </div>
          </div>
        )}

        {/* COURSE ENQUIRY */}
        {activeTab === "course" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0f2744] mb-3">Not sure if the course is right for you?</h2>
                <p className="text-[#5a6a7a] text-base leading-relaxed">Send through your question and Julius or a team member will give you an honest answer — including whether the free Starter package might be enough.</p>
              </div>
              <div className="bg-[#faf8f4] border border-[#e4e9f0] rounded-xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#5a6a7a] mb-4">Quick Answers</div>
                <div className="flex flex-col gap-4">
                  {[
                    ["How long is the course?","Six modules — most people finish in 4–6 weeks at their own pace."],
                    ["Is there a free option?","Yes — the Starter package includes Modules 1 and 4 for free, no card required."],
                    ["Is there a refund policy?","Yes — 30-day money-back guarantee on all paid packages."],
                    ["Is this NZ-specific?","100%. Every module is built around how things work in Aotearoa."],
                  ].map(([q,a])=>(
                    <div key={q} className="border-b border-[#e4e9f0] pb-4 last:border-0 last:pb-0">
                      <div className="font-bold text-[#0f2744] text-sm mb-1">{q}</div>
                      <div className="text-[#5a6a7a] text-sm leading-relaxed">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#e4e9f0] rounded-xl p-7">
              <div className="font-bold text-[#0f2744] text-lg mb-1">Course question</div>
              <p className="text-[#5a6a7a] text-sm mb-6">Tell us what you&apos;re unsure about and we&apos;ll point you in the right direction.</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="First name" />
                <input className="px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors" placeholder="Email address" type="email" />
              </div>
              <select className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-3 text-[#5a6a7a]">
                <option value="">What best describes you?</option>
                <option>Looking to buy my first home</option>
                <option>Already own a home</option>
                <option>New to New Zealand</option>
                <option>Just want to improve my finances</option>
                <option>Thinking about investing</option>
              </select>
              <textarea className="w-full px-3.5 py-3 border-2 border-[#e4e9f0] rounded-lg text-sm outline-none focus:border-[#b8832a] transition-colors mb-5 resize-none h-36" placeholder="e.g. Is this course suitable for someone who already owns a home?" />
              <button className="w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-4 rounded-lg text-sm transition-all">Send Enquiry</button>
              <p className="text-xs text-[#5a6a7a] text-center mt-3">We&apos;ll reply within one business day with an honest recommendation.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}