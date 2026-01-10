import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Globe, Shield, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <span className="text-sanctuary-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Purpose
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Mission & Vision
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto">
            Guided by compassion, driven by purpose. Our mission is to create a world where every 
            animal lives free from fear and suffering.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-sanctuary-cream p-10 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To rescue, protect, and provide lifelong sanctuary for abandoned, injured, and elderly 
                animals—particularly cows and bulls—giving them the love, care, and dignity they deserve.
              </p>
              <ul className="space-y-4">
                {[
                  "Rescue animals from dangerous or neglectful situations",
                  "Provide comprehensive medical care and rehabilitation",
                  "Offer safe, permanent shelter with proper nutrition",
                  "Educate communities about animal welfare and compassion",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-primary p-10 rounded-2xl text-primary-foreground">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">
                A world where animals live without fear or suffering, where compassion guides human 
                actions, and where ethical coexistence between humans and animals is the norm.
              </p>
              <ul className="space-y-4">
                {[
                  "Zero tolerance for animal cruelty and abandonment",
                  "Communities embracing ethical treatment of all beings",
                  "Sustainable sanctuaries across India and beyond",
                  "A cultural shift towards non-violence and respect for life",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-sanctuary-gold mt-1 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sanctuary-cream">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              What Guides Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Every action we take is rooted in unconditional love and kindness for all living beings.",
              },
              {
                icon: Shield,
                title: "Non-Violence",
                description: "Ahimsa—the principle of non-violence—guides our every decision and interaction.",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "We build for the long term, ensuring our sanctuary can serve animals for generations.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-card p-8 rounded-2xl text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to Join Our Mission?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="donate" size="lg" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
