import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      emailjs.send("service_vtr18z5", "template_trd91ej", templateParams, {
        publicKey: "B-aQGY121V7S7eObe",
      });

      // Display success alert
      toggleAlert("Your message has been sent!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="ContactForm bg-[#101920] min-h-screen flex items-center justify-center border-b border-neutral-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold uppercase text-center text-white py-20">
          Contact <span className="text-secondary">Us</span>
        </h1>
        <div className="text-center">
          <div className="contactForm">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Row 1 of form */}
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="formInput w-full p-4 border border-gray-700 rounded bg-[#253042] text-white"
                    placeholder="Name"
                  />
                  {errors.name && <span className="errorMessage text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="formInput w-full p-4 border border-gray-700 rounded bg-[#253042] text-white"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="errorMessage text-red-500 text-sm">Please enter a valid email address</span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="formInput w-full p-4 border border-gray-700 rounded bg-[#253042] text-white"
                  placeholder="Subject"
                />
                {errors.subject && <span className="errorMessage text-red-500 text-sm">{errors.subject.message}</span>}
              </div>
              {/* Row 3 of form */}
              <div className="mb-4">
                <textarea
                  rows={3}
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                  className="formInput w-full p-4 border border-gray-700 rounded bg-[#253042] text-white"
                  placeholder="Message"></textarea>
                {errors.message && <span className="errorMessage text-red-500 text-sm">Please enter a message</span>}
              </div>

              <button
                className="submit-btn bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 disabled:opacity-50"
                disabled={disabled}
                type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`w-96 alert ${
            alertInfo.type === "success" ? "alert-success" : "alert-error"
          } alert-dismissible fixed bottom-5 right-0  text-black p-4 rounded flex justify-center items-center`}
          role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            {alertInfo.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
          <span className="ml-2">{alertInfo.message}</span>
          <button
            type="button"
            className="btn-close ml-4"
            aria-label="Close"
            onClick={() => setAlertInfo({ display: false, message: "", type: "" })}>
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
