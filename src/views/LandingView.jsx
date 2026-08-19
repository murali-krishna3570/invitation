import React from 'react';
import FallingPetals from '../components/FallingPetals';
import ScratchCard from '../components/ScratchCard';
import Countdown from '../components/Countdown';

import omImg from '../assets/om.png';
import elephantsImg from '../assets/elephants.webp';
import coupleStandingImg from '../assets/couple-standing.webp';
import dividerImg from '../assets/divider.png';
import templeImg from '../assets/temple.webp';

const MAPS_URL = "https://maps.app.goo.gl/c1S77XUwXfrWTjQC8";

export default function LandingView({ lang, onViewChange }) {
  const isTelugu = lang === 'te';

  return (
    <div className="relative min-h-screen bg-cream text-cocoa animate-invite-enter">
      {/* Falling Flower Petals Overlay */}
      <FallingPetals count={14} />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[390px] px-6 pb-0 pt-12">
        {/* Om Symbol */}
        <img
          src={omImg || "/assets/om.png"}
          alt="Om"
          className="mx-auto h-[62px] w-auto select-none"
        />

        {/* Quick View Tab Button */}
        {onViewChange && (
          <div className="mt-3 flex justify-center font-telugu">
            <button
              type="button"
              onClick={() => onViewChange('rituals')}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-[11.5px] font-semibold text-maroon shadow-2xs hover:bg-gold/25 transition-all cursor-pointer"
            >
              <span>🪔</span>
              <span>{isTelugu ? "పూజా క్రమం & ఆచారాలు చూడండి ➔" : "View Puja Process & Rituals ➔"}</span>
            </button>
          </div>
        )}

        {/* Blessings Subtitle */}
        <div className="mt-4 flex items-center justify-between gap-2 font-serif-italic italic text-[13px] leading-normal text-gold">
          <span className="whitespace-nowrap">Srirastu</span>
          <span className="whitespace-nowrap">Subhamastu</span>
          <span className="whitespace-nowrap">Avighnamastu</span>
        </div>

        <p className="mt-8 text-center text-[11px] font-light uppercase tracking-[0.2em] text-cocoa font-telugu">
          {isTelugu ? "పెద్దల ఆశీస్సులతో" : "With the blessings of our elders"}
        </p>

        {/* Header / Title */}
        <h2 className="mt-3 text-center font-display text-[22px] font-bold text-gold tracking-wide font-telugu">
          {isTelugu ? "వివాహ ఆహ్వాన పత్రిక" : "Wedding Invitation"}
        </h2>

        {/* Main Names */}
        <div className="mt-4 text-center">
          {isTelugu ? (
            <h1 className="font-telugu text-[36px] font-bold leading-[1.4] text-maroon">
              కుప్పాల సంధ్య
              <br />
              <span className="text-gold text-[28px]">&</span>
              <br />
              శింగులూరి సోమశేఖర్
            </h1>
          ) : (
            <h1 className="font-script text-[42px] leading-[1.4] text-maroon">
              Kuppala Sandhya
              <br />
              <span className="text-gold text-[30px]">&</span>
              <br />
              Singuluri Somasekhar
            </h1>
          )}
        </div>

        <p className="mt-8 text-center text-[11px] font-light uppercase leading-[2] tracking-[0.2em] text-cocoa font-telugu">
          {isTelugu ? "మా వివాహ వేడుకకు మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము" : "Inviting you to celebrate our wedding"}
        </p>

        {/* Elephants Graphic */}
        <img
          src={elephantsImg || "/assets/elephants.webp"}
          alt=""
          aria-hidden="true"
          className="mx-auto mt-6 w-[250px] select-none"
        />

        {/* Tagline Header */}
        <h2 className="mt-8 text-center font-display text-[24px] font-bold uppercase leading-[1.25] tracking-[0.01em] text-maroon font-telugu">
          {isTelugu ? "రెండు మనసులు · ఒక జీవిత పయనం" : "Two Hearts · One Beautiful Journey"}
        </h2>

        {/* User Provided Couple Portrait */}
        <div className="mt-6 flex justify-center">
          <div className="relative overflow-hidden rounded-3xl border-4 border-gold/40 shadow-xl max-w-[300px]">
            <img
              src={coupleStandingImg || "/assets/couple-standing.webp"}
              alt="Kuppala Sandhya and Singuluri Somasekhar"
              className="w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* SECTION 1: Bride's Parents & Bride */}
        <div className="mt-10 rounded-2xl border border-gold/30 bg-cream/80 p-6 text-center shadow-sm font-telugu">
          <p className="text-[11px] font-light uppercase tracking-[0.2em] text-cocoa">
            {isTelugu ? "వధువు" : "Our Bride"}
          </p>
          <p className="mt-2 text-[26px] font-bold text-maroon">
            {isTelugu ? "కుప్పాల సంధ్య" : "Kuppala Sandhya"}
          </p>
          <div className="mt-4 pt-3 border-t border-gold/20">
            <p className="text-[13px] font-medium leading-[1.8] text-cocoa">
              {isTelugu ? (
                <>
                  <span className="font-semibold text-maroon">కుప్పాల చిన్న మోహన రావు & కుప్పాల ఝాన్సీ లక్ష్మి</span> గారు తమ కుమార్తె <span className="font-semibold text-maroon">కుప్పాల సంధ్య</span> వివాహానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నారు.
                </>
              ) : (
                <>
                  <span className="font-semibold text-maroon">Kuppala Chinna Mohana Rao & Kuppala Jhansi Lakshmi</span> cordially invite you to the wedding of their daughter: <span className="font-semibold text-maroon">Kuppala Sandhya</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Ornamental Divider */}
        <img
          src={dividerImg || "/assets/divider.png"}
          alt=""
          aria-hidden="true"
          className="mx-auto my-7 w-[160px] select-none"
        />

        {/* SECTION 2: Groom's Parents & Groom */}
        <div className="rounded-2xl border border-gold/30 bg-cream/80 p-6 text-center shadow-sm font-telugu">
          <p className="text-[11px] font-light uppercase tracking-[0.2em] text-cocoa">
            {isTelugu ? "వరుడు" : "Our Groom"}
          </p>
          <p className="mt-2 text-[26px] font-bold text-maroon">
            {isTelugu ? "సోమశేఖర్ శింగులూరి" : "Somasekhar Singuluri"}
          </p>
          <div className="mt-4 pt-3 border-t border-gold/20">
            <p className="text-[13px] font-medium leading-[1.8] text-cocoa">
              {isTelugu ? (
                <>
                  <span className="font-semibold text-maroon">వేణు శింగులూరి & శ్రీనివాసు శింగులూరి</span> గారు తమ కుమారుడు <span className="font-semibold text-maroon">సోమశేఖర్ శింగులూరి</span> వివాహానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నారు.
                </>
              ) : (
                <>
                  <span className="font-semibold text-maroon">Venu Singuluri & Srinivasu Singuluri</span> cordially invite you to the wedding of their son: <span className="font-semibold text-maroon">Somasekhar Singuluri</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Sumuhurtham & Scratch Card */}
      <section className="relative mt-14 overflow-hidden">
        <img
          src={templeImg || "/assets/temple.webp"}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 w-[390px] max-w-none -translate-x-1/2 select-none opacity-[0.08]"
        />
        <div className="relative mx-auto w-full max-w-[390px] px-6 pb-16">
          <p className="py-2 text-center font-script text-[44px] leading-[1.3] text-maroon font-telugu">
            {isTelugu ? "సుముహూర్తం" : "Save the Date"}
          </p>

          <ScratchCard label={isTelugu ? "తేదీని చూడటానికి తాకండి లేదా రుద్దండి" : "Tap or scratch to reveal the date"}>
            <div className="mt-6 rounded-[15px] border border-gold/50 bg-cream px-5 py-7 text-center shadow-sm">
              <p className="text-[11px] font-light uppercase tracking-[0.18em] text-cocoa font-telugu">
                {isTelugu ? "సుముహూర్త సమయం" : "The auspicious day"}
              </p>
              <p className="mt-2 text-[20px] font-bold uppercase tracking-[0.04em] text-maroon font-telugu">
                {isTelugu ? "సుముహూర్తం" : "Sumuhurtham"}
              </p>
              <p className="mt-3 font-display font-bold leading-none text-maroon">
                <span className="text-[46px]">30</span>
                <span className="align-super text-[18px]">th</span>
              </p>
              <p className="mt-3 text-[18px] font-semibold text-maroon">
                August 2026, 11:29 PM
              </p>
              <div className="mt-4 pt-3 border-t border-gold/30 text-[13.5px] font-semibold text-maroon font-telugu">
                {isTelugu
                  ? "ముహూర్తం: ఆదివారం, 30 ఆగస్టు 2026, రాత్రి 11:29 గంటలకు.\n(శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల)"
                  : "Muhurtham: Sunday, 30th August 2026 at 11:29 PM.\n(Sri Padmalaya kalyana mandapam, Dwaraka Tirumala)"}
              </div>

              {/* Add to Google Calendar Button */}
              <div className="mt-5 flex justify-center">
                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(isTelugu ? "కుప్పాల సంధ్య & శింగులూరి సోమశేఖర్ వివాహం" : "Kuppala Sandhya & Singuluri Somasekhar Wedding")}&dates=20260830T175900Z/20260830T213000Z&details=${encodeURIComponent(isTelugu ? "సుముహూర్తం: ఆదివారం, 30 ఆగస్టు 2026, రాత్రి 11:29 గంటలకు. శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల." : "Sumuhurtham: Sunday, 30th August 2026 at 11:29 PM. Sri Padmalaya Kalyana Mandapam, Dwaraka Tirumala.")}&location=${encodeURIComponent("Sri Padmalaya kalyana mandapam, Dwaraka Tirumala")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-maroon/30 bg-maroon/10 px-5 py-2 text-[12px] font-semibold text-maroon shadow-2xs hover:bg-maroon/20 transition-transform active:scale-95 cursor-pointer font-telugu"
                >
                  <span>📅</span>
                  <span>{isTelugu ? "Google క్యాలెండర్‌లో జోడించండి" : "Add to Google Calendar"}</span>
                </a>
              </div>
            </div>
          </ScratchCard>
        </div>
      </section>

      {/* Dinner & Countdown Section */}
      <div className="mx-auto w-full max-w-[390px] px-6">
        <h2 className="text-center font-display text-[24px] font-bold uppercase text-maroon font-telugu">
          {isTelugu ? "విందు" : "Dinner"}
        </h2>
        <p className="mt-3 text-center text-[20px] font-semibold uppercase leading-[1.3] tracking-[0.01em] text-maroon font-telugu">
          30th August 2026
          <br />
          {isTelugu ? "ఆదివారం సాయంత్రం 7:30 గంటల నుండి" : "Sunday 7:30 PM Onwards"}
        </p>
        <p className="mt-2 text-center text-[13.5px] font-medium text-cocoa font-telugu">
          {isTelugu ? "శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల నందు" : "At Sri Padmalaya kalyana mandapam, Dwaraka Tirumala"}
        </p>



        {/* Divider */}
        <img
          src={dividerImg || "/assets/divider.png"}
          alt=""
          aria-hidden="true"
          className="mx-auto my-7 w-[160px] select-none"
        />

        {/* Live Countdown */}
        <h2 className="text-center font-display text-[24px] font-bold uppercase leading-[1.25] text-maroon font-telugu">
          {isTelugu ? "వివాహ శుభ ఘడియలు" : "The Countdown Begins"}
        </h2>
        <div className="mt-8">
          <Countdown target="2026-08-30T23:29:00+05:30" lang={lang} />
        </div>

        {/* SECTION 4: Venue */}
        <h2 className="mt-20 text-center font-display text-[26px] font-bold uppercase tracking-[0.02em] text-maroon font-telugu">
          {isTelugu ? "కల్యాణ వేదిక" : "The Venue"}
        </h2>
        <p className="mt-1 text-center text-[12px] font-light uppercase tracking-[0.18em] text-cocoa font-telugu">
          {isTelugu ? "వివాహ ప్రాంగణము" : "Where we celebrate"}
        </p>
      </div>

      {/* Venue Location & Directions */}
      <div className="mx-auto w-full max-w-[390px] px-6 pb-14 pt-6">
        <p className="text-center text-[20px] font-bold uppercase tracking-[0.02em] text-maroon font-telugu">
          {isTelugu ? "శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల" : "Sri Padmalaya kalyana mandapam, Dwaraka Tirumala"}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-maroon px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-md transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer inline-flex items-center gap-2 text-center font-telugu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {isTelugu ? "గూగుల్ మ్యాప్స్‌లో చూడండి" : "View on Google Maps"}
          </a>
        </div>

        {/* SECTION: Travel & Bus Transportation Info */}
        <div className="mt-8 rounded-2xl border border-gold/40 bg-cream/90 p-5 font-telugu shadow-sm">
          <h3 className="text-center font-display text-[18px] font-bold text-maroon uppercase tracking-wide flex items-center justify-center gap-2">
            <span>🚌</span>
            <span>{isTelugu ? "రవాణా సదుపాయాలు & బస్సు వివరాలు" : "Travel & Bus Transportation Info"}</span>
          </h3>

          <div className="mt-4 space-y-3 text-[13px] text-cocoa leading-[1.6]">
            {/* Bride Side Bus */}
            <div className="rounded-xl border border-gold/30 bg-gold/10 p-3.5">
              <p className="font-semibold text-maroon text-[14px]">
                {isTelugu ? "వధువు తరఫు రవాణా" : "Bride's Side Transportation"}
              </p>
              <p className="mt-1">
                {isTelugu
                  ? "వివాహ ప్రాంగణానికి విచ్చేసేందుకు 2 ప్రత్యేక బస్సులు ఏర్పాటు చేయబడ్డాయి."
                  : "2 Special buses have been arranged for guests to reach the venue."}
              </p>
            </div>

            {/* Groom Side Bus */}
            <div className="rounded-xl border border-gold/30 bg-gold/10 p-3.5">
              <p className="font-semibold text-maroon text-[14px]">
                {isTelugu ? "వరుడి తరఫు రవాణా" : "Groom's Side Transportation"}
              </p>
              <p className="mt-1">
                {isTelugu
                  ? "వివాహ ప్రాంగణానికి విచ్చేసేందుకు 1-2 ప్రత్యేక బస్సులు ఏర్పాటు చేయబడ్డాయి."
                  : "1-2 Special buses have been arranged for guests to reach the venue."}
              </p>
            </div>

            {/* Landmark & Directions Note */}
            <div className="pt-2 text-center text-[12px] font-medium text-cocoa">
              📍 {isTelugu ? "ల్యాండ్‌మార్క్: శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల" : "Landmark: Sri Padmalaya Kalyana Mandapam, Dwaraka Tirumala"}
            </div>
          </div>
        </div>

        {/* Wedding Rituals CTA Card */}
        {onViewChange && (
          <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-center shadow-sm font-telugu">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-maroon">
              🪔 {isTelugu ? "వివాహ వేడుక విశిష్టత" : "Wedding Traditions"}
            </p>
            <h3 className="mt-1.5 text-[17px] font-bold text-maroon">
              {isTelugu ? "వివాహ పూజా క్రమం & ఆచారాల ప్రాశస్త్యం" : "Wedding Puja Process, Rituals & Significance"}
            </h3>
            <p className="mt-2 text-[12.5px] leading-[1.6] text-cocoa">
              {isTelugu
                ? "గణపతి పూజ, గౌరీ పూజ, కన్యాదానం, జీలకర్ర బెల్లం, తాళి కట్టడం మరియు సప్తపది ఆచారాల విశిష్టతలను తెలుసుకోండి."
                : "Discover the deep meaning behind Ganesh Puja, Gowri Puja, Kanyadanam, Jeelakarra Bellam, Thali Tying & Saptapadi."}
            </p>
            <button
              type="button"
              onClick={() => onViewChange('rituals')}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-2.5 text-[12px] font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <span>{isTelugu ? "ఆచారాల విశిష్టత చూడండి" : "Explore Rituals"}</span>
              <span>➔</span>
            </button>
          </div>
        )}

        {/* SECTION: Points of Contact / సంప్రదించవలసిన నంబర్లు */}
        <div className="mt-10 rounded-2xl border border-gold/40 bg-cream/90 p-5 shadow-sm font-telugu">
          <h2 className="text-center font-display text-[20px] font-bold text-maroon uppercase tracking-wide">
            {isTelugu ? "సంప్రదించవలసిన నంబర్లు" : "Points of Contact"}
          </h2>
          <p className="mt-1 text-center text-[12px] font-light text-cocoa">
            {isTelugu ? "ఏమైనా వివరాల కోసం మరియు సహాయానికి సంప్రదించండి:" : "For any assistance or queries, please feel free to contact:"}
          </p>

          <div className="mt-5 space-y-3">
            {/* Contact 1: Durgarao */}
            <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-cream px-4 py-3 shadow-2xs">
              <div>
                <p className="text-[13.5px] font-semibold text-maroon">
                  {isTelugu ? "దుర్గారావు" : "Durgarao"}
                  <span className="text-[12px] font-normal text-cocoa block">
                    ({isTelugu ? "పెళ్లికొడుకు బావ" : "Groom's Brother-in-law"})
                  </span>
                </p>
                <p className="text-[12px] text-cocoa font-sans font-medium mt-0.5">9989673666</p>
              </div>
              <a
                href="tel:9989673666"
                className="inline-flex items-center gap-1 rounded-full bg-maroon px-3.5 py-1.5 text-[11px] font-medium text-primary-foreground shadow-xs hover:scale-105 active:scale-95 transition-transform"
              >
                📞 {isTelugu ? "కాల్ చేయండి" : "Call"}
              </a>
            </div>

            {/* Contact 2: Chandu */}
            <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-cream px-4 py-3 shadow-2xs">
              <div>
                <p className="text-[13.5px] font-semibold text-maroon">
                  {isTelugu ? "చందు" : "Chandu"}
                  <span className="text-[12px] font-normal text-cocoa block">
                    ({isTelugu ? "పెళ్లికొడుకు బావమరిది" : "Groom's Brother-in-law"})
                  </span>
                </p>
                <p className="text-[12px] text-cocoa font-sans font-medium mt-0.5">+91 82472 07123</p>
              </div>
              <a
                href="tel:+918247207123"
                className="inline-flex items-center gap-1 rounded-full bg-maroon px-3.5 py-1.5 text-[11px] font-medium text-primary-foreground shadow-xs hover:scale-105 active:scale-95 transition-transform"
              >
                📞 {isTelugu ? "కాల్ చేయండి" : "Call"}
              </a>
            </div>

            {/* Contact 3: Murali */}
            <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-cream px-4 py-3 shadow-2xs">
              <div>
                <p className="text-[13.5px] font-semibold text-maroon">
                  {isTelugu ? "మురళి" : "Murali"}
                  <span className="text-[12px] font-normal text-cocoa block">
                    ({isTelugu ? "పెళ్లికూతురు తమ్ముడు" : "Bride's Brother"})
                  </span>
                </p>
                <p className="text-[12px] text-cocoa font-sans font-medium mt-0.5">7386357042</p>
              </div>
              <a
                href="tel:7386357042"
                className="inline-flex items-center gap-1 rounded-full bg-maroon px-3.5 py-1.5 text-[11px] font-medium text-primary-foreground shadow-xs hover:scale-105 active:scale-95 transition-transform"
              >
                📞 {isTelugu ? "కాల్ చేయండి" : "Call"}
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Share Button */}
        <div className="mt-8 flex justify-center font-telugu">
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              isTelugu
                ? "🌸 శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు 🌸\n\nకుప్పాల సంధ్య & శింగులూరి సోమశేఖర్ ల వివాహ వేడుకకు మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము.\n\n📅 సుముహూర్తం: ఆదివారం, 30 ఆగస్టు 2026, రాత్రి 11:29 గంటలకు.\n📍 వేదిక: శ్రీ పద్మాలయా కల్యాణ మండపం, ద్వారకా తిరుమల\n\nవివాహ ఆహ్వాన పత్రిక చూడటానికి కింద ఉన్న లింక్ క్లిక్ చేయండి:\nhttps://murali-krishna3570.github.io/invitation/"
                : "🌸 Srirastu Subhamastu Avighnamastu 🌸\n\nYou are cordially invited to the wedding of Kuppala Sandhya & Singuluri Somasekhar.\n\n📅 Sumuhurtham: Sunday, 30th August 2026, 11:29 PM\n📍 Venue: Sri Padmalaya Kalyana Mandapam, Dwaraka Tirumala\n\nView Invitation Details:\nhttps://murali-krishna3570.github.io/invitation/"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-[340px] rounded-full bg-[#25D366] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-md transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center justify-center gap-2 text-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.296-1.127z"/>
            </svg>
            <span>{isTelugu ? "వాట్సాప్‌లో ఆహ్వానం షేర్ చేయండి" : "Share Invitation on WhatsApp"}</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-maroon px-6 py-14 text-center text-primary-foreground font-telugu mt-12">
        <div className="mx-auto w-full max-w-[390px]">
          <p className="text-[11px] font-light uppercase tracking-[0.18em] opacity-80">
            {isTelugu ? "మీ రాకయే మాకు ఆనందం" : "Your presence is our greatest gift"}
          </p>
          <p className="mt-4 text-[19px] font-semibold uppercase leading-[1.3]">
            {isTelugu ? "మిమ్మల్ని ఆహ్వానించుటలో ఆనందిస్తున్నాము" : "We look forward to celebrating with you"}
          </p>
          <p className="mt-8 text-[11px] font-light uppercase tracking-[0.18em] opacity-80">
            {isTelugu ? "ఆహ్వానించువారు:" : "With warm regards"}
          </p>
          <div className="mt-4 text-[18px] leading-[1.8] font-semibold">
            <p>{isTelugu ? "కుప్పాల చిన్న మోహన రావు & కుప్పాల ఝాన్సీ లక్ష్మి" : "Kuppala Chinna Mohana Rao & Kuppala Jhansi Lakshmi"}</p>
            <p>{isTelugu ? "వేణు శింగులూరి & శ్రీనివాసు శింగులూరి" : "Venu Singuluri & Srinivasu Singuluri"}</p>
          </div>
          <p className="mt-8 text-[11px] font-light uppercase tracking-[0.18em] opacity-80">
            {isTelugu ? "బంధుమిత్రుల శుభాకాంక్షలతో" : "Best wishes from near & dear"}
          </p>
        </div>
      </footer>
    </div>
  );
}
