import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Home, Stethoscope, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-sanctuary.jpg";
import cowPortrait from "@/assets/cow-portrait.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

const missionHighlights = [
  {
    icon: Shield,
    title: "Rescue",
    description: "We rescue abandoned, injured, and elderly animals from dangerous situations across Bengal.",
  },
  {
    icon: Home,
    title: "Shelter",
    description: "Safe, loving homes where rescued animals can live out their lives in peace and dignity.",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description: "Professional veterinary treatment and ongoing healthcare for all our sanctuary residents.",
  },
  {
    icon: Heart,
    title: "Lifelong Protection",
    description: "Our commitment doesn't end—every animal receives care and love for their entire life.",
  },
];

const impactStats = [
  { number: "500+", label: "Animals Rescued" },
  { number: "15+", label: "Years of Service" },
  { number: "50+", label: "Acres of Sanctuary" },
  { number: "1000+", label: "Supporters Worldwide" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Peaceful cows grazing at Nandi Sanctuary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sanctuary-forest/95 via-sanctuary-forest/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-wide mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              <span>Sri Dham Mayapur, West Bengal</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              Every Life Deserves
              <span className="block text-sanctuary-gold">Love & Protection</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed animate-fade-up delay-200">
              Nandi Sanctuary is a haven for rescued cows, bulls, and animals in need. 
              We believe in compassion, dignity, and lifelong care for every living being.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Visit the Sanctuary</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Welcome to Nandi Sanctuary
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Safe Haven for Those Who Cannot Speak for Themselves
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by Dharmveer Singh (Dayal Mukunda Das) and Yashomati Singh, Nandi Sanctuary 
                stands as a beacon of hope in Sri Dham Mayapur. As part of People for Animals International, 
                we are dedicated to the rescue, rehabilitation, and lifelong care of cows, bulls, and 
                other animals in need.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our philosophy is simple: every living being deserves compassion, dignity, and protection. 
                Whether they are elderly, injured, or abandoned, we welcome them with open arms and 
                provide the love they deserve.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={cowPortrait}
                alt="Rescued cow at Nandi Sanctuary"
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card">
                <p className="font-display text-2xl font-bold text-primary">15+ Years</p>
                <p className="text-sm text-muted-foreground">Of compassionate service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="section-padding bg-sanctuary-cream bg-pattern-leaves">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to Animal Welfare
            </h2>
            <p className="text-muted-foreground">
              From rescue to lifelong care, we provide comprehensive support for every animal that finds their way to our sanctuary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionHighlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={volunteersImage}
                alt="Volunteers caring for animals"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Join Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Kindness Creates Ripples of Change
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every donation, every volunteer hour, every share of our story helps us continue our 
                vital work. When you support Nandi Sanctuary, you're not just helping animals—you're 
                joining a community dedicated to compassion and non-violence.
              </p>
              <ul className="space-y-4 mb-8">
                {["Feed an animal for a month with just ₹1,500", "Medical care for injured animals", "Shelter maintenance and expansion", "Emergency rescue operations"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button variant="donate" size="lg" asChild>
                  <Link to="/donate">
                    <Heart className="w-5 h-5" />
                    Donate to Save Lives
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/volunteer">
                    <Users className="w-5 h-5" />
                    Become a Volunteer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sanctuary-forest">
        <div className="container-narrow mx-auto text-center">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Together, We Can Make a Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of supporters who believe in our mission. Your contribution, 
            big or small, helps us provide sanctuary for animals in need.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/donate">Start Making an Impact Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
