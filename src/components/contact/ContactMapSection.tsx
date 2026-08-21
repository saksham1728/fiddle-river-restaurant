
const ContactMapSection = () => {
  return (
    <section className="w-full h-[500px] relative overflow-hidden bg-charcoal">

      <div className="absolute inset-0 z-10">
        <iframe 
          src="https://www.google.com/maps?q=fiddle+river+restaurant&z=14&t=k&hl=en&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Fiddle River Restaurant Location"
          className="filter grayscale-[0.3] contrast-[1.1] brightness-[0.9] hover:grayscale-0 hover:brightness-100 transition-all duration-700"
        ></iframe>
      </div>

      {/* embabed location link */}
      <div className="absolute bottom-6 right-6 z-20">
        <a
          href="https://maps.google.com/?q=fiddle+river+restaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-jost text-[12px] uppercase tracking-[0.1em] text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-void transition-colors duration-300 bg-void/50 backdrop-blur-sm"
        >
          Open in Google Maps <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default ContactMapSection;
