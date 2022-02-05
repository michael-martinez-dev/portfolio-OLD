import React from "react"

const Resume = () => {
    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Resume
                    </h1>
                </div>
                <div className="">
                    <embed src="resume.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%" height="1150" type="application/pdf"></embed>
                </div>
            </div>
        </section>
    );
}

export default Resume;