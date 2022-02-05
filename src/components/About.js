import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Mike.
                        <br className="hidden lg:inline-block" /> 
                    </h1>
                    <h2 className="title-font sm:text-xl text-l mb-4 font-small text-white">
                        Welcome to my personal site.
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        I'm an honorably discharged veteran, currently pursuing a Bachelor's degree in Computer Science. 
                        I'm a dedicated software professional and data analyst excited to design, develop, and launch meaningful 
                        technologies. I'm willing to work as a project team member and individually as required. I'm goal oriented, 
                        organized and adapts well to new environments. I'm seeking a position where I can use my skills to help 
                        improve an organization, tackle new challenges, improve problem solving skills and expand knowledge.
                    </p>
                    <div className="flex justify-center">
                        <a 
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a 
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo.svg"
          />
                </div>
            </div>
        </section>
    );
}

export default About;