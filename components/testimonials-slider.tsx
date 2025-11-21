"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rhonda Smith",
    role: "Customer",
    rating: 5,
    text: "Excellent service. It is always a pleasure to work with you guys. I am pleased with the services. They are punctual. And the quality of the product is as good as preached.",
  },
  {
    id: 2,
    name: "Jessica Brown",
    role: "Customer",
    rating: 5,
    text: "Excellent Services, I obtained a passport, id card and driver's license and to be honest, I was skeptical of the quality and authenticity of these products. The best agency",
  },
  {
    id: 3,
    name: "David Anderson",
    role: "Customer",
    rating: 5,
    text: "Thank you for taking the time and effort to clean my defaced Euro notes. Also, thank you for using Grade A Chemicals. Please pass my thanks to every team members for their efforts.",
  },
  {
    id: 4,
    name: "John Ruda",
    role: "Customer",
    rating: 5,
    text: "I would definitely order form Onlinelegitdocuments again they were pretty good and didn't have a single problem. They are the best in their works. Thanks for the great Service.",
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Customer",
    rating: 5,
    text: "Outstanding quality and professional service. The team was responsive throughout the entire process. My documents arrived exactly as promised. Highly recommended!",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Customer",
    rating: 5,
    text: "Fast delivery and excellent customer support. The quality exceeded my expectations. I've used their services multiple times and they never disappoint. Top-notch service!",
  },
  {
    id: 7,
    name: "Emily Johnson",
    role: "Customer",
    rating: 5,
    text: "Professional, reliable, and trustworthy. The attention to detail is remarkable. I received my documents on time and the quality was perfect. Will definitely use again!",
  },
  {
    id: 8,
    name: "Robert Martinez",
    role: "Customer",
    rating: 5,
    text: "The entire process was seamless from start to finish. Their team guided me through every step and answered all my questions promptly. The documents I received were of exceptional quality and arrived exactly when promised.",
  },
  {
    id: 9,
    name: "Lisa Thompson",
    role: "Customer",
    rating: 5,
    text: "I've used their services for multiple documents and they consistently deliver excellence. The customer service is outstanding and they truly care about their clients. Highly recommend to anyone in need of document services.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-zinc-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-lg">
      {initials}
    </div>
  );
}

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount] = useState(3);

  const totalSlides = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleTestimonials = () => {
    const start = currentIndex * visibleCount;
    return testimonials.slice(start, start + visibleCount);
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar name={testimonial.name} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-zinc-600">{testimonial.role}</p>
                      <div className="mt-2">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-700 leading-relaxed">
                    &quot;{testimonial.text}&quot;
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
          aria-label="Previous testimonials"
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
          aria-label="Next testimonials"
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

