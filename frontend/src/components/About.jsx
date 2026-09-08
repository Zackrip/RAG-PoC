import React from "react";

function About() {
  return (
    <div className=" w-full bg-[#FFF7ED] py-20 rounded-t-3xl">
      <div className=" p-10 -mt-[2vw] font-NeueMontreal text-[#212121]">
        <h1 className="text-6xl tracking-tighter leading-none">
          We turn complex documents into clear answers,{" "}
        </h1>
        <h1 className="text-6xl tracking-tighter leading-none">
          making it easier to find, understand,
        </h1>
        <h1 className="text-6xl tracking-tighter leading-none">
          and act on the information that matters.
        </h1>
      </div>

      <div className=" border-t-2 mt-5 border-[#F9FAFB]">
        <div className="w-full text-zinc-950 text-lg tracking-tight font-NeueMontreal flex pt-4  ">
          <div className="w-1/2 px-14  ">
            <p>
              Upload your documents. Ask questions. Get answers grounded in your
              content.
            </p>
          </div>

          <div className="w-1/2 flex">
            <div>
              <p className="w-1/2 whitespace-nowrap">
                Docly uses AI and semantic search to understand <br />
                your documents, retrieve the most relevant information,
                <br />
                and deliver accurate answers in seconds.
              </p>

              <p className=" mt-10">
                From PDFs and reports to notes and knowledge bases, <br />
                Docly helps you spend less time searching <br />
                and more time understanding.
              </p>

              <p className=" mt-10">Upload → Understand → Ask → Answer</p>
            </div>

            {/* <div className=' w-1/2 py-55 px-50 text-lg font-NeueMontreal tracking-tighter flex justify-between flex-col h-32'>
                    <p>S:</p>
                    <a className='mt-5' href="https://www.behance.net/ochi_design">Behance</a>
                    <a href="https://www.instagram.com/ochi_design/">Instagram</a>
                    <a href="https://www.linkedin.com/company/56403597">Linkdin</a>
                     </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
