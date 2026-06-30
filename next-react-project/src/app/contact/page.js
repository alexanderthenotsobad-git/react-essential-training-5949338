export default function Page() {
  async function submitForm(formData) {
  "use server";
  const formFields ={ email: formData.get("email"), message: formData.get("message")};
  console.log("Form Fields:", formFields);
  console.log("TODO: Send these form field values to a backend"); 
    return formFields;
  }
  return (
    <main className="max-w-md mx-auto p-6 bg-gray-400 shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
      <form className="space-y-4" action={submitForm}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" name="email" required className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 "></input>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" required rows="4" className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 "></textarea>
        </div>
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md p-3">
          Send Message
        </button>
      </form>
    </main>
  );
}
