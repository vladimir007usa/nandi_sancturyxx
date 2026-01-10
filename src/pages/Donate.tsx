import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Building, Smartphone, Gift, Calendar, Stethoscope, Utensils } from "lucide-react";
import cowPortrait from "@/assets/cow-portrait.jpg";

const donationOptions = [
  {
    icon: Utensils,
    title: "Feed an Animal",
    amount: "₹1,500/month",
    description: "Provide nutritious food for one animal for an entire month.",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    amount: "₹5,000",
    description: "Cover veterinary treatment and medications for sick or injured animals.",
  },
  {
    icon: Calendar,
    title: "Monthly Sponsor",
    amount: "₹3,000/month",
    description: "Become a monthly sponsor and provide ongoing support for our sanctuary.",
  },
  {
    icon: Gift,
    title: "One-Time Gift",
    amount: "Any Amount",
    description: "Every contribution, big or small, makes a meaningful difference.",
  },
];

const Donate = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sanctuary-forest py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Your Generosity Saves Lives
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto">
            Every donation directly supports the rescue, care, and protection of animals at Nandi Sanctuary. 
            Together, we can give them the life they deserve.
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Your Support Matters
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                How Your Donation Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Running a sanctuary requires significant resources. From daily food and medical care 
                to shelter maintenance and rescue operations, your donations make everything possible.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Fresh fodder and nutritious food for 500+ animals daily",
                  "Full-time veterinary care and emergency medical treatments",
                  "Shelter maintenance and expansion for growing needs",
                  "Rescue operations and emergency response team",
                  "Staff salaries for dedicated caregivers",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={cowPortrait}
                alt="A rescued cow at Nandi Sanctuary"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-padding bg-sanctuary-cream">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Ways to Give
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose How You'd Like to Help
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationOptions.map((option) => (
              <div key={option.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-primary font-bold text-xl mb-3">{option.amount}</p>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="mt-16 bg-primary p-10 md:p-16 rounded-2xl text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
              Your contribution, no matter the size, directly impacts the lives of animals in our care. 
              Choose a donation method that works for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="xl">
                <CreditCard className="w-5 h-5" />
                Donate by Card
              </Button>
              <Button variant="heroOutline" size="xl">
                <Building className="w-5 h-5" />
                Bank Transfer
              </Button>
              <Button variant="heroOutline" size="xl">
                <Smartphone className="w-5 h-5" />
                UPI / Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Special Giving
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sponsor an Animal
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Create a personal connection by sponsoring a specific animal. Receive updates, photos, 
            and the joy of knowing you're making a direct impact on their life.
          </p>
          <Button variant="donate" size="lg" asChild>
            <Link to="/contact">
              <Heart className="w-5 h-5" />
              Inquire About Sponsorship
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 bg-sanctuary-cream">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Trust & Transparency
            </h3>
            <p className="text-muted-foreground text-sm">
              Nandi Sanctuary is operated by People for Animals International, a registered non-profit 
              organization. All donations are tax-deductible, and we maintain full transparency in how 
              funds are used. Contact us for annual reports and financial statements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
