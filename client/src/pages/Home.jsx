import React from 'react'
import {Loader, Card, FormField } from './../components/index'
import { useState } from 'react'

const RenderCards= ({data,title})=>{
  if(data.length>0){
    return data.map((post)=> <Card key={post._id} {...post} />)
  }
  return <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase' >{title}</h2>
}

const Home = () => {
  const [Loading, setLoading] = useState(false)
  const [allPost, setAllPost] = useState(null)
  const [searchText, setsearchText] = useState('')
  return (
    <section className='max-w-7xl mx-auto' >
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]' >The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px] ' >
          Browser through a collection of imaginative and visually stunning images generated by DALL-E AI
        </p>
      </div>

      <div className='mt-16' >
        <FormField /> 
      </div>

{/* image section */}
      <div className='mt-10' >
        {/* {Loading && <Loader />} */}
        {Loading ?(
          <div className='flex justify-center items-center' >
            <Loader />
          </div>
        ):(
          //if we have images to show
          <>
          {/* if there is any texts to search */}
          {searchText && (
            <h2 className='font-medium text-[#666e75] text-xl mb-3' >
              showing result for <span className='text-[#222328]' >{searchText}</span>
            </h2>
          )}

          <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3' >
            {
              // if search text exists
              searchText ?(<RenderCards 
                data={[]}
                title='No results found'
              />):(<RenderCards
                data={[]}
                title='No post found'
              />)
              
            }
          </div>
          </>
        )}
        
      </div>
    </section>
  )
}

export default Home