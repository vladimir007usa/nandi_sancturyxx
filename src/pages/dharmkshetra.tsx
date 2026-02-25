import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Quote, BookOpen, ChevronLeft } from "lucide-react";

const DharmkshetraStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-sanctuary-forest">
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
            DHARMAKSETRA
          </h1>
          <p className="text-sanctuary-gold text-xl md:text-2xl max-w-2xl mx-auto font-medium mb-6">
            Story of DHARMAKSETRA’S RESCUE
          </p>
          <span className="text-white/80 text-lg md:text-xl font-display tracking-widest uppercase block">
            By People For Animal International
          </span>
        </div>
      </section>

      {/* 2. MAIN STORY CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">
              If you've found your way to this article, it shows that your heart
              is open and ready to uncover hidden truths. In consequence of our
              insatiable demand for the precious resource we call "MILK”, let's
              explore what truly happens to cows and bulls after they are born.
            </p>

            <p>
              I would like to share the simple yet poignant tale of
              Dharmaksetra’s rescue.
            </p>

            {/* Testimonial Box */}
            <div className="bg-sanctuary-cream/30 p-8 rounded-3xl border border-sanctuary-gold/20 italic">
              <p>
                For readers I would like to explain that my name is Dr Joanne
                Alves- aka Visvadhika dasi. I work as General Secretary of
                People for Animals International, an organisation run by
                Dharmveer Singh- aka Dayal Mukunda das- and Yashomati Singh. I
                was a first-hand witness to this rescue.
              </p>
              <p className="mt-4">
                It began like any other day. We were on our way towards
                Krishnanagar, West Bengal, for a meeting at the Animal Welfare
                Board. Amidst the noise and chaos, Dharmveer spotted him: a bull
                calf, struggling as cruel hands bound him with ropes to a small
                flatbed cart. My heart sank. I started praying for this young
                bull. But my companion did more than pray. He parked the car,
                approached the little bull, and locked eyes with his terrified
                gaze.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold text-sanctuary-forest mt-6">
              "Why rescue a bull?"
            </h2>

            <p>
              Dharmaksetra’s story, without a doubt, concludes on a positive
              note. Yet, many people fail to understand the depth of Dharmveer
              Singh’s decision to save him. Often, they will question him, “Why
              rescue a bull? They don’t even give milk.”
            </p>

            {/* BLOCKQUOTE SECTION */}
            <div className="py-6 px-10 border-l-4 border-sanctuary-gold bg-sanctuary-cream/10 relative">
              <Quote className="absolute top-2 right-4 w-12 h-12 text-sanctuary-gold/20" />
              <p className="text-xl italic font-serif text-sanctuary-forest leading-relaxed">
                “The spiritual regulative principles do not allow a man to
                slaughter weaker animals on one side and teach others peaceful
                coexistence. If man does not allow the animals peaceful
                coexistence, how can he expect peaceful existence in human
                society?”
              </p>
              <p className="mt-2 font-bold text-sm text-right text-sanctuary-forest">
                — (SB 1.13.47)
              </p>
            </div>

            <p>
              Even in India, a country known for revering cows and bulls,
              Dharma’s story is not a rare occurrence. This raises an important
              question about our lofty expectations of “peaceful existence in
              human society.” Daily news reports bombard us with stories of
              senseless killings, social conflicts, and war. If we hope to
              create a truly peaceful world, we must strive to manifest
              compassion between humans and animals.
            </p>

            <h2 className="text-3xl font-display font-bold text-sanctuary-forest mt-6 flex items-center gap-3">
              <BookOpen className="text-sanctuary-gold" />
              Animal Protection as a Principle
            </h2>

            {/* PRINCIPLES SECTION */}
            <ul className="space-y-6 list-none">
              <li className="flex gap-4">
                <span className="text-sanctuary-gold font-bold text-2xl">•</span>
                <div>
                  <p>
                    In <strong>Christianity and Judaism</strong>, there is a
                    powerful perception regarding the value of all life. For
                    instance, in <em>Isaiah 66:3</em>, it is stated:
                  </p>
                  <p className="italic mt-2 text-foreground">
                    "He that killeth an ox is as if he slew a man. He that
                    sacrificeth a lamb is as if he slit a dog’s neck..."
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-sanctuary-gold font-bold text-2xl">•</span>
                <div>
                  <p>
                    In <strong>Islam</strong>, the principle of protection of
                    cows and all milch animals is significant. The Koran
                    explicitly forbids the slaughter of these animals,
                    reinforcing the principle of compassion and care for them.
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-6">
              Initiating an honest discussion about animal protection allows us
              to explore the ethical and spiritual dimensions of our treatment
              of all living beings. Understanding this can lead to greater
              compassion and constructive dialogue surrounding animal rights and
              welfare, encouraging a world that values life in all forms.
            </p>

            {/* Closing Area */}
            <div className="text-center space-y-4 pt-12 border-t border-sanctuary-forest/10 mt-8">
              <p className="text-2xl font-display font-bold text-sanctuary-forest">
                If you have read this far, it means you care.
              </p>
              <p className="italic text-xl text-sanctuary-gold font-medium max-w-2xl mx-auto">
                "You and I may not be able to change the world, but our care
                will change the world for that ONE Animal."
              </p>

              {/* Back Button - Forest Green Hover */}
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
            Stand With Nandi Sanctuary
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Help us provide a peaceful coexistence for those who cannot speak
            for themselves. Your kindness makes their rescue possible.
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

export default DharmkshetraStory;