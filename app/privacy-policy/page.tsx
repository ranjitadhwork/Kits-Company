import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Kits Company',
  description:
    'Privacy policy, terms and conditions, and refund policy for The Kits Company.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Privacy Policy
          </h1>

          {/* Terms and Conditions */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              Terms and Conditions
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                thekitscompany.com is owned and managed by Vosca Ltd. If you
                continue to browse and use this website you are agreeing to
                comply with and be bound by the following terms and conditions of
                use, which together with our privacy policy govern
                thekitscompany.com / Vosca Ltd relationship with you in relation
                to this website.
              </p>
              <p>
                {"The term 'thekitscompany.com' or 'us' or 'we' refers to the owner of the website, Vosca Ltd, registered in the United Kingdom. The term 'you' refers to the user or viewer of our website."}
              </p>
              <p>
                The use of this website is subject to the following terms of use:
              </p>
              <p>
                The content of the pages of this website is for your general
                information and use. It is subject to change without notice.
              </p>
              <p>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for any
                such inaccuracies or errors to the fullest extent permitted by
                law.
              </p>
              <p>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </p>
              <p>
                Allergen Information: While we provide ingredient and allergen
                information on our website and product packaging, it is your
                responsibility to review this information before consumption.
                Vosca Ltd shall not be liable for adverse reactions due to
                undisclosed or misunderstood dietary requirements.
              </p>
              <p>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is prohibited
                other than in accordance with the copyright notice, which forms
                part of these terms and conditions.
              </p>
              <p>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offence.
              </p>
              <p>
                From time to time this website may also include links to other
                websites. These links are provided for your convenience. They do
                not signify that we endorse the website(s). We have no
                responsibility for the content of the linked website(s).
              </p>
              <p>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of the United Kingdom.
              </p>
            </div>
          </section>

          {/* Cancellation & Refund Policy */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              {"Cancellation & Refund Policy"}
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Vosca Ltd believes in helping its customers as far as possible.
                Due to the perishable nature of our food products, the following
                policy applies:
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Cancellations:
                </span>{' '}
                Requests will be considered only if made within 24 hours of
                placing an order. However, requests will not be entertained if
                the order has already been processed or shipped by our operations
                team.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Special Offers:
                </span>{' '}
                No cancellations are entertained for products obtained during
                special discount occasions such as Black Friday, Christmas, or
                limited-time promotional events.
              </p>
              <p>
                <span className="font-medium text-foreground">Refunds:</span>{' '}
                If you are not entirely happy with your purchase due to product
                defects, please contact us at support@thekitscompany.com within
                24 hours of delivery. We will review your request and, where
                applicable, issue a refund within 24-72 hours.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              Privacy Policy
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Vosca Ltd is committed to ensuring that your privacy is
                protected. Should we ask you to provide certain information by
                which you can be identified when using this website, you can be
                assured that it will only be used in accordance with this privacy
                statement.
              </p>

              <div>
                <p className="font-medium text-foreground">What we collect:</p>
                <ul className="mt-2 flex flex-col gap-1.5 list-disc pl-5">
                  <li>
                    Name and contact information including email address and
                    phone number.
                  </li>
                  <li>
                    Demographic information such as city, postcode, preferences
                    and interests.
                  </li>
                  <li>
                    Information relevant to customer surveys and/or offers.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  What we do with the information:
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 list-disc pl-5">
                  <li>Internal record keeping and order fulfillment.</li>
                  <li>
                    We may use the information to improve our food products and
                    services.
                  </li>
                  <li>
                    We may periodically send promotional emails about new kits or
                    special offers using the email address provided.
                  </li>
                  <li>
                    From time to time, we may contact you for market research
                    purposes via email or phone.
                  </li>
                </ul>
              </div>

              <p>
                <span className="font-medium text-foreground">Security:</span>{' '}
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorized access or disclosure, we have put
                in place suitable physical, electronic and managerial procedures
                to safeguard and secure the information we collect online.
              </p>

              <p>
                <span className="font-medium text-foreground">Cookies:</span>{' '}
                We use traffic log cookies to identify which pages are being
                used. This helps us analyze data about webpage traffic and
                improve our website to tailor it to customer needs. A cookie in
                no way gives us access to your computer or any information about
                you, other than the data you choose to share with us.
              </p>

              <p>
                <span className="font-medium text-foreground">
                  Controlling your Personal Information:
                </span>{' '}
                We will not sell, distribute or lease your personal information
                to third parties unless we have your permission or are required
                by law to do so. If you believe that any information we are
                holding on you is incorrect or incomplete, please contact us as
                soon as possible.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
