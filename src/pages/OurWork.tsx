import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ambulance, Home, Utensils, Stethoscope, Heart, Clock, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-sanctuary.jpg";

const workAreas = [
  {
    icon: Ambulance,
    title: "Animal Rescue Operations",
    description: "Our dedicated rescue team responds to calls about animals in distress 24/7. Whether injured on roads, abandoned by owners, or found in hazardous conditions, we bring them to safety with urgency and care.",
    details: ["24/7 emergency response team", "Equipped rescue vehicles", "Coordination with local authorities", "Safe transport protocols"],
  },
  {
    icon: Home,
    title: "Shelter & Safe Living Spaces",
    description: "Our sanctuary spans over 50 acres of lush, green land where animals can roam freely. We provide comfortable sheds, clean bedding, and spacious pastures tailored to each animal's needs.",
    details: ["Weather-protected shelters", "Separate areas for different needs", "Clean, hygienic environments", "Natural grazing pastures"],
  },
  {
    icon: Utensils,
    title: "Daily Feeding & Nutrition",
    description: "Proper nutrition is fundamental to our animals' health. Our team prepares balanced meals every day, including fresh fodder, grains, vitamins, and supplements based on individual health requirements.",
    details: ["Fresh fodder daily", "Customized nutrition plans", "Clean drinking water 24/7", "Special diets for ill animals"],
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care & Treatment",
    description: "Our on-site veterinary team provides comprehensive medical care. From routine check-ups to emergency surgeries, we ensure every animal receives the best possible healthcare.",
    details: ["Full-time veterinary staff", "On-site medical facilities", "Regular health screenings", "Emergency surgical capability"],
  },
  {
    icon: Heart,
    title: "Elder & Disabled Animal Care",
    description: "Many of our residents are elderly or disabled animals who have been abandoned. We provide specialized care with extra attention to their comfort, mobility, and quality of life.",
    details: ["Specialized mobility support", "Pain management", "Comfortable bedding", "Extra caregiver attention"],
  },
  {
    icon: Clock,
    title: "Long-Term Rehabilitation",
    description: "Animals who arrive traumatized or severely injured undergo careful rehabilitation. Our patient approach helps them regain trust, health, and happiness over time.",
    details: ["Trauma-informed care", "Gradual socialization", "Physical therapy", "Emotional healing support"],
  },
];

const OurWork = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sanctuary grounds" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sanctuary-forest/90" />
        </div>
        <div className="relative container-wide mx-auto px-4 md:px-8 text-center">
          <span className="text-sanctuary-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Our Work at the Sanctuary
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto">
            From the moment an animal arrives to their last breath, we provide comprehensive care 
            that honors their life and dignity.
          </p>
        </div>
      </section>

      {/* Daily Operations */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Day at Nandi Sanctuary
            </h2>
            <p className="text-muted-foreground">
              Every day, our dedicated team works tirelessly to ensure each animal receives 
              the attention and care they need to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workAreas.map((area) => (
              <div key={area.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Practices */}
      <section className="section-padding bg-sanctuary-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Approach
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ethical & Compassionate Practices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Nandi Sanctuary, our practices are guided by respect for life and ethical 
                treatment. We never exploit animals for profit or entertainment. Our sole 
                purpose is their welfare and happiness.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "No exploitation or commercial use" },
                  { icon: Leaf, text: "Sustainable and eco-friendly operations" },
                  { icon: Heart, text: "Lifetime commitment to every animal" },
                  { icon: Clock, text: "Patient, trauma-informed care" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-10 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Our Promise
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">
                Every animal that enters Nandi Sanctuary is welcomed as family. We promise:
              </p>
              <ul className="space-y-4">
                {[
                  "Lifelong care regardless of cost or effort",
                  "Dignity in life and death",
                  "Freedom from fear, pain, and hunger",
                  "Love and compassion every single day",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-sanctuary-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Help Us Continue This Vital Work
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Your support enables us to rescue more animals, provide better care, and expand our sanctuary.
          </p>
          <Button variant="donate" size="xl" asChild>
            <Link to="/donate">
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
