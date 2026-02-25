import React, { useState } from 'react';
import { CreditCard, Landmark, Smartphone, X, Copy, CheckCircle2, ExternalLink } from 'lucide-react';
import { toast } from "sonner"; 

// Asset import - Ensure volunteers.jpg is in your src/assets folder
import volunteersImg from "@/assets/volunteers.jpg";

const DonateSection = () => {
  const [activeModal, setActiveModal] = useState<"bank" | "upi" | "cardOptions" | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Official Payment Platform Links
  const paymentPlatforms = [
    { 
      name: "Razorpay", 
      url: "https://rzp.io/l/9Fu3UNLT", 
      color: "bg-[#3395ff]", 
      description: "Indian Cards & Netbanking"
    },
    { 
      name: "Stripe", 
      url: "https://stripe.com/in", 
      color: "bg-[#635bff]", 
      description: "International & Credit Cards"
    },
    
    { 
      name: "PayPal", 
      url: "https://www.paypal.com/in/home", 
      color: "bg-[#003087]", 
      description: "Global Wallet Payments"
    },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetails = {
    name: "People For Animals International Trust",
    bank: "ICICI BANK LTD",
    account: "402405000018",
    ifsc: "ICIC0001933"
  };

  return (
    <section className="py-16 bg-sanctuary-cream/30">
      <div className="container-wide mx-auto px-6">
        
        {/* 1. VOLUNTEER IMAGE (Top Position - Text Removed) */}
        <div className="w-full mb-12 overflow-hidden rounded-[2rem] shadow-xl border border-border group">
          <img 
            src={volunteersImg} 
            alt="Nandi Sanctuary Volunteers" 
            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* 2. MAIN DONATION CARD */}
        <div className="bg-sanctuary-forest rounded-[2rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sanctuary-gold/5 rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Your contribution, no matter the size, directly impacts the lives of animals in our care. 
              Choose a donation method that works for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button 
                onClick={() => setActiveModal('cardOptions')}
                className="flex items-center gap-3 bg-sanctuary-gold hover:bg-sanctuary-gold/90 text-sanctuary-forest px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-black/20"
              >
                <CreditCard className="w-5 h-5" />
                Donate by Card
              </button>

              <button 
                onClick={() => setActiveModal('bank')}
                className="flex items-center gap-3 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                <Landmark className="w-5 h-5" />
                Bank Transfer
              </button>

              <button 
                onClick={() => setActiveModal('upi')}
                className="flex items-center gap-3 border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                <Smartphone className="w-5 h-5" />
                UPI / Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL SYSTEM */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* CASE 1: CARD PLATFORM SELECTION */}
            {activeModal === 'cardOptions' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-sanctuary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-sanctuary-gold" />
                </div>
                <h3 className="text-2xl font-bold text-sanctuary-forest mb-2 font-display">Choose a Platform</h3>
                <p className="text-gray-500 text-sm mb-6">Select your preferred payment gateway</p>
                
                <div className="space-y-3">
                  {paymentPlatforms.map((platform) => (
                    <a 
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-4 rounded-2xl text-white font-bold transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg ${platform.color}`}
                    >
                      <div className="text-left">
                        <span className="block text-lg">{platform.name}</span>
                        <span className="text-[10px] opacity-80 font-normal uppercase tracking-wider">{platform.description}</span>
                      </div>
                      <ExternalLink className="w-5 h-5 opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* CASE 2: BANK DETAILS */}
            {activeModal === 'bank' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-sanctuary-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-8 h-8 text-sanctuary-forest" />
                </div>
                <h3 className="text-2xl font-bold text-sanctuary-forest mb-6 font-display">Bank Account Details</h3>
                
                <div className="space-y-4 text-left">
                  {[
                    { label: "Account Name", value: bankDetails.name },
                    { label: "Bank Name", value: bankDetails.bank },
                    { label: "Account Number", value: bankDetails.account },
                    { label: "IFSC Code", value: bankDetails.ifsc },
                  ].map((field) => (
                    <div key={field.label} className="group relative bg-gray-50 p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{field.label}</p>
                        <p className={`font-bold text-gray-800 ${field.label.includes('Number') ? 'font-mono text-lg' : ''}`}>
                          {field.value}
                        </p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(field.value, field.label)}
                        className="text-sanctuary-forest/40 hover:text-sanctuary-forest transition-colors p-2"
                      >
                        {copiedField === field.label ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CASE 3: UPI DETAILS */}
            {activeModal === 'upi' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-sanctuary-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-sanctuary-forest" />
                </div>
                <h3 className="text-2xl font-bold text-sanctuary-forest mb-2 font-display">Scan to Donate</h3>
                <div className="bg-white p-4 border-2 border-dashed border-sanctuary-gold/30 rounded-3xl inline-block mb-6 shadow-inner">
                  <div className="w-48 h-48 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <Smartphone className="w-10 h-10 text-gray-300" />
                  </div>
                </div>
                <div className="bg-sanctuary-cream/50 p-4 rounded-2xl flex justify-between items-center">
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">UPI ID</p>
                    <p className="font-bold text-sanctuary-forest text-lg">pfa@upi</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard("pfa@upi", "UPI ID")}
                    className="text-sanctuary-forest/40 hover:text-sanctuary-forest p-2"
                  >
                    {copiedField === "UPI ID" ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default DonateSection;