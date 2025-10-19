import React from 'react'

function About() {
  return (
    <div  className=' w-full bg-[#CDEA68] py-20 rounded-t-3xl'>
        <div className=' p-10 -mt-[2vw] font-NeueMontreal text-[#212121]'>
            <h1 className='text-6xl tracking-tighter leading-none'>We craft category-defining presentations, brand </h1>
            <h1 className='text-6xl tracking-tighter leading-none'>identities, and digital experiences that drive funding,</h1>
            <h1 className='text-6xl tracking-tighter leading-none'>sales, and market leadership.</h1>
        </div>
        
        <div className=' border-t-2 mt-5 border-[#B3CC5E]'>

            <div className='w-full text-zinc-950 text-md font-NeueMontreal flex gap-110 '>
                <div className='pl-14 pt-4 '>
                    <p>What you can expect:</p>
                </div>
            
                <div className=''>
                    <p className='pt-4 '>
                         We don't just make slides. We shape <br />
                         strategy, storytelling, design scalable<br /> 
                         brand systems, and build presentations <br />
                         that make people say: "I want in!"
                     </p>

                    <p className='pt-4 mt-10'>
                        Our clients make the world go round - <br />
                        from deep tech, aerospace and robotics <br />
                        to music festivals and Michelin-starred <br />
                        restaurants.
                    </p>

                    <p className='pt-4 mt-10'>
                        Since 2019, we've been the go-to partner <br /> 
                        for Yahoo, Medallia, Uber, Lexus, <br /> 
                        Salience Labs, Trawa and AllThingsGo. <br />
                    </p>
                </div>

                <div className='pt-55 '>
                    <p>S:</p>
                    <p className='mt-5'>Instagram</p>
                    <p>Behance</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                </div>
            </div>   
            
        </div>
            <div className='flex gap-5 w-full border-t-2 mt-25 border-[#B3CC5E]'>
                <div className='w-1/2 pl-14 mt-4  font-NeueMontreal text-[#212121]'>
                    <h1 className='text-5xl'>How we can help:</h1>
                        <button className='flex items-center gap-10 px-6 py-4 mt-5 bg-zinc-950 uppercase text-white rounded-full'>Read More
                            <div className='w-2 h-2 bg-white rounded-full'></div>
                        </button> 
                </div>

                <div className='w-1/2 mt-4 -mx-15 rounded-2xl bg-[#85a813] h-[60vh] overflow-hidden '>
                <img className='w-full h-full overflow-hidden bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>              
    </div>
  )
}

export default About;