import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users, Award, Leaf, MapPin, Send } from "lucide-react";
import { useState } from "react";
import volunteersImage from "@/assets/volunteers.jpg";

const volunteerActivities = [
  "Feeding and caring for animals",
  "Cleaning shelters and living areas",
  "Assisting with medical treatments",
  "Grooming and bathing animals",
  "Administrative and office work",
  "Social media and awareness campaigns",
  "Photography and documentation",
  "Fundraising support",
];

const whoCanVolunteer = [
  { icon: Users, text: "Students seeking meaningful service experience" },
  { icon: MapPin, text: "Travelers looking to contribute during their journey" },
  { icon: Heart, text: "Animal lovers wanting hands-on involvement" },
  { icon: Leaf, text: "Families seeking purposeful activities together" },
];

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={volunteersImage} alt="Volunteers at sanctuary" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sanctuary-forest/90" />
        </div>
        <div className="relative container-wide mx-auto px-4 md:px-8 text-center">
          <span className="text-sanctuary-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get Involved
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Volunteer With Us
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto">
            Join our community of compassionate individuals making a real difference in the lives of animals every day.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Make a Difference
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                How You Can Help
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Volunteers are the heart of our sanctuary. Whether you can give a few hours or several weeks, 
                your contribution makes a tangible impact on the animals in our care.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Daily Activities Include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {volunteerActivities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sanctuary-cream p-10 rounded-2xl">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Who Can Volunteer?
              </h3>
              <div className="space-y-6 mb-8">
                {whoCanVolunteer.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground pt-3">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-xl">
                <h4 className="font-semibold text-foreground mb-3">What You'll Gain:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Meaningful, fulfilling experience
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    Deep connection with animals
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Flexible schedules available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding bg-sanctuary-cream">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Join Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Express Your Interest
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you with more information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-2xl shadow-card">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Tell Us About Yourself
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                placeholder="Share your interests, availability, and any relevant experience..."
              />
            </div>
            <div className="mt-8">
              <Button type="submit" variant="donate" size="xl" className="w-full md:w-auto">
                <Send className="w-5 h-5" />
                Submit Volunteer Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Can't Volunteer? You Can Still Help!
          </h2>
          <p className="text-muted-foreground mb-8">
            Financial contributions help us maintain our sanctuary and care for our animals.
          </p>
          <Button variant="nature" size="lg" asChild>
            <Link to="/donate">
              <Heart className="w-5 h-5" />
              Donate Instead
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
