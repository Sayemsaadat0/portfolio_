import Image from 'next/legacy/image';
import React from 'react'

const Skills = () => {

    const myskills = [
        'https://i.ibb.co/w7yj7L9/tailwind.png',
        'https://i.ibb.co/4tyWCRq/js.png',
        'https://i.ibb.co/BC4Fjzg/react.png',
        'https://i.ibb.co/pzS9F96/next.png',
        'https://i.ibb.co/87ZWd6h/ts.png',
        'https://i.ibb.co/KWmpv24/storybook.png',
        'https://i.ibb.co/RjZvmgp/node.png',
        'https://i.ibb.co/wQYhfMf/express.png',
        'https://i.ibb.co/fDfh6wd/firebase.png',
        'https://i.ibb.co/rv4wh3y/mongo.png',
    ];

    return (
        <section className='md:py-10 flex flex-col items-center justify-center space-y-10'>
            <div className='text-center '>
                <p className="text-[32px] font-semibold text-slate-500">
                    Tools I work With
                </p>
                <p className="text-[18px]">Showcasing expertise in a diverse toolset for ensuring seamless workflow.
                </p>

            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
                {myskills.map((url, index) => (
                    <div className='border' key={index}>
                        <Image width={150} height={150} src={url} alt={`Skill ${index + 1}`} />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills