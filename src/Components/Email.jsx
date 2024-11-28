import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Email = () => {

  const formRef = useRef()
  const[loading,setLoading]=useState(false)
  const[form,setForm]=useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({...form,[name]: value})
  }

  //service id --- service_vwsqpxr
  //template --- template_61jrj8h

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)


    try {
      await emailjs.send(
        'service_vwsqpxr', 
        'template_61jrj8h',
        {
          from_name: form.name,
          to_name: 'Jay',
          from_email: form.email,
          to_email: 'CyberJay826@gmail.com',
          message: form.message
        },
        'Aq1MKkHaXC9WkHO5P'
      )

      setLoading(false)

      alert('Your message has been sent!')
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  return (
    <div className='h-[90vh] w-full flex justify-center items-center bg-[#212121]'>
      <div className='relative h-[80%] w-[80%] flex items-center border rounded-[10px] p-10 max-sm:p-5 justify-center flex-col'>
        <img src="" alt="" className='absolute inset-0 min-h-screen' />

        <div className='contact-container z-50'>
          <h3 className='head-text text-white font-sans font-semibold'>
            Let's Talk
          </h3>
          <p className='text-lg text-[#a5a5a5]'>
            wether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>

          <form action="" ref={formRef} onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
            <label className='text-white font-sans font-semibold w-full m-[2px]'>
              <span className='field-label'>Full Name</span>
            </label>
            <input 
              type="text" 
              name='name' 
              value={form.name}
              onChange={handleChange}
              required
              className='bg-[#323232] rounded-[5px] w-full m-[2px] text-white'
              placeholder='Jhon Doe' 
            />

            <label className='text-white font-sans font-semibold w-full m-[2px]'>
              <span className='field-label'>Email</span>
            </label>
            <input 
              type="email" 
              name='email' 
              value={form.email}
              onChange={handleChange}
              required
              className='bg-[#323232] rounded-[5px] w-full m-[2px] text-white'
              placeholder='JhonDoe@gmail.com' 
            />

            <label className='text-white font-sans font-semibold w-full m-[2px]'>
              <span className='field-label'>Your Message</span>
            </label>
            <textarea  
              name='message' 
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className='bg-[#323232] rounded-[5px] w-full m-[2px] text-white'
              placeholder='Hi, I´m interested in...' 
            />

            <button
              type='submit'
              disabled={loading} 
              className='w-full text-white m-[5px] rounded-[10px] bg-[#323232] cursor-pointer font-sans font-semibold hover:bg-[#494949] py-2'
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Email
