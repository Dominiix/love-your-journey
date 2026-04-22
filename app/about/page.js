export const metadata = {
  title: "About Julius — LoveYourJourney",
  description: "Meet Julius Capilitan — the mortgage broker behind LoveYourJourney, New Zealand's financial education platform.",
};

export default function About() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] px-[5%] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute right-[-80px] top-[-80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,131,42,0.07),transparent_65%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] mb-4 block">About Julius</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              The mortgage broker who got tired of watching Kiwis get{" "}
              <em className="not-italic text-[#d4a44c]">left behind.</em>
            </h1>
            <p className="text-white/55 text-base leading-relaxed mb-8 max-w-lg">
              Julius Capilitan has spent years sitting across the table from hardworking New Zealanders who were confused, underprepared, and sold short by a system that never bothered to explain itself. LoveYourJourney is his answer to that.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#story" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-6 py-3.5 rounded-md transition-all text-sm">
                Read Julius&apos;s story
              </a>
              <a href="/contact" className="border border-white/25 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-md transition-all text-sm">
                Book a call
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[340px] bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-[3px] border-[rgba(184,131,42,0.3)]">
                <img src="/julius.jpeg" alt="Julius Capilitan" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-white text-lg font-bold mb-1">Julius Capilitan</div>
              <div className="text-white/45 text-sm mb-4">Founder, LoveYourJourney</div>
              <div className="w-8 h-0.5 bg-[#b8832a] mx-auto mb-4 rounded opacity-60" />
              <div className="flex gap-2 justify-center flex-wrap">
                {["Mortgage Broker","Financial Adviser","Century 21"].map(c=>(
                  <span key={c} className="bg-white/[0.07] border border-white/12 text-white/65 px-3 py-1.5 rounded text-xs font-semibold">{c}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
                {[["500+","Clients"],["NZ","Based"],["4.9","Rating"]].map(([v,l])=>(
                  <div key={l}>
                    <div className="text-white font-extrabold text-lg leading-none">{v}</div>
                    <div className="text-white/35 text-xs mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-[#faf8f4] border-t border-b border-[#e4e9f0] py-4 px-[5%]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-6 flex-wrap">
          {["Licensed Financial Adviser","FSP Registered","Century 21 Financial","The Capilitan Group","New Zealand Based"].map((item,i)=>(
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <div className="w-1 h-1 rounded-full bg-[#b8832a] opacity-60 hidden sm:block" />}
              <span className="text-[#5a6a7a] text-xs sm:text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section id="story" className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">The Story</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 mb-12 tracking-tight">Where Julius comes from — and why it matters.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#1a1a2e] text-base leading-relaxed mb-5">Julius Capilitan grew up watching people around him work hard and do the right things — save, show up, build a life — and still struggle to get ahead financially. Not because they made bad decisions, but because nobody ever taught them the rules of the game.</p>
              <p className="text-[#1a1a2e] text-base leading-relaxed mb-5">He started his career in financial services with one clear aim: to be the adviser he wished his family had access to. Someone who spoke plainly, who didn&apos;t make you feel small for not knowing something, and who genuinely cared whether you came out the other side in a better position.</p>
              <div className="border-l-[3px] border-[#b8832a] bg-[#faf8f4] rounded-r-xl px-6 py-5 my-7">
                <p className="text-[#0f2744] text-base italic leading-relaxed">&ldquo;I kept sitting across from people who were smart, hardworking, and completely in the dark. The information existed — it just wasn&apos;t being shared with the people who needed it most.&rdquo;</p>
                <cite className="block text-sm text-[#5a6a7a] mt-3 not-italic font-semibold">— Julius Capilitan</cite>
              </div>
              <p className="text-[#1a1a2e] text-base leading-relaxed mb-5"><strong className="text-[#0f2744]">LoveYourJourney grew out of that reputation.</strong> The question Julius kept getting asked was: &ldquo;Is there somewhere I can learn all of this before I come to see you?&rdquo; There wasn&apos;t. So he built it.</p>
              <p className="text-[#1a1a2e] text-base leading-relaxed">Long term, Julius wants LoveYourJourney to become a cornerstone of financial education in Aotearoa — the platform that Kiwis go to first, and that schools, employers, and eventually government can point people toward with confidence.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-[#faf8f4] border border-[#e4e9f0] rounded-xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#5a6a7a] mb-5">Career Timeline</div>
                <div className="flex flex-col gap-0">
                  {[
                    ["2018","Enters financial services — begins working with clients on mortgages and KiwiSaver."],
                    ["2020","Joins The Capilitan Group and builds out Century 21 Financial."],
                    ["2022","Begins working closely with Pacific and Filipino communities in NZ."],
                    ["2024","Launches LoveYourJourney — NZ's dedicated financial education platform."],
                    ["2025","500+ enrolled students. Building toward government-backed partnership."],
                  ].map(([year,text],i,arr)=>(
                    <div key={year} className="flex gap-4 pb-5 relative">
                      {i < arr.length-1 && <div className="absolute left-[11px] top-6 bottom-0 w-[1.5px] bg-[#e4e9f0]" />}
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-[#b8832a] flex items-center justify-center flex-shrink-0 mt-0.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-[#b8832a]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#b8832a] mb-1">{year}</div>
                        <div className="text-sm text-[#1a1a2e] leading-relaxed">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#faf8f4] border border-[#e4e9f0] rounded-xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-[#5a6a7a] mb-5">What Julius Stands For</div>
                <div className="flex flex-col gap-4">
                  {[
                    ["P","Plain English, always","No jargon, no condescension. If you have to ask what something means, Julius hasn't done his job."],
                    ["H","Honesty over sales","Julius will tell you if you're not ready. That's worth more than any commission."],
                    ["A","Access for everyone","Good financial guidance shouldn't depend on who your parents knew or how much you already earn."],
                  ].map(([icon,title,desc])=>(
                    <div key={title} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#e4e9f0] flex items-center justify-center font-bold text-[#b8832a] text-sm flex-shrink-0">{icon}</div>
                      <div>
                        <div className="font-bold text-[#0f2744] text-sm mb-1">{title}</div>
                        <div className="text-[#5a6a7a] text-xs leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 px-[5%] bg-[#0f2744]">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">Qualified, licensed, and accountable.</h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mb-12">Financial advice in New Zealand is regulated. Julius holds the qualifications required to give it — and the track record to back it up.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["FA","NZ Certificate in Financial Services (Level 5)","Open Polytechnic of New Zealand","The qualification required under NZ law to provide regulated financial advice."],
              ["MB","Licensed Mortgage Broker","Financial Markets Authority (FMA)","Authorised to provide mortgage advice under the Financial Markets Conduct Act 2013."],
              ["FS","FSP Registered Financial Adviser","Companies Office — FSP Register","Registered on the Financial Service Providers Register. Verifiable by the public."],
              ["C21","Century 21 Financial","The Capilitan Group","Principal broker and director of Century 21 Financial, operating under The Capilitan Group."],
              ["KS","KiwiSaver Adviser","Authorised under FAP Licence","Authorised to provide personalised KiwiSaver advice including fund selection and contributions."],
              ["LYJ","Founder, LoveYourJourney","NZ Financial Education Platform","Creator of NZ's dedicated financial education platform — working toward government recognition."],
            ].map(([icon,title,org,desc])=>(
              <div key={title} className="bg-white/[0.04] border border-white/[0.09] rounded-xl p-7 hover:bg-white/[0.07] hover:border-[rgba(184,131,42,0.3)] transition-all">
                <div className="w-11 h-11 rounded-xl bg-[rgba(184,131,42,0.15)] border border-[rgba(184,131,42,0.25)] flex items-center justify-center mb-4 text-[#b8832a] font-extrabold text-sm">{icon}</div>
                <div className="text-white font-bold mb-1.5 leading-snug">{title}</div>
                <div className="text-[#d4a44c] text-xs font-semibold mb-3">{org}</div>
                <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-20 px-[5%] bg-[#faf8f4]">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">Community</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 mb-3 tracking-tight">Financial education for all of Aotearoa.</h2>
          <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mb-12">Julius&apos;s commitment to access goes beyond the course.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["Filipino Community NZ","Homeownership for the Filipino community","Julius works closely with New Zealand's Filipino community — including outreach alongside NZ's first Filipino MP — to make homeownership more accessible for families often underserved by the mainstream financial system."],
              ["Pacific Communities","Reaching Pacific families across NZ","Pacific New Zealanders face some of the biggest barriers to homeownership and financial literacy. Julius's plain-English approach and lived understanding of multicultural family dynamics makes the difference."],
              ["First-Generation Buyers","First in the family to buy","For many of Julius's clients, they're the first in their family to buy a home in New Zealand. That comes with unique challenges — and a particular kind of pride when it happens."],
            ].map(([label,title,desc])=>(
              <div key={label} className="bg-white border border-[#e4e9f0] rounded-xl p-7 hover:border-[rgba(184,131,42,0.3)] hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-xs font-bold tracking-widest uppercase text-[#b8832a] mb-3">{label}</div>
                <h3 className="font-bold text-[#0f2744] mb-3">{title}</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#b8832a] border-b-2 border-[#b8832a] pb-1">What Clients Say</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] mt-4 mb-12 tracking-tight">In Julius&apos;s own clients&apos; words.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["RV","Rachel V.","First home buyer, Wellington","Julius was the first adviser who didn't make me feel stupid for not knowing how mortgages worked. He explained everything twice without making it weird, and we settled on our first home four months after our first meeting."],
              ["MM","Marco & Maria","Homeowners, Auckland","We came to Julius after being turned down by our bank. He looked at our situation properly, told us what needed to change, and had us approved six months later. He actually cares about the outcome — you can tell."],
              ["PN","Priya N.","Recent migrant, Christchurch","As someone new to New Zealand, the whole financial system was overwhelming. Julius broke it down in a way that actually made sense, and the LoveYourJourney course filled in the gaps before I even booked a meeting."],
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

      {/* CTA */}
      <section className="py-20 px-[5%] bg-gradient-to-br from-[#0f2744] to-[#1a3a5c]">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] border-b-2 border-[#b8832a] pb-1">Work With Julius</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">Ready to take the next step?</h2>
          <p className="text-white/55 text-base leading-relaxed mb-8">Whether you want to start the course, book a one-on-one session, or just ask a question — Julius and the team are here.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/course" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-7 py-4 rounded-md transition-all text-sm">Start the course</a>
            <a href="/contact" className="border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-4 rounded-md transition-all text-sm">Book a call with Julius</a>
          </div>
        </div>
      </section>

    </main>
  );
}