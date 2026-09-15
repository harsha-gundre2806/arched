import React from 'react'

function TermsAndConditions() {
  const lastUpdatedDate = "September 14, 2026"; // You can update this date as needed

  return (
    <div className="min-h-screen bg-[#faead9] text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Last Updated: {lastUpdatedDate}
            </span>
          </div>

          <p className="text-sm font-medium text-amber-700 bg-amber-50 rounded-lg p-3 border border-amber-200/60">
            ⚠️ Please review these terms regularly to ensure you are viewing the most up-to-date Terms and Conditions.
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-8">
          These terms and conditions govern your use of the website{' '}
          <a 
            href="https://thearachiever.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline font-medium"
          >
            https://thearachiever.com/
          </a>{' '}
          operated by <strong className="text-slate-900">The Ar. Achiever</strong>. By accessing and using the Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the Website.
        </p>

        {/* Terms Sections */}
        <div className="space-y-8">
          
          {/* Section 1 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Use of the Website</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">License:</strong> We grant you a limited, non-exclusive, revocable license to access and use the Website for your personal use.
              </li>
              <li>
                <strong className="text-slate-800">User Account:</strong> If you create an account on the Website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Content</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong className="text-slate-800">Ownership:</strong> All content on the Website, including but not limited to text, images, graphics, logos, and software, is the property of The Ar. Achiever or its content suppliers and is protected by applicable copyright and other intellectual property laws.
              </li>
              <li>
                <strong className="text-slate-800">Use Restrictions:</strong> You may not reproduce, distribute, modify, display, perform, or otherwise use any content on the Website without the prior written consent of The Ar. Achiever.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              Your use of the Website is also governed by our Privacy Policy, which can be found here –{' '}
              <a 
                href="/privacy-policy" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors"
              >
                Click Here
              </a>
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed">
              The Website is provided "as is" and "as available" without any warranties, express or implied. We do not warrant that the Website will be error-free or uninterrupted, or that defects will be corrected.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall The Ar. Achiever be liable for any indirect, incidental, special, consequential, or punitive damages, any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use goodwill, or other intangible losses.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by and construed by the laws of Tirupati, Andhra Pradesh - 517501, India, without regard to its conflict of law principles.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Changes to Terms & Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              If there are any questions about these Terms, please contact us at{' '}
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

export default TermsAndConditions