import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Image Imports
import new4 from "@/assets/new4.jpeg";
import new5 from "@/assets/new5.jpeg";
import new6 from "@/assets/new6.jpeg";

const Path = () => {
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

        {/* Category and Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-sanctuary-forest/10 text-sanctuary-forest text-[10px] font-bold uppercase tracking-widest">
            Dogs
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" /> Jan 28, 2026
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          WHICH PATH TO FOLLOW?
        </h1>
        <p className="text-sanctuary-forest font-semibold text-xl mb-8">
          Stray dogs in the thousands are a fact of life in India
        </p>

        {/* TOP IMAGE - new4 */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
          <img
            src={new4}
            alt="Rescue Story Path"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          {/* Spiritual Path Quote */}
          <blockquote className="border-l-4 border-sanctuary-forest pl-6 my-10 italic text-muted-foreground bg-sanctuary-forest/5 py-8 rounded-r-xl">
            "The path of goodness traversed by your father, grandfather and
            greatgrandfathers is that of maintaining the subjects, including the
            men, animals and trees. That is the path you should follow…"
            <footer className="mt-2 text-sm font-bold text-foreground not-italic">
              — Srimad Bhagavatam 6.4.11
            </footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
            Prevention of Cruelty to Animals Act - PCA
          </h2>
          <p className="mb-6 text-foreground">
            On 26 December 1960, PCA became Law in India with a vision to
            prevent cruelties to animals.
          </p>

          <div className="bg-destructive/5 p-8 rounded-2xl border border-destructive/20 my-10">
            <h3 className="text-xl font-bold mb-4 text-destructive">
              SECTION 11(1)(i): Abandoning an animal
            </h3>
            <p className="text-foreground">
              If a person abandons any animal, which renders that animal to
              suffer pain … it is an <strong>offence</strong>.
            </p>
          </div>

          <p className="mb-10 text-foreground">
            Following the path of goodness has not many material rewards, but it
            benefits all members of society and is rewarding to those who follow
            it. Here is a short story about one such endeavour in Mayapur, West
            Bengal.
          </p>

          {/* MIDDLE IMAGE - new5 */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-10 not-prose">
            <img
              src={new5}
              alt="Mayapur Rescue Mission"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="bg-muted/30 p-8 rounded-2xl border border-border my-10">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              A Rescue Story in Mayapur
            </h3>
            <p className="mb-4">
              In one local housing community, near where our PFA Mobile
              Veterinary clinic is active, newborn puppies were taken from their
              mother while she was away from them. For puppies to be removed
              from the shelter of their mother, then relocated to a distant
              field or roadside is the equivalent of killing them.
            </p>
            <p className="mb-4">
              While this puppy removal was taking place, Dharmveer Singh,
              Chairman of PFA, was alerted by a concerned area resident. The
              resident had seen men taking the puppies into a large agricultural
              field with tall grasses. Immediately, Mr. Singh dispatched some of
              his staff to rescue the puppies.
            </p>
            <p className="mb-4 italic text-muted-foreground border-l-2 border-muted-foreground/30 pl-4">
              On arrival, one jackal was seen leaving with a dead puppy in its
              mouth.
            </p>
            <p>
              The others were rescued and brought to their new home at Nandi
              Sanctuary. It was unfortunately not possible to reunite the mother
              and puppies. The little ones were in poor health, plagued by
              intestinal worms and covered in fleas. Yashomati Singh took charge
              of their care, with genuine compassion. Now they live with us,
              each known by their own name!
            </p>
          </div>

          {/* BOTTOM IMAGE - new6 */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-10 not-prose">
            <img
              src={new6}
              alt="Safe at Nandi Sanctuary"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <p className="mb-6 text-foreground">
            What prompted the good people of this housing community to do this?
            The coming and going of local stray dogs was an ongoing concern for
            them, as it is for many communities in India. For individuals and
            collectively, there can be health and safety issues related to
            strays.
          </p>

          <p className="mb-8 font-semibold text-sanctuary-forest">
            However, from a moral standpoint, we have an obligation to protect
            them or at least do them no harm. Killing puppies is not a solution.
            We can do better than that for good communities and a better world.
          </p>

          <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-8 text-center">
            <div>
              <p className="font-display text-xl font-bold text-sanctuary-forest italic">
                Nandi Sanctuary Team
              </p>
            </div>

            {/* Bottom Navigation Button */}
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

export default Path;