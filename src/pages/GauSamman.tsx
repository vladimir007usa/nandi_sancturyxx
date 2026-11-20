import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Download, 
  Printer, 
  CheckCircle2, 
  Heart, 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  Copy,
  Check,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emblemImg from "@/assets/gau_samman_emblem.png";
import logoImg from "@/assets/logo.png";
import heroImg from "@/assets/cow.jpg";

export default function GauSamman() {
  // Form states
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [stateCountry, setStateCountry] = useState("India");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pledgeChecked, setPledgeChecked] = useState(true);
  const [customPledge, setCustomPledge] = useState(
    "I solemnly pledge to honor, protect, and care for cows and all sentient beings. I stand united with Gau Samman Ahvaan Abhiyan to uphold Gau Seva, compassion, and animal welfare."
  );
  
  // Certificate state
  const [certGenerated, setCertGenerated] = useState(false);
  const [certId, setCertId] = useState("");
  const [certDate, setCertDate] = useState("");
  const [isGeneratingDownload, setIsGeneratingDownload] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const certRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize certificate ID and date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCertDate(formattedDate);

    // Random consistent 5-digit number
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setCertId(`GSA-${today.getFullYear()}-${randomNum}`);
  }, []);

  const handleGenerateCertificate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!fullName.trim()) {
      toast.error("Please enter your name to generate your certificate.");
      return;
    }
    if (!pledgeChecked) {
      toast.error("Please accept the pledge commitment to receive your certificate.");
      return;
    }

    setCertGenerated(true);
    toast.success("Certificate generated successfully! You can now preview and download it.");

    // Scroll smoothly to certificate section
    setTimeout(() => {
      certRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  };

  // High-Resolution Canvas Rendering & Download Function
  const handleDownloadPNG = async () => {
    const nameToUse = fullName.trim() || "Compassionate Supporter";
    setIsGeneratingDownload(true);
    toast.info("Preparing your high-resolution certificate...");

    try {
      const canvas = canvasRef.current || document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not create canvas context");

      // High-res landscape certificate dimensions (2400 x 1700)
      const width = 2400;
      const height = 1700;
      canvas.width = width;
      canvas.height = height;

      // 1. Background Parchment
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 200,
        width / 2, height / 2, width * 0.7
      );
      bgGrad.addColorStop(0, "#FCF9F1");
      bgGrad.addColorStop(0.7, "#FAF4E4");
      bgGrad.addColorStop(1, "#F3EAD3");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle textured border pattern
      ctx.fillStyle = "rgba(184, 134, 11, 0.03)";
      ctx.fillRect(40, 40, width - 80, height - 80);

      // 2. Decorative Borders
      // Outer Gold Border
      ctx.strokeStyle = "#B8860B";
      ctx.lineWidth = 14;
      ctx.strokeRect(60, 60, width - 120, height - 120);

      // Secondary Forest Green Border
      ctx.strokeStyle = "#1C4E2E";
      ctx.lineWidth = 4;
      ctx.strokeRect(84, 84, width - 168, height - 168);

      // Thin inner gold border
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 2;
      ctx.strokeRect(98, 98, width - 196, height - 196);

      // Corner Ornaments
      const drawCorner = (x: number, y: number, angle: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.strokeStyle = "#B8860B";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(60, 0);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 60);
        ctx.stroke();

        ctx.fillStyle = "#B8860B";
        ctx.beginPath();
        ctx.arc(15, 15, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      drawCorner(110, 110, 0);
      drawCorner(width - 110, 110, 90);
      drawCorner(width - 110, height - 110, 180);
      drawCorner(110, height - 110, 270);

      // 3. Load & Draw Gau Samman Logo / Emblem
      const loadImg = (src: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load ${src}`));
          img.src = src;
        });

      try {
        const emblem = await loadImg(emblemImg);
        // Draw centered emblem at top
        const emblemSize = 220;
        ctx.drawImage(emblem, width / 2 - emblemSize / 2, 125, emblemSize, emblemSize);
      } catch {
        // Fallback placeholder circle if image fails to load
        ctx.beginPath();
        ctx.arc(width / 2, 235, 90, 0, Math.PI * 2);
        ctx.fillStyle = "#EAE0CA";
        ctx.fill();
        ctx.strokeStyle = "#B8860B";
        ctx.lineWidth = 4;
        ctx.stroke();
      }

      // 4. Header Typography
      ctx.textAlign = "center";

      // Organization Name
      ctx.fillStyle = "#1C4E2E";
      ctx.font = "bold 32px 'Cinzel', serif, Georgia";
      ctx.letterSpacing = "4px";
      ctx.fillText(
        "PEOPLE FOR ANIMALS INTERNATIONAL & NANDI SANCTUARY, MAYAPUR",
        width / 2,
        380
      );

      // Sacred Motto
      ctx.fillStyle = "#8B2500";
      ctx.font = "bold 26px 'Playfair Display', serif";
      ctx.fillText(
        "॥ गावो विश्वस्य मातरः • सेवा • सुरक्षा • सम्मान ॥",
        width / 2,
        425
      );

      // Title
      ctx.fillStyle = "#8B2500";
      ctx.font = "900 68px 'Cinzel', serif, Georgia";
      ctx.fillText("CERTIFICATE OF APPRECIATION", width / 2, 510);

      // Hindi Sub-headline
      ctx.fillStyle = "#B8860B";
      ctx.font = "600 30px 'Playfair Display', serif";
      ctx.fillText("गौ सम्मान प्रशस्ति पत्र — GAU SAMMAN AHVAAN ABHIYAN", width / 2, 560);

      // Decorative divider
      ctx.strokeStyle = "#B8860B";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 350, 585);
      ctx.lineTo(width / 2 + 350, 585);
      ctx.stroke();

      ctx.fillStyle = "#8B2500";
      ctx.beginPath();
      ctx.arc(width / 2, 585, 7, 0, Math.PI * 2);
      ctx.fill();

      // Presentation line
      ctx.fillStyle = "#4A4A4A";
      ctx.font = "italic 32px 'Playfair Display', serif";
      ctx.fillText(
        "This Certificate of Appreciation is proudly presented to",
        width / 2,
        650
      );

      // 5. Recipient Name
      ctx.fillStyle = "#1C4E2E";
      ctx.font = "bold 78px 'Playfair Display', serif, Georgia";
      ctx.fillText(nameToUse, width / 2, 755);

      // Golden Underline for Recipient Name
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 400, 780);
      ctx.lineTo(width / 2 + 400, 780);
      ctx.stroke();

      // Recipient Location
      if (city.trim() || stateCountry.trim()) {
        const loc = [city.trim(), stateCountry.trim()].filter(Boolean).join(", ");
        ctx.fillStyle = "#666666";
        ctx.font = "italic 28px 'Playfair Display', serif";
        ctx.fillText(`from ${loc}`, width / 2, 825);
      }

      // 6. Commendation / Citation Text
      ctx.fillStyle = "#2C2C2C";
      ctx.font = "30px 'Playfair Display', serif";
      const line1 =
        "In recognition of your compassionate commitment, support, and dedication towards";
      const line2 =
        "Cow Protection and Welfare under the Gau Samman Ahvaan Abhiyan.";
      const line3 =
        "For standing as a voice for the voiceless and upholding the sacred duty of Gau Seva";
      const line4 =
        "and animal compassion together with Nandi Sanctuary, Mayapur.";

      ctx.fillText(line1, width / 2, 900);
      ctx.fillText(line2, width / 2, 948);
      ctx.fillText(line3, width / 2, 996);
      ctx.fillText(line4, width / 2, 1044);

      // Quote / Motto Box
      ctx.fillStyle = "rgba(184, 134, 11, 0.08)";
      ctx.fillRect(width / 2 - 500, 1100, 1000, 60);
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 1;
      ctx.strokeRect(width / 2 - 500, 1100, 1000, 60);

      ctx.fillStyle = "#8B2500";
      ctx.font = "italic 24px 'Playfair Display', serif";
      ctx.fillText(
        "“Protecting life, restoring honor, and serving the sacred mother cow.”",
        width / 2,
        1138
      );

      // 7. Footer - Left Side: Official Seal & Date/ID
      // Seal circle
      const sealX = 380;
      const sealY = 1380;
      ctx.beginPath();
      ctx.arc(sealX, sealY, 95, 0, Math.PI * 2);
      ctx.fillStyle = "#FAF0D0";
      ctx.fill();
      ctx.strokeStyle = "#B8860B";
      ctx.lineWidth = 5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sealX, sealY, 82, 0, Math.PI * 2);
      ctx.strokeStyle = "#8B2500";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#8B2500";
      ctx.font = "bold 18px 'Cinzel', serif";
      ctx.fillText("SEAL OF HONOR", sealX, sealY - 45);
      ctx.font = "bold 20px 'Cinzel', serif";
      ctx.fillText("GAU SAMMAN", sealX, sealY - 15);
      ctx.fillText("AHVAAN", sealX, sealY + 15);
      ctx.fillStyle = "#1C4E2E";
      ctx.font = "bold 15px 'Source Sans 3', sans-serif";
      ctx.fillText("MAYAPUR • VERIFIED", sealX, sealY + 45);

      // Date and Cert ID
      ctx.textAlign = "left";
      ctx.fillStyle = "#444444";
      ctx.font = "bold 24px 'Source Sans 3', sans-serif";
      ctx.fillText(`Date: ${certDate}`, 520, 1360);
      ctx.font = "22px 'Source Sans 3', sans-serif";
      ctx.fillStyle = "#666666";
      ctx.fillText(`Certificate ID: ${certId}`, 520, 1400);
      ctx.fillText("Initiative: Nandi Sanctuary Mayapur", 520, 1440);

      // 8. Footer - Right Side: Boss Signature Section
      const sigX = width - 480;
      const sigY = 1330;
      ctx.textAlign = "center";

      // Script / Calligraphy Signature
      ctx.fillStyle = "#1A3320";
      ctx.font = "italic 52px 'Alex Brush', 'Great Vibes', cursive";
      ctx.fillText("Dharmveer Singh", sigX, sigY);

      // Signature line
      ctx.strokeStyle = "#2C2C2C";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sigX - 180, sigY + 20);
      ctx.lineTo(sigX + 180, sigY + 20);
      ctx.stroke();

      // Boss Name and Title as specifically requested:
      // Dharmveer Singh
      // Director
      // Nandi Sanctuary,
      // Mayapur.
      ctx.fillStyle = "#111111";
      ctx.font = "bold 28px 'Playfair Display', serif";
      ctx.fillText("Dharmveer Singh", sigX, sigY + 58);

      ctx.fillStyle = "#333333";
      ctx.font = "24px 'Source Sans 3', sans-serif";
      ctx.fillText("Director", sigX, sigY + 92);
      ctx.fillText("Nandi Sanctuary,", sigX, sigY + 122);
      ctx.fillText("Mayapur.", sigX, sigY + 152);

      // Convert Canvas to Blob & Trigger Download
      canvas.toBlob((blob) => {
        if (!blob) throw new Error("Canvas export failed");
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const safeName = nameToUse.replace(/[^a-zA-Z0-9]/g, "_");
        a.href = url;
        a.download = `Certificate_Gau_Samman_${safeName}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsGeneratingDownload(false);
        toast.success("Certificate downloaded successfully!");
      }, "image/png");
    } catch (err) {
      console.error("Error generating certificate image:", err);
      setIsGeneratingDownload(false);
      toast.error("Could not generate certificate image. Please try again.");
    }
  };

  const handlePrint = () => {
    if (!fullName.trim()) {
      toast.error("Please enter your name first!");
      return;
    }
    toast.info("Opening print dialog. Select 'Save as PDF' or choose your printer.");
    window.print();
  };

  const handleCopyShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    toast.success("Page link copied! Share it with friends and family.");
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const currentDisplayName = fullName.trim() || "Your Name Here";
  const currentDisplayLocation = [city.trim(), stateCountry.trim()].filter(Boolean).join(", ");

  return (
    <div className="min-h-screen bg-background">
      {/* Hidden canvas for PNG export */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Hero / Header Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-sanctuary-forest via-sanctuary-forest/95 to-sanctuary-forest/90 text-primary-foreground overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img src={heroImg} alt="Cow sanctuary background" className="w-full h-full object-cover" />
        </div>

        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Circular Emblem */}
            <div className="inline-block relative mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-2 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-elevated">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-1 shadow-inner">
                  <img
                    src={emblemImg}
                    alt="Gau Samman Ahvaan Abhiyan Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-sanctuary-terracotta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                ॥ सेवा • सुरक्षा • सम्मान ॥
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Go Samman Aahvaan
            </h1>
            <p className="text-xl md:text-2xl font-display text-amber-300 font-semibold mb-6">
              गौ सम्मान आह्वान अभियान — Cow Protection & Cultural Initiative
            </p>

            <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Stand with <strong className="text-white">Nandi Sanctuary, Mayapur</strong> and take a sacred pledge to revere, 
              protect, and care for Mother Cow. Sign the pledge below and immediately receive your official, personalized 
              <strong> Certificate of Appreciation</strong>.
            </p>

            {/* Quick 3 Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <Heart className="w-5 h-5" />
                  <span>सेवा (Seva)</span>
                </div>
                <p className="text-xs text-primary-foreground/80">
                  Daily loving care, natural feeding, and sacred sanctuary refuge in Mayapur.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span>सुरक्षा (Suraksha)</span>
                </div>
                <p className="text-xs text-primary-foreground/80">
                  Rescue of injured cows, medical treatments, and legal animal protection.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <Award className="w-5 h-5" />
                  <span>सम्मान (Samman)</span>
                </div>
                <p className="text-xs text-primary-foreground/80">
                  Restoring timeless reverence, farmer empowerment, and community honor.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#pledge-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 text-stone-900 font-bold hover:bg-amber-300 transition-all shadow-card hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Fill Form & Get Certificate
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Main Form & Certificate Preview Section */}
      <section className="py-16 md:py-20" id="pledge-form">
        <div className="container-wide mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form (5 Cols) */}
            <div className="lg:col-span-5 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Pledge & Sign Form
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Enter your details to generate your Certificate of Appreciation
                  </p>
                </div>
              </div>

              <form onSubmit={handleGenerateCertificate} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-600" />
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Rakesh Naskar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="h-11 text-base bg-background"
                  />
                  <p className="text-[11px] text-muted-foreground">
                    This exact name will appear in large script on your official certificate.
                  </p>
                </div>

                {/* City & State/Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-semibold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      City / Village
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="e.g. Mayapur / Kolkata"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="h-10 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stateCountry" className="text-sm font-semibold">
                      State / Country
                    </Label>
                    <Input
                      id="stateCountry"
                      type="text"
                      placeholder="e.g. West Bengal, India"
                      value={stateCountry}
                      onChange={(e) => setStateCountry(e.target.value)}
                      className="h-10 bg-background"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-600" />
                    Email Address <span className="text-xs text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rakeshjames009@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 bg-background"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    WhatsApp / Phone <span className="text-xs text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9609115016"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-10 bg-background"
                  />
                </div>

                {/* Pledge Statement */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4 text-amber-600" />
                    Your Sacred Pledge Message
                  </Label>
                  <textarea
                    rows={3}
                    value={customPledge}
                    onChange={(e) => setCustomPledge(e.target.value)}
                    className="w-full text-sm rounded-lg border border-input bg-background p-3 focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
                  />
                </div>

                {/* Affirmation Checkbox */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                  <input
                    id="pledgeConfirm"
                    type="checkbox"
                    checked={pledgeChecked}
                    onChange={(e) => setPledgeChecked(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-amber-400"
                    required
                  />
                  <label htmlFor="pledgeConfirm" className="text-xs text-foreground cursor-pointer leading-normal">
                    <strong>I solemnly pledge</strong> to support cow protection, practice compassion towards animals, 
                    and stand with Gau Samman Ahvaan Abhiyan & Nandi Sanctuary.
                  </label>
                </div>

                {/* Submit / Generate Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sanctuary-forest hover:bg-sanctuary-forest/90 text-white font-bold h-12 text-base shadow-card flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Generate & Preview Certificate
                </Button>

                {/* Quick actions if already filled */}
                {fullName.trim() && (
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleDownloadPNG}
                      disabled={isGeneratingDownload}
                      className="border-amber-600 text-amber-700 hover:bg-amber-50 h-10 text-xs font-semibold"
                    >
                      <Download className="w-4 h-4 mr-1 text-amber-600" />
                      {isGeneratingDownload ? "Generating..." : "Download PNG"}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrint}
                      className="border-primary text-primary hover:bg-primary/5 h-10 text-xs font-semibold"
                    >
                      <Printer className="w-4 h-4 mr-1 text-primary" />
                      Print / PDF
                    </Button>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Live Certificate Preview (7 Cols) */}
            <div className="lg:col-span-7 space-y-6" ref={certRef}>
              
              <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/40 p-4 rounded-xl border border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-foreground">
                    Live Certificate Preview
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleDownloadPNG}
                    disabled={isGeneratingDownload}
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs h-9 px-4 shadow"
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    {isGeneratingDownload ? "Exporting..." : "Download (PNG)"}
                  </Button>

                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-accent text-xs h-9 px-3"
                  >
                    <Printer className="w-4 h-4 mr-1.5" />
                    Print / PDF
                  </Button>

                  <Button
                    onClick={handleCopyShare}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-muted-foreground hover:text-foreground"
                    title="Copy Link to Share"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Printable Certificate Frame */}
              <div
                id="printable-certificate"
                className="relative bg-[#fffdf7] text-stone-900 rounded-xl border-8 border-[#B8860B] p-6 md:p-10 shadow-elevated overflow-hidden select-none"
                style={{
                  backgroundImage: "radial-gradient(#FFFDF7 60%, #F9F3DF 100%)",
                }}
              >
                {/* Secondary Inner Border */}
                <div className="border-2 border-[#1C4E2E] p-4 md:p-8 rounded-lg relative">
                  
                  {/* Subtle Inner Gold Hairline */}
                  <div className="border border-[#D4AF37]/60 p-4 rounded relative">
                    
                    {/* Corner Ornaments */}
                    <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-[#B8860B]" />
                    <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#B8860B]" />
                    <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-[#B8860B]" />
                    <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-[#B8860B]" />

                    {/* Certificate Content Header */}
                    <div className="text-center space-y-2">
                      
                      {/* Logo / Emblem */}
                      <div className="flex justify-center items-center gap-4 mb-2">
                        <img
                          src={emblemImg}
                          alt="Gau Samman Emblem"
                          className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow"
                        />
                      </div>

                      <p className="text-[11px] md:text-xs uppercase tracking-widest font-bold text-[#1C4E2E] font-cinzel">
                        People for Animals International & Nandi Sanctuary, Mayapur
                      </p>

                      <p className="text-xs md:text-sm font-semibold text-[#8B2500]">
                        ॥ गावो विश्वस्य मातरः • सेवा • सुरक्षा • सम्मान ॥
                      </p>

                      <h3 className="font-display font-black text-2xl md:text-4xl text-[#8B2500] tracking-wide pt-1">
                        CERTIFICATE OF APPRECIATION
                      </h3>

                      <p className="text-[11px] md:text-xs font-semibold text-[#B8860B] uppercase tracking-wider">
                        गौ सम्मान प्रशस्ति पत्र — Gau Samman Ahvaan Abhiyan
                      </p>

                      {/* Divider */}
                      <div className="flex items-center justify-center gap-2 py-2">
                        <div className="h-[1.5px] w-24 bg-[#B8860B]" />
                        <span className="text-[#8B2500] text-sm">✦</span>
                        <div className="h-[1.5px] w-24 bg-[#B8860B]" />
                      </div>

                      {/* Presentation line */}
                      <p className="font-display italic text-sm md:text-base text-stone-600">
                        This Certificate of Appreciation is proudly presented to
                      </p>

                      {/* Recipient Name */}
                      <div className="py-2">
                        <span className="font-display text-2xl md:text-4xl font-bold text-[#1C4E2E] tracking-tight underline decoration-[#D4AF37] underline-offset-8">
                          {currentDisplayName}
                        </span>
                        {currentDisplayLocation && (
                          <p className="text-xs italic text-stone-500 mt-2">
                            from {currentDisplayLocation}
                          </p>
                        )}
                      </div>

                      {/* Citation Paragraph */}
                      <p className="font-display text-xs md:text-sm text-stone-700 max-w-xl mx-auto leading-relaxed pt-2">
                        In recognition of your compassionate commitment, support, and dedication towards
                        <strong> Cow Protection and Welfare</strong> under the <strong>Gau Samman Ahvaan Abhiyan</strong>.
                        For standing as a voice for the voiceless and upholding the sacred duty of Gau Seva
                        and animal compassion together with Nandi Sanctuary, Mayapur.
                      </p>

                      {/* Sacred Motto Quote */}
                      <div className="my-3 py-1.5 px-4 bg-amber-500/10 border border-amber-400/40 rounded inline-block">
                        <p className="text-[11px] md:text-xs italic text-[#8B2500]">
                          “Protecting life, restoring honor, and serving the sacred mother cow.”
                        </p>
                      </div>

                      {/* Certificate Footer: Seal & Director Signature */}
                      <div className="pt-6 grid grid-cols-2 items-end text-left border-t border-[#D4AF37]/40 mt-4">
                        
                        {/* Left: Seal & Issue Date */}
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-2 p-1.5 rounded border border-[#B8860B]/50 bg-amber-50/60 mb-1">
                            <ShieldCheck className="w-6 h-6 text-[#8B2500]" />
                            <div className="text-[9px] leading-tight text-stone-700">
                              <span className="font-bold text-[#8B2500] block uppercase">Official Verification Seal</span>
                              <span>Nandi Sanctuary • Mayapur</span>
                            </div>
                          </div>

                          <div className="text-[10px] md:text-xs text-stone-600 space-y-0.5">
                            <p className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-[#B8860B]" />
                              <strong>Date:</strong> {certDate}
                            </p>
                            <p>
                              <strong>ID:</strong> {certId}
                            </p>
                            <p className="text-[9px] text-stone-400">
                              Verify: www.nandisanctuary.com
                            </p>
                          </div>
                        </div>

                        {/* Right: Boss Signature Section */}
                        <div className="text-right">
                          <div className="inline-block text-center">
                            {/* Signature Font Graphic */}
                            <div className="font-script text-2xl md:text-3xl text-[#1A3320] leading-none mb-1">
                              Dharmveer Singh
                            </div>
                            
                            <div className="w-44 md:w-52 h-[1.5px] bg-stone-800 mx-auto my-1" />
                            
                            {/* Requested Boss Details */}
                            <div className="text-stone-900 leading-tight">
                              <p className="font-display font-bold text-xs md:text-sm">
                                Dharmveer Singh
                              </p>
                              <p className="text-[10px] md:text-xs text-stone-600 font-medium">
                                Director
                              </p>
                              <p className="text-[10px] md:text-xs text-stone-600">
                                Nandi Sanctuary,
                              </p>
                              <p className="text-[10px] md:text-xs text-stone-600">
                                Mayapur.
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Download CTA Bar */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground">
                    Ready to download or print your certificate?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Get the ultra high-resolution PNG image suitable for printing, framing, or sharing online.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleDownloadPNG}
                    disabled={isGeneratingDownload}
                    className="bg-sanctuary-forest hover:bg-sanctuary-forest/90 text-white font-semibold text-xs h-9 px-4"
                  >
                    <Download className="w-4 h-4 mr-1.5" />
                    Download Certificate
                  </Button>
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    className="text-xs h-9"
                  >
                    <Printer className="w-4 h-4 mr-1.5" />
                    Print
                  </Button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
