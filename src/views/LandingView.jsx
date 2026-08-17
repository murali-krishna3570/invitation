import React from 'react';
import FallingPetals from '../components/FallingPetals';
import ScratchCard from '../components/ScratchCard';
import Countdown from '../components/Countdown';

import omImg from '../assets/om.png';
import elephantsImg from '../assets/elephants.webp';
import coupleStandingImg from '../assets/couple-standing.webp';
import dividerImg from '../assets/divider.png';
import templeImg from '../assets/temple.webp';
import venueImg from '../assets/venue.webp';

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
            {isTelugu ? "వధువు (Bride)" : "Our Bride"}
          </p>
          <p className="mt-2 text-[26px] font-bold text-maroon">
            Kuppala Sandhya
            <br />
            <span className="text-[22px] font-semibold text-maroon">(కుప్పాల సంధ్య)</span>
          </p>
          <div className="mt-4 pt-3 border-t border-gold/20">
            <p className="text-[13px] font-medium leading-[1.8] text-cocoa">
              {isTelugu ? (
                <>
                  <span className="font-semibold text-maroon">కుప్పాల చిన్న మోహన రావు & కుప్పాల ఝాన్సీ లక్ష్మి</span> గారు తమ కుమార్తె <span className="font-semibold text-maroon">కుప్పాల సంధ్య</span> వివాహానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నారు.
                </>
              ) : (
                <>
                  <span className="font-semibold text-maroon">Kuppala Chinna Mohana Rao & Kuppala Jhansi Lakshmi</span> cordially invite you to the wedding of their daughter: <span className="font-semibold text-maroon">Kuppala Sandhya (కుప్పాల సంధ్య)</span>
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
            {isTelugu ? "వరుడు (Groom)" : "Our Groom"}
          </p>
          <p className="mt-2 text-[26px] font-bold text-maroon">
            Singuluri Somasekhar
            <br />
            <span className="text-[22px] font-semibold text-maroon">(శింగులూరి సోమశేఖర్)</span>
          </p>
          <div className="mt-4 pt-3 border-t border-gold/20">
            <p className="text-[13px] font-medium leading-[1.8] text-cocoa">
              {isTelugu ? (
                <>
                  <span className="font-semibold text-maroon">శింగులూరి వీరవేణి</span> గారు తన కుమారుడు <span className="font-semibold text-maroon">శింగులూరి సోమశేఖర్</span> వివాహానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నారు.
                </>
              ) : (
                <>
                  <span className="font-semibold text-maroon">Singuluri Veeraveni</span> cordially invites you to the wedding of her son: <span className="font-semibold text-maroon">Singuluri Somasekhar (శింగులూరి సోమశేఖర్)</span>
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

          <ScratchCard label={isTelugu ? "తేదీని చూడటానికి రుద్దండి (Scratch)" : "Scratch to reveal the date"}>
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
              <div className="mt-4 pt-3 border-t border-gold/30 text-[14px] font-semibold text-maroon font-telugu">
                ముహూర్తం: ఆదివారం, 30 ఆగస్టు 2026, రాత్రి 11:29 గంటలకు.
              </div>
            </div>
          </ScratchCard>
        </div>
      </section>

      {/* Dinner & Countdown Section */}
      <div className="mx-auto w-full max-w-[390px] px-6">
        <h2 className="text-center font-display text-[24px] font-bold uppercase text-maroon font-telugu">
          {isTelugu ? "విందు (Dinner)" : "Dinner"}
        </h2>
        <p className="mt-3 text-center text-[20px] font-semibold uppercase leading-[1.3] tracking-[0.01em] text-maroon font-telugu">
          30th August 2026
          <br />
          {isTelugu ? "ఆదివారం సాయంత్రం 7:30 గంటల నుండి" : "Sunday 7:30 PM Onwards"}
        </p>
        <p className="mt-2 text-center text-[13px] font-light text-cocoa font-telugu">
          {isTelugu ? "కల్యాణ మంటపము నందు" : "At the Marriage Venue"}
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
          {isTelugu ? "కల్యాణ వేదిక (Venue)" : "The Venue"}
        </h2>
        <p className="mt-1 text-center text-[12px] font-light uppercase tracking-[0.18em] text-cocoa font-telugu">
          {isTelugu ? "వివాహ ప్రాంగణము" : "Where we celebrate"}
        </p>
      </div>

      {/* User Provided Venue Photo */}
      <div className="mt-5 px-6 max-w-[500px] mx-auto">
        <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-lg">
          <img
            src={venueImg || "/assets/venue.webp"}
            alt="Sri Padmalaya kalyana mandapam"
            className="w-full select-none object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Venue Location & Directions */}
      <div className="mx-auto w-full max-w-[390px] px-6 pb-14 pt-6">
        <p className="text-center text-[20px] font-bold uppercase tracking-[0.02em] text-maroon">
          Sri Padmalaya kalyana mandapam
        </p>
        <p className="mt-1 text-center font-telugu text-[18px] font-semibold text-cocoa">
          (శ్రీ పద్మాలయా కల్యాణ మండపం)
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
            {isTelugu ? "గూగుల్ మ్యాప్స్‌లో చూడండి (View on Google Maps)" : "View on Google Maps"}
          </a>
        </div>

        {/* Wedding Rituals CTA Card */}
        {onViewChange && (
          <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-center shadow-sm font-telugu">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-maroon">
              🪔 {isTelugu ? "వివాహ వేడుక విశిష్టత" : "Wedding Traditions"}
            </p>
            <h3 className="mt-1.5 text-[17px] font-bold text-maroon">
              {isTelugu ? "వివాహ ఆచారాలు & ప్రాశస్త్యం" : "Wedding Rituals & Significance"}
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
      </div>

      {/* Footer */}
      <footer className="bg-maroon px-6 py-14 text-center text-primary-foreground font-telugu">
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
            <p>కుప్పాల చిన్న మోహన రావు & ఝాన్సీ లక్ష్మి</p>
            <p>శింగులూరి వీరవేణి</p>
          </div>
          <p className="mt-8 text-[11px] font-light uppercase tracking-[0.18em] opacity-80">
            {isTelugu ? "బంధుమిత్రుల శుభాకాంక్షలతో" : "Best wishes from near & dear"}
          </p>
        </div>
      </footer>
    </div>
  );
}
