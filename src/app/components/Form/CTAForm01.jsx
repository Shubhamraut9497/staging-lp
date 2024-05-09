'use  client';

import React, { useState } from "react"

export default function CTAForm01() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({
        name: "",
        email: "",
        message: ""
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <div className="flex align-middle justify-content items-centercontainer px-4 lg:flex mt-10 items-center h-full lg:mt-0">
      
      {formSuccess ?
        <div>{formSuccessMessage}</div>
        :
        <form  className="h-1/2" method="POST" action="https://www.formbackend.com/f/664decaabbf1c319" onSubmit={submitForm}>
         <div className="grid lg:grid-cols-3 grid-col-1">
  <div className="bg-white col-span-2 py-14 lg:px-10 px-8 rounded-md animate-fade-left animate-delay-300 animate-once">
  <h1>Contact form</h1>
    <div className="grid md:grid-cols-2 grid-col-1 gap-4">
   
      <div className="flex flex-col py-4 ">
        <label htmlFor="First Name" className="text-base font-medium">
          First Name
        </label>
        <input
          type="text"
          className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
        />
      </div>
      <div className="flex flex-col py-4">
        <label htmlFor="First Name" className="text-base font-medium">
          Last Name
        </label>
        <input
          type="text"
          className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
        />
      </div>
    </div>
    <div className="flex flex-col py-4">
      <label htmlFor="Email" className="text-base font-medium">
        Email
      </label>
      <input
        type="text"
        className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
      />
    </div>
    <div className="flex flex-col py-4 pb-8">
      <label htmlFor="Message" className="text-base font-medium">
        Message
      </label>
      <textarea
        name="text"
        id=""
        cols={20}
        rows={4}
        className="outline-none border-b-2 border-solid focus:border-red-400 transition-all"
        defaultValue={""}
      />
    </div>
    <a
      href=""
      className="bg-red-400 px-8 py-3 rounded-md text-white hover:bg-white hover:text-red-400 border-2 border-solid border-red-400 transition-all"
    >
      Submit Now
    </a>
  </div>
</div>

        </form>
      }
    </div>
  )
}