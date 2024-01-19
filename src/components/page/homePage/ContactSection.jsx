import React from 'react'

const ContactSection = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 ">
                {/* <iframe className='rounded-[30px] ' width={'100%'} height="100%" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3030209670933!2d88.93724451102318!3d24.819308877864202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc7dcdc1138767%3A0x96cd98b659f2e035!2sUkilpara!5e0!3m2!1sen!2sbd!4v1698497347909!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{  border  : '0' }}
                    // , borderRadius : '30px'
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className=" px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                  
                    
                </div>
            </div>
        </section>

    )
}

export default ContactSection