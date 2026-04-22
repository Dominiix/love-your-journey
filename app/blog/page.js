export const metadata = {
  title: "Blog & Resources — LoveYourJourney",
  description: "NZ financial education articles written by Julius Capilitan. Mortgages, KiwiSaver, home buying, and more.",
};

const posts = [
  {
    slug: "ocr-what-it-means-for-your-mortgage",
    category: "Economy & OCR",
    title: "The OCR is dropping. What does that actually mean for your mortgage?",
    excerpt: "The Reserve Bank has cut the OCR again — and if you've got a mortgage coming off a fixed rate in the next six months, this affects you directly. Here's what's actually happening and how to position yourself.",
    date: "14 April 2025",
    read: "6 min",
    featured: true,
    tags: ["OCR","Mortgages","Interest Rates"],
  },
  {
    slug: "how-much-deposit-do-you-need",
    category: "Home Buying",
    title: "How much deposit do you actually need to buy in NZ right now?",
    excerpt: "The 20% rule is often quoted but rarely the full picture. Here's what the banks are actually requiring in 2025.",
    date: "7 April 2025",
    read: "5 min",
    featured: false,
    tags: ["Deposits","Home Buying"],
  },
  {
    slug: "wrong-kiwisaver-fund",
    category: "KiwiSaver",
    title: "Are you in the wrong KiwiSaver fund? Most Kiwis are.",
    excerpt: "The default fund your employer put you in probably isn't the right one. Here's how to check and what to do about it.",
    date: "1 April 2025",
    read: "4 min",
    featured: false,
    tags: ["KiwiSaver","Investing"],
  },
  {
    slug: "fixed-vs-floating-2025",
    category: "Mortgages",
    title: "Fixed vs floating in 2025 — which should you choose?",
    excerpt: "With rates shifting, the fixed vs floating question is back on everyone's mind. Here's how to think about it.",
    date: "24 March 2025",
    read: "7 min",
    featured: false,
    tags: ["Mortgages","Interest Rates"],
  },
  {
    slug: "pay-yourself-first",
    category: "Budgeting",
    title: "The pay-yourself-first method — and why it works in NZ",
    excerpt: "Budgeting apps come and go. This one habit, done consistently, does more for your finances than any spreadsheet.",
    date: "17 March 2025",
    read: "4 min",
    featured: false,
    tags: ["Budgeting","Savings"],
  },
  {
    slug: "what-is-the-ocr",
    category: "Economy & OCR",
    title: "What is the OCR and why should you care?",
    excerpt: "The Official Cash Rate is one of the most important numbers in New Zealand finance. Here's what it is, in plain English.",
    date: "10 March 2025",
    read: "5 min",
    featured: false,
    tags: ["OCR","Economy"],
  },
  {
    slug: "do-you-need-life-insurance",
    category: "Insurance",
    title: "Do you actually need life insurance? Here's an honest answer.",
    excerpt: "Life insurance is one of those things people put off indefinitely. Here's when it matters and when it doesn't.",
    date: "3 March 2025",
    read: "6 min",
    featured: false,
    tags: ["Insurance"],
  },
];

const bgColors = [
  "from-[#1a3a5c] to-[#2a6090]",
  "from-[#0d3d26] to-[#1a6640]",
  "from-[#3d2200] to-[#7a4400]",
  "from-[#0a2a4a] to-[#1a4a7a]",
  "from-[#0a1e38] to-[#0f2744]",
  "from-[#1a0d3d] to-[#3d2270]",
];

const categories = ["All","Home Buying","Mortgages","KiwiSaver","Investing","Economy & OCR","Budgeting","Insurance"];

