import React from 'react';

const map = () => {
    return (
        <div className="roadmap-container bg-black text-white py-10 px-4 relative">
            {/* Background image */}
            <img
                src="/path-to-background-image.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
            />

            {/* Grid layout for roadmap blocks */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="roadmap-block col-span-2 bg-opacity-20 bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Q2</h3>
                    <ul className="list-disc list-inside">
                        <li>Developed the JASMY platform and smart contracts</li>
                        <li>Created and tested JASMY tokens</li>
                        <li>Ensured security and functionality through rigorous testing</li>
                    </ul>
                </div>

                <div className="roadmap-block bg-opacity-20 bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Q1</h3>
                    <ul className="list-disc list-inside">
                        <li>Conceptualized the utility token model</li>
                        <li>Established the core team</li>
                        <li>Conducted research and feasibility studies</li>
                        <li>Initial design of the JASMY platform</li>
                    </ul>
                </div>

                <div className="roadmap-block bg-opacity-20 bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Q3</h3>
                    <ul className="list-disc list-inside">
                        <li>Launched JASMY token through an Initial Token Offering (ITO)</li>
                        <li>Engaged with the community and built partnerships</li>
                        <li>Focused on early adopter acquisition and ecosystem development</li>
                    </ul>
                </div>

                <div className="roadmap-block bg-opacity-20 bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Q4</h3>
                    <ul className="list-disc list-inside">
                        <li>Expanded JASMY's use cases across various industries</li>
                        <li>Integrated JASMY tokens with different platforms</li>
                        <li>Formed strategic partnerships to drive token adoption</li>
                    </ul>
                </div>

                <div className="roadmap-block bg-opacity-20 bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Q5</h3>
                    <ul className="list-disc list-inside">
                        <li>Aimed for widespread global adoption of JASMY tokens</li>
                        <li>Continued platform upgrades and scaling operations</li>
                        <li>Enhanced the JASMY ecosystem to meet evolving user needs</li>
                    </ul>
                </div>
            </div>

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full z-0">
                <line x1="10%" y1="15%" x2="50%" y2="50%" stroke="cyan" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="90%" y2="15%" stroke="cyan" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="cyan" strokeWidth="2" />
            </svg>
        </div>
    );
};

export default map;
