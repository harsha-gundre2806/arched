import React from 'react'

function PrivacyPolicy() {
  const lastUpdatedDate = "September 14, 2026"; // You can update this date as needed

  return (
    <div className="min-h-screen bg-[#faead9] text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Last Updated: {lastUpdatedDate}
            </span>
          </div>

          <p className="text-sm font-medium text-amber-700 bg-amber-50 rounded-lg p-3 border border-amber-200/60">
            ⚠️ Please review this policy regularly to ensure you are viewing the most up-to-date Privacy Policy.
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-8">
          At <strong className="text-slate-900">The Ar. Achiever</strong>, we are committed to protecting your privacy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit{' '}
          <a 
            href="https://thearachiever.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline font-medium"
          >
            https://thearachiever.com/
          </a>.
        </p>

        {/* Policy Sections */}
        <div className="space-y-8">
          
          {/* Section 1 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">Personal Information:</strong> When you visit the Website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Website, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Website, and information about how you interact with the Website.
              </li>
              <li>
                <strong className="text-slate-800">Cookies:</strong> We use cookies to improve your experience on the Website. You can choose to disable cookies through your browser settings.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-2">We use the information we collect to:</p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-600">
              <li>Provide and operate the Website.</li>
              <li>Analyse trends and improve the Website.</li>
              <li>Communicate with you, including for customer support.</li>
              <li>Advertise our products or services.</li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Sharing Your Personal Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We never share Personal Information with anyone.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              If you are a resident of certain jurisdictions, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We take reasonable precautions to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Changes to Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us at{' '}
              <a 
                href="mailto:info@thearachiever.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                info[at]thearachiever.com
              </a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy