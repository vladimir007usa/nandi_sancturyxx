import { Calendar } from "lucide-react";

const Festivals = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-sanctuary-cream py-16 md:py-24 mb-12">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sanctuary-gold/20 text-sanctuary-gold mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sacred Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Festival Calendar
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay updated with the upcoming festivals, sacred celebrations, and special events at Nandi Sanctuary and the Mayapur community.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="container-wide mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-elevated overflow-hidden border border-border p-4 md:p-8">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] min-h-[500px]">
            <iframe
              src="https://calendar.google.com/calendar/u/0/embed?src=c_cde4dc8132d3ce649b15e7cf52521cd7312a95bd21c60e79e58c776ffe0212e1@group.calendar.google.com&ctz=Asia/Kolkata"
              style={{ border: 0 }}
              className="absolute inset-0 w-full h-full rounded-xl"
              frameBorder="0"
              scrolling="no"
              title="Festival Calendar"
            ></iframe>
          </div>
          
          <div className="mt-8 p-6 bg-sanctuary-forest/5 rounded-2xl border border-sanctuary-forest/10">
            <h3 className="font-display text-xl font-bold text-sanctuary-forest mb-3">Important Note</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our festival dates often follow the lunar calendar. Please check back regularly for the most accurate and updated information regarding celebrations and community gatherings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festivals;
