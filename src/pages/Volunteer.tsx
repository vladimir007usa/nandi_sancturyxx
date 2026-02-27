import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ChevronLeft } from "lucide-react";

// Story Assets
import mahaveer1 from "@/assets/mahaveer1.jpeg";
import mahaveer2 from "@/assets/mahaveer2.jpeg";
import mahaveer3 from "@/assets/mahaveer3.jpeg";
import mahaveer4 from "@/assets/mahaveer4.jpeg";
import mahaveer5 from "@/assets/mahaveer5.jpeg";

const MahaveerStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={mahaveer1}
            alt="Mahaveer the Bull"
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
            MAHAVEER
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Rescue of a Bull with Amputated Leg
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            By People for Animals International
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
            {/* Styled Title Divider */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-grow bg-sanctuary-gold/30"></div>
              <span className="text-sanctuary-forest font-bold uppercase tracking-tighter text-2xl">
                GANGRENE, AN AMPUTATED LEG...
              </span>
              <div className="h-px flex-grow bg-sanctuary-gold/30"></div>
            </div>

            <p className="font-semibold text-sanctuary-forest text-xl italic">
              Now, One Less Bull Living on The Streets.
            </p>

            <p>
              Our veterinarians go from village to village in the Krishnanagar
              and Nabadwip areas, giving medical care as needed. Rescuing bulls
              and cows in danger is not unusual for us. Still, every rescue has
              its own unique, dramatic story.
            </p>

            {/* LARGE IMAGE SECTION - mahaveer 5 */}
            <div className="my-10">
              <img
                src={mahaveer5}
                alt="Mahaveer resting"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
              <p className="text-center text-sm mt-4 italic">
                Mahaveer, finding peace and safety at Nandi Sanctuary.
              </p>
            </div>

            <p>
              In 2023, just before Durga Puja, we received an emergency request
              from the local Animal Welfare Board. It was for checking on a
              street bull suffering from a gangrenous knee joint. The situation
              was indeed critical. To save his life, it had to be amputated.
            </p>

            <p>
              But after the amputation, he clearly could no longer just wander
              the streets. He was able to stand and take a few steps. Slowly,
              and very much against his will, the team coaxed him into the truck
              that would transport him to the Sanctuary.
            </p>

            {/* IMAGE GRID - mahaveer 2 & 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <img
                src={mahaveer2}
                alt="Rescue mission"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <img
                src={mahaveer3}
                alt="Providing care"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>

            <p>
              He was just as stubborn on arrival. In no way was he attracted to
              this new environment. The path to his pen was short, but moving
              him along was a test of everyone’s patience. At one point, right
              next to Yamuna and Sarasvati’s pen, he stopped completely.
            </p>

            <p>
              The two cows were mooing gently, obviously encouraging him on his
              journey, but he stood his ground with firm determination. Ah! It
              was clear now what would be his name...
              <span className="text-sanctuary-forest font-bold ml-1">
                Mahaveer, the Warrior Bull... a bull with an attitude!
              </span>
            </p>

            {/* FINAL IMAGE - mahaveer 4 */}
            <div className="mt-8">
              <img
                src={mahaveer4}
                alt="Mahaveer at Nandi Sanctuary"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            {/* VIDEO SECTION */}
            <div className="my-12">
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/260fs9cg-zA?si=kmcggrxhCx3EFvyg" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Closing Area */}
            <div className="text-center space-y-4 py-12 mt-8">
              <p className="text-2xl font-display font-bold text-sanctuary-forest">
                If you have read this far, it means you care.
              </p>
              <p className="italic text-xl text-sanctuary-gold font-medium max-w-2xl mx-auto">
                "You and I may not be able to change the world, but our care
                will change the world for that ONE Animal."
              </p>

              {/* Back Button - Forest Green Hover Applied */}
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

      {/* Support Section */}
      <section className="py-20 bg-sanctuary-forest text-white">
        <div className="container-wide mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Help Warriors Like Mahaveer
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Mahaveer's recovery requires ongoing medical attention, specialized
            bedding, and nutritious feed. Your support ensures he lives his life
            with the dignity he deserves.
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

export default MahaveerStory;