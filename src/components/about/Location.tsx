import { Phone, MapPin, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section className="bg-obsidian py-24 lg:py-[120px] px-8 lg:px-[80px]">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* actual map embed */}
        <div className="relative w-full h-[500px] border border-mist overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.515687!2d-118.0811!3d52.8764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5383d44a20ce7b85%3A0x7f7e8b9c8a8b8c8d!2sFiddle%20River%20Restaurant!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fiddle River Restaurant Location"
            className="filter grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        {/* right content */}
        <div>
          <h2 className="font-cormorant text-[clamp(32px,4vw,48px)] text-ivory font-light mb-4">
            Visit Us
          </h2>
          
          <h3 className="font-jost text-[16px] text-gold mb-6">
            Special Requests?
          </h3>
          
          <p className="font-dmSans font-light text-[15px] text-smoke/90 leading-relaxed mb-10">
            Do you have dietary concerns? Questions about an upcoming take-out? Drop us a line, and we'll get back to you soon!
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4 group cursor-default">
              <MapPin className="w-5 h-5 text-gold stroke-[1.5] mt-1 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1" />
              <div>
                <h4 className="font-jost text-[10px] text-gold tracking-widest uppercase mb-2">
                  Address
                </h4>
                <address className="font-dmSans font-light text-[15px] text-smoke/90 not-italic leading-relaxed">
                  Fiddle River Restaurant<br />
                  620 Connaught Dr, Jasper National Park<br />
                  Alberta, Canada
                </address>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group cursor-default">
              <Phone className="w-5 h-5 text-gold stroke-[1.5] flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1" />
              <a href="tel:+17808523032" className="font-dmSans font-light text-[15px] text-smoke/90 hover:text-gold transition-colors">
                780-852-3032
              </a>
            </div>
            
            <div className="flex items-start gap-4 group cursor-default">
              <Clock className="w-5 h-5 text-gold stroke-[1.5] mt-1 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1" />
              <div>
                <h4 className="font-jost text-[10px] text-gold tracking-widest uppercase mb-2">
                  Hours
                </h4>
                <p className="font-dmSans font-light text-[15px] text-smoke/90">
                  Open today<br />
                  11:30 a.m. – 09:30 p.m.
                </p>
              </div>
            </div>
          </div>

          <a href="https://www.google.com/maps/place/620+Connaught+Dr,+Jasper,+AB"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-jost text-[11px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-8 py-4 hover:border-gold hover:bg-gold/5 transition-colors duration-500 group"
          >
            Open in Google Maps
            <span className="ml-2 relative group-hover:translate-x-1 transition-transform duration-500">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
