import "./globals.css";

export const metadata = {
  title: "LoveYourJourney — NZ Financial Education",
  description: "Real, practical financial education built for New Zealanders. Mortgages, KiwiSaver, first homes, and more.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,39,68,0.97)] backdrop-blur-md px-[5%]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 bg-gradient-to-br from-[#b8832a] to-[#d4a44c] rounded-lg flex items-center justify-center font-extrabold text-white text-xs">
            LY
          </div>
          <span className="text-white font-bold text-base">
            Love<span className="text-[#d4a44c]">Your</span>Journey
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors no-underline">Home</a>
          <a href="/course" className="text-white/70 hover:text-white text-sm font-medium transition-colors no-underline">Course</a>
          <a href="/blog" className="text-white/70 hover:text-white text-sm font-medium transition-colors no-underline">Blog</a>
          <a href="/about" className="text-white/70 hover:text-white text-sm font-medium transition-colors no-underline">About</a>
          <a href="/contact" className="text-white/70 hover:text-white text-sm font-medium transition-colors no-underline">Contact</a>
          <a href="/course" className="bg-[#b8832a] hover:bg-[#d4a44c] text-white font-bold text-sm px-5 py-2.5 rounded-md transition-colors no-underline">
            Start Learning
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a1e38] px-[5%] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#b8832a] to-[#d4a44c] rounded-lg flex items-center justify-center font-extrabold text-white text-xs">
                LY
              </div>
              <span className="text-white font-bold text-base">
                Love<span className="text-[#d4a44c]">Your</span>Journey
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              New Zealand&apos;s financial education platform — built by licensed mortgage brokers, for everyday Kiwis.
            </p>
          </div>
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">Course</h4>
            <a href="/course" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">All Modules</a>
            <a href="/course" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">Pricing</a>
            <a href="/contact" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">Book a Call</a>
          </div>
          <div>
            <h4 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">Company</h4>
            <a href="/about" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">About Julius</a>
            <a href="/blog" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">Blog</a>
            <a href="/contact" className="block text-white/35 hover:text-white text-sm mb-2.5 no-underline transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-white/22 text-xs leading-relaxed max-w-xl">
            © 2025 LoveYourJourney. Part of The Capilitan Group. Financial services provided by Century 21 Financial. Julius Capilitan is a licensed financial adviser. This site is for educational purposes only and does not constitute personalised financial advice.
          </p>
          <div className="flex gap-5 flex-shrink-0">
            <a href="#" className="text-white/25 hover:text-white text-xs no-underline transition-colors">Privacy</a>
            <a href="#" className="text-white/25 hover:text-white text-xs no-underline transition-colors">Terms</a>
            <a href="#" className="text-white/25 hover:text-white text-xs no-underline transition-colors">FSP Register</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}