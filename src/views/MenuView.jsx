import React from 'react';
import FallingPetals from '../components/FallingPetals';
import omImg from '../assets/om.png';
import dividerImg from '../assets/divider.png';

const MENU_CATEGORIES = [
  {
    categoryTe: "తీపి పిండివంటలు & స్టార్టర్స్",
    categoryEn: "Sweets & Starters",
    icon: "🥟",
    items: [
      { nameTe: "జిలేబీ", nameEn: "Jalebi", descTe: "వేడి వేడి నోరూరించే స్వీట్ జిలేబీ", descEn: "Hot & Crispy Sweet Jalebi" },
      { nameTe: "ఆగ్రా పాన్", nameEn: "Agra Paan", descTe: "ఆగ్రా స్పెషల్ స్వీట్ పాన్", descEn: "Special Agra Sweet Paan" },
      { nameTe: "మసాలా వడ", nameEn: "Masala Vada", descTe: "కరకరలాడే క్రిస్పీ మసాలా వడ", descEn: "Crispy South Indian Masala Vada" },
      { nameTe: "కార్న్ సమోసా", nameEn: "Corn Samosa with Sauce", descTe: "రుచికరమైన కార్న్ సమోసా సాస్‌తో", descEn: "Delicious Corn Samosa served with Sauce" }
    ]
  },
  {
    categoryTe: "రాచరిక బిర్యానీ & స్పెషల్ డిష్",
    categoryEn: "Royal Biryani & Special Dishes",
    icon: "🍲",
    items: [
      { nameTe: "పనసకాయ బిర్యానీ", nameEn: "Panasakaya Biryani", descTe: "సుగంధ ద్రవ్యాల గుమగుమల పనసకాయ బిర్యానీ", descEn: "Aromatic & Flavorful Raw Jackfruit Biryani" },
      { nameTe: "పనీర్ కుర్మా", nameEn: "Paneer Kurma", descTe: "రిచ్ అండ్ క్రీమీ పనీర్ కుర్మా గ్రేవీ", descEn: "Rich & Creamy Paneer Kurma" },
      { nameTe: "పెరుగు చట్నీ", nameEn: "Perugu Chutney", descTe: "కమ్మటి పెరుగు చట్నీ", descEn: "Cooling Seasoned Yogurt Raita" }
    ]
  },
  {
    categoryTe: "తెలుగు సాంప్రదాయ కూరలు & పచ్చళ్ళు",
    categoryEn: "Traditional Curries, Fries & Chutneys",
    icon: "🍆",
    items: [
      { nameTe: "గుత్తి వంకాయ కూర", nameEn: "Gutti Vankaya Curry", descTe: "ఆంధ్ర స్పెషల్ మసాలా గుత్తి వంకాయ", descEn: "Classic Andhra Stuffed Eggplant Curry" },
      { nameTe: "మామిడికాయ పప్పు", nameEn: "Mango Pappu", descTe: "కమ్మటి మామిడికాయ పప్పు", descEn: "Traditional Tangy Mango Dal" },
      { nameTe: "కంద ఫ్రై", nameEn: "Kanda Fry", descTe: "క్రిస్పీ కంద వేపుడు", descEn: "Crispy Yam Fry" },
      { nameTe: "దొండకాయ ఫ్రై", nameEn: "Dondakaya Fry", descTe: "దొండకాయ వేపుడు", descEn: "Seasoned Tindora Fry" },
      { nameTe: "కాబేజీ పచ్చడి", nameEn: "Cabbage Chutney", descTe: "ఇంట్లో చేసిన రోటి కాబేజీ పచ్చడి", descEn: "Traditional Homemade Cabbage Chutney" }
    ]
  },
  {
    categoryTe: "సాంబార్, ఉలవచారు & రసం",
    categoryEn: "Sambar, Ulavacharu & Accompaniments",
    icon: "🥣",
    items: [
      { nameTe: "సాంబార్", nameEn: "Sambar", descTe: "గుమగుమలాడే పప్పు సాంబార్", descEn: "Aromatic Traditional South Indian Sambar" },
      { nameTe: "ఉలవచారు", nameEn: "Ulavacharu with Cream", descTe: "రాయల్ ఉలవచారు ఫ్రెష్ క్రీమ్‌తో", descEn: "Iconic Ulavacharu topped with Fresh Cream" },
      { nameTe: "కమ్మని రసం", nameEn: "Rasam", descTe: "వేడి వేడి ఘాటైన రసం", descEn: "Flavorful Traditional Rasam" },
      { nameTe: "వడియాలు & చిప్స్", nameEn: "Vadiyalu & Chips", descTe: "కరకరలాడే వడియాలు మరియు చిప్స్", descEn: "Crispy Vadiyalu & Potato Chips" },
      { nameTe: "కమ్మని పెరుగు", nameEn: "Fresh Curd", descTe: "చిక్కటి కమ్మని పెరుగు", descEn: "Thick Fresh Curd" }
    ]
  },
  {
    categoryTe: "డెసర్ట్స్ & తాంబూలం",
    categoryEn: "Desserts & Refreshments",
    icon: "🍨",
    items: [
      { nameTe: "ఐస్ క్రీమ్", nameEn: "Ice Cream", descTe: "చల్లని చల్లని ఐస్ క్రీమ్", descEn: "Delightful Chilled Ice Cream" },
      { nameTe: "కిల్లీ / తాంబూలం", nameEn: "Killi / Tambulam", descTe: "సుగంధ కిళ్లీ & సంప్రదాయ తాంబూలం", descEn: "Traditional Killi & Tambulam" }
    ]
  }
];

