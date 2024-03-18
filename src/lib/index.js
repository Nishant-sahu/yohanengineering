export const submitFormData = async (payload) => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxANiNjqvefzGy-7pk7OFl85Em1DPhnYdbQV32VuY3tQUpvxu1A3JVm34c8o9D1q_jF/exec";

  const scriptURL = SCRIPT_URL;

  let formData = new FormData();

  formData.append("date", payload.date);
  formData.append("name", payload.name);
  formData.append("email", payload?.email);
  formData.append("phone", payload?.phone);
  formData.append("subject", payload?.subject);
  formData.append("message", payload?.message);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Form submitted successfully", response);
    } else {
      console.error("Error submitting form");
    }

    return response;
  } catch (error) {
    console.error("Error submitting form", error);
    console.log(error, "error");
    throw error;
  }
};
