import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-teal-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Docz UK</h3>
            <p className="text-sm text-white/90 mb-4">
              UK-focused guidance for passports, driving licences, photo ID and
              residence permits—clear steps and practical timelines.
            </p>
            <div className="flex items-center gap-2 text-sm mt-2">
              <span>📧</span>
              <a
                href="mailto:contact@topdocz.uk"
                className="hover:text-white/80 transition-colors"
              >
                contact@topdocz.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Real Passport
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Original Drivers License
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Original ID Card
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Residence Permit
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Work Permit
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#news"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#privacy"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/#terms"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-white/90">24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>
              © {new Date().getFullYear()} Top Docz UK. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Helping UK applicants since 1995
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
