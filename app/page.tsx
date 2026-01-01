'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { CircularProgress } from '@/components/ui/circular-progress';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { BlogSlider } from '@/components/blog-slider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  return (
    <main className="space-y-20">
      <motion.section
        className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="relative z-20 mx-auto max-w-6xl w-full px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            UK Document Guidance & Support
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Clear, practical help for UK passports, driving licences, photo ID cards,
            and residence permits—with straightforward steps and reliable timelines.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/#services">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/#contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          id="services"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Passports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Understand eligibility, evidence, and timing so your UK passport
                    application is complete and ready first time.
                  </p>
                  <Link href="/#services" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Driver&apos;s Licenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Navigate theory, practical tests, renewals and photocard rules
                    for UK driving licences with confidence.
                  </p>
                  <Link href="/#services" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>ID Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Prepare acceptable proofs, meet photo standards, and handle
                    replacements for UK photo ID cards.
                  </p>
                  <Link href="/#services" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Residence Permits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Understand visa categories, evidence, renewals and BRP rules
                    to keep UK residency in good standing.
                  </p>
                  <Link href="/#services" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Learn more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Production & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Get realistic timings and step-by-step checklists tailored to
                    UK processes. We keep you informed so nothing slows you down.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Document checklists tailored to your location</li>
                    <li>Submission calendars aligned to official processing</li>
                    <li>Milestone tracking and reminders</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Security & Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We prioritise privacy and clarity. Your details are used only
                    to provide the guidance you request.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Minimal data collection</li>
                    <li>Confidential communication channels</li>
                    <li>Privacy-conscious packaging and delivery updates</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Service Section */}
        <motion.section
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900">
              What We Do
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
              Need help with UK documents?
            </h3>
            <p className="text-lg text-zinc-800">
              Since 1995, we&apos;ve offered practical, UK-focused guidance to help
              you prepare clean, complete and compliant submissions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">Passport & travel documents</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">Driving licences & photo ID</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <p className="text-zinc-800 font-medium">Residence permits & BRP</p>
              </div>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed">
              We focus on UK requirements and terminology. Expect practical steps
              and pointers to official resources.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
              alt="Person holding a passport"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Mission Section with Teal Background */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="w-full bg-teal-600 text-white py-12 md:py-16 lg:py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center max-w-4xl mx-auto leading-tight mb-8"
          >
            Our mission: clear UK guidance, every step
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {/* Statistics Section with Counter Animation */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <CircularProgress
                value={315}
                max={1000}
                suffix="+"
                label="Completed Cases"
                size={120}
              />
              <CircularProgress
                value={966}
                max={1000}
                suffix="+"
                label="Satisfied Customers"
                size={120}
              />
              <CircularProgress
                value={868}
                max={1000}
                suffix="+"
                label="Expert Consultants"
                size={120}
              />
            </div>
            <div className="pt-4">
              <p className="text-xl md:text-2xl font-semibold text-zinc-900 mb-4">
                We&apos;re trusted by more than 10,000 clients
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Building experience and giving high success rates is our
                commitment. Our track record speaks for itself—we deliver
                results that exceed expectations and build long-term trust with
                our clients.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://travelplaces.co.uk/wp-content/uploads/2024/04/pexels-ethan-wilkinson-5428705.webp"
              alt="Professional document services"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Book Consultation Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="w-full bg-teal-600 text-white py-12 md:py-16 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Helpful UK document guidance, on demand
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center md:justify-end"
            >
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
                >
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Why Choose Us
          </motion.h2>
          <ul className="mt-4 space-y-2 text-zinc-900">
            <li>UK-centric, plain-English guidance.</li>
            <li>Compliance-minded checklists and reviews.</li>
            <li>Privacy-first handling of your details.</li>
            <li>Responsive support when you need it.</li>
          </ul>
          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We focus on clarity and completeness. From forms to
                    supporting evidence, our guidance helps you avoid delays and
                    maintain quality throughout the process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Global Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Requirements vary widely. We provide general guidance and
                    highlight jurisdiction-specific considerations so you can
                    prepare confidently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Share Your Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Share your goal and UK jurisdiction. We outline next steps and
                  required evidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Prepare & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Collect documents using our checklist. We review for clarity and
                  compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Submit & Track</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Submit to the correct UK authority and track timelines with simple
                  status guidance.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Get fast, practical answers and pointers to official UK
                  resources to keep your progress moving.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklist assistance and document review</li>
                  <li>Timeline guidance and expectations</li>
                  <li>Issue escalation and next steps</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We offer simple status guidance and tips for securely managing
                  official correspondence.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Status notifications</li>
                  <li>Secure receipt best practices</li>
                  <li>Follow-up actions and renewals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="rounded-xl border border-zinc-200 p-8 text-center">
            <h2 className="text-2xl font-semibold">Ready to get started?</h2>
            <p className="mt-2 text-zinc-800">
              Pick a document type or reach out to our team for quick guidance.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/#services">
                <Button>Start Now</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline">Talk to us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl"
        >
          {/* Left Section - Blue/Teal Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-teal-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We&apos;re trusted by more than 10,000 clients
            </h2>
            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://travelplaces.co.uk/wp-content/uploads/2024/04/pexels-ethan-wilkinson-5428705.webp"
                alt="Person putting a passport on bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right Section - White Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <p className="text-sm text-zinc-600 uppercase tracking-wide mb-2">
              Built for clarity and trust
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
              Why choose Top Docs UK
            </h2>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              A focused, one-page resource for UK documents with practical steps
              and clear expectations.
            </p>

            <div className="space-y-6">
              {/* Global Partnership */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Global Partnership
                  </h3>
                  <p className="text-zinc-700">
                    We align guidance with UK authority requirements and official
                    terminology.
                  </p>
                </div>
              </div>

              {/* Committed to Quality */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Committed to Quality
                  </h3>
                  <p className="text-zinc-700">
                    We emphasise thorough preparation and clear, consistent advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg"
                alt="Brown leather duffel bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">Detailed Overview</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Passports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  See UK passport basics: eligibility, supporting evidence, photo
                  rules, fees and typical timelines.
                </p>
                <p className="mt-3">
                  Learn about appointments and tracking so you can plan and
                  submit with confidence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Driver’s Licenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Understand learner permits, theory and practical tests, and
                  licence renewals, plus identity and residency checks.
                </p>
                <p className="mt-3">
                  Get typical timings and tracking tips for DVLA and local
                  authority services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ID Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Prepare a clean application for UK photo ID. Check acceptable
                  identity proofs, photos, fees and replacements.
                </p>
                <p className="mt-3">
                  Get practical tips for online portals and in-person centres.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Residence Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Review UK categories (temporary, permanent, study, work). Use
                  our checklists to keep your status in good standing.
                </p>
                <p className="mt-3">
                  See renewals, status changes and review periods to plan ahead.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Security Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your privacy matters. We minimise data collection and use secure
                  channels for communication.
                </p>
                <p className="mt-3">
                  Store documents securely, handle personal details carefully, and
                  keep official correspondence organised.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support & Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We&apos;re available to help interpret requirements, prepare
                  submissions, and outline next steps.
                </p>
                <p className="mt-3">
                  From quick clarifications to thorough reviews, communication is
                  straightforward and responsive.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 rounded-xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">Compliance Notice</h3>
            <p className="mt-2 text-zinc-800">
              Information here assists lawful applications submitted to UK
              authorities. Always verify current requirements with the issuing office.
            </p>
            <p className="mt-2 text-zinc-800">
              We don&apos;t submit applications on your behalf; we provide guidance to
              help you prepare and track your own submissions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p className="mt-2 text-zinc-600 mb-8">
            What customers say about clarity, timing and support.
          </p>
          <TestimonialsSlider />
        </section>

        {/* News & Articles Section */}
        <motion.section
          id="news"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-8"
          >
            News & Articles
          </motion.h2>
          <p className="text-center text-sm text-zinc-600 mb-6">
            Popular topics: buy UK license • buy UK license plate • buy UK license online • buy TV licence UK • can I buy a car with a provisional licence UK • can I buy a car in UK with Indian licence • buy a car in UK with international licence • buy UK passport online • buy UK passport cover • do I need a UK licence to buy a car • do I need a passport to buy euros in UK • does having a UK passport make you a British citizen • how much is it to buy a passport UK • how much does it cost to buy a UK passport
          </p>
          <p className="text-center text-sm text-zinc-600 mb-6">
            Driving licence topics: apply for driving licence UK • provisional licence UK • replacement driving licence UK • DVLA driving licence • UK driving theory test • UK driving test • drivers licence renewal UK • provisional licence online
          </p>
          <BlogSlider />
        </motion.section>

        {/* Order Now Section */}
        <motion.section
          id="order"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">Order Now</motion.h2>
          <p className="mt-2 text-zinc-600">
            Choose your service and send us your request. You can also email us directly at
            <a href="mailto:contact@topdocs.uk" className="text-teal-600 font-medium ml-1">contact@topdocs.uk</a>.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Request Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setOrderSubmitted(false);
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      body: JSON.stringify(orderForm),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
                    if (res.ok) {
                      setOrderSubmitted(true);
                      setOrderForm({ name: '', email: '', service: '', message: '' });
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="order-name">Full Name</Label>
                      <Input
                        id="order-name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={orderForm.name}
                        onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="order-email">Email Address</Label>
                      <Input
                        id="order-email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="order-service">Service Needed</Label>
                      <select
                        id="order-service"
                        required
                        value={orderForm.service}
                        onChange={(e) => setOrderForm({ ...orderForm, service: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="passport">Passport</option>
                        <option value="drivers-license">Driver&apos;s License</option>
                        <option value="id-card">ID Card</option>
                        <option value="residence-permit">Residence Permit</option>
                        <option value="work-permit">Work Permit</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="order-message">Message</Label>
                    <Textarea
                      id="order-message"
                      required
                      rows={5}
                      placeholder="Tell us about your request..."
                      value={orderForm.message}
                      onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button type="submit" size="lg">Submit Order</Button>
                    <a href="mailto:contact@topdocs.uk" className="text-teal-600 font-medium">contact@topdocs.uk</a>
                  </div>
                  {orderSubmitted && (
                    <p className="text-sm text-teal-600 mt-3">Thank you! We will get back to you shortly.</p>
                  )}
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Email: <a href="mailto:contact@topdocs.uk" className="text-teal-600">contact@topdocs.uk</a></li>
                  <li>24/7 support for quick questions and next steps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <section id="contact">
          <h2 className="text-2xl font-semibold">Contact & Support</h2>
          <p className="mt-2 text-zinc-600">
            We’re available around the clock to help you prepare, verify, and
            track your application.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>24/7 assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Email support for detailed questions</li>
                  <li>Prompt replies and practical next steps</li>
                  <li>Links to official resources and forms</li>
                </ul>
                <div className="mt-4">
                  <a href="mailto:contact@topdocs.uk">
                    <Button variant="outline">contact@topdocs.uk</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Share your document type and location. We’ll respond with a
                  tailored checklist and timeline overview so you can prepare
                  confidently.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Eligibility basics and requirements</li>
                  <li>Supporting evidence guidance</li>
                  <li>Submission tips and tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-semibold">Savings & Packages</h2>
          <p className="mt-2 text-zinc-600">
            Transparent pricing and multi-applicant support. Ask about group
            assistance for families or teams.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Focused guidance and document review tailored to one
                  application.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklist and review</li>
                  <li>Timeline planning</li>
                  <li>Email support</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-applicant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Coordinated support for households or teams working through
                  similar processes.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Grouped checklists</li>
                  <li>Consolidated updates</li>
                  <li>Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>General</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-700">We provide guidance for UK passports, driver’s licences, ID cards, and residence permits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-700">Preparation timelines vary; we outline realistic scheduling and keep you updated.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="privacy">
          <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          <p className="mt-2 text-zinc-700">We follow privacy-conscious practices, minimize data collection, and use secure channels for communication.</p>
        </section>

        <section id="terms">
          <h2 className="text-2xl font-semibold">Terms of Service</h2>
          <p className="mt-2 text-zinc-700">Information is provided for guidance. Applications are submitted to official UK authorities.</p>
        </section>
      </div>
    </main>
  );
}
