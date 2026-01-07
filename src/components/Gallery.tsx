import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = {
    de: [
      { src: "/images/img-2.jpg", alt: "Altbau Sanierung" },
      { src: "/images/img-3.jpg", alt: "Ornamentale Decken" },
      { src: "/images/img-4.jpg", alt: "Deckenreparatur" },
      { src: "/images/img-5.jpg", alt: "Badezimmer Renovierung" },
      { src: "/images/img-6.jpg", alt: "Fensterinstallation" },
      { src: "/images/img-7.jpg", alt: "Malerarbeiten" },
      { src: "/images/img-8.jpg", alt: "Fachwerk Sanierung" },
      { src: "/images/img-11.jpg", alt: "Gipskarton Arbeiten" },
      { src: "/images/img-12.jpg", alt: "Balkon Neubau" },
    ],
    en: [
      { src: "/images/img-2.jpg", alt: "Historic Renovation" },
      { src: "/images/img-3.jpg", alt: "Ornamental Ceilings" },
      { src: "/images/img-4.jpg", alt: "Ceiling Restoration" },
      { src: "/images/img-5.jpg", alt: "Bathroom Renovation" },
      { src: "/images/img-6.jpg", alt: "Window Installation" },
      { src: "/images/img-7.jpg", alt: "Painting Works" },
      { src: "/images/img-8.jpg", alt: "Specialist Restoration" },
      { src: "/images/img-11.jpg", alt: "Drywall Services" },
      { src: "/images/img-12.jpg", alt: "Balcony Construction" },
    ],
  };

  const images = galleryData[lang as keyof typeof galleryData];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-accent font-medium"
          >
            {t.gallery.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            {t.gallery.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground"
          >
            {t.gallery.description}
          </motion.p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-card shadow-medium"
        >
          <div className="relative aspect-[16/9] md:aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Description Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <motion.h3
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-2xl font-bold text-white"
              >
                {images[currentIndex].alt}
              </motion.h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>

        {/* Thumbnails/Dots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-3 flex-wrap"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-border hover:bg-primary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
