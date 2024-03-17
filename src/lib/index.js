

export const submitFormData = async (payload) => {
  const SCRIPT_URL =
    "";

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
      console.log("Form submitted successfully");

      
    } else {
      console.error("Error submitting form");
      
    }

    return response;
  } catch (error) {
    console.error("Error submitting form", error);
    
    throw error;
  }
};
