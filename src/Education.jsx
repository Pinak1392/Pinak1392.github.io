
export default function Education() {
    const jobs = [
        {
            id: 1,
            company: 'University of Technology Sydney (GPA – 6.29, WAM – 81.57)',
            position: 'Bachelor of Information Technology (Honours)',
            duration: 'July 2023 — December 2024',
            description: 'I completed a Bachelor of Information Technology (Honours), where I specialised in artificial intelligence and audio processing through a research-focused project on timbre transfer models. I explored modern AI architectures, including transformers, diffusion models, and variational autoencoders (VAEs), culminating in a High Distinction thesis that included an in-depth literature review and original technical contributions. As part of this work, I designed and implemented a modification to a stable diffusion model, enhancing its embedding module for timbre transfer, which demonstrated my ability to analyse and adapt complex machine learning systems at the code level.\
 Alongside my research, I also took additional classes in maths and graphics. I developed a strong mathematical and signal processing foundation, gaining proficiency in linear algebra, statistics, discrete mathematics, and Fourier analysis, particularly in the context of audio applications. I also applied my software engineering and graphics skills in practice by building a 3D painting and sculpting application using three.js, combining technical implementation with creative problem-solving. Overall, my degree equipped me with advanced skills in machine learning, mathematical modelling, and full-stack development.',
        },
        {
            id: 2,
            company: 'University of Technology Sydney (GPA – 6.13, WAM – 81.88)',
            position: 'Bachelor of Information Systems',
            duration: 'February 2020 — July 2023',
            description: 'I completed a degree in Information Systems, where I developed a strong foundation in systems design, project management, and data-driven decision-making. My coursework covered the full project lifecycle, from requirements gathering and stakeholder analysis through to system design, implementation planning, and delivery. I gained practical experience using industry-standard modelling techniques, including UML, ERDs, use case diagrams, and sequence diagrams, to design and communicate complex systems effectively.\
\
Throughout the degree, I built expertise in project planning and analysis, including cost estimation, timeline development, and risk assessment. I applied these skills in a team environment by leading the design phase of an automated checkout system, where I was responsible for database design, software selection, and cost analysis within a five-member team.\
\
In addition to systems design, I developed strong technical capabilities across data analytics, machine learning, and software development. I became proficient in Python and tools such as PyTorch, TensorFlow, Pandas, and NumPy, and gained experience working with models including neural networks, CNNs, diffusion models, YOLO, and reinforcement learning techniques. I also developed skills in data visualisation using Tableau and analytical workflows using KNIME.\
\
My studies were further supported by a solid understanding of networking, cybersecurity, and database systems. I gained hands-on experience with network protocols, the OSI model, and error correction, as well as cybersecurity practices such as intrusion detection and firewall configuration. I am also experienced in designing and normalising SQL databases up to 5NF and working within Unix-based environments, including Linux and Kali Linux.',
        },
        {
            id: 3,
            company: 'Gungahlin College (ATAR - 86.4)',
            position: 'Senior Secondary Education',
            duration: 'February 2018 —February 2019',
            description: 'I completed my Senior Secondary education at Gungahlin College, majoring in Specialist Mathematics, Physics, and Information Technology (Web Development and Programming). During this time, I developed a strong foundation in both theoretical and applied computing, alongside advanced mathematical and physical sciences.\
\
I explored topics such as Markov chains and Hidden Markov Models, which led to the development of a text-to-speech program that I presented at PyCon, demonstrating early experience in machine learning concepts and technical communication. I also applied my programming skills to a range of practical projects, including designing a basic interpreter within an educational game to teach programming concepts, and developing a LAN-based Dungeons & Dragons game using web sockets.\
\
Through these experiences, I became proficient in Python, including object-oriented programming, as well as JavaScript, Flask-based web development, and SQLite database design. My academic studies provided a strong grounding in advanced mathematics—including calculus, probability, linear algebra, and complex numbers—and core physics concepts such as mechanics, electromagnetism, and introductory modern physics topics.\
\
Overall, this education established my early interest and capability in software development, mathematical modelling, and problem-solving, forming a strong foundation for my later studies in Information Technology and Information Systems.',
        },
    ];

    return (
        <div className="employment">
            <h2 id="EducationTitle">Education History</h2>
            <div className="jobs-container EducationContainer">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h3>{job.position}</h3>
                        <div className="company-duration">
                            <p className="company">{job.company}</p>
                            <p className="duration">{job.duration}</p>
                        </div>
                        <p className="description">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}