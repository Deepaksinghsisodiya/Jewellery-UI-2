import React from "react";
import { Field, Form, FormikProps } from "formik";
import { InquiryFormValues } from "../../Model/InquiryModel";
import { Loader2 } from "lucide-react";

interface InquiryFormProps {
  formik: FormikProps<InquiryFormValues>;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ formik }) => {
  return (
    <Form className="w-full max-w-2xl mx-auto bg-white p-3 rounded-2xl shadow-xl border border-gray-200 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Inquiry Form
      </h2>

      {/* Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <Field
          name="name"
          placeholder="Enter your name"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <Field
          type="email"
          name="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <Field
          as="textarea"
          name="message"
          placeholder="I'm interested in your diamond watches. Please send more details."
          rows={4}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Sending...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </button>
      </div>
    </Form>
  );
};

export default InquiryForm;
