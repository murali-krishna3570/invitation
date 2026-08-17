import React from 'react';
import FallingPetals from '../components/FallingPetals';
import omImg from '../assets/om.png';
import dividerImg from '../assets/divider.png';

const MAIN_RITUALS = [
  {
    id: 1,
    icon: "🐘",
    titleTe: "1. గణపతి పూజ / గణేశ పూజ",
    titleEn: "1. Ganapati / Ganesh Puja",
    basisTe: "వేద మూలం: ప్రాచీన వేదాలలో కాకుండా పౌరాణిక / స్మార్త సాంప్రదాయం ద్వారా సార్వత్రికమైన పవిత్ర ఆచారం.",
    basisEn: "Scriptural Basis: Later Smārta / Puranic practice that became universal across Hindu tradition.",
    whatTe: "ప్రధాన వివాహ వేడుకలు ప్రారంభమయ్యే ముందు మండపంలో వరుడు గణపతి పూజ చేస్తాడు. శ్రీ విఘ్నేశ్వరుడిని పువ్వులు, కొబ్బరికాయ, మోదకాలు, గరిక మరియు మంత్రోచ్ఛారణలతో పూజిస్తారు.",
    whatEn: "The groom performs this puja at the mandapam before the main ceremonies begin. Lord Ganesha is worshipped as Vighnahartā with flowers, coconut, modak, durva grass and mantras.",
    whyTe: "విఘ్నాలు తొలగించే విఘ్నేశ్వరుని అనుగ్రహంతో ఈ వివాహ శోభాయమాన కార్యం ఎటువంటి ఆటంకాలు లేకుండా పరిపూర్ణంగా జరగడం కోసం గణపతి ఆవాహనతో క్రతువు ప్రారంభమవుతుంది.",
    whyEn: "Lord Ganesha is worshipped as Vighnahartā (remover of obstacles). Almost every auspicious karma in Hindu tradition begins with Ganesha invocation so that no obstacle arises during marriage."
  },
  {
    id: 2,
    icon: "🪔",
    titleTe: "2. గౌరీ పూజ",
    titleEn: "2. Gauri Puja (Gowri Puja)",
    basisTe: "వేద మూలం: పౌరాణిక మరియు ప్రయోగ గ్రంథాల (వివాహ పద్ధతి గ్రంథాలు) ద్వారా వచ్చిన ప్రధాన ఆచారం.",
    basisEn: "Scriptural Basis: Mainly Puranic and later prayoga texts (marriage manuals).",
    whatTe: "వధువు పసుపు, కుంకుమ, పువ్వులు, పండ్లతో శ్రీ గౌరీ దేవి (పార్వతి దేవి) ని భక్తిశ్రద్ధలతో పూజిస్తుంది. ఈ సమయంలో తండ్రి గోత్రం నుండి భర్త గోత్రంలోకి మారే 'ప్రవర' కూడా పఠిస్తారు.",
    whatEn: "The bride performs this puja with turmeric, kumkum, flowers and fruits. During this time, the Pravara (announcement of change of gotra from father’s to husband’s) is also recited.",
    whyTe: "గౌరీ దేవి పతివ్రతా ధర్మానికి, సాఫల్య దాంపత్యానికి నిత్య సౌభాగ్య ప్రదాత. వధువు తన జీవితాంతం సుమంగళీగా అలరారాలని శ్రీ పార్వతీ దేవి ఆశీస్సులు కోరుతుంది.",
    whyEn: "Goddess Gauri (Pārvatī) is worshipped for saubhāgya (long and happy married life). The bride seeks the blessings of the ideal wife so that she may remain a sumangali throughout her life."
  },
  {
    id: 3,
    icon: "✨",
    titleTe: "3. మధుపర్కం",
    titleEn: "3. Madhuparkam",
    basisTe: "వేద మూలం: ప్రాచీన గృహ్య సూత్రాలలో (ఆపస్తంబ, బౌధాయన, మానవ సూత్రాలు) స్పష్టంగా విహితమైన వేద క్రతువు.",
    basisEn: "Scriptural Basis: Explicitly prescribed in classical Grihya Sutras (Āpastamba, Baudhāyana, Mānava, etc.).",
    whatTe: "వధూవరులకు నూతన పవిత్ర వస్త్రాలు (శ్వేత వస్త్రాలు/పట్టు వస్త్రాలు) ధరింపజేస్తారు. తేనె, పెరుగు, నెయ్యి, చక్కెరలతో కలిపిన తీపి మిశ్రమాన్ని (మధుపర్కం) వారికి నైవేద్యంగా అందిస్తారు.",
    whatEn: "The groom is received with a mixture of honey, curd, ghee and sugar (madhuparka) and given new ritual clothes (usually white or special silk).",
    whyTe: "వరుడిని శ్రేష్ఠుడైన మహానీయుడిగా సత్కరించే ప్రాచీన సంప్రదాయం. జీవితం తీపి మరియు ఇతర అనుభవాలతో కూడుకున్నదనే సత్యాన్ని స్మరిస్తూ దంపతులు గృహస్థాశ్రమంలోకి అడుగుపెడతారు.",
    whyEn: "An ancient honour given to a distinguished guest. The sweetness symbolises the hope for a sweet married life, while other ingredients remind that life encompasses varied experiences."
  },
  {
    id: 4,
    icon: "🤝",
    titleTe: "4. కన్యాదానం",
    titleEn: "4. Kanyadanam",
    basisTe: "వేద మూలం: గృహ్య సూత్రాలు మరియు మనుస్మృతి ద్వారా అత్యంత ప్రాముఖ్యత పొందిన మహాదానం.",
    basisEn: "Scriptural Basis: Strongly supported by Grihya Sutras and Manusmṛti as one of the highest forms of dāna.",
    whatTe: "వధువు తండ్రి/తల్లిదండ్రులు తమ కుమార్తె చేతిని వరుని చేతిలో ఉంచి ధర్మబద్ధంగా కన్యాదానం చేస్తారు. “ధర్మేచ, అర్థేచ, కామేచ నాతిచరితవ్యా” అని వరునిచే పవిత్ర ప్రమాణం చేయిస్తారు.",
    whatEn: "The father places his daughter’s hand in the groom’s hand and formally gives her away with the sacred condition: “Dharme ca arthe ca kāme ca nāticaritavyā” (You shall not forsake her in dharma, artha or kāma).",
    whyTe: "హిందూ సాంప్రదాయంలో కన్యాదానం సమస్త దానాలలోకెల్లా మహోన్నతమైనది. వరుడిని శ్రీమహావిష్ణు స్వరూపంగా భావించి, కుమార్తె భవిష్యత్తు మరియు సంక్షేమ బాధ్యతలను సగౌరవంగా అప్పగిస్తారు.",
    whyEn: "Considered one of the highest forms of dāna. The parents entrust their daughter’s future and well-being to the groom, treating him as a form of Lord Vishnu."
  },
  {
    id: 5,
    icon: "🌿",
    titleTe: "5. జీలకర్ర బెల్లం",
    titleEn: "5. Jeelakarra Bellam",
    basisTe: "సాంప్రదాయ మూలం: ప్రత్యేకమైన విశిష్ట తెలుగు ప్రాంతీయ వివాహ సంప్రదాయం.",
    basisEn: "Scriptural Basis: Regional Telugu custom (not found in classical Sanskrit Grihya Sutras).",
    whatTe: "నిర్ణీత సుముహూర్త సమయానికి, వధూవరులు ఒకరి తలపై మరొకరు జీలకర్ర (చేదు) మరియు బెల్లం (తీపి) మిశ్రమాన్ని ఏకకాలంలో ఉంచుతారు. ఆ తదనంతరం మధ్యలోని తెరసీల తొలగిస్తారు.",
    whatEn: "At the exact muhūrtam time, the bride and groom place a paste made of cumin seeds (jeelakarra – bitter) and jaggery (bellam – sweet) on each other’s heads simultaneously before removing the curtain.",
    whyTe: "తెలుగు కుటుంబాలలో ఈ సుముహూర్త ఘట్టమే అసలైన వివాహ క్షణంగా పరిగణించబడుతుంది. జీవితంలో ఎదురయ్యే తీపి-చేదు అనుభవాలలో దంపతులు జీలకర్ర-బెల్లంలా విడదీయరాని ఐక్యతతో ఉండాలని దీని భావం.",
    whyEn: "Regarded in Telugu tradition as the actual instant of marriage. Cumin (bitter) and jaggery (sweet) symbolise that the couple will remain united through all bitter and sweet experiences of life."
  },
  {
    id: 6,
    icon: "💍",
    titleTe: "6. మంగళ్య ధారణం / తాళి కట్టడం",
    titleEn: "6. Mangalya Dharanam (Thali Tying)",
    basisTe: "సాంప్రదాయ మూలం: మధ్యయుగ ఆధ్యాత్మిక గ్రంథాలలో (సౌందర్య లహరి వంటి గ్రంథాలు) వికసించిన పవిత్ర ఆచారం.",
    basisEn: "Scriptural Basis: Developed in later medieval traditions and works such as Soundarya Lahari.",
    whatTe: "వేద పండితుల మంత్రోచ్ఛారణల మధ్య, వరుడు వధువు మెడలో మూడు ముళ్ళు వేసి పవిత్ర మాంగళ్య సూత్రాన్ని (తాళి) కడతాడు.",
    whatEn: "The groom ties the mangalsutra (thaali) around the bride’s neck with three knots while the priest chants the sacred mangalya mantra.",
    whyTe: "మూడు ముళ్ళు మనస్సు (మనస్), వాక్కు (వచన), కర్మ (కర్మ) ల త్రివిధ ఏకత్వానికి నిదర్శనం. మాంగళ్యం భార్యకు రక్షణ మరియు భర్త జీవితకాల కట్టుబాటుకు పవిత్ర సంకేతం.",
    whyEn: "The three knots represent the union of mind (manas), speech (vachana) and action (karma). The thaali is a protective and auspicious symbol of marriage and lifelong responsibility."
  },
  {
    id: 7,
    icon: "🌾",
    titleTe: "7. తలంబ్రాలు / అక్షింతలు",
    titleEn: "7. Talambralu / Akshintalu",
    basisTe: "వేద/సాంప్రదాయ మూలం: గృహ్య విధానాలలో అక్షతలతో ఆశీర్వదించే పద్ధతికి అనుగుణంగా విస్తరించిన తెలుగు వేడుక.",
    basisEn: "Scriptural Basis: Parallels in Grihya rituals (blessing with unbroken rice), elaborated in Telugu culture.",
    whatTe: "వధూవరులు పసుపు కలిపిన అక్షతలను (తలంబ్రాలను) ఒకరి తలపై మరొకరు ఆనందోత్సాహాలతో సుముహూర్తంగా కురిపించుకుంటారు.",
    whatEn: "The couple joyfully shower each other with rice mixed with turmeric (akṣata) and sometimes pearls or flowers.",
    whyTe: "దంపతులు ఒకరినొకరు మనస్ఫూర్తిగా స్వీకరిస్తూ సకల ఐశ్వర్యాలు, సంపదలు, సంతాన ప్రాప్తి మరియు సుఖసంతోషాలు పొందాలని ఆకాంక్షించే ఆనందకర వేడుక.",
    whyEn: "Expresses prosperity, fertility, mutual joy and complete acceptance of each other as life partners."
  },
  {
    id: 8,
    icon: "🔥",
    titleTe: "8. సప్తపది",
    titleEn: "8. Saptapadi",
    basisTe: "వేద మూలం: ప్రాచీన గృహ్య సూత్రాలు, మనుస్మృతి మరియు హిందూ వివాహ చట్టంలో విహితమైన అత్యంత ప్రధాన వేద క్రతువు.",
    basisEn: "Scriptural Basis: One of the most important classical rituals prescribed in Grihya Sutras and Manusmṛti.",
    whatTe: "వధూవరులు పవిత్రాగ్ని (హోమం) చుట్టూ ఏడు అడుగులు వేస్తూ ఏడు పవిత్ర జీవన ప్రమాణాలు (ఆహారం, బలం, ధనం, సుఖం, సంతానం, ఆరోగ్యం, శాశ్వత మైత్రి/సఖ్యం) స్వీకరిస్తారు.",
    whatEn: "The couple takes seven steps together around the sacred fire (homam), making seven sacred vows for food, strength, prosperity, happiness, children, health and lifelong friendship (sakhyam).",
    whyTe: "శాస్త్రాల మరియు చట్టం ప్రకారం ఏడవ అడుగు పూర్తయినప్పుడే వివాహ బంధం పరిపూర్ణమై చట్టబద్ధమవుతుంది. ఈ ఏడు అడుగులు దంపతుల శాశ్వత మైత్రికి మరియు వివాహ జీవన పునాదికి నిదర్శనం.",
    whyEn: "According to scriptures and the Hindu Marriage Act, the marriage becomes complete and legally binding with the seventh step. The seven steps form the foundation of married life."
  }
];

