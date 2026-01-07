import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              AROLEO
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-foreground mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#uber-uns"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#offnungszeiten"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t.nav.hours}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-foreground mb-4">
              {t.contact.label}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41763268476"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +41 76 326 84 76
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@aroleo.ch"
                  className="text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  contact@aroleo.ch
                </a>
              </li>
              <li className="text-muted-foreground">
                St. Jakobs-Strasse 191
                <br />
                4052 Basel
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-foreground mb-4">
              {t.footer.follow}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/aroleo_bau_gmbh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/Aroleo-Bau-GmbH-100063808140167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} AROLEO BAU GMBH. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
