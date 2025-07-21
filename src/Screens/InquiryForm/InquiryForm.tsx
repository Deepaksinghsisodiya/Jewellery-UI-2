import React from "react";
import { Field, Form, FormikProps } from "formik";
import { InquiryFormValues } from "../../Model/InquiryModel";
import { Loader2 } from "lucide-react";

type InquiryFormProps = {
  formik: FormikProps<InquiryFormValues>;
  onCancel: () => void;
};

const InquiryForm = ({ formik, onCancel }: InquiryFormProps) => {
  return (
    <Form className="w-full max-w-xl mx-auto bg-white p-2 sm:p-6 rounded-2xl border border-gray-200 space-y-2">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
        Inquiry Form
      </h2>

      {/* Name */}
      <div className="space-y-0">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <Field
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-xs">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs">{formik.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <Field
          as="textarea"
          id="message"
          name="message"
          placeholder="Enter your message or inquiry here..."
          rows={4}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm resize-none focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-xs">{formik.errors.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 text-sm border text-white rounded-md hover:bg-red-700 transition bg-red-600 font-semibold"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-5 py-1.5 text-sm bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50 flex items-center"
        >
          {formik.isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </Form>
  );
};

export default InquiryForm;