const SUPPORTING_RITUALS = [
  {
    icon: "✋",
    titleTe: "పాణిగ్రహణం (Panigrahanam)",
    titleEn: "Panigrahanam",
    basisTe: "వేద మూలం: దాదాపు అన్ని గృహ్య సూత్రాలలో లభించే ప్రాచీన వేద క్రతువు.",
    basisEn: "Scriptural Basis: Classical Vedic ritual found in almost all Grihya Sutras.",
    descTe: "వరుడు వధువు చేతిని పట్టుకోవడం — దేవతల ఆశీస్సులతో వధువును తన గృహస్థ జీవిత భాగస్వామిగా (అర్ధాంగిగా) స్వీకరించి సర్వ బాధ్యతలు స్వీకరించడానికి పవిత్ర నిదర్శనం.",
    descEn: "The groom holds the bride’s hand as a formal act of acceptance. Mantras declare that the gods have entrusted her to him for householder life."
  },
  {
    icon: "🔥",
    titleTe: "హోమం / అగ్ని పూజ (Homam / Agni Puja)",
    titleEn: "Homam / Agni Puja",
    basisTe: "వేద మూలం: వివాహ ప్రక్రియ మొత్తానికి పవిత్ర కేంద్ర బిందువు.",
    basisEn: "Scriptural Basis: Central to the entire Vedic marriage ceremony.",
    descTe: "పవిత్రాగ్నిని వెలిగించి వేద మంత్రాలతో ఆహుతులు అర్పిస్తారు — దంపతులు చేసిన ప్రతి పవిత్ర ప్రమాణానికి అగ్నిదేవుడే ప్రత్యక్ష సాక్షి (సాక్షి).",
    descEn: "Sacred fire is lit and offerings are made. Agni (fire) is the divine eternal witness (sākṣī) to all marriage vows and promises."
  },
  {
    icon: "🍲",
    titleTe: "స్థాలీపాకం (Sthalipakam)",
    titleEn: "Sthalipakam",
    basisTe: "వేద మూలం: గృహ్య సూత్రాలను అనుసరించే ప్రయోగ గ్రంథాలలో పేర్కొనబడిన ఆహార క్రతువు.",
    basisEn: "Scriptural Basis: Domestic fire ritual following Grihya principles.",
    descTe: "అగ్నిదేవునికి నైవేద్యం తయారుచేసి అర్పించే క్రతువు — దంపతులు గృహస్థులుగా కలసి నిర్వహించే మొదటి ఉమ్మడి ధర్మం.",
    descEn: "A domestic fire ritual involving cooking and offering food — representing the couple’s first joint duty as householders preparing and sharing food."
  },
  {
    icon: "⭐",
    titleTe: "అరుంధతీ దర్శనం (Arundhati Darshanam)",
    titleEn: "Arundhati Darshanam",
    basisTe: "వేద మూలం: అనేక గృహ్య సూత్రాలలో (ధ్రువ-అరుంధతీ దర్శన) విహితమైన ఆచారం.",
    basisEn: "Scriptural Basis: Prescribed in several classical Grihya Sutras.",
    descTe: "దంపతులకు ఆకాశంలో అరుంధతీ నక్షత్రాన్ని చూపుతారు — పతివ్రతా ధర్మానికి, నిరంతర తోడునీడకు మరియు శాశ్వత విశ్వసనీయతకు అరుంధతీ దేవిని ఆదర్శంగా స్మరిస్తారు.",
    descEn: "The couple is shown the star Arundhati as the ideal of a devoted and constant wife, reminding them of lifelong loyalty and togetherness."
  }
];

