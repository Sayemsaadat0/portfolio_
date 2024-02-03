import { Button } from '@/components/ui/button'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'

const ContactSection = () => {
    return (
        <section >
            <div className="text-[32px] text-center font-semibold  md:text-[44px] lg:text-[56px] xl:text-[62px]">
                <p >Want To Create</p>
                <p>Something <span className='text-slate-400'>awesoem</span>?</p>

                <div className='flex items-center justify-center pt-6'>
                    <Button className="flex items-center justify-center gap-2" variant={'default'}>Lets Talk <BsFillSendFill /></Button>
                </div>
            </div>

            <div>
               
            </div>
        </section>
    )
}

export default ContactSection