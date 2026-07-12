import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";
import "./index.css";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a4 4 0 100 8 4 4 0 000-8zm6.406-.606a.933.933 0 100-1.867.933.933 0 000 1.867z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.56 1.53-3.98 3.87-3.98 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.88h-2.4v6.99A10 10 0 0022 12z" />
    </svg>
  );
}

const eventTypes = [
  {
    title: "Weddings",
    desc: "From intimate vow renewals to three-day celebrations, styled around your story.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Corporate & Conferences",
    desc: "Product launches, summits and offsites that run exactly on schedule.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Birthdays & Milestones",
    desc: "Themed parties and milestone birthdays that feel truly personal.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Galas & Fundraisers",
    desc: "Black-tie evenings with the polish sponsors and guests remember.",
    img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Concerts & Festivals",
    desc: "Stage, sound and crowd flow handled by people who've done it before.",
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Private Celebrations",
    desc: "Baby showers, engagements and family gatherings, done with care.",
    img: "https://images.unsplash.com/photo-1529636444744-4909f60fc0fd?q=80&w=800&auto=format&fit=crop",
  },
];

const services = [
  {
    title: "Planning & Coordination",
    desc: "Timelines, vendors and budgets managed so nothing falls through.",
    icon: Sparkles,
  },
  {
    title: "Theme & Decor Design",
    desc: "Custom colour stories, florals and styling built around your vision.",
    icon: Check,
  },
  {
    title: "Venue & Vendor Sourcing",
    desc: "Access to trusted venues, caterers and crews across the city.",
    icon: MapPin,
  },
  {
    title: "On-Day Execution",
    desc: "A lead coordinator on-site so you can actually enjoy your event.",
    icon: ArrowRight,
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?q=80&w=800&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop", span: "hidden md:block" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f29c8b0ba2?q=80&w=800&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop", span: "hidden md:block" },
];

