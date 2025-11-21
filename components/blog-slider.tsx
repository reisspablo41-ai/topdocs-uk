"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "dvla-uk-driving-licence-renewal-2025",
    title: "DVLA: UK Driving Licence Renewal in 2025",
    excerpt: "How to renew your UK driving licence, online steps, timing, and photo rules for photocard renewals.",
    content: "Renew online via GOV.UK if your photocard is expiring within 3 months. Ensure your photo meets HM Passport Office standards. Fees apply and your licence should arrive within a week after validation. For name or address changes, update records before renewal.",
    image: "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg",
    date: "October 16, 2025",
    author: "Top Docs UK",
  },
  {
    id: 2,
    slug: "uk-passport-application-tracking",
    title: "UK Passport: Application and Tracking Tips",
    excerpt: "HM Passport Office guidance: documents, photo standards, processing times, and how to track your application.",
    content: "Prepare proof of citizenship and identity, and check photo requirements (background, lighting, expression). After submission, use the online tracking service for updates. Typical processing times vary by season; plan travel only after receiving the new passport.",
    image: "https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg",
    date: "October 15, 2025",
    author: "Top Docs UK",
  },
  {
    id: 3,
    slug: "provisional-licence-uk-steps",
    title: "Provisional Licence UK: Steps to Get Started",
    excerpt: "Eligibility, identity checks, online application, and next steps with theory and practical tests in the UK.",
    content: "You can apply from age 15 years and 9 months for certain vehicles. Verify identity online and pay the application fee. Book the theory test, then driving lessons, followed by the practical test. Always display L plates and drive with a qualified supervisor.",
    image: "https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg",
    date: "October 14, 2025",
    author: "Top Docs UK",
  },
  {
    id: 4,
    slug: "dbs-checks-and-id-verification-uk",
    title: "DBS Checks and ID Verification in the UK",
    excerpt: "Overview of basic and enhanced DBS checks, acceptable IDs, and employer responsibilities.",
    content: "Employers request DBS checks for roles requiring safeguarding. Provide acceptable IDs (passport, photocard licence, or approved documents) for verification. Enhanced checks include barred lists where appropriate. Keep records secure and up to date.",
    image: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg",
    date: "October 13, 2025",
    author: "Top Docs UK",
  },
  {
    id: 5,
    slug: "brp-residence-permit-uk-renewals",
    title: "BRP (UK Residence Permit): Renewals and Replacements",
    excerpt: "When to renew your BRP, reporting lost or stolen cards, and updating details with the Home Office.",
    content: "Renew before expiry to maintain status. Report lost or stolen BRPs immediately and apply for a replacement. Keep personal details updated with the Home Office and check timelines for decisions. Carry your BRP where necessary for right-to-work checks.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    date: "October 12, 2025",
    author: "Top Docs UK",
  },
  {
    id: 6,
    slug: "real-id-vs-uk-photo-id",
    title: "UK Photo ID vs Real ID: What Applies in the UK",
    excerpt: "Understand UK photocard licences and passports compared to US Real ID standards; what matters in the UK context.",
    content: "UK does not use the US Real ID framework. Acceptable UK photo ID includes photocard driving licences and passports. For domestic travel, airlines typically require a valid photo ID. For government services, follow the identity requirements set by the service.",
    image: "https://travelplaces.co.uk/wp-content/uploads/2024/04/pexels-ethan-wilkinson-5428705.webp",
    date: "October 11, 2025",
    author: "Top Docs UK",
  },
  {
    id: 7,
    slug: "buy-uk-license-facts",
    title: "Buy UK License: Facts, Legal Routes, and Alternatives",
    excerpt: "Understand why you cannot legally buy a UK driving licence and what to do instead.",
    content: "You cannot buy a UK driving licence. Apply or renew through DVLA using official identity checks and tests. If you search for 'buy UK license', focus on legitimate steps: theory test, practical test, and photocard issuance. Avoid any service claiming to sell licences—these are unlawful and unsafe.",
    image: "https://images.pexels.com/photos/532002/pexels-photo-532002.jpeg",
    date: "October 10, 2025",
    author: "Top Docs UK",
  },
  {
    id: 8,
    slug: "buy-uk-license-plate",
    title: "Buy UK License Plate: Ordering Legal UK Number Plates",
    excerpt: "How to buy UK number plates legally, standards, and fitting rules.",
    content: "To buy UK licence plates (number plates), use a registered supplier. Bring proof of identity and vehicle entitlement. Plates must follow BS AU 145e standards and have proper spacing and regional identifiers. Keep your V5C updated when transferring plates.",
    image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
    date: "October 9, 2025",
    author: "Top Docs UK",
  },
  {
    id: 9,
    slug: "buy-uk-license-online",
    title: "Buy UK License Online? Apply and Renew Legitimately",
    excerpt: "What 'buy uk license online' really means—official DVLA applications and renewals.",
    content: "'Buy UK license online' is misleading. Use DVLA online services to apply, renew, or replace a photocard after eligibility and identity checks. Fees are paid to DVLA; no third party can sell you a valid licence. Follow photo standards and keep addresses current.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    date: "October 8, 2025",
    author: "Top Docs UK",
  },
  {
    id: 10,
    slug: "buy-tv-licence-uk",
    title: "Buy TV Licence UK: Where and How to Pay",
    excerpt: "Official routes to buy and manage your UK TV Licence payments.",
    content: "Buy a UK TV Licence through the official TV Licensing website or authorised outlets. Choose annual or monthly plans, keep your address details updated, and understand concessions for eligible groups. Failing to hold a licence when required can lead to penalties.",
    image: "https://images.pexels.com/photos/5721945/pexels-photo-5721945.jpeg",
    date: "October 7, 2025",
    author: "Top Docs UK",
  },
  {
    id: 11,
    slug: "buy-car-with-provisional-uk",
    title: "Can I Buy a Car with a Provisional Licence in the UK?",
    excerpt: "Yes, you can buy a car with a provisional, but there are restrictions.",
    content: "You can purchase a car with a UK provisional licence, but you must meet insurance conditions and driving restrictions. Drive only with a qualified supervisor, display L plates, and avoid motorways unless permitted with an approved instructor. Check insurance policies carefully before buying.",
    image: "https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg",
    date: "October 6, 2025",
    author: "Top Docs UK",
  },
  {
    id: 12,
    slug: "buy-car-uk-indian-licence",
    title: "Can I Buy a Car in the UK with an Indian Licence?",
    excerpt: "Buying is allowed; insurance and driving rules depend on your status.",
    content: "You can buy a car in the UK with an Indian driving licence. To drive, check if your licence is valid for temporary use and confirm insurance eligibility. Long‑term residents typically need a UK licence within set timeframes. Always verify DVLA guidance and insurer policy terms.",
    image: "https://images.pexels.com/photos/5582673/pexels-photo-5582673.jpeg",
    date: "October 5, 2025",
    author: "Top Docs UK",
  },
  {
    id: 13,
    slug: "buy-car-uk-international-licence",
    title: "Buy a Car in the UK with an International Licence",
    excerpt: "You can purchase; ensure insurance and DVLA rules are met.",
    content: "Buying a car does not require a UK licence. To drive it, insurers must accept your international licence, and DVLA rules apply for the duration you can drive on a foreign licence. Plan the transition to a UK licence if you become resident.",
    image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    date: "October 4, 2025",
    author: "Top Docs UK",
  },
  {
    id: 14,
    slug: "buy-uk-passport-legal-route",
    title: "Buy UK Passport? Legal Application Routes Only",
    excerpt: "Passports cannot be bought; apply via HM Passport Office.",
    content: "You cannot buy a UK passport. Apply legally through HM Passport Office with proof of identity and citizenship, compliant photos, and fees. Any service selling passports is unlawful. Use official online or paper routes and track your application securely.",
    image: "https://images.pexels.com/photos/107458/pexels-photo-107458.jpeg",
    date: "October 3, 2025",
    author: "Top Docs UK",
  },
  {
    id: 15,
    slug: "can-you-buy-uk-passport",
    title: "Can You Buy a UK Passport? No—Apply Officially",
    excerpt: "Why buying is illegal and how to apply correctly.",
    content: "Buying a UK passport is illegal. Instead, prepare an application with correct evidence, photos, and fees. Use official portals to apply, renew, or replace a passport and avoid any third party claims to sell valid passports.",
    image: "https://images.pexels.com/photos/1040162/pexels-photo-1040162.jpeg",
    date: "October 2, 2025",
    author: "Top Docs UK",
  },
  {
    id: 16,
    slug: "uk-passport-fees-overview",
    title: "How Much Does a UK Passport Cost? Fees Overview",
    excerpt: "Fees vary by type and method—check current HM Passport Office rates.",
    content: "Fees for UK passports depend on the type (adult, child, renewal), delivery options, and whether you apply online or via paper. Check current rates on HM Passport Office before applying and plan timing around busy seasons.",
    image: "https://images.pexels.com/photos/4386407/pexels-photo-4386407.jpeg",
    date: "October 1, 2025",
    author: "Top Docs UK",
  },
  {
    id: 17,
    slug: "buy-uk-passport-online-myths",
    title: "Buy UK Passport Online? Use Official Services Only",
    excerpt: "Online applications are official; no one sells valid passports.",
    content: "Use official online services to apply, renew, or replace a UK passport. No legitimate service sells passports online. Prepare documents, meet photo standards, pay fees, and track status via authorised channels.",
    image: "https://images.pexels.com/photos/816313/pexels-photo-816313.jpeg",
    date: "September 30, 2025",
    author: "Top Docs UK",
  },
  {
    id: 18,
    slug: "uk-passport-template-warning",
    title: "Buy UK Passport Template? Risks and Legal Issues",
    excerpt: "Templates and replicas are unlawful; understand security features.",
    content: "UK passports include advanced security features and cannot be lawfully replicated. Avoid templates or replicas—these are illegal and unsafe. If you need identification, follow official processes for acceptable photo ID or passports.",
    image: "https://images.pexels.com/photos/125187/pexels-photo-125187.jpeg",
    date: "September 29, 2025",
    author: "Top Docs UK",
  },
  {
    id: 19,
    slug: "passport-covers-accessories-uk",
    title: "Buy UK Passport Cover: Accessories and Travel Tips",
    excerpt: "Where to buy passport covers and how to protect documents.",
    content: "Passport covers are fine to buy from reputable retailers. Choose designs that don’t interfere with security checks and keep your passport dry and readable. Store securely during travel.",
    image: "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg",
    date: "September 28, 2025",
    author: "Top Docs UK",
  },
  {
    id: 20,
    slug: "buy-new-passport-uk-process",
    title: "Buy New Passport UK? Apply for a New Passport",
    excerpt: "How to apply for a first or replacement UK passport.",
    content: "Apply for a new UK passport through official channels with proof of identity, citizenship, and compliant photos. Track progress online and plan travel only after the new passport arrives.",
    image: "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg",
    date: "September 27, 2025",
    author: "Top Docs UK",
  },
  {
    id: 21,
    slug: "need-uk-licence-to-buy-car",
    title: "Do I Need a UK Licence to Buy a Car?",
    excerpt: "No—in the UK you can buy without a licence; driving and insurance differ.",
    content: "You don’t need a UK licence to buy a car. To drive it, you must meet insurance requirements and licensing rules. If you’re a resident, you may need to switch to a UK licence within time limits. Verify DVLA guidance and insurer terms before purchase.",
    image: "https://images.pexels.com/photos/261064/pexels-photo-261064.jpeg",
    date: "September 26, 2025",
    author: "Top Docs UK",
  },
  {
    id: 22,
    slug: "passport-needed-to-buy-euros-uk",
    title: "Do I Need a Passport to Buy Euros in the UK?",
    excerpt: "Most bureaus require photo ID for AML checks; passport or photocard works.",
    content: "To buy euros in the UK, many bureaus de change require photo ID due to anti‑money laundering rules. A UK passport or photocard driving licence typically suffices. Bank customers may exchange with account verification. Check local requirements before visiting.",
    image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg",
    date: "September 25, 2025",
    author: "Top Docs UK",
  },
  {
    id: 23,
    slug: "buy-a-uk-passport-apply",
    title: "Buy a UK Passport: Apply Officially via HM Passport Office",
    excerpt: "Passports aren’t for sale—submit a proper application with documents and fees.",
    content: "You cannot buy a UK passport. Apply through HM Passport Office with proof of identity and citizenship, compliant photos, and payment of the correct fee. Use the official website for new, renewal, or replacement applications and track your status online.",
    image: "https://images.pexels.com/photos/346796/pexels-photo-346796.jpeg",
    date: "September 24, 2025",
    author: "Top Docs UK",
  },
  {
    id: 24,
    slug: "uk-passport-and-citizenship",
    title: "Does Having a UK Passport Make You a British Citizen?",
    excerpt: "Most UK passports indicate British nationality, with specific categories.",
    content: "A UK passport generally evidences British nationality, but categories exist (e.g., British Citizen, British Overseas Territories Citizen, British National (Overseas)). Eligibility depends on law and personal status. Check your passport type and nationality rules if unsure.",
    image: "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg",
    date: "September 23, 2025",
    author: "Top Docs UK",
  },
  {
    id: 25,
    slug: "passport-fees-how-much-uk",
    title: "How Much Is It to Buy a Passport UK? Fees Guide",
    excerpt: "See current HM Passport Office fees for adult and child applications.",
    content: "UK passport fees vary by application type and method (online/paper). Check HM Passport Office for the latest amounts before applying. Plan for delivery times and travel only after your passport arrives.",
    image: "https://images.pexels.com/photos/269633/pexels-photo-269633.jpeg",
    date: "September 22, 2025",
    author: "Top Docs UK",
  },
  {
    id: 26,
    slug: "apply-for-driving-licence-uk",
    title: "Apply for Driving Licence UK: Steps and Eligibility",
    excerpt: "How to apply for a UK driving licence via DVLA.",
    content: "Apply for a UK driving licence with DVLA by meeting age and residency rules, submitting identity evidence, and passing the theory and practical tests. Use official online services for applications and replacements—avoid any site claiming to sell licences.",
    image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
    date: "September 21, 2025",
    author: "Top Docs UK",
  },
  {
    id: 27,
    slug: "provisional-licence-uk-basics",
    title: "Provisional Licence UK: Eligibility, Apply, and Rules",
    excerpt: "Who can get a provisional licence and how to use it.",
    content: "Apply for a provisional licence UK to begin learning. Meet age requirements, provide identity documents, and follow rules: L plates, supervised driving, and insurance coverage. Book the UK driving theory test and practical test when ready.",
    image: "https://images.pexels.com/photos/2459315/pexels-photo-2459315.jpeg",
    date: "September 20, 2025",
    author: "Top Docs UK",
  },
  {
    id: 28,
    slug: "provisional-licence-online",
    title: "Provisional Licence Online: DVLA Application Guide",
    excerpt: "Apply provisional licence online and track progress.",
    content: "Use DVLA online services to apply for a provisional driving licence. Prepare identity evidence, pay fees, and keep address details up to date. If lost, request a provisional licence replacement online and verify timelines.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    date: "September 19, 2025",
    author: "Top Docs UK",
  },
  {
    id: 29,
    slug: "replacement-driving-licence-uk",
    title: "Replacement Driving Licence UK: Lost or Damaged",
    excerpt: "Order a replacement driving licence online via DVLA.",
    content: "If you have a lost driving licence UK or stolen driving licence, request a replacement driving licence online. Confirm your identity, pay the fee, and watch for the new photocard. For stolen licences, report to authorities as advised.",
    image: "https://images.pexels.com/photos/97076/pexels-photo-97076.jpeg",
    date: "September 18, 2025",
    author: "Top Docs UK",
  },
  {
    id: 30,
    slug: "dvla-driving-licence-application",
    title: "DVLA Driving Licence: Application and Replacement",
    excerpt: "DVLA licence application, renewal, and replacement overview.",
    content: "Use DVLA licence application services to apply, renew, or replace a UK driving licence. Keep your photo and address current, and check eligibility for online vs paper routes. Avoid any 'order drivers license online' claims—use DVLA only.",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    date: "September 17, 2025",
    author: "Top Docs UK",
  },
  {
    id: 31,
    slug: "uk-driving-theory-test",
    title: "UK Driving Theory Test: Prepare and Book",
    excerpt: "What’s in the theory test and how to study.",
    content: "The UK driving licence theory test covers multiple choice and hazard perception. Book online, study the Highway Code, and practice mock tests. After passing, book the UK driving test and continue lessons with driving schools as needed.",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg",
    date: "September 16, 2025",
    author: "Top Docs UK",
  },
  {
    id: 32,
    slug: "uk-driving-test-overview",
    title: "UK Driving Test: What to Expect on the Day",
    excerpt: "Driving test UK structure, manoeuvres, and common tips.",
    content: "The driving test includes an eyesight check, vehicle safety, general driving, and manoeuvres. Practice with approved instructors, review the test routes, and arrive early. If unsuccessful, rebook after sufficient practice and review.",
    image: "https://images.pexels.com/photos/97078/pexels-photo-97078.jpeg",
    date: "September 15, 2025",
    author: "Top Docs UK",
  },
  {
    id: 33,
    slug: "drivers-licence-renewal-uk",
    title: "Drivers Licence Renewal UK: When and How",
    excerpt: "Renew your photocard before it expires to stay compliant.",
    content: "Drivers licence renewal UK is required periodically. Renew online or by post, update your photo, and confirm address details. For medical conditions, follow DVLA guidance before renewing. Plan ahead to avoid driving without a valid photocard.",
    image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg",
    date: "September 14, 2025",
    author: "Top Docs UK",
  },
  {
    id: 34,
    slug: "uk-provisional-for-foreigners",
    title: "UK Provisional Driving Licence for Foreigners",
    excerpt: "Who needs a provisional licence and when foreign licences apply.",
    content: "Foreign visitors may drive on valid international or domestic licences for limited periods. Residents typically need a UK licence; start with a UK provisional driving licence for foreigners if transitioning. Check DVLA rules for your country and status.",
    image: "https://images.pexels.com/photos/2445631/pexels-photo-2445631.jpeg",
    date: "September 13, 2025",
    author: "Top Docs UK",
  },
  {
    id: 35,
    slug: "get-your-licence-online",
    title: "Get Your Licence Online: DVLA Services",
    excerpt: "Apply, renew, or replace online; avoid unofficial sellers.",
    content: "Get my drivers license online is possible only via DVLA. Use official portals for applications, renewals, and replacements. Phrases like 'buy drivers license online' signal scams—use lawful routes and keep your records current.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    date: "September 12, 2025",
    author: "Top Docs UK",
  },
  {
    id: 36,
    slug: "driving-schools-and-exam-prep",
    title: "Driving Schools and Exam Prep in the UK",
    excerpt: "Choosing instructors and preparing for licence tests.",
    content: "Select approved driving schools, plan lessons, and track progress towards the licence test. Practice hazard perception and common manoeuvres. After passing, update insurance and keep your photocard up to date.",
    image: "https://images.pexels.com/photos/3931294/pexels-photo-3931294.jpeg",
    date: "September 11, 2025",
    author: "Top Docs UK",
  },
];

export function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalSlides = Math.ceil(blogPosts.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisiblePosts = () => {
    const start = currentIndex * visibleCount;
    return blogPosts.slice(start, start + visibleCount);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {getVisiblePosts().map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={560}
                      height={420}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-2">
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {post.content}
                    </p>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full border border-zinc-300 hover:bg-teal-50 hover:border-teal-600 transition-colors"
          aria-label="Previous posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-teal-600 w-8"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-zinc-300 hover:bg-teal-50 hover:border-teal-600 transition-colors"
          aria-label="Next posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

