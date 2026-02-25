import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, ChevronLeft } from "lucide-react";

// Assets: Using your specific Angad image
import angad1 from "@/assets/angad1.jpg";

const AngadStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={angad1}
            alt="Angad the Bull"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sanctuary-forest/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative container-wide mx-auto px-6 text-center text-white">
          {/* Back Button - Top */}
          <Button
            variant="ghost"
            onClick={() => navigate("/stories")}
            className="mb-8 text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-2 mx-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Stories
          </Button>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight">
            Angad
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto font-medium mb-6">
            The Rescue of a Bull With twisted front Legs.
          </p>
          <span className="text-sanctuary-gold text-lg md:text-xl font-display tracking-widest uppercase block">
            By People For Animal International
          </span>
        </div>
      </section>

      {/* 2. MAIN STORY CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            {/* Header info */}
            <div className="border-b border-sanctuary-forest/10 pb-6 mb-4">
              <h2 className="text-2xl font-bold text-sanctuary-forest mb-2">
                Twisted Front Legs, Rickets... and Again, One Less Bull on the
                Streets!
              </h2>
              <div className="flex items-center gap-2 text-sanctuary-gold font-medium">
                <Stethoscope className="w-5 h-5" />
                <span>As told by Dr. Hari Kiran, Veterinary Doctor</span>
              </div>
            </div>

            <p>
              On Feb 11, 2025, a homeless bull was rescued from a dusty road in
              Nabadwipa, West Bengal by the staff of our Mobile Veterinary
              Clinic. A rescue is always a special event. This time, it was
              initiated by a person from nearby Ranaghat who had benefited from
              our services in the past.
            </p>

            {/* 2-COLUMN SECTION: Text and Vertical Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start my-10">
              <div className="space-y-6">
                <p>
                  He saw a small, emaciated bull on the streets, struggling to
                  just exist. Because he had twisted front legs, he could only
                  laboriously drag himself along the busy road full of
                  pedestrians and small vehicles. Essentially, both legs were
                  bent and collapsed.
                </p>
                <p>
                  This good person made a compassionate decision and contacted
                  our Chairman, <strong>Dharmveer Singh</strong>. We were on
                  duty in the area, so after obtaining the proper legal custody
                  papers from the Panchayat, we made our way to him.
                </p>
                <p>
                  There he was, just as described. I used to think bulls
                  wandered freely because they are considered sacred in India.
                  The real situation is that they end up on the street because
                  most owners don’t want to keep them.
                </p>
                <p>
                  In small houses, families keep a cow or two for milk to sell.
                  There is no room or use for a bull. Most people don’t have
                  fields; if they do, they use tractors. While many consider
                  slaughter a sin, they still will not keep them.
                </p>
              </div>

              {/* Vertical Image of Angad */}
              <div className="h-full">
                <img
                  src={angad1}
                  alt="Angad's vertical profile"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
            </div>

            <p>
              The cheapest solution is to leave the unwanted bull to wander the
              streets. This means the bull is in constant danger of being hit by
              speeding vehicles. He survives on garbage and plastic. Sometimes
              he may find grass, but often these homeless bulls are abused by
              farmers who don’t want them eating crops.
            </p>

            <p>
              At Nandi Sanctuary, we have many rescued bulls with injuries. We
              immediately observed that his horns were the size of a 2-year-old
              bull, but his body was the size of a calf barely 1 year old. He
              was hungry nearly all the time and severely malnourished.
            </p>

            <p>
              It was not difficult to get him into our van. Within a few
              minutes, this lonely street bull—whom we named <strong>Angad</strong>
              —was off to Nandi Sanctuary, now his permanent home on the banks
              of the Jalangi river!
            </p>

            {/* Closing Quote and Bottom Back Button */}
            <div className="text-center space-y-4 py-12 border-t border-sanctuary-forest/10 mt-8">
              <p className="text-3xl font-display font-bold text-sanctuary-forest leading-tight">
                If you have read this far, it means you care.
              </p>
              <p className="italic text-xl text-sanctuary-gold font-medium">
                "You and I may not be able to change the world, but our care
                will change the world for that ONE Animal."
              </p>

              {/* Back Button - Bottom */}
              <Button
                variant="ghost"
                onClick={() => navigate("/stories")}
                className="mt-8 text-muted-foreground hover:bg-sanctuary-forest hover:text-white transition-colors flex items-center gap-2 mx-auto"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to All Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPORT SECTION */}
      <section className="py-20 bg-sanctuary-forest text-white">
        <div className="container-wide mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Help Us Heal Bulls Like Angad
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Your support provides medical care, specialized nutrition, and a
            safe haven for animals who have nowhere else to go.
          </p>
          <div className="flex justify-center">
            <Button variant="donate" size="xl" asChild>
              <Link to="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngadStory;