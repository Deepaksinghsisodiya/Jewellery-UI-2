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
    <Form className="w-full max-w-xl mx-auto bg-white p-6 rounded-xl border border-gray-200 space-y-4 shadow-sm">
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Inquiry Form
      </h2>
      <p className="text-sm text-center text-gray-500">
        * Indicates required field
      </p>

      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <Field
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <Field
          as="textarea"
          id="message"
          name="message"
          rows={4}
          placeholder="Enter your message or inquiry here..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md resize-none focus:ring-1 focus:ring-blue-500 outline-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center disabled:opacity-50"
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
