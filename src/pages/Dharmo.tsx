import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
import new1 from "@/assets/new1.jpeg";
import new2 from "@/assets/new2.jpeg";
import new3 from "@/assets/new3.jpeg";

const Dharmo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Navigation Button - Top */}
        <Button
          variant="ghost"
          onClick={() => navigate("/articles")}
          className="mb-8 p-0 bg-transparent hover:bg-transparent text-sanctuary-forest hover:text-sanctuary-forest/80 flex items-center gap-2 group transition-colors"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-semibold">Back to Articles</span>
        </Button>

        {/* TOP HERO IMAGE (new1) */}
        <div className="rounded-3xl overflow-hidden mb-10 shadow-2xl">
          <img
            src={new1}
            alt="Dharma Sanctuary Header"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Category and Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-sanctuary-forest/10 text-sanctuary-forest text-[10px] font-bold uppercase tracking-widest">
            Dharma
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" /> Feb 14, 2026
          </span>
        </div>

        {/* Titles */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          “Dharmo Raksati Raksita” in West Bengal
        </h1>
        <p className="text-sanctuary-forest font-semibold text-xl mb-8 italic">
          "Dharma protects those who protect Dharma"
        </p>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          <p className="mb-6">
            Protecting and Serving Dharma is a lofty & worthwhile ideal. The
            personification of Dharma is the Bull. The Cow is one of our 7
            Mothers. In ordinary everyday activities, month after month, this
            protection is manifest in ways which may not be noticed by the
            casual observer. They are basic ordinary activities but actually
            doing them regularly has a remarkable effect.
          </p>

          {/* BIG PHOTO 1 (new2) */}
          <div className="my-12 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={new2}
              alt="Sanctuary Life Wide View"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          <p className="mb-6">
            In a situation where cows cannot daily be in green pastures, which
            is their natural & healthiest environment, maintaining a high
            standard in the pens in which they live is essential. For a
            Goshala, very small or very big, it is the core of service to cows
            and bulls. Nandi Sanctuary ensures that:
          </p>

          {/* Standards List */}
          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                <strong>Dung is removed</strong> as needed all day. Pens are
                thoroughly cleaned every morning. This is <strong>BASIC</strong>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                Each pen has a covered area and an open area. The bull or cow
                can move freely from one area to the other.{" "}
                <strong>NO rope restraints</strong>. The floor of their pens is
                a combination of soft sand and brick.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                <strong>Sand is hygienic</strong>. Dung can be promptly and
                easily removed to avoid hard caking of sand, which would negate
                the purpose of reducing standing stress on their legs. For
                laying down, soft sand is as comfortable for them as it would be
                for you and I resting on a sandy beach!
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                <strong>Brick floor</strong> is important in the covered area to
                stay dry during rain. Immediately after cleaning, chopped{" "}
                <em>bitchuli</em> is spread for warmth, comfort, and safety.
              </span>
            </li>
          </ul>

          {/* BIG PHOTO 2 (new3) */}
          <div className="my-12 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={new3}
              alt="Brick floor and bitchuli bedding for cows"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          <ul className="space-y-4 mb-8 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                For 24 hours a day, <strong>EVERY DAY</strong>, fresh, clean
                water is available for every resident of the Sanctuary.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sanctuary-forest font-bold">•</span>
              <span>
                <strong>Personal Connection:</strong> We talk to our animals
                every day... greet them by name. We are observant of any signs
                of ill health or returning good health.
              </span>
            </li>
          </ul>

          <p className="mb-6">
            Maintaining a shelter for 61+ cows and bulls, plus goats, sheep,
            dogs, and a horse is a lot of work. It requires constant attention
            and efficient supervision of workers. Why do we do this?{" "}
            <strong> “Dharma protects those who protect Dharma.”</strong>{" "}
            Dharmveer Singh & Yashomati Singh take charge of the care of animals
            at Nandi Sanctuary. The protection received from Dharma further
            facilitates our protection of cows, dogs, goats… any animal who
            comes to us for shelter… And we are all happy doing it!
          </p>

          {/* Quote Section */}
          <blockquote className="border-l-4 border-sanctuary-forest pl-6 my-10 italic text-muted-foreground bg-sanctuary-forest/5 py-6 rounded-r-xl">
            "As long as human society continues to allow cows to be regularly
            killed in slaughterhouses, there cannot be any question of peace and
            prosperity."
            <footer className="mt-2 text-sm font-bold text-foreground not-italic">
              — SB 8.8.11, His Divine Grace A.C. Bhaktivedanta Swami
            </footer>
          </blockquote>

          <div className="mt-12 pt-8 border-t border-border flex flex-col items-start gap-8">
            <div>
              <p className="font-display text-xl font-bold text-sanctuary-forest">
                Thank you for reading
              </p>
              <p className="text-foreground font-semibold">
                Visvadhika ( Dr. Joanne Alves )
              </p>
            </div>

            {/* Bottom Navigation Button - Fixed Hover/Click Colors */}
            <Button
              variant="ghost"
              onClick={() => navigate("/articles")}
              className="p-0 bg-transparent hover:bg-transparent text-sanctuary-forest hover:text-sanctuary-forest/80 flex items-center gap-2 group transition-colors"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-semibold">Back to Articles</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dharmo;