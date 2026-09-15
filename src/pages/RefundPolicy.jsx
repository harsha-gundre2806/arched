import React from 'react'

function RefundPolicy() {
  const lastUpdatedDate = "September 14, 2026"; // You can update this date as needed

  return (
    <div className="min-h-screen bg-[#faead9] text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Refund & Return Policy
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Last Updated: {lastUpdatedDate}
            </span>
          </div>

          <p className="text-sm font-medium text-amber-700 bg-amber-50 rounded-lg p-3 border border-amber-200/60">
            ⚠️ Please review this policy regularly to ensure you are viewing the most up-to-date Refund & Return Policy.
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-8">
          Thank you for choosing <strong className="text-slate-900">The Ar. Achiever</strong>. We strive to ensure the satisfaction of all our customers. If you are not completely satisfied with your purchase, we're here to help.
        </p>

        {/* Policy Sections */}
        <div className="space-y-8">
          
          {/* Section 1: Returns */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Returns & Physical Goods</h2>
            <p className="text-slate-600 leading-relaxed">
              We are not selling any physical items currently. Therefore, there will be no return of physical goods.
            </p>
          </section>

          {/* Section 2: Eligibility for Returns */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Eligibility for Returns</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.</li>
              <li>The return must be requested within 7 days of the purchase date.</li>
            </ul>
          </section>

          {/* Section 3: Non-Refundable Services */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Non-Refundable Items & Services</h2>
            <p className="text-slate-600 mb-2">Some services are non-returnable and non-refundable, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
              <li>Competitions</li>
              <li>Quizzes</li>
              <li>Metaverse Access</li>
            </ul>
          </section>

          {/* Section 4: Refund Process */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Refunds & Processing Time</h2>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">Refund Processing Time:</strong> 7 business days.
              </p>
              <p>
                Once we receive your return request, we will inspect it and notify you that we have received your request. We will immediately notify you of the status of your refund after inspecting the item.
              </p>
              <p>
                If your return is approved, we will initiate a refund to your original method of payment. The time it takes for the refund to be credited to your account may vary based on your card issuer's policies.
              </p>
            </div>
          </section>

          {/* Section 5: Shipping */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Return Shipping</h2>
            <p className="text-slate-600 leading-relaxed">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
            </p>
          </section>

          {/* Section 6: Damaged Items */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Damaged or Defective Items</h2>
            <p className="text-slate-600 leading-relaxed">
              If you receive a damaged or defective item, please contact us immediately to arrange for a replacement or refund.
            </p>
          </section>

          {/* Section 7: Contact */}
          <section className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about our Return and Refund Policy, please contact us at{' '}
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

export default RefundPolicy