export default function MenuView({ lang }) {
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
            {isTelugu ? "కళ్యాణ వివాహ విందు" : "Grand Wedding Feast"}
          </p>
          <h1 className="mt-2 font-display text-[26px] font-bold text-maroon tracking-wide">
            {isTelugu ? "విందు వంటకాల జాబితా" : "Wedding Menu & Feast Items"}
          </h1>
          <p className="mt-2 text-[13px] font-medium leading-[1.6] text-cocoa max-w-[340px] mx-auto">
            {isTelugu
              ? "మా వివాహ శుభసందర్భంగా మీ కోసం ప్రత్యేకంగా సిద్ధం చేసిన రుచికరమైన విందు వంటకాలు:"
              : "Here is the delicious menu prepared specially for our wedding guests:"}
          </p>
        </div>

        {/* Divider */}
        <img
          src={dividerImg || "/assets/divider.png"}
          alt=""
          aria-hidden="true"
          className="mx-auto my-6 w-[150px] select-none"
        />

        {/* Menu Categories */}
        <div className="space-y-6">
          {MENU_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gold/40 bg-cream/90 p-5 shadow-sm transition-all hover:shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-gold/25 pb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[20px] border border-gold/30">
                  {cat.icon}
                </span>
                <h2 className="font-display text-[18px] font-bold text-maroon leading-tight">
                  {isTelugu ? cat.categoryTe : cat.categoryEn}
                </h2>
              </div>

              {/* Items List */}
              <div className="mt-4 space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="rounded-xl border border-gold/20 bg-cream px-3.5 py-2.5 shadow-2xs"
                  >
                    <p className="text-[14px] font-bold text-maroon">
                      {isTelugu ? item.nameTe : item.nameEn}
                    </p>
                    <p className="text-[11.5px] text-cocoa mt-0.5">
                      {isTelugu ? item.descTe : item.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Closing Note */}
        <div className="mt-10 text-center text-[13px] font-medium text-gold font-serif-italic italic">
          <p>“అతిథి దేవో భవ”</p>
          <p className="mt-1 text-[12px] text-cocoa font-sans font-normal">
            {isTelugu
              ? "వివాహ విందును ఆరగించి వధూవరులను మనసారా ఆశీర్వదించండి."
              : "Please join us for the grand feast and bless the couple."}
          </p>
        </div>
      </div>
    </div>
  );
}