export default function Blog() {
  const featured = posts.find(p => p.featured);
  const grid = posts.filter(p => !p.featured);

  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] px-[5%] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute right-[-80px] top-[-80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,131,42,0.07),transparent_65%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-[#d4a44c] mb-4 block">Resources & Insights</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Your NZ money guide —<br className="hidden sm:block" /> in plain English.
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-xl mb-8">
            Articles written by Julius and the LoveYourJourney team. No sponsored content — just honest, NZ-specific financial guidance.
          </p>
          <div className="flex gap-0 max-w-md">
            <input
              type="text"
              placeholder="Search articles — e.g. KiwiSaver, OCR, mortgage..."
              className="flex-1 px-4 py-3.5 rounded-l-md bg-white/[0.06] border border-white/12 text-white placeholder-white/30 outline-none focus:border-[rgba(184,131,42,0.5)] text-sm min-w-0"
            />
            <button className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold px-5 py-3.5 rounded-r-md text-sm transition-all whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="bg-[#faf8f4] border-b border-[#e4e9f0] px-[5%] sticky top-[68px] z-40">
        <div className="max-w-[1200px] mx-auto flex gap-2 overflow-x-auto py-3.5 scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-bold border whitespace-nowrap transition-all flex-shrink-0 ${
                i === 0
                  ? "bg-[#0f2744] border-[#0f2744] text-white"
                  : "bg-white border-[#e4e9f0] text-[#5a6a7a] hover:border-[#b8832a] hover:text-[#0f2744]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="max-w-[1200px] mx-auto px-[5%] py-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

        {/* LEFT — POSTS */}
        <div>
          {/* FEATURED */}
          {featured && (
            <a href={`/blog/${featured.slug}`} className="block bg-white border border-[#e4e9f0] rounded-2xl overflow-hidden mb-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] h-48 sm:h-56 flex items-end p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,131,42,0.12),transparent_55%)]" />
                <div className="relative z-10">
                  <span className="inline-block bg-[#b8832a] text-white text-xs font-bold px-3 py-1.5 rounded mb-3 tracking-wide uppercase">{featured.category}</span>
                  <h2 className="text-white text-xl sm:text-2xl font-extrabold leading-snug tracking-tight max-w-lg">{featured.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#0f2744] flex items-center justify-center text-white text-xs font-bold">JC</div>
                    <span className="text-sm font-semibold text-[#0f2744]">Julius Capilitan</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#e4e9f0]" />
                  <span className="text-xs text-[#5a6a7a]">{featured.date}</span>
                  <div className="w-1 h-1 rounded-full bg-[#e4e9f0]" />
                  <span className="text-xs text-[#5a6a7a]">{featured.read} read</span>
                </div>
                <p className="text-[#5a6a7a] text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex gap-2 flex-wrap">
                    {featured.tags.map(t => (
                      <span key={t} className="bg-[#faf8f4] border border-[#e4e9f0] text-[#5a6a7a] text-xs font-semibold px-2.5 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#b8832a]">Read article ›</span>
                </div>
              </div>
            </a>
          )}

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {grid.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border border-[#e4e9f0] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className={`h-32 bg-gradient-to-br ${bgColors[i % bgColors.length]} flex items-end p-4`}>
                  <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-bold px-2.5 py-1 rounded tracking-wide uppercase">{post.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0f2744] text-sm leading-snug mb-2">{post.title}</h3>
                  <p className="text-[#5a6a7a] text-xs leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#5a6a7a]">{post.date}</span>
                    <span className="text-xs text-[#5a6a7a]">{post.read} read</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white border-2 border-[#e4e9f0] text-[#0f2744] hover:border-[#b8832a] hover:text-[#b8832a] font-semibold px-8 py-3 rounded-lg text-sm transition-all">
              Load more articles
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="flex flex-col gap-6">

          {/* Julius */}
          <div className="bg-[#0f2744] rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1e3d5c] mx-auto mb-3 flex items-center justify-center text-white text-lg font-extrabold border-[3px] border-[rgba(184,131,42,0.3)]">JC</div>
            <div className="text-white font-bold mb-1">Julius Capilitan</div>
            <div className="text-white/45 text-xs mb-3">Mortgage Broker & Financial Adviser</div>
            <div className="w-7 h-0.5 bg-[#b8832a] mx-auto mb-3 rounded opacity-60" />
            <p className="text-white/55 text-xs leading-relaxed mb-4">Every article on this site is written or approved by Julius. No AI-generated filler — just honest, NZ-specific financial guidance.</p>
            <a href="/contact" className="block w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-2.5 rounded-lg text-sm transition-all">Book a call with Julius</a>
          </div>

          {/* Most Read */}
          <div className="bg-white border border-[#e4e9f0] rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e4e9f0]">
              <div className="font-bold text-[#0f2744] text-sm">Most Read</div>
            </div>
            <div className="p-3">
              {posts.slice(0,4).map((post,i) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 p-3 rounded-lg hover:bg-[#faf8f4] transition-all">
                  <div className="text-2xl font-extrabold text-[#e4e9f0] leading-none w-6 flex-shrink-0 mt-0.5">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f2744] leading-snug mb-1 hover:text-[#b8832a] transition-colors">{post.title}</div>
                    <div className="text-xs text-[#5a6a7a]">{post.read} read</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="bg-white border border-[#e4e9f0] rounded-xl p-5">
            <div className="font-bold text-[#0f2744] text-sm mb-4">Browse by Topic</div>
            <div className="flex flex-wrap gap-2">
              {["Home Buying","Mortgages","KiwiSaver","OCR","Investing","Budgeting","Insurance","First Home","Refinancing"].map(t => (
                <button key={t} className="bg-[#faf8f4] border border-[#e4e9f0] text-[#5a6a7a] hover:border-[#b8832a] hover:text-[#0f2744] text-xs font-semibold px-3 py-1.5 rounded-full transition-all">
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-[#0f2744] to-[#1a3a5c] rounded-xl p-6 text-center">
            <div className="text-white font-bold mb-2">Get the monthly update</div>
            <p className="text-white/50 text-xs leading-relaxed mb-4">Rate changes, market moves, and plain-English commentary. Once a month.</p>
            <input type="email" placeholder="your@email.com" className="w-full px-3 py-2.5 rounded-lg bg-white/[0.06] border border-white/12 text-white placeholder-white/30 outline-none focus:border-[rgba(184,131,42,0.5)] text-sm mb-2.5"/>
            <button className="w-full bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold py-2.5 rounded-lg text-sm transition-all">Subscribe</button>
            <p className="text-white/25 text-xs mt-2">Unsubscribe any time.</p>
          </div>

        </div>
      </div>

    </main>
  );
}