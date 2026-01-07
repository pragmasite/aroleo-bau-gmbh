import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Hammer, Paintbrush, Home, Wrench, Layers, Home as HomeIcon } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const iconMap = [
    Hammer,
    Paintbrush,
    Home,
    Wrench,
    Layers,
    HomeIcon,
  ];

  return (
    <section id="leistungen" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-accent font-medium"
          >
            {t.services.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-3 font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground"
          >
            {t.services.description}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index] || Hammer;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-lg border border-border bg-card p-8 hover:shadow-medium hover:border-accent transition-all"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
