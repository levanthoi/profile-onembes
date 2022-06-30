import React from 'react';
import {FiSend} from 'react-icons/fi';


const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="lvt-header-main">Contact</h1>
      <section className="w-full h-[350px] rounded-xl border-primary overflow-hidden mb-10">
        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7533865191904!2d105.82738951488298!3d21.002520486012653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7df259cb79%3A0xb50d81504fe1ccef!2zMjIgUC4gVMO0biBUaOG6pXQgVMO5bmcsIEtoxrDGoW5nIFRoxrDhu6NuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSAxMDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2sbd!4v1656566273839!5m2!1sen!2sbd" className="w-full h-full grayscale invert" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
      <section className="">
        <h1 className="capitalize">Contact form</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[50px] mt-8">
          <input type="text" name="" id="" placeholder="Full name" className="input-pri"/>
          <input type="email" name="" id="" placeholder="Email" className="input-pri"/>
        </div>
        <textarea name="message" id="" placeholder="Message" className="input-pri w-full h-[120px] max-h-[200px] lg:my-8 mt-32"></textarea>
        <button type="submit" className="mt-4 flex gap-4 text-yellow-300 capitalize ml-auto input-pri"><FiSend size={20} className=""/>Send message</button>
      </section>
    </div>
  )
}

export default Contact