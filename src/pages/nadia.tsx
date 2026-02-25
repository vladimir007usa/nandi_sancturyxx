import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft } from "lucide-react";

// Assets: Using your specific Nadia images
import nadia1 from "@/assets/nadia1.jpg";
import nadia2 from "@/assets/nadia2.jpg";
import nadia3 from "@/assets/nadia3.jpg";

const NadiaStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={nadia1}
            alt="Nadia at Nandi Sanctuary"
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

          <span className="text-sanctuary-gold font-display text-xl md:text-2xl mb-4 block tracking-widest uppercase">
            Nandi Sanctuary Stories
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            The Story of Nadia
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            By People For Animal Internationals
          </p>
        </div>
      </section>

      {/* 2. MAIN STORY CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              In this 21st century, it is common to see hundreds of cows lined up
              one after another at their feeders in huge barns. Milking is done
              by extracting machines. This is how huge quantities of milk and
              milk products fill freezer and dairy aisles in modern grocery
              stores.
            </p>

            <p>
              The cherished <strong>“family cow”</strong> is so rare that she
              has almost become a mythological creature. This is a sad reality.
              But there are still cowherd people who understand the treasure
              that is Mother Cow (Gomata as she is known in India).
            </p>

            {/* Top horizontal image */}
            <div className="my-6">
              <img
                src={nadia2}
                alt="Nadia, a symbol of the family cow"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <p>
              Her dung and urine are as beneficial for humans as her milk, if
              not more. Through caring for her and her progeny, dedicated
              cowherds have come to appreciate that their “cattle” are in
              reality individual personalities with likes and dislikes.
            </p>

            <p>
              I want to tell Nadia’s story. She resides in Nandi Sanctuary in
              West Bengal, managed by{" "}
              <strong>Dharmveer Singh and his wife Yashomati Singh</strong>.
              Nadia is becoming older in years. Her story needs to be heard, but
              I want to let her speak it.
            </p>

            {/* 2-COLUMN SECTION: Text on Left, Vertical Image on Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start my-10">
              <div className="space-y-6 italic">
                <p>
                  “Visnu priya was my mother’s name and I was born in a Goshala.
                  I heard that she was a cow who was famous for giving so much
                  milk. This was a surprise to me, because when I was allowed to
                  go to her, there was so very little.”
                </p>
                <p>
                  “When I was barely 2 months old, I remember really wanting to
                  be with my mother. All us calves felt the same way. I was the
                  only calf who hugged her mother. Yes! I hugged her by reaching
                  up with my front legs and wrapping them around her head. But
                  then, the worst happened… They just took my mom away.”
                </p>
                <p>
                  “During milking time, they used to take me to her, just long
                  enough so she would let down her milk. That day they stopped
                  even doing that. A couple of days went by, and I heard them
                  talking. She was sick.”
                </p>
                <p>
                  “I became frantic calling her. But she died… Now she was
                  completely gone. In the middle of this very sad time, the
                  husband and wife that would visit us every evening came to me.
                  They just picked me up and drove me to their home.”
                </p>
              </div>

              {/* Vertical Image */}
              <div className="h-full">
                <img
                  src={nadia3}
                  alt="Nadia in vertical format"
                  className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
                />
              </div>
            </div>

            {/* Bottom concluding text */}
            <p className="italic">
              “I drank milk out of a bucket! Very unusual way of drinking
              milk… but I drank and drank. My whole face was covered in milk. I
              was really getting healthy. I lived in the Cow kitchen. It did
              take a little time for Radha Kunda, Tulsi and Nandini to accept me
              as family. But they did.”
            </p>

            <p className="italic">
              “Then Govinda and me, had a daughter, Kusumanjali. She drank all
              the milk she wanted from me!!! And grew up to become a fine
              beautiful cow with a shiny brown coat. I have been living here at
              Nandi Sanctuary for many years... and I have never once been
              fearful that they will take me away. This is my home.”
            </p>

            {/* Image placed directly above the closing text */}
            <div className="mt-8">
              <img
                src={nadia1}
                alt="Nadia at peace"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="text-center space-y-4 py-12">
              <p className="text-3xl font-display font-bold text-sanctuary-forest">
                If you have read this far, it means you care.
              </p>
              <p className="italic text-xl text-sanctuary-gold font-medium max-w-2xl mx-auto">
                "You and I may not be able to change the world, but our care
                will change the world for that ONE Animal."
              </p>

              {/* Back Button - Bottom Content Area */}
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
            Help Us Protect Nadia and Her Family
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Nandi Sanctuary provides a lifetime home for elderly cows and bulls
            like Nadia, ensuring they never have to fear the outside world
            again.
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

export default NadiaStory;