import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

// Updated Assets
import new1 from "@/assets/new1.jpeg";
import new6 from "@/assets/new6.jpeg"; // ADDED: New image for the second article

interface Article {
  id: number;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Dharma" | "Dogs" | "Health" | "Operations";
  image: string;
  path: string; 
}

const articles: Article[] = [
  {
    id: 1,
    title: "“Dharmo Raksati Raksita” in West Bengal",
    subtitle: "Dharma protects those who protect Dharma",
    excerpt: "Protecting and Serving Dharma is a lofty & worthwhile ideal. The personification of Dharma is the Bull. The Cow is one of our 7 Mothers. In ordinary everyday activities, month after month, this protection is manifest in ways which may not be noticed by the casual observer..",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    category: "Dharma",
    image: new1,
    path: "/dharmo" 
  },
  {
    id: 2,
    title: "WHICH PATH TO FOLLOW?",
    subtitle: "Prevention of Cruelty to Animals Act - PCA",
    excerpt: "On 26 December 1960, PCA became Law in India with a vision to prevent cruelties to animals.",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    category: "Dogs",
    image: new6, // UPDATED: Changed from dharmkshetra2 to new6
    path: "/path" 
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container-wide mx-auto px-6">
        
        <header className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">
              Our Journal
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Latest Articles & <span className="text-primary">Stories</span>
          </h1>
        </header>

        <div className="space-y-12">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-md transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Container - aspect ratio ensures both images look the same size */}
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    {article.title}
                  </h2>
                  
                  {article.subtitle && (
                    <p className="text-primary font-semibold text-lg mb-4 italic">
                      "{article.subtitle}"
                    </p>
                  )}

                  <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button 
                    variant="ghost"
                    onClick={() => navigate(article.path)}
                    className="w-fit flex items-center gap-2 group p-0 hover:bg-transparent"
                  >
                    <span className="text-primary font-bold">Read Full Article</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 p-8 md:p-16 rounded-3xl bg-primary text-primary-foreground text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Stay Informed</h2>
          <Button variant="secondary" className="rounded-full px-8 py-6 h-auto font-bold uppercase tracking-widest text-[10px]">
            Subscribe to Newsletter
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Articles;