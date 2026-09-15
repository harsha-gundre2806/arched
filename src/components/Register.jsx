import React, { useState } from 'react';
import { MapPin, User, Phone, Globe, Building2, CreditCard, Loader2, Calendar, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    contactNumber: '',
    countryType: 'India',
    customCountry: '',
    state: '',
    collegeName: '',
    locationCoordinates: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  // 3D Parallax Mouse Tracking Effect for the Left Side
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // Max tilt degrees
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    setLocationStatus("Fetching coordinates...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          locationCoordinates: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
        }));

        try {
          setLocationStatus("Detecting country & state...");
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          if (data && data.address) {
            const country = data.address.country;
            const state = data.address.state || data.address.region || '';

            if (country === 'India') {
              setFormData((prev) => ({
                ...prev,
                countryType: 'India',
                state: INDIAN_STATES.includes(state) ? state : prev.state,
              }));
            } else {
              setFormData((prev) => ({
                ...prev,
                countryType: 'Others',
                customCountry: country,
                state: state,
              }));
            }
            setLocationStatus("Location applied!");
          }
        } catch (error) {
          console.error("Reverse geocoding error:", error);
          setLocationStatus("Coordinates saved.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location. Please check browser permissions.");
        setLoadingLocation(false);
        setLocationStatus('');
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Please accept the Terms & Conditions and Refund Policy to proceed.");
      return;
    }
    console.log("Registration Payload:", formData);
    alert("Redirecting to Payment Gateway...");
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#faead9] text-slate-800 flex items-center justify-center p-4 lg:p-8 overflow-hidden"
    >
      {/* Dynamic 3D Keyframe Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: floatSlow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 20s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-preserve-3d { transform-style: preserve-3d; }
      `}</style>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* LEFT SIDE: Interactive 3D Visual Showcase */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center text-center lg:text-left relative py-8 perspective-1000">
          
          {/* Animated Ambient Glow Spheres */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#e3b88c] to-[#c78b54] rounded-full blur-3xl opacity-50 animate-pulse-glow pointer-events-none" />

          {/* 3D Interactive Container */}
          <div 
            className="relative w-full max-w-md h-[380px] sm:h-[440px] flex items-center justify-center transform-preserve-3d transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 0.8}deg) rotateX(${-mousePos.y * 0.8}deg)`
            }}
          >
            {/* Outer Orbiting Ring */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 border-2 border-dashed border-[#8c5e32]/30 rounded-full animate-spin-slow pointer-events-none" />

            {/* Main Center Floating Cube / Core */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-[#2d2218] via-[#423122] to-[#1a130d] rounded-3xl shadow-2xl p-6 flex flex-col justify-between border border-[#ffffff]/10 animate-float relative z-10 backdrop-blur-xl">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-amber-200/60 uppercase">Live Event</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold tracking-wide">AR Achiever</h3>
                <p className="text-amber-200/70 text-xs mt-1">Unlock Next-Gen Potential</p>
              </div>
            </div>

            {/* Floating Glassmorphic Badge 1 (Top Right) */}
            <div 
              className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-white/70 backdrop-blur-md border border-white/80 shadow-xl rounded-2xl p-3.5 flex items-center gap-3 z-20 animate-float"
              style={{ 
                animationDelay: '-1.5s',
                transform: `translateZ(40px) translateX(${mousePos.x * 0.3}px)` 
              }}
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Verified Spot</p>
                <p className="text-[10px] text-slate-500">Instant Confirmation</p>
              </div>
            </div>

            {/* Floating Glassmorphic Badge 2 (Bottom Left) */}
            <div 
              className="absolute -bottom-2 -left-2 sm:bottom-6 sm:left-2 bg-white/70 backdrop-blur-md border border-white/80 shadow-xl rounded-2xl p-3.5 flex items-center gap-3 z-20 animate-float"
              style={{ 
                animationDelay: '-3s',
                transform: `translateZ(60px) translateX(${-mousePos.x * 0.3}px)` 
              }}
            >
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-800">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Fast Pass</p>
                <p className="text-[10px] text-slate-500">Priority Entry</p>
              </div>
            </div>

          </div>

          {/* Heading under 3D animation */}
          <div className="mt-4 px-4 z-10">
            <h2 className="text-2xl font-extrabold text-[#2d2218] tracking-tight">
              Ready to Showcase Your Skills?
            </h2>
            <p className="text-sm text-[#524132] mt-2 max-w-sm">
              Complete your registration form to reserve your spot in the upcoming national competition.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE: Registration Form */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#2d2218]/10 p-6 sm:p-10 relative z-10">
            
            {/* Form Header */}
            <div className="text-center sm:text-left mb-8">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200/60 mb-3">
                Competition Registration
              </span>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Register Your Spot
              </h1>
              <p className="text-sm text-slate-500 mt-1.5">
                Fill in your details accurately to proceed to fee payment.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Gender & Date of Birth (DOB) Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Location Fetcher Box */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/70">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-800">Quick Location Auto-Fill</p>
                    <p className="text-[11px] text-slate-500">Detect country & state using GPS</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={loadingLocation}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-[#2d2218] text-white rounded-xl hover:bg-[#423122] transition-all disabled:opacity-50 cursor-pointer shadow-sm active:scale-95"
                  >
                    {loadingLocation ? (
                      <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                    ) : (
                      <MapPin className="w-4 h-4 text-amber-400" />
                    )}
                    {loadingLocation ? "Detecting..." : "Get Location"}
                  </button>
                </div>
                {locationStatus && (
                  <p className="text-[11px] font-semibold text-amber-800 mt-2">{locationStatus}</p>
                )}
              </div>

              {/* Country Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      name="countryType"
                      value={formData.countryType}
                      onChange={handleChange}
                      className="w-full pl-11 pr-3 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                    >
                      <option value="India">India</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Custom Country Input */}
                {formData.countryType === 'Others' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Country Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="customCountry"
                      required
                      value={formData.customCountry}
                      onChange={handleChange}
                      placeholder="e.g. United States"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                )}
              </div>

              {/* State Input / Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  State / Region <span className="text-red-500">*</span>
                </label>
                {formData.countryType === 'India' ? (
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  >
                    <option value="" disabled>Select State</option>
                    {INDIAN_STATES.map((state, idx) => (
                      <option key={idx} value={state}>{state}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state or region"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  />
                )}
              </div>

              {/* College Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  College / University Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="collegeName"
                    required
                    value={formData.collegeName}
                    onChange={handleChange}
                    placeholder="e.g. IIT Madras"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-600 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Terms & Policies Verification */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-amber-800 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I have read and agree to the{' '}
                    <a 
                      href="/terms-and-conditions" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-800 hover:underline font-bold"
                    >
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a 
                      href="/refund-policy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-800 hover:underline font-bold"
                    >
                      Refund & Return Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit / Payment Button */}
              <button
                type="submit"
                disabled={!acceptedTerms}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-white font-bold bg-gradient-to-r from-[#2d2218] via-[#423122] to-[#2d2218] hover:opacity-95 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-base tracking-wide"
              >
                <CreditCard className="w-5 h-5 text-amber-400" />
                Continue to Payment
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;