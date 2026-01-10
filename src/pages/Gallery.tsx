import heroImage from "@/assets/hero-sanctuary.jpg";
import cowPortrait from "@/assets/cow-portrait.jpg";
import volunteersImage from "@/assets/volunteers.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Heart } from "lucide-react";

const galleryImages = [
  { src: heroImage, alt: "Peaceful cows grazing in the sanctuary pastures", category: "Sanctuary Life" },
  { src: cowPortrait, alt: "Close-up of a rescued cow at the sanctuary", category: "Our Residents" },
  { src: volunteersImage, alt: "Volunteers caring for animals", category: "Volunteers" },
  { src: heroImage, alt: "Morning feeding time at the sanctuary", category: "Daily Care" },
  { src: cowPortrait, alt: "A gentle soul at Nandi Sanctuary", category: "Our Residents" },
  { src: volunteersImage, alt: "Community members with sanctuary animals", category: "Community" },
];

const Gallery = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-sanctuary-cream py-20 md:py-28">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <Camera className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Glimpses of life at Nandi Sanctuary—the peaceful moments, the healing journeys, 
            and the loving care that fills our days.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sanctuary-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sanctuary-gold text-sm font-semibold mb-2 block">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm leading-relaxed">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Photos Coming */}
      <section className="py-16 bg-sanctuary-cream">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            More Photos Coming Soon
          </h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media for daily updates and behind-the-scenes glimpses of sanctuary life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg">
              Follow on Instagram
            </Button>
            <Button variant="outline" size="lg">
              Follow on Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Visit the Sanctuary in Person
          </h2>
          <p className="text-primary-foreground/85 mb-8">
            Experience the peace and joy of Nandi Sanctuary firsthand. Contact us to schedule a visit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/donate">
                <Heart className="w-5 h-5" />
                Support Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
