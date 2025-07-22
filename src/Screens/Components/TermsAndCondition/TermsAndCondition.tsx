import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-6">
      <div className="bg-white w-full max-w-4xl rounded-md shadow-lg p-5 sm:p-8 text-[15px] font-serif leading-relaxed text-gray-800 overflow-y-auto">
        <h1 className="text-center text-xl sm:text-2xl font-bold uppercase mb-4 border-b border-gray-300 pb-2">
          Terms and Conditions of Purchase
        </h1>

        <div className="space-y-4">
          <p>
            <strong>GK Jewelers I & II</strong> accepts <strong>Exchanges only</strong>, accompanied by an original
            sales receipt. All items except for custom, altered pieces and special
            orders may be exchanged within 30 days. Defects reported within 30
            days of purchase will be repaired or replaced after verification and
            inspection at the sole discretion of the store. <strong>We do not accept returns and issue refunds.</strong>
          </p>

          <p>
            <strong>Refunds</strong> (if applicable) will be in the form of store credit only. It
            will be made once your return is received, inspected, and approved.
            Once approved, there will be a <strong>20% restocking fee</strong>.
          </p>

          <p>
            <strong>Layaways</strong> must be claimed within 90 days of original deposit or it will
            be returned to inventory and a store credit will be issued less 20%
            for merchandise restocking.
          </p>

          <p>
            <strong>Special Orders</strong> will be placed after receiving a pre-determined amount
            which can be up to 100% in advance. All special orders are final sale
            and cannot be returned, refunded, upgraded, or cancelled. Some items
            are subject to availability and can take up to <strong>12 weeks</strong> to fulfill.
          </p>

          <p>
            <strong>Custom Orders</strong> are made as per customer requirements; these items cannot
            be returned or replaced with other items. These sales are <strong>Final sale</strong>.
            The typical time for custom orders can be up to 12 weeks. Payments are
            to be made <strong>100% in advance</strong> in order for work to commence.
          </p>

          <p className="font-semibold text-center border-t pt-4 text-red-700">
            All watch sales are Final — no returns, no exchange and no refunds.
          </p>

          <h2 className="text-center text-lg sm:text-xl font-bold uppercase mt-8 mb-2 border-b border-gray-300 pb-1">
            Lifetime Warranty and Upgrade Policy
          </h2>

          <p>
            <strong>GK Jewelers I & II</strong> is pleased to offer our customers a lifetime
            warranty on jewelry purchased with the company. Your original receipt
            is required for all warranty services.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Warranty services excludes excessive wear and tear.</li>
            <li>Warranty does not cover loss or theft of the jewelry.</li>
            <li>
              Repair or service performed by anyone other than GK Jewelers will
              void the warranty.
            </li>
            <li>
              Any mailing cost incurred during repair services being obtained from
              us has to be borne by the customer.
            </li>
          </ul>

          <p>
            <strong>GK Jewelers I & II</strong> offers a lifetime upgrade policy on all diamond
            jewelry with original receipt with the original purchase price. The
            new purchase must be at least <strong>twice</strong> the amount of the original.
            The merchandise must be in sellable condition which will be determined
            by the Store Manager.
          </p>

          <p>
            <strong>Gold/Silver Chain and Bracelets</strong> are prone to breakages, especially
            thin and rope styles. These will be repaired once for free if the
            damage is not due to negligence. Missing stones will be replaced at
            the customer’s cost.
          </p>

          <p className="text-center mt-6 text-sm border-t pt-4 text-gray-600">
            Thank you for shopping with <strong>GK Jewelers I & II</strong>.<br />
            For inquiries and assistance, please email us at:<br />
            <a
              href="mailto:sales.gkjewelers@gmail.com"
              className="text-blue-600 underline"
            >
              sales.gkjewelers@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
