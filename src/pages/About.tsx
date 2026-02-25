import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Leaf } from "lucide-react";

// Asset Imports
import cowPortrait from "@/assets/story.jpg";
import coreImage from "@/assets/core.jpg"; // Newly added image

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sanctuary-cream py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story of Compassion & Service
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded on the principles of non-violence and compassion, Nandi Sanctuary has been a 
              beacon of hope for animals in need for over 12 years.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                How It All Began
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Nandi Sanctuary was founded by Dharmveer Singh, also known as Dayal Mukunda Das, and his 
                  wife Yashomati Singh. Driven by a deep spiritual commitment to protect all living 
                  beings, they established this haven in the sacred lands of Sri Dham Mayapur, Nadia, 
                  West Bengal.
                </p>
                <p>
                  What started as a small shelter for a few rescued cows has grown into a comprehensive 
                  sanctuary serving hundreds of animals and helping hundreds of farmer families in the remote villages of West bengal. Our founders believed that every creature, 
                  regardless of their type deserves love, care, and a dignified life.
                </p>
                <p>
                  Today, Nandi Sanctuary is operated under the umbrella of People for Animals International. 
                  Our team at Nandi Sanctuary works hard to reach as many animals and farmer families to help in their need. 
                </p>
              </div>

              {/* Photo added above Core Values with 3:2 Ratio */}
              <div className="mt-12 mb-6">
                <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-md border border-border/50">
                  <img 
                    src={coreImage} 
                    alt="Our core mission in action" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-8 bg-sanctuary-cream rounded-2xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Our Core Values
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Heart, text: "Compassion for all living beings without discrimination" },
                    { icon: Leaf, text: "Non-violence (Ahimsa) as our guiding principle" },
                    { icon: Users, text: "Community service and environmental stewardship" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img
                src={cowPortrait}
                alt="A gentle cow at Nandi Sanctuary"
                className="rounded-2xl shadow-elevated w-full mb-8"
              />
              
              <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Why Cow Protection?
                </h3>
                <p className="text-primary-foreground/85 leading-relaxed mb-6">
                  In Indian culture, the cow is revered as a symbol of motherhood, nourishment, and 
                  selfless giving. Yet countless cows are abandoned when they can no longer produce 
                  milk, left to fend for themselves on dangerous roads or in harsh conditions.
                </p>
                <p className="text-primary-foreground/85 leading-relaxed">
                  At Nandi Sanctuary, we believe these gentle beings deserve our protection and care, 
                  especially in their old age. Our work extends beyond cows to include bulls, calves, 
                  and other animals who need our help.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button variant="donate" size="lg" className="flex-1" asChild>
                  <Link to="/donate">Support Our mission</Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link to="/contact">Visit Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;