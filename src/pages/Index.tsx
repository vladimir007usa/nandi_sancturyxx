import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, Scale } from "lucide-react"; 

// Base Assets
import heroImage from "@/assets/hero-sanctuary.jpg";
import cowPortrait from "@/assets/cow.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

// Section Assets
import gausevaImg from "@/assets/gauseva.jpeg";
import farmerWelfareImg from "@/assets/farmers.jpg"; 
import mercyHomeImg from "@/assets/dogs.jpeg";
import streetRescueImg from "@/assets/rescue.jpeg"; 
import organicFarmingImg from "@/assets/farming.jpeg";
import employmentImg from "@/assets/employment.jpeg";

const row1Items = [
  {
    image: gausevaImg,
    title: "GauSeva",
    description: "Sacred cow sanctuary where cows are loved and protected.",
  },
  {
    image: farmerWelfareImg,
    title: "Farmers’ Welfare Program",
    description: "Providing veterinary care to farmers’ animals across villages within a 70 km radius.",
  },
  {
    image: mercyHomeImg,
    title: "Mercy Home for Dogs",
    description: "A safe haven for abandoned and rescued dogs to find a new life.",
  },
];

const row2Items = [
  {
    image: streetRescueImg,
    title: "Street Treatments & Rescue",
    description: "Immediate medical attention and rescue for animals in distress on the streets.",
  },
  {
    image: organicFarmingImg,
    title: "Organic Farming",
    description: "Fresh chemical-free vegetables, grown with love right in our community.",
  },
  {
    image: employmentImg,
    title: "Local Employment & Skill Development",
    description: "Empowering our local community through stable jobs and specialized animal care training.",
  },
];

const impactStats = [
  { number: "300+", label: "Animals Rescued" },
  { number: "12+", label: "Years of Service" },
  { number: "5+", label: "Acres of Sanctuary" },
  { number: "1000+", label: "Farmer Families supported" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nandi Sanctuary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sanctuary-forest/95 via-sanctuary-forest/80 to-transparent" />
        </div>

        <div className="relative container-wide mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm mb-6 animate-fade-up hover:bg-primary-foreground/20 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Sri Dham Mayapur, West Bengal</span>
            </a>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              Welcome To
              <span className="block text-sanctuary-gold">Nandi Sanctuary</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed animate-fade-up delay-200">
              A unique place created by Dharmveer Singh with love — where rescued animals find happiness, dignity, and continuous care.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/stories">Rescue Stories</Link>
              </Button>
              
              <Button variant="hero" size="xl" asChild className="bg-sanctuary-gold text-sanctuary-forest hover:bg-white transition-colors">
                <Link to="/animal-rights" className="flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Animals Rights
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - UPDATED WITH REQUESTED TEXT */}
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
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Nandi Sanctuary is a rural animal welfare initiative in Nadia District, West Bengal, operating as a project of People for Animals International. It was Founded with deep love and compassion by Dharmveer Singh and Yashomati Singh, this unique sanctuary offers rescued animals protection, happiness, dignity, and lifelong care.
                </p>
                <p>
                  The sanctuary is dedicated to the rescue, rehabilitation, and lifelong care of injured, abandoned, and vulnerable animals. 
                </p>
                <p>
                  Yashomati Singh along with a committed team of local village women, plays a key role in its development and daily operations, creating meaningful rural employment while strengthening compassionate service.
                </p>
              </div>
              
              <div className="mt-10">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">Know Our Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={cowPortrait}
                alt="Rescued animal at Nandi Sanctuary"
                className="rounded-2xl shadow-elevated w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="section-padding bg-sanctuary-cream bg-pattern-leaves">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to Human Animal Welfare
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {row1Items.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-3 text-sanctuary-forest">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {row2Items.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-3 text-sanctuary-forest">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-white">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="opacity-80 text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
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
              <div className="aspect-[5/4] overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={volunteersImage}
                  alt="Volunteers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Join Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Be part of something incredible. Create lasting change
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join a movement of care, compassion, and purpose. Together, we transform lives, offer hope, and create a world where selfless acts of love ripple far beyond today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sanctuary-gold text-sanctuary-forest hover:bg-sanctuary-gold/90 h-11 px-8 py-2"
                >
                  <Link to="/donate" className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sanctuary-forest">
        <div className="container-narrow mx-auto text-center text-white">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Together, We Can Make a Difference
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/donate">Support Our Mission</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;