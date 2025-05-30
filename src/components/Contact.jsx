import React from 'react'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "311c8bb4-ccd9-448f-8d7e-8a1242ac04d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };



  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
            <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>
            <div className='flex flex-wrap '>
                <div className='w-full md:w-1/2 text-left'>
                     Your Name
                    <input type="text" placeholder='Your Name' name='Name' className='w-full border border-gray-300 py-3 px-4 mt-2 mb-3 rounded'/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input type="text" placeholder='Your Email' name='Email' className='w-full border border-gray-300 py-3 px-4 mt-2  rounded '/>
                </div>
                <div className='w-full text-left my-6'>
                    Your Message    
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2  h-48 resize-none' name="Message"  required></textarea>
                </div>
            </div>
            <button className='bg-blue-600 text-white py-2 px-8 rounded cursor-pointer '>{result ? result : "Sending Message"}</button>
        </form>
      
    </div>
  )
}

export default Contact
