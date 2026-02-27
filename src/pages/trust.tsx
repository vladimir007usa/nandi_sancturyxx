import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Asset Imports
import new10 from "@/assets/new10.jpg";
import new11 from "@/assets/new11.jpg";
import new12 from "@/assets/new12.jpg";

const Trust = () => {
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
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Feb 26, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> Nandi Team</span>
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Bonds of <span className="text-primary">Trust</span>
            </h1>
            <p className="text-xl text-primary font-medium italic">
              "Personal Attention & Lifelong Care"
            </p>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img src={new10} alt="Bonds of trust" className="w-full aspect-video object-cover" />
          </div>

          {/* Main Story Content */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
            <p className="text-foreground text-lg font-medium">
              The Nandi Sanctuary team has been instrumental in rescuing nearly 200 animals over the years. 
              Today, more than 70 rescued cows and bulls receive daily, in-house care marked by deep personal attention.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img src={new11} alt="Caregiver with cow" className="w-full h-80 object-cover" />
              </div>
              <div>
                <p>
                  Each caregiver looks after only six to seven animals, and that is where real bonds are formed. 
                  They come to understand each animal’s moods, habits, preferences, and unique needs.
                </p>
              </div>
            </div>

            <p>
              Gradually, even those who were abused, abandoned, or fearful begin to trust again. 
              And in that quiet rebuilding of trust, life becomes beautiful — not only for the animals, 
              but for everyone involved.
            </p>

            {/* Bottom Image */}
            <div className="rounded-3xl overflow-hidden mt-12 shadow-lg">
              <img src={new12} alt="Sanctuary environment" className="w-full h-96 object-cover" />
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

export default Trust;