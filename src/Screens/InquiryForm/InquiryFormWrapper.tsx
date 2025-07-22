import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import InquiryForm from "./InquiryForm";
import { InquiryFormValues } from "../../Model/InquiryModel";
import { Formik } from "formik";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_kr0omyh";
const TEMPLATE_ID = "template_tf2vf0r";
const PUBLIC_KEY = "ooTS6RpH_6eeCvxBo";

type InquiryFormWrapperProps = {
  onClose: () => void;
};

const InquiryFormWrapper = ({ onClose }: InquiryFormWrapperProps) => {
  const initialValues: InquiryFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (
    values: InquiryFormValues,
    { resetForm }: any
  ) => {
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      toast.success("Inquiry email sent successfully!");
      resetForm();
      onClose();
    } catch (error: any) {
      toast.error("Failed to send inquiry. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => <InquiryForm formik={formik} onCancel={onClose} />}
    </Formik>
  );
};

export default InquiryFormWrapper;
