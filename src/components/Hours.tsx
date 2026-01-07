import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Schedule: Mon-Sat 08:00-18:00, Sat 08:00-17:00, Sun Closed
  const schedule = [
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 17:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="offnungszeiten" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-widest text-accent font-medium">
              {t.hours.label}
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-bold text-foreground">
              {t.hours.title}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-bold text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center ${
                      isToday ? "bg-accent/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                      <span
                        className={
                          isToday ? "font-medium text-accent" : "text-foreground"
                        }
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full whitespace-nowrap">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`${
                        isClosed ? "text-muted-foreground italic" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