export default function RitualsView({ lang }) {
  const isTelugu = lang === 'te';

  return (
    <div className="relative min-h-screen bg-cream text-cocoa animate-invite-enter font-telugu">
      {/* Falling Flower Petals Overlay */}
      <FallingPetals count={12} />

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[420px] px-5 pb-28 pt-10">
        {/* Om Symbol */}
        <img
          src={omImg || "/assets/om.png"}
          alt="Om"
          className="mx-auto h-[58px] w-auto select-none"
        />

        {/* Header Title */}
        <div className="mt-4 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.2em] text-cocoa">
            {isTelugu ? "తెలుగు వివాహ సంప్రదాయం & వేద మూలాలు" : "Telugu Wedding Traditions & Scriptural Basis"}
          </p>
          <h1 className="mt-2 font-display text-[25px] font-bold text-maroon tracking-wide">
            {isTelugu ? "వివాహ ఆచారాలు & ప్రాశస్త్యం" : "Wedding Rituals & Significance"}
          </h1>
          <p className="mt-2 text-[13px] font-medium leading-[1.6] text-cocoa max-w-[350px] mx-auto">
            {isTelugu
              ? "హిందూ కళ్యాణ మహోత్సవంలోని ప్రతి పవిత్ర క్రతువు వెనుక ఉన్న వేద మూలాలు, విశిష్టత మరియు ప్రాశస్త్యం:"
              : "Explore the scriptural basis, deep cultural meaning and sacred significance behind each ritual:"}
          </p>
        </div>

        {/* Divider */}
        <img
          src={dividerImg || "/assets/divider.png"}
          alt=""
          aria-hidden="true"
          className="mx-auto my-6 w-[150px] select-none"
        />

        {/* Section 1: Main 8 Rituals */}
        <div className="space-y-6">
          {MAIN_RITUALS.map((ritual) => (
            <div
              key={ritual.id}
              className="rounded-2xl border border-gold/40 bg-cream/90 p-5 shadow-sm transition-all hover:shadow-md hover:border-gold/60"
            >
              {/* Card Title & Icon */}
              <div className="flex items-center gap-3 border-b border-gold/25 pb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-[20px] border border-gold/30">
                  {ritual.icon}
                </span>
                <h2 className="font-display text-[18px] font-bold text-maroon leading-tight">
                  {isTelugu ? ritual.titleTe : ritual.titleEn}
                </h2>
              </div>

              {/* Scriptural Basis Badge */}
              <div className="mt-3.5 rounded-lg bg-maroon/5 px-3 py-2 border border-maroon/15 text-[12px] font-medium text-maroon leading-snug">
                <span className="font-bold uppercase tracking-[0.05em]">📜 </span>
                {isTelugu ? ritual.basisTe : ritual.basisEn}
              </div>

              {/* What Happens Section */}
              <div className="mt-4">
                <div className="inline-block rounded-md bg-gold/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-maroon">
                  {isTelugu ? "ఆచారం / వివరణ (What Happens)" : "What Happens"}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-cocoa">
                  {isTelugu ? ritual.whatTe : ritual.whatEn}
                </p>
              </div>

              {/* Why We Do It Section */}
              <div className="mt-4 rounded-xl bg-gold/10 p-3.5 border-l-4 border-gold">
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-maroon">
                  {isTelugu ? "ప్రాశస్త్యం & విశిష్టత (Why We Do It)" : "Why We Do It"}
                </div>
                <p className="mt-1.5 text-[13px] italic leading-[1.65] text-cocoa font-serif-italic">
                  "{isTelugu ? ritual.whyTe : ritual.whyEn}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <img
          src={dividerImg || "/assets/divider.png"}
          alt=""
          aria-hidden="true"
          className="mx-auto my-8 w-[160px] select-none"
        />

        {/* Section 2: Supporting Rituals */}
        <div className="rounded-2xl border border-gold/40 bg-maroon/5 p-5 shadow-sm">
          <h2 className="text-center font-display text-[20px] font-bold text-maroon tracking-wide">
            {isTelugu ? "అనుబంధ క్రతువులు (Supporting Rituals)" : "Supporting Rituals"}
          </h2>
          <p className="mt-1 text-center text-[12px] text-cocoa">
            {isTelugu
              ? "వివాహ వేడుకలో భాగంగా జరిగే ఇతర పవిత్ర ఆచారాలు:"
              : "Other sacred rituals performed during the ceremony:"}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4.5">
            {SUPPORTING_RITUALS.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gold/30 bg-cream p-4 shadow-2xs flex gap-3.5 items-start"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[18px] mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-[15px] text-maroon">
                    {isTelugu ? item.titleTe : item.titleEn}
                  </h3>
                  <div className="mt-1 text-[11.5px] font-medium text-maroon/90 bg-maroon/5 px-2 py-0.5 rounded inline-block">
                    📜 {isTelugu ? item.basisTe : item.basisEn}
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.6] text-cocoa">
                    {isTelugu ? item.descTe : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Closing Blessings */}
        <div className="mt-10 text-center text-[13px] font-medium text-gold font-serif-italic italic">
          <p>“సమస్త లోకా సుఖినో భవన్తు”</p>
          <p className="mt-1 text-[12px] text-cocoa font-sans font-normal">
            {isTelugu
              ? "మా వివాహ వేడుకకు విచ్చేసి వధూవరులను ఆశీర్వదించగలరని మనవి."
              : "We cordially invite you to grace the occasion and bless the couple."}
          </p>
        </div>
      </div>
    </div>
  );
}
