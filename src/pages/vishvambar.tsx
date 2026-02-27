import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft } from "lucide-react";

// Assets: Imported Vishvambar specific images
import vish1 from "@/assets/Vishvambar1.jpg";
import vish2 from "@/assets/Vishvambar2.jpg";
import vish3 from "@/assets/Vishvambar3.jpg";
import vish4 from "@/assets/Vishvambar4.jpg";
import vish5 from "@/assets/Vishvambar5.jpg";
import vish6 from "@/assets/Vishvambar6.jpg";
import vish7 from "@/assets/Vishvambar7.jpg";

const VishvambarStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={vish1}
            alt="Vishvambar the Bull Hero"
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
            Vishvambar
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            A Call That Changed the World of Vishvambhar!
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            By Dharmveer Singh
          </p>
        </div>
      </section>

      {/* 2. MAIN STORY CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              About a month ago, we received a call from a group of young men,
              barely 20 to 25 years old. They were distressed. A bull in their
              village had been injured and was clearly in pain. They feared he
              might die, and they did not want to be silent witnesses.
            </p>

            <p>
              As we usually do, we asked for a video and the live location. What
              we saw left no room for delay. Our veterinary team immediately set
              out, travelling nearly 70 kilometres to reach the site. The poor
              bull was treated on the spot, and he showed visible relief.
            </p>

            {/* SINGLE IMAGE VISH5 */}
            <div className="my-10">
              <img
                src={vish5}
                alt="Vishvambar initial care"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            <p>
              A few days later, the same young men called again. The bull’s
              condition had worsened. He had met with an accident. He was
              injured again and was now unable to walk or look for his food.
              This time, we knew—he could not be left there.
            </p>

            <p>
              On Makar Sankranti, our team carried out the rescue of this
              550–600 kg injured bull, later named Vishvambhar, and safely
              shifted him to Nandi Sanctuary.
            </p>

            {/* TWO-PHOTO GRID: Rescue context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src={vish2}
                alt="Vishvambar rescue context"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <img
                src={vish3}
                alt="Vishvambar initial sanctuary arrival"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>

            <p>
              Vishvambhar is approximately 15 years old which equals to a human
              being of 70 years. He was suffering from a bone fracture that
              caused him intense pain and made standing or walking almost
              impossible.
            </p>

            <p>
              I personally led the rescue operation along with our dedicated
              team. Calming Vishvambhar, safely lifting him, and transporting
              him took over four hours. The journey was slow and
              careful—because pain does not understand speed. It only
              understands compassion.
            </p>

            {/* TWO-PHOTO GRID: Treatment process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src={vish4}
                alt="Veterinary treatment"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <img
                src={vish6}
                alt="Comforting the elder bull"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>

            <p>
              Today, Vishvambhar is under daily care and medical supervision at
              Nandi Sanctuary. A proper cast has been placed on his injured leg.
              He is receiving pain management, treatment, nourishment,
              and—most importantly—a calm and respectful environment where
              healing is possible.
            </p>

            {/* FINAL IMAGE: Healing journey */}
            <div className="mt-8">
              <img
                src={vish7}
                alt="Vishvambar healing journey"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            {/* VIDEO SECTION */}
            <div className="my-12">
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/mwJwnFAZfx4?si=9JYCtCZpNo9is7R4" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="text-center space-y-4 py-12">
              <p className="text-2xl font-display font-bold text-sanctuary-forest">
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
            Support Vishvambhar’s Healing
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Elderly bulls like Vishvambhar require specialized medical casts and
            pain management. Your support ensures he lives his life with the
            dignity he deserves.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="donate" size="xl" asChild>
              <Link to="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VishvambarStory;