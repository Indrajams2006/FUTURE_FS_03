import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  MessageCircle,
  Sparkles,
  Feather,
  Crown,
  Clock,
  ShieldCheck,
  Heart,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import heroImage from "../assets/hero-jewelry.jpg";
import necklacesImage from "../assets/product-necklaces.jpg";
import earringsImage from "../assets/product-earrings.jpg";
import braceletsImage from "../assets/product-bracelets.jpg";
import ringsImage from "../assets/product-rings.jpg";
import ankletsImage from "../assets/product-anklets.jpg";
import setsImage from "../assets/product-sets.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const products = [
  {
    title: "Necklaces",
    description: "Delicate pendants and chains that elevate your everyday look.",
    image: necklacesImage,
  },
  {
    title: "Earrings",
    description: "Studs, hoops, and drops designed for all-day comfort.",
    image: earringsImage,
  },
  {
    title: "Bracelets",
    description: "Lightweight bangles and chain bracelets for effortless styling.",
    image: braceletsImage,
  },
  {
    title: "Rings",
    description: "Stackable bands and elegant rings that keep their shine.",
    image: ringsImage,
  },
  {
    title: "Anklets",
    description: "Subtle, dainty anklets perfect for daily wear.",
    image: ankletsImage,
  },
  {
    title: "Gift Sets",
    description: "Curated jewelry sets ready to gift someone special.",
    image: setsImage,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Anti-Tarnish",
    description: "Crafted to resist tarnishing and keep their golden glow for years.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "So comfortable you'll forget you're wearing them — perfect for daily wear.",
  },
  {
    icon: Crown,
    title: "Elegant Design",
    description: "Minimal, timeless pieces that pair beautifully with any outfit.",
  },
  {
    icon: Clock,
    title: "Long-Lasting",
    description: "Built to withstand everyday life without losing shine or quality.",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Layered gold necklaces on model" },
  { src: gallery2, alt: "Gold rings and bracelet styled on hands" },
  { src: gallery3, alt: "Gold hoop earrings flat lay" },
  { src: gallery4, alt: "Delicate gold earrings on model" },
  { src: gallery5, alt: "Stacked gold bracelets" },
  { src: gallery6, alt: "Elegant jewelry gift set" },
];

function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-wide text-primary"
          >
            Nira Collection
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://instagram.com/niraa_.collections"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
            >
              <Instagram size={16} />
              DM to Order
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://instagram.com/niraa_.collections"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Instagram size={18} />
                DM to Order
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Elegant Nira Collection jewelry flat lay"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Everyday Luxury
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Nira Collection
          </h1>
          <p className="mt-4 font-[family-name:var(--font-display)] text-xl italic text-primary sm:text-2xl md:text-3xl">
            Anti-Tarnish Daily Wear Jewellery
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Perfect for everyday shine{" "}
            <Sparkles className="inline-block align-text-bottom text-primary" size={18} />
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com/niraa_.collections"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              <ShoppingBag size={18} />
              Shop Now
            </a>
            <a
              href="#collection"
              onClick={(e) => handleNavClick(e, "#collection")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-accent"
            >
              Explore Collection
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img
                  src={gallery2}
                  alt="Nira Collection jewelry styled on hands"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1008}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-primary/10 lg:block" />
              <div className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full bg-primary/10 lg:block" />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Our Story
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
                Jewellery Made for Everyday Moments
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Nira Collection creates lightweight, elegant, long-lasting jewelry designed
                for everyday wear without losing shine or quality. Each piece is thoughtfully
                crafted to be your go-to accessory — from morning meetings to evening plans.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We believe luxury should feel effortless. That’s why our anti-tarnish pieces
                are made to keep up with your daily routine while adding a touch of timeless
                elegance to every outfit.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-8 lg:justify-start">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">
                    500+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">
                    100%
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Anti-Tarnish</p>
                </div>
                <div className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">
                    6+
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="collection" className="bg-cream-dark/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Collection
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Discover pieces designed to shine with you every single day.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={1008}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                  <a
                    href="https://instagram.com/niraa_.collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <MessageCircle size={16} />
                    DM to Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Why Nira
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Quality you can feel, design you’ll love, and shine that lasts.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon size={26} />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-cream-dark/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              The Collection
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Gallery
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              A glimpse of the everyday elegance our customers love.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1008}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Order Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-card shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative hidden lg:block">
                <img
                  src={gallery6}
                  alt="Elegant jewelry gift packaging"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1008}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
              </div>

              <div className="flex flex-col items-center justify-center p-10 text-center sm:p-14">
                <Heart className="text-primary" size={40} />
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl">
                  Ready to Shine?
                </h2>
                <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
                  All orders are handled through Instagram DM. Send us a message with your
                  favorite pieces and we’ll take care of the rest.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <a
                    href="https://instagram.com/niraa_.collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
                  >
                    <Instagram size={20} />
                    DM @niraa_.collections
                  </a>
                  <a
                    href="mailto:niracollections@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <MessageCircle size={16} />
                    Or email us for bulk orders
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-6 text-muted-foreground">
                  <a
                    href="https://instagram.com/niraa_.collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream-dark/30 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-primary">
                Nira Collection
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Anti-Tarnish Daily Wear Jewellery
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="https://instagram.com/niraa_.collections"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Instagram size={18} />
              @niraa_.collections
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nira Collection. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
