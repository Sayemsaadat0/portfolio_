// import ProjectCard from '@/components/core/cards/ProjectCard'
import ProjectCard1 from '@/components/core/cards/ProjectCard1'
import React from 'react'


const ProjectPage = ({ data }) => {

  return (
    <div className='space-y-10'>
      {
        data?.map((i, index) => <div key={Math.random()}>
          <ProjectCard1 
          isRight={index % 2 === 0 ? true : false} 
          title={i.title} 
          thumbnail={i.thumbnail} />
        </div>)
      }
      {/* isLeft={index % 2 === 0 ? true : false} */}
    </div>
  )
}

export default ProjectPage