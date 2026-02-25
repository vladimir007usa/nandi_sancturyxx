import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, Info, ShieldAlert, Gavel, ChevronLeft } from "lucide-react";

const animalLaws = [
  {
    category: "General Protection",
    title: "The Prevention of Cruelty to Animals Act, 1960",
    description: "The primary law in India that prohibits the infliction of unnecessary pain or suffering on animals. It makes cruelty a punishable offense.",
    icon: <Gavel className="w-6 h-6" />
  },
  {
    category: "Stray Animals",
    title: "Right to Food and Protection",
    description: "It is illegal to relocate or harm stray dogs that have been vaccinated and sterilized. Residents have the legal right to feed street animals as per the Animal Birth Control (Dogs) Rules, 2001.",
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    category: "Farm Animals",
    title: "Cattle Protection & Transport",
    description: "The Transport of Animals Rules, 1978, prohibits the overcrowding of cattle in vehicles. Laws also mandate that animals must be provided with adequate food, water, and shelter during transit.",
    icon: <Scale className="w-6 h-6" />
  },
  {
    category: "Constitutional Duty",
    title: "Article 51A(g)",
    description: "The Constitution of India makes it a fundamental duty of every citizen to protect and improve the natural environment, including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.",
    icon: <Info className="w-6 h-6" />
  }
];

const AnimalRights = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-wide mx-auto px-6">
        {/* Navigation Button - Top (Fixed Colors) */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 p-0 bg-transparent hover:bg-transparent text-sanctuary-forest hover:text-sanctuary-forest/80 flex items-center gap-2 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
          <span className="font-semibold">Back to Home</span>
        </Button>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Know the Laws: <span className="text-sanctuary-forest">Animal Rights in India</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Understanding the legal framework is the first step toward effective advocacy. 
            Animals cannot speak for their rights, so we must be their voice in the court of law.
          </p>
        </div>

        {/* Laws Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {animalLaws.map((law, index) => (
            <div key={index} className="p-8 rounded-2xl border border-border bg-card hover:border-sanctuary-forest/50 transition-colors group/card">
              <div className="w-12 h-12 rounded-full bg-sanctuary-forest/10 text-sanctuary-forest flex items-center justify-center mb-6 transition-colors group-hover/card:bg-sanctuary-forest group-hover/card:text-white">
                {law.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-sanctuary-gold mb-2 block">
                {law.category}
              </span>
              <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                {law.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {law.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action & Bottom Navigation */}
        <div className="mt-16 space-y-12">
          <div className="p-8 rounded-3xl bg-sanctuary-forest text-white text-center shadow-xl">
            <h2 className="font-display text-2xl font-bold mb-4">Witnessed Cruelty?</h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto text-sm md:text-base">
              If you witness animal abuse, you have the right to file an FIR at the nearest police station 
              under the PCA Act 1960. Document the evidence and stand up for those in need.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Bottom Navigation Button (Fixed Colors) */}
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="p-0 bg-transparent hover:bg-transparent text-sanctuary-forest hover:text-sanctuary-forest/80 flex items-center gap-2 group transition-colors"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
              <span className="font-semibold">Back to Home</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalRights;