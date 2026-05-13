import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Asset Imports
import new_im1 from "@/assets/new_im1.jpg";
import new_im2 from "@/assets/new_im2.jpg";
import new_im3 from "@/assets/new_im3.jpg";
import new_im4 from "@/assets/new_im4.jpg";

const YoungBull = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20">
        <article className="container-wide mx-auto px-6 max-w-4xl">
          
          {/* Top Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/articles")}
            className="group mb-8 p-0 hover:bg-transparent flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back to Articles</span>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                Operations
              </span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> May 13, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Nandi Team</span>
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Young bull had been injured by a <span className="text-primary">moving vehicle.</span>
            </h1>
            <p className="text-xl text-primary font-medium italic">
              "Most of the times, time itself is the most important factor…"
            </p>
          </header>

          {/* Top Image (Featured) */}
          <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img src={new_im2} alt="Rescued young bull" className="w-full aspect-video object-cover" />
          </div>

          {/* Main Story Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-12">
            <p className="text-foreground text-lg font-medium">
              This young bull calf was struggling, helpless, and with almost no hope left.
            </p>

            <p>
              At Nandi Sanctuary, we already had no space to bring more bulls, but the heart always finds space where compassion exists. And faith in the Lord gave us the courage to step forward for this innocent soul who had been left on the streets to struggle daily for food, water, shelter, and survival.
            </p>

            <p>
              We came to know that this young bull had been injured by a moving vehicle on roads built upon lands that originally belonged to cows and bulls for grazing and living peacefully. After the accident, he was left wounded on the roadside.
            </p>

            {/* Second Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={new_im3} alt="Rescue operation" className="w-full aspect-video object-cover" />
            </div>

            <p>
              A compassionate lady, who contacted us, showed great courage and kindness. She organized his immediate rescue and cared for him lovingly for several days until we learned about the situation.
            </p>

            <p className="text-foreground text-lg font-medium italic">
              And then… time changed for this young bull.
            </p>

            <p>
              The caring team of Nandi Sanctuary, headed by my son Gurukripa (Giriraj), brought him safely to the sanctuary. Our doctor Harikiran provided the preliminary medical care, and the entire team lifted him with affection, patience, and love.
            </p>

            {/* Third Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={new_im4} alt="Bull receiving care" className="w-full aspect-video object-cover" />
            </div>

            <p>
              This young bull, who is yet to receive his name, is now finally home at Nandi Sanctuary. He is sharing shelter with Pavan Tanaya and receiving proper treatment, care, nourishment, and protection.
            </p>

            <p className="text-foreground text-xl font-semibold italic text-center">
              We may not be able to change the whole world…<br />
              But for the one soul who reaches Nandi Sanctuary, his whole world changes forever.
            </p>

            <p className="text-center text-3xl">🐂🙏</p>

            {/* Fourth Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src={new_im1} alt="Bull at sanctuary" className="w-full h-[500px] object-cover" />
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-16 pt-8 border-t border-border">
            <Button 
              variant="outline" 
              onClick={() => navigate("/articles")}
              className="flex items-center gap-2 rounded-full px-8 py-6 h-auto font-bold uppercase tracking-widest text-[10px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Button>
          </div>

        </article>
      </main>
    </div>
  );
};

export default YoungBull;
