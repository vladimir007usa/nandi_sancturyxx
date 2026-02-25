import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-sanctuary.jpg";
import logo from "@/assets/logo.png"; // Your colored logo.png

// Import specific images for the work area boxes
import nandiImg from "@/assets/nandi.jpg";
import dailyImg from "@/assets/daily.jpg";
import elderImg from "@/assets/elder.jpg";
import animalImg from "@/assets/animal.jpg";
import careImg from "@/assets/care.jpg";
import govtImg from "@/assets/govt.jpg";

const workAreas = [
  {
    image: nandiImg, // First box image
    title: "Nandi Sanctuary",
    description: "Our sanctuary spans over 5 acres of lush, green land where animals can roam freely. We provide comfortable sheds, clean bedding, and spacious pastures tailored to each animal's needs.",
    details: [ "Weather-protected shelters", "Separate areas for different needs"],
  },
  {
    image: dailyImg, // Second box updated to daily.jpg
    title: "Daily Care",
    description: "Our team refreshes drinking water daily and cleans all water spaces to keep them safe. Animal sections are maintained, cow dung removed twice a day, creating clean areas where animals feel at ease.",
    details: ["Fresh fodder daily", "Customized nutrition plans"],
  },
  {
    image: elderImg, 
    title: "Elder & Disabled Animal Care",
    description: "Many of our residents are elderly or disabled animals who have been abandoned. We provide specialized care with extra attention to their comfort, mobility, and quality of life.",
    details: ["Specialized mobility support", "Pain management"],
  },
  {
    image: animalImg, 
    title: "Animal Rescue Operations",
    description: "Our dedicated rescue team responds to calls about animals in distress. Whether injured on roads, abandoned by owners, or found in hazardous conditions, we bring them to safety with urgency and care.",
    details: [ "Equipped rescue vehicles", "Coordination with local authorities"],
  },
  {
    image: careImg, 
    title: "Veterinary Care & Treatment",
    description: "Our on-site veterinary team provides comprehensive medical care. From routine check-ups to emergency surgeries, we ensure every animal receives the best possible healthcare.",
    details: ["Full-time veterinary staff", "On-site medical facilities"],
  },
  {
    image: govtImg, 
    title: "Govt programs",
    description: "Animals who arrive traumatized or severely injured undergo careful rehabilitation. Our patient approach helps them regain trust, health, and happiness over time.",
    details: ["Trauma-informed care", "Gradual socialization"],
  },
];

const OurWork = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sanctuary grounds" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sanctuary-forest/90" />
        </div>
        <div className="relative container-wide mx-auto px-4 md:px-8 text-center">
          <span className="text-sanctuary-gold font-semibold text-xs uppercase tracking-widest mb-4 block">
            Mission Of
          </span>
          
          <div className="flex items-center justify-center gap-3 mb-6 max-w-5xl mx-auto">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-10 h-10 md:w-14 md:h-14 object-contain shrink-0" 
            />
            <h1 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap tracking-tight">
              People For Animal International
            </h1>
          </div>

          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Not just within Nandi Sanctuary — we extend help, medical care, and protection to animals across nearby villages within a 70 km radius, reaching those who need us most, right where they are.
          </p>
        </div>
      </section>

      {/* Daily Operations Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Projects
            </h2>
            <p className="text-muted-foreground text-sm">
              Our dedicated team works tirelessly to ensure each animal receives 
              the attention and care they need to thrive.
            </p>
          </div>

          {/* Grid display for the work area boxes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workAreas.map((area) => (
              <div key={area.title} className="bg-card overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 flex flex-col">
                
                {/* 1. Title */}
                <div className="p-5 pb-3">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {area.title}
                  </h3>
                </div>

                {/* 2. Image */}
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                
                {/* 3. Body Content */}
                <div className="p-5 flex-grow">
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {area.description}
                  </p>
                  
                  {/* 4. Bullets */}
                  <ul className="space-y-2">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                        <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Practices */}
      <section className="section-padding bg-sanctuary-cream/50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-accent font-semibold text-xs uppercase tracking-wider mb-3 block">
                Our Approach
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ethical & Compassionate Practices
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                At Nandi Sanctuary, our practices are guided by respect for life and ethical 
                treatment. We never exploit animals for profit or entertainment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "No exploitation",
                  "Eco-friendly operations",
                  "Lifetime commitment",
                  "Trauma-informed care",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground text-xs font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-8 rounded-xl text-primary-foreground">
              <h3 className="font-display text-xl font-semibold mb-4">
                Our Promise
              </h3>
              <ul className="space-y-3">
                {[
                  "Lifelong care regardless of cost",
                  "Dignity in life and death",
                  "Freedom from fear and pain",
                  "Love and compassion every day",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Heart className="w-4 h-4 text-sanctuary-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background">
        <div className="container-narrow mx-auto text-center px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            Help Us Continue This Vital Work
          </h2>
          <Button variant="donate" size="lg" asChild className="h-11 px-8">
            <Link to="/donate" className="flex items-center justify-center gap-2 text-sm">
              <Heart className="w-4 h-4" />
              Support Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OurWork;