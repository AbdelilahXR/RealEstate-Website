import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact 
            <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>

        <form action="">
            <div>
                <div>Your Name</div>
                <input type="text" placeholder='Your Name'/>
            </div>
            <div>
                <div>Your Email</div>
                <input type="text" placeholder='Your Email' />
            </div>
            <div>
                <div>Message</div>
                <input type="text" placeholder='Message' />
            </div>
            <button>Send Message</button>
        </form>
      
    </div>
  )
}

export default Contact