const testimonials = [
  {
    name: "Riya Malhotra",
    tag: "Wedding, Jaipur",
    text: "Evara ran our wedding weekend without a single hiccup we noticed. Every detail, from the seating cards to the last song, felt like us.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    lift: false,
  },
  {
    name: "Arjun Kapoor",
    tag: "Corporate Launch, Delhi",
    text: "We handed over our product launch brief and got back a night our whole leadership team is still talking about. Genuinely flawless logistics.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    lift: true,
  },
  {
    name: "Sanya Verma",
    tag: "Birthday, Udaipur",
    text: "My daughter's birthday theme came together exactly how I pictured it in my head, except better. The team thinks of things you'd never remember to ask for.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    lift: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold-500 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );
}

export default function EventsByEvara() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Events", href: "#events" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="font-body bg-cream text-plum-950 antialiased">
      {/* ============ NAV ============ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-plum-950/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <a href="#top" className="font-display text-2xl font-semibold tracking-wide text-plum-950">
            Evara<span className="text-gold-500">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wide">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="underline-grow hover:text-plum-700">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block bg-plum-950 hover:bg-plum-900 text-cream text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Plan My Event
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-plum-950"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-plum-950/10 px-6 py-5 space-y-4 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="block">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-plum-950 text-cream text-center py-3 rounded-full"
            >
              Plan My Event
            </a>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-plum-950">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 w-80 h-80 bg-plum-500/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-cream">
            <p className="uppercase tracking-[0.35em] text-gold-400 text-xs font-semibold mb-6">
              Event Design &amp; Planning Studio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold mb-6">
              Every occasion,
              <br className="hidden sm:block" />
              <span className="italic text-gold-300">written</span> to be remembered.
            </h1>
            <p className="text-plum-100/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Evara turns dates on a calendar into evenings people talk about for years — weddings,
              galas, launches and milestone celebrations, planned down to the last candle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-plum-950 font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Start Planning
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 hover:border-cream text-cream px-8 py-4 rounded-full transition-colors"
              >
                View Our Work
              </a>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-14">
              <div>
                <p className="font-display text-3xl text-gold-300">450+</p>
                <p className="text-xs uppercase tracking-widest text-plum-100/60 mt-1">Events Delivered</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-300">9 yrs</p>
                <p className="text-xs uppercase tracking-widest text-plum-100/60 mt-1">In Business</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold-300">98%</p>
                <p className="text-xs uppercase tracking-widest text-plum-100/60 mt-1">Clients Rebook</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Elegant event reception decorated in purple and gold"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden sm:flex items-center gap-3 bg-cream text-plum-950 rounded-2xl shadow-xl px-5 py-4 max-w-[230px]">
              <div className="w-11 h-11 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-gold-500" />
              </div>
              <p className="text-sm font-medium leading-snug">
                Full-service planning, from concept to last dance.
              </p>
            </div>
          </div>
        </div>

        <div className="scallop-bottom absolute bottom-0 inset-x-0 h-6 bg-cream" />
      </section>

      {/* ============ TYPES OF EVENTS ============ */}
      <section id="events" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.35em] text-plum-600 text-xs font-semibold mb-4">What We Plan</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-plum-950">
              An occasion for every kind of story
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((e) => (
              <div key={e.title} className="card-hover group bg-white rounded-3xl overflow-hidden border border-plum-950/5">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 text-plum-950">{e.title}</h3>
                  <p className="text-sm text-plum-900/60 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="relative py-24 md:py-32 bg-plum-950 text-cream overflow-hidden">
        <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-plum-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.35em] text-gold-400 text-xs font-semibold mb-4">How We Help</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Everything between the idea and the applause
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-3xl overflow-hidden">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-plum-950 p-8 hover:bg-plum-900 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-500/15 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-plum-100/60 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section id="gallery" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.35em] text-plum-600 text-xs font-semibold mb-4">Gallery</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-plum-950">
                Moments we've helped make
              </h2>
            </div>
            <a href="#contact" className="underline-grow text-sm font-medium text-plum-700 w-fit">
              See full portfolio →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[190px]">
            {galleryImages.map((g, i) => (
              <div key={i} className={`col-span-1 ${g.span} rounded-2xl overflow-hidden`}>
                <img
                  src={g.src}
                  alt="Event moment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="testimonials" className="relative py-24 md:py-32 bg-plum-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="uppercase tracking-[0.35em] text-plum-600 text-xs font-semibold mb-4">Kind Words</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-plum-950">
              Straight from our clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`bg-white rounded-3xl p-8 shadow-sm ${t.lift ? "md:mt-8" : ""}`}
              >
                <Stars />
                <p className="text-plum-900/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-plum-950">{t.name}</p>
                    <p className="text-xs text-plum-900/50">{t.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="uppercase tracking-[0.35em] text-plum-600 text-xs font-semibold mb-4">Get In Touch</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-plum-950 mb-6">
                Tell us about the event you're imagining
              </h2>
              <p className="text-plum-900/60 leading-relaxed mb-10 max-w-md">
                Share a few details and one of our planners will get back to you within one business day
                with next steps.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-plum-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-plum-900/50 mb-1">Call Us</p>
                    <p className="font-medium text-plum-950">+91 8869920872</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-plum-950 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-plum-900/50 mb-1">Email Us</p>
                    <p className="font-medium text-plum-950">hello@eventsbyevara.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-plum-950 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-plum-900/50 mb-1">Studio</p>
                    <p className="font-medium text-plum-950"> Haratganj, Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-plum-950 rounded-[1.75rem] p-8 md:p-10 shadow-xl">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91"
                      className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">
                      Event Type
                    </label>
                    <select className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:ring-2 focus:ring-gold-500">
                      <option>Wedding</option>
                      <option>Corporate</option>
                      <option>Birthday</option>
                      <option>Gala / Fundraiser</option>
                      <option>Concert / Festival</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-plum-100/60 mb-2">
                    Tell us more
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Guest count, location, vision..."
                    className="w-full bg-plum-800/60 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-plum-950 font-semibold py-4 rounded-xl transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="scallop-top bg-plum-950 text-cream pt-20 pb-8 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-cream/10">
            <div className="md:col-span-2">
              <a href="#top" className="font-display text-2xl font-semibold text-cream">
                Evara<span className="text-gold-400">.</span>
              </a>
              <p className="text-sm text-plum-100/60 mt-4 leading-relaxed max-w-sm">
                A full-service event design and planning studio, crafting weddings, corporate events
                and celebrations across Rajasthan and beyond.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-plum-800 hover:bg-gold-500 hover:text-plum-950 flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-plum-800 hover:bg-gold-500 hover:text-plum-950 flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">Explore</p>
              <ul className="space-y-3 text-sm text-plum-100/70">
                <li><a href="#events" className="hover:text-gold-300">Types of Events</a></li>
                <li><a href="#services" className="hover:text-gold-300">Services</a></li>
                <li><a href="#gallery" className="hover:text-gold-300">Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-gold-300">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">Studio</p>
              <ul className="space-y-3 text-sm text-plum-100/70">
                <li>C-Scheme, Jaipur, Rajasthan</li>
                <li>+91 98765 43210</li>
                <li>hello@eventsbyevara.com</li>
                <li>Mon – Sat, 10am – 7pm</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-plum-100/50">
            <p>© 2026 Events By Evara. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
