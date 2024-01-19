import ProjectPage from '@/components/page/projects/ProjectPage'
import { projectsdData } from '@/data/ProjectsData'
// import repeatObject from '@/lib/repeatedObject'
import React from 'react'

const page = () => {

    return (
        <div className='commonContainer py-20 md:py-32  '>
            <ProjectPage data={projectsdData} />
        </div>
    )
}

export default page