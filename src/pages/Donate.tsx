import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// FIXED: Changed "lucide-center" to "lucide-react"
import { Heart, Users, PawPrint, Upload, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import DonateSection from "@/components/sections/DonateSection"; 

import dogImage from "@/assets/new7.jpg"; 
import staffImage from "@/assets/new9.jpg";
import cowImage from "@/assets/new8.jpg";

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    email: "",
    phone: "",
  });
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File is too large. Please upload an image under 5MB.");
        return;
      }

      setImagePreview(URL.createObjectURL(file));
      toast.info(`Screenshot "${file.name}" selected`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imagePreview) {
      toast.error("Please upload a screenshot of your contribution first.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Uploading contribution details...");

    try {
      const submissionData = new FormData(e.currentTarget);
      
      // Formspree Endpoint
      const formspreeEndpoint = "https://formspree.io/f/mjgejpnl";

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json' 
        }
      });

      if (response.ok) {
        toast.success("Thank you! Your details and screenshot have been sent.", { id: toastId });
        
        // Reset form and preview
        setFormData({ firstName: "", lastName: "", country: "", city: "", email: "", phone: "" });
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        toast.error("Submission failed. Please check your form settings.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-sanctuary-forest py-16 md:py-20">
        <div className="container-wide mx-auto px-4 md:px-8 text-center">
          <Heart className="w-12 h-12 text-sanctuary-gold mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Join us in saving Lives
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Your support directly enables Nandi Sanctuary to offer injured and abandoned animals a secure environment, proper medical care, and a dignified opportunity to live again.
          </p>
        </div>
      </section>

      {/* Why Your Support Matters */}
      <section className="pt-10 pb-6 md:pt-12 md:pb-8 bg-background">
        <div className="container-narrow mx-auto text-center px-4">
          <span className="text-sanctuary-gold font-semibold text-xs uppercase tracking-wider mb-2 block">
            Why Your Support Matters
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Contribution Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Running a sanctuary requires significant resources. From daily food and medical care 
            to shelter maintenance and rescue operations, your donations make everything possible.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-left max-w-3xl mx-auto">
            {[
              "Fresh fodder and nutritious food for 100+ animals daily",
              "Full-time veterinary care and emergency medical treatments",
              "Shelter maintenance and expansion for growing needs",
              "Rescue operations and emergency response team",
              "Staff salaries for dedicated caregivers",
              "Clean water and hygienic living environments",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-sanctuary-cream/30 transition-colors">
                <div className="w-5 h-5 rounded-full bg-sanctuary-forest/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-sanctuary-forest" />
                </div>
                <span className="text-foreground text-sm md:text-base leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Giving Boxes */}
      <section className="pt-10 pb-10 bg-sanctuary-cream/30">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sanctuary-gold font-semibold text-xs uppercase tracking-wider mb-2 block">
              Ways to Give
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Be Protected by Cows and Bulls <br className="hidden md:block" />
              <span className="md:block md:ml-20">of Mayapur</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3 h-72 md:h-auto md:aspect-square overflow-hidden shrink-0">
                <img src={dogImage} alt="Support Dogs" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-sanctuary-forest">
                   <PawPrint className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">Life-Saving Care</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Daily Care</h3>
                <p className="text-muted-foreground mb-4 italic">"Compassion is the best medicine for a stray heart."</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Provide nutritious meals, specialized veterinary care, and a warm shelter for the many 
                  dogs rescued from the streets of West Bengal. Your support gives them a second chance at life.
                </p>
                <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})} className="w-fit bg-[#d2693e] hover:bg-[#b85b35] text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-sm transition-all">
                  Contribute Now
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3 h-72 md:h-auto md:aspect-square overflow-hidden shrink-0">
                <img src={staffImage} alt="Support Staff" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-sanctuary-forest">
                   <Users className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">Our Heroes</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Monthly Care</h3>
                <p className="text-muted-foreground mb-4 italic">"Behind every healthy animal is a dedicated human."</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Our staff works day and night to ensure every resident is loved and cared for. Help us 
                  provide stable salaries and equipment for our dedicated team of rescuers and keepers.
                </p>
                <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})} className="w-fit bg-[#d2693e] hover:bg-[#b85b35] text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-sm transition-all">
                  Contribute Now
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3 h-72 md:h-auto md:aspect-square overflow-hidden shrink-0">
                <img src={cowImage} alt="Support Sanctuary" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-sanctuary-forest">
                   <Heart className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">Ancient Wisdom</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Get adopted by Cow/Bull</h3>
                <p className="text-muted-foreground mb-4 italic">"Dharmo Raksati Raksita"</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  At Nandi Sanctuary, it is not just you who adopt a cow or a bull — in a way, they adopt you.
                  When you lovingly cover their daily and medical expenses, you become their protector.
                </p>
                <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'})} className="w-fit bg-[#d2693e] hover:bg-[#b85b35] text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-sm transition-all">
                  Contribute Now
                </Button>
              </div>
            </div>
          </div>

          <DonateSection />
        </div>
      </section>

      {/* Donor Information Form */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Confirm Your Contribution</h2>
            <p className="text-muted-foreground">Please share your details and upload your payment screenshot so we can acknowledge your support.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <input required name="country" value={formData.country} onChange={handleInputChange} type="text" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="e.g. India" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="e.g. Mayapur" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mob No.</label>
                <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full p-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-sanctuary-forest outline-none transition-all" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-sm font-medium">Upload Screenshot of Contribution</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${imagePreview ? 'border-sanctuary-forest bg-sanctuary-forest/5' : 'border-border bg-sanctuary-cream/10 hover:border-sanctuary-forest'}`}
              >
                <input 
                  type="file" 
                  name="upload"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden" 
                  accept="image/*" 
                />
                
                {imagePreview ? (
                  <div className="flex flex-col items-center">
                    <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-2 border border-sanctuary-forest" />
                    <div className="flex items-center gap-2 text-sanctuary-forest font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Screenshot Ready
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Click to change image</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-10 h-10 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground font-medium">Click to upload or drag and drop</span>
                    <span className="text-xs text-muted-foreground/60 mt-1">PNG, JPG up to 5MB</span>
                  </div>
                )}
              </div>
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full bg-sanctuary-forest hover:bg-sanctuary-forest/90 text-white py-6 rounded-xl text-lg font-semibold transition-all">
              {isSubmitting ? "Processing..." : "Submit Confirmation"}
            </Button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-sanctuary-cream/30">
        <div className="container-narrow mx-auto text-center px-4">
          <Button asChild className="bg-sanctuary-forest hover:bg-sanctuary-forest/90 text-white rounded-xl px-8 py-6">
            <Link to="/contact">
              <Heart className="w-5 h-5 mr-2" />
              Inquire About Sponsorship
            </Link>
          </Button>
        </div>
      </section>

      <footer className="py-16 bg-background border-t border-border">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Trust & Transparency
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nandi Sanctuary is operated by People for Animals International, a registered non-profit 
              organization. All donations are tax-deductible, and we maintain full transparency in how 
              funds are used.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Donate;