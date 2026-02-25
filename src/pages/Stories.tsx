import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

// Assets
import vishvambar5Img from "@/assets/vishvambar5.jpg";
import mahaveer5Img from "@/assets/mahaveer5.jpeg";
import dharmkshetra1Img from "@/assets/dharmkshetra1.jpg";
import angad1Img from "@/assets/angad1.jpg";
import nadia1Img from "@/assets/nadia1.jpg";

const residingStories = [
  {
    title: "Story of Vishvambar",
    image: vishvambar5Img,
    text: "Vishvambar, a 15-year-old bull, was rescued on Makar Sankranti after suffering a severe bone fracture. Found by a group of compassionate young men, he now receives specialized medical care and daily therapy at Nandi Sanctuary.",
    link: "/vishvambar" 
  },
  {
    title: "Story of Mahaveer",
    image: mahaveer5Img,
    text: "When we found Mahaveer, his leg was lost to gangrene and so was his future on the streets. After life-saving surgery, this stubborn, brave boy found a new home—and a second chance.",
    link: "/volunteer"
  }
];

const memoryStories = [
  {
    title: "Story of Nadia",
    image: nadia1Img,
    text: "The very first rescue that inspired the sanctuary's name. Nandi was a calf scheduled for illegal transport who found a permanent home with us. His presence reminds us every day why our mission to protect these sacred animals is so vital.",
    link: "/nadia" 
  },
  {
    title: "Story of Angad",
    image: angad1Img,
    text: "On Feb 11, 2025, a small bull with twisted front legs was rescued from the streets of Nabadwipa. Now named Angad, he has moved from a life of struggle on dusty roads to a sanctuary of peace and recovery.",
    link: "/angad" 
  },
  {
    title: "Story of Dharmkshetra",
    image: dharmkshetra1Img,
    text: "Many bulls are discarded when they are too old to work. This gentle giant was left tied to a pole without food or water for days. We named him Baba. Now retired, Baba spends his days resting under the shade of the Banyan trees with full dignity.",
    link: "/dharmkshetra" // UPDATED: Changed from /donate to /dharmkshetra
  }
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-sanctuary-forest py-20 text-white">
        <div className="container-wide mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Rescue Stories</h1>
          <p className="text-sanctuary-gold text-lg uppercase tracking-widest font-medium animate-fade-up delay-100">
            Lives Transformed at Nandi Sanctuary
          </p>
        </div>
      </section>

      {/* Stories Grid Section */}
      <section className="section-padding bg-sanctuary-cream/30">
        <div className="container-wide mx-auto px-6">
          
          {/* Section 1: Currently Residing */}
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-sanctuary-forest mb-10 animate-fade-up">
              Currently Residing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {residingStories.map((story, index) => (
                <StoryCard key={index} story={story} index={index} />
              ))}
            </div>
          </div>

          {/* Section 2: In the memory of */}
          <div className="pt-10 border-t border-sanctuary-forest/10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-sanctuary-forest mb-10 animate-fade-up">
              In the memory of
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {memoryStories.map((story, index) => (
                <StoryCard key={index} story={story} index={index + 2} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-narrow mx-auto text-center px-6">
          <Heart className="w-10 h-10 text-sanctuary-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
            Help Us Save More Lives
          </h2>
          <Button variant="donate" size="xl" asChild>
            <Link to="/donate">Donate to Nandi Sanctuary</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const StoryCard = ({ story, index }: { story: any; index: number }) => (
  <div 
    className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col border border-border/50 animate-fade-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="p-8 pb-0">
      <h3 className="font-display text-2xl font-bold text-sanctuary-forest leading-tight h-16 flex items-center">
        {story.title}
      </h3>
    </div>

    <div className="px-8 py-6">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    </div>

    <div className="px-8 pb-8 flex-grow">
      <p className="text-muted-foreground leading-relaxed text-base">
        {story.text}
      </p>
    </div>

    <div className="px-8 pb-8">
      <Button 
        variant="default" 
        className="w-full group bg-sanctuary-forest text-white hover:bg-sanctuary-forest/90" 
        asChild
      >
        <Link to={story.link}>
          Read full story
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
);

export default Stories;