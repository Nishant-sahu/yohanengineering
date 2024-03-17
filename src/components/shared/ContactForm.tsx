import { submitFormData } from "@/lib";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Basic form validation
    let hasError = false;

    if (!name.trim()) {
      setNameErr("Name is required");
      hasError = true;
    } else {
      setNameErr("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailErr("Email is required");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailErr("This doesn’t seem like the right email");
      hasError = true;
    } else if (email.slice(-1) === ".") {
      setEmailErr("Email should not end with a full stop");
      hasError = true;
    } else {
      setEmailErr("");
    }

    if (!phone.trim()) {
      setPhoneErr("Phone number is required");
      hasError = true;
    } else {
      setPhoneErr("");
    }

    if (!subject.trim()) {
      setSubjectErr("Select subject is required");
      hasError = true;
    } else {
      setSubjectErr("");
    }
    if (!message.trim()) {
      setMessageErr("Message is required");
      hasError = true;
    } else {
      setMessageErr("");
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    const payload = {
      date: new Date().toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      name,
      email,
      phone,
      subject,
      message,
    };
    console.log(payload, "payload");

    try {
      // await submitFormData(payload);
      router.push("/thank-you");
    } catch (error) {
      // console.log(error, "err");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='border p-5 rounded-xl shadow-lg'>
      <div className='my-4'>
        <label
          htmlFor='name'
          className='block pb-1  text-sm  font-medium text-gray-700'
        >
          Name <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          placeholder='Your name'
          onChange={(e) => {
            setName(e.target.value);
            setNameErr("");
          }}
          className='w-full rounded-lg border bg-white px-4 py-3 shadow-sm'
        />
        {nameErr && <p className='mt-1 text-sm text-red-500'>{nameErr}</p>}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block pb-1  text-sm font-medium text-gray-700'
        >
          Email <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='email'
          id='email'
          value={email}
          placeholder='Your email'
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailErr("");
          }}
          className='w-full rounded-lg border bg-white px-4 py-3 shadow-sm'
        />
        {emailErr && <p className='mt-1 text-sm text-red-500'>{emailErr}</p>}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='phone'
          className='block pb-1 text-sm font-medium text-gray-700'
        >
          Phone Number <span className='text-red-500'>*</span>
        </label>
        <PhoneInput country={"in"} value={phone} onChange={setPhone} />
        {phoneErr && <p className='mt-1 text-sm text-red-500'>{phoneErr}</p>}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='subject'
          className='block pb-1 text-sm font-medium text-gray-700'
        >
          Subject <span className='text-red-500'>*</span>
        </label>
        <select
          id='subject'
          name='subject'
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            setSubjectErr("");
          }}
          className='w-full rounded-lg border bg-white px-3 py-3 shadow-sm'
        >
          <option value='' disabled selected>
            Select a subject
          </option>
          <option value='Operation & Maintenance Services'>
            Operation & Maintenance Services
          </option>
          <option value='Fabrication & Erection Solutions'>
            Fabrication & Erection Solutions
          </option>
          <option value='Housekeeping Services'>Housekeeping Services</option>
          <option value='Solar Power Plant Solutions'>
            Solar Power Plant Solutions
          </option>
          <option value='other'>Other</option>
        </select>
        {subjectErr && (
          <p className='mt-1 text-sm text-red-500'>{subjectErr}</p>
        )}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block pb-1  text-sm font-medium text-gray-700'
        >
          Write Message <span className='text-red-500'>*</span>
        </label>
        <textarea
          name='message'
          id='message'
          placeholder='Your message'
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageErr("");
          }}
          className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
          // rows="4"
        ></textarea>

        {messageErr && (
          <p className='mt-1 text-sm text-red-500'>{messageErr}</p>
        )}
      </div>

      <button
        type='submit'
        className='w-full rounded-md bg-primary px-2 py-3 font-medium text-white hover:bg-primary_bold'
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
