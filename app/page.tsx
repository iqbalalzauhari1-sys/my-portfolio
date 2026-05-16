"use client";

import { ReactNode } from "react";
import { 
  Smartphone, 
  Database, 
  Film, 
  MapPin, 
  Terminal,
  Briefcase,
  Mail,
  Code2,
  BarChart3,
  Sparkles
} from "lucide-react";

// ============================================
// UTILITY FUNCTION
// ============================================
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ============================================
// BENTO CARD COMPONENT
// ============================================
interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

function BentoCard({ children, className, hoverEffect = true }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card border border-border p-6 transition-all duration-500 ease-out",
        hoverEffect && "hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1 hover:border-muted-foreground/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ============================================
// PHONE MOCKUP COMPONENT
// ============================================
interface PhoneMockupProps {
  className?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
}

function PhoneMockup({ 
  className, 
  screenshotSrc = "/screenshots/purwakarta-tourism.png",
  screenshotAlt = "PurwakartaTourism App Screenshot"
}: PhoneMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-[220px] h-[450px] bg-foreground rounded-[40px] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative w-full h-full bg-muted rounded-[32px] overflow-hidden">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20" />
          
          {/* Screen Content - Image */}
          <img 
            src="/home.jpeg"
            alt={screenshotAlt}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Side buttons */}
        <div className="absolute -right-1 top-24 w-1 h-10 bg-foreground rounded-r-sm" />
        <div className="absolute -left-1 top-20 w-1 h-6 bg-foreground rounded-l-sm" />
        <div className="absolute -left-1 top-32 w-1 h-12 bg-foreground rounded-l-sm" />
      </div>
    </div>
  );
}

// ============================================
// TECH BADGE COMPONENT
// ============================================
interface TechBadgeProps {
  label: string;
  className?: string;
}

function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border transition-all duration-300 hover:bg-muted hover:scale-105",
        className
      )}
    >
      {label}
    </span>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Container */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Hero Card - Spans 2 columns on desktop */}
          <BentoCard className="md:col-span-2 min-h-[280px] flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                  <Sparkles className="w-3 h-3" />
                  Available for projects
                </span>
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight">
                  Hi, saya <span className="text-green-600">Iqbal Alzauhari</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Android Developer & Data Enthusiast
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Mahasiswa aktif semester 6 program studi Teknik Informatika di STT Wastukancana Purwakarta yang berminat mendalami karier pada bidang Data Analyst dan Android Dev. Saya berkomitmen pada pengembangan diri dengan mengasah soft skill seperti kedisiplinan, manajemen waktu, dan adaptabilitas. Saya ingin menjadikan pengalaman magang ini sebagai langkah awal yang serius untuk membangun karier profesional pada lingkungan perusahaan.
              </p>
            </div>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard className="flex flex-col justify-center items-center min-h-[180px]">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground font-medium">Connect with me</p>
              <div className="flex items-center gap-3">
                <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-secondary hover:bg-muted transition-all duration-300 hover:scale-110 group"
                  aria-label="GitHub Profile"
                >
                  <Terminal className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/iqbal-alzauhari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-secondary hover:bg-muted transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn Profile"
                >
                  <Briefcase className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                </a>
                <a
                  href="mailto:iqbalalzauhari1@gmail.com"
                  className="p-3 rounded-2xl bg-secondary hover:bg-muted transition-all duration-300 hover:scale-110 group"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard className="flex flex-col justify-center min-h-[180px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">12+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Learning</p>
              </div>
            </div>
          </BentoCard>

          {/* Main Project - PurwakartaTourism - Spans 3 columns */}
          <BentoCard className="md:col-span-3 min-h-[420px]">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              {/* Phone Mockup */}
              <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
                <PhoneMockup className="scale-90 lg:scale-100 transition-transform duration-500 group-hover:scale-95 lg:group-hover:scale-105" />
              </div>
              
              {/* Project Details */}
              <div className="flex flex-col justify-center gap-4 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Featured Project
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    PurwakartaTourism
                  </h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Aplikasi mobile yang membantu wisatawan menjelajahi tempat-tempat menarik di Purwakarta. 
                  Dilengkapi dengan rekomendasi tempat wisata, fitur link to maps, dan informasi destinasi.
                </p>
                
                <div className="flex items-center gap-3 pt-2">
                  <div className="p-2 rounded-xl bg-accent/10">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="p-2 rounded-xl bg-accent/10">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="p-2 rounded-xl bg-accent/10">
                    <Database className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="flex flex-col justify-center min-h-[280px] md:min-h-[420px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <TechBadge label="Kotlin" />
                <TechBadge label="XML" />
                <TechBadge label="Android Studio" />
                <TechBadge label="Jetpack" />
                <TechBadge label="Room DB" />
                <TechBadge label="Retrofit" />
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                Pengembangan aplikasi native menggunakan Kotlin. Arsitektur tata letak dan navigasi dibangun secara terstruktur dengan XML di Android Studio, dioptimalkan untuk menampilkan aset gambar fotografi destinasi wisata dengan bersih dan responsif.              </p>
            </div>
          </BentoCard>

          {/* Project 2 - Sawadee Cinema */}
          <BentoCard className="md:col-span-2 min-h-[280px]">
            <div className="flex flex-col h-full">
              {/* Visual Element */}
              <div className="relative h-32 md:h-40 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-secondary overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 rounded-lg bg-card/80 shadow-lg flex items-center justify-center">
                      <Film className="w-8 h-8 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-card/60 rounded-full" />
                      <div className="h-2 w-16 bg-card/40 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent/60" />
                  <div className="w-2 h-2 rounded-full bg-accent/40" />
                  <div className="w-2 h-2 rounded-full bg-accent/20" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Sawadee Cinema
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Aplikasi penjelajah basis data film yang dirancang dengan fungsionalitas filtering spesifik. Memudahkan pengguna untuk menyaring, mencari, dan menemukan katalog film yang secara khusus berasal dari Thailand dengan antarmuka yang intuitif.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge label="Kotlin" />
                  <TechBadge label="TMDB API" />
                  <TechBadge label="RecyclerView" />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Project 3 - Pemetaan Pintar Data Malaria */}
          <BentoCard className="md:col-span-2 min-h-[280px]">
            <div className="flex flex-col h-full">
              {/* Visual Element */}
              <div className="relative h-32 md:h-40 rounded-2xl bg-gradient-to-br from-secondary via-muted to-accent/10 overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: i % 3 === 0 ? 'var(--accent)' : i % 2 === 0 ? 'var(--muted)' : 'var(--card)',
                          opacity: 0.3 + (i * 0.08),
                        }}
                      >
                        {i === 4 && <BarChart3 className="w-4 h-4 text-accent" />}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-card/80 text-xs font-medium text-muted-foreground">
                  K-Means
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Pemetaan Pintar Data Malaria
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proyek Data Science yang bertujuan mengekstraksi insight dari data publik. Menggunakan algoritma Machine Learning untuk mengelompokkan (clustering) dataset sebaran penyakit malaria riil dari Open Data Jabar, membantu memvisualisasikan tingkat kerentanan wilayah.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge label="Python" />
                  <TechBadge label="Scikit-learn" />
                  <TechBadge label="Pandas" />
                  <TechBadge label="Matplotlib" />
                </div>
              </div>
            </div>
          </BentoCard>

        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iqbal Alzauhari. v0.app.
          </p>
        </footer>
      </div>
    </main>
  );
}
