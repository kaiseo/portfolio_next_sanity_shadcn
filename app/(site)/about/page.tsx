import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <section className="mb-12">
        <div className="relative transition-all duration-300 w-32 h-32 sm:w-48 sm:h-48 mx-auto">
          <Image
            src="/assets/default/mac_profile_character.png"
            alt="3d avatar"
            layout="fill"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          Detail-oriented web developer with 1 year of hands-on experience in
          building responsive and scalable web applications. Leveraging years of
          international exposure to bring diverse perspectives to development
          projects, I have contributed to significant web traffic growth through
          innovative solutions. Proficient with MongoDB, Express.js, React, and
          Node.js, I am actively expanding my expertise to include cutting-edge
          technologies like Next.js and Nest.js. Committed to employing best
          practices in web development to enhance user experience and back-end
          efficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Employment History</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-medium">
            Full Stack Web Developer, Batal Namyangju
          </h3>
          <p className="italic">Feb 2024 — May 2024</p>
          <ul className="list-disc ml-6">
            <li>
              Led the development of a web-based application, making key
              decisions on the use of frameworks and database technologies.
            </li>
            <li>
              Designed and implemented a relational database and back-end server
              architecture, enhancing data integrity and scalability.
            </li>
            <li>
              Developed the company’s responsive landing page using Next.js,
              focusing on optimizing user experience across various devices.
            </li>
            <li>
              Played a pivotal role in team communications, coordinating
              development efforts and ensuring alignment with project goals.
            </li>
            <li>
              Despite the project&apos;s early termination, the foundational
              work laid during this phase contributed significantly to the
              initial setup and design decisions.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-medium">
            Full Stack Web Developer, Mirinae Technologies Seoul
          </h3>
          <p className="italic">Jul 2022 — Mar 2023</p>
          <ul className="list-disc ml-6">
            <li>
              Navigated technical complexities in an international setting,
              rapidly assimilating and deploying cutting-edge technologies to
              enhance system functionalities and support global operations.
            </li>
            <li>
              Implemented a responsive design, ensuring the web application was
              universally accessible on all devices, thus supporting a diverse,
              global user base.
            </li>
            <li>
              Thrived in a multinational team environment, adeptly adapting to
              diverse cultural dynamics, which facilitated effective
              collaboration and communication with international colleagues and
              clients.
            </li>
            <li>
              Conducted user interviews across multiple countries, leveraging
              well-established cross-cultural communication skills to gather and
              implement feedback, ensuring product refinement was informed by
              diverse global perspectives.
            </li>
            <li>
              Participated actively in web application launches, contributing to
              a process that resulted in a 20% increase in traffic and a 15%
              boost in user engagement, aligning with strategies tailored to
              meet international market demands.
            </li>
            <li>
              Utilized Google Analytics to formulate strategies, leveraging
              detailed insights to expand the company’s reach and influence in
              foreign markets, enhancing overall business metrics.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-medium">
            Operations and Customer Service Coordinator, Knee on Belly Korea
            Inc. Seoul
          </h3>
          <p className="italic">Nov 2021 — May 2022</p>
          <ul className="list-disc ml-6">
            <li>
              Managed daily operations for a small e-commerce brand, including
              customer service, inventory management, and content updates using
              the Shopify platform.
            </li>
            <li>
              Handled customer inquiries and resolved issues, ensuring a high
              level of customer satisfaction and maintaining positive customer
              relationships.
            </li>
            <li>
              Managed and updated inventory on Shopify, coordinating logistics
              to ensure timely product availability and accurate stock levels.
            </li>
            <li>
              Assisted with the implementation of marketing strategies that
              increased brand visibility and online sales.
            </li>
            <li>
              Utilized Shopify analytics to monitor sales trends and customer
              engagement, making data-informed decisions to optimize the online
              store’s performance.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <ul className="list-disc ml-6">
          <li>
            Bachelor of Science in Computer Science, Open National University
            Seoul (Mar 2020 — Feb 2024)
          </li>
          <li>AA-T in Music, Los Angeles City College, Los Angeles</li>
          <li>
            California State University, Los Angeles, Los Angeles (Drop-out)
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc ml-6">
          <li>JavaScript, HTML, CSS, React, Next.js, MongoDB, Node.js</li>
          <li>MySQL, PostgreSQL, Python, TypeScript</li>
          <li>Git, Docker, Bootstrap, TailwindCSS</li>
          <li>Microsoft Office, Linux, RESTful API</li>
          <li>Agile methodologies, Responsive design</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Languages</h2>
        <ul className="list-disc ml-6">
          <li>English (Highly proficient)</li>
          <li>Korean (Native speaker)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Courses</h2>
        <ul className="list-disc ml-6">
          <li>
            Full Stack Java/Spring Web Development Course, ITWILL (Jun 2019 —
            Dec 2019)
          </li>
          <li>
            The Complete Web Development Bootcamp, Udemy (Jan 2021 — Mar 2021)
          </li>
          <li>React - The Complete Guide 2023, Udemy (May 2023 — Aug 2023)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Soft Skills</h2>
        <ul className="list-disc ml-6">
          <li>
            Strong Communication: Experienced in articulating complex technical
            details to non-technical stakeholders.
          </li>
          <li>
            Team Collaboration: Proven ability to work effectively in diverse
            team environments and lead cross-functional projects.
          </li>
          <li>
            Problem Solving: Skilled in identifying issues quickly and applying
            effective solutions under pressure.
          </li>
          <li>
            Adaptability: Adept at adjusting to new technologies and changing
            business requirements with a positive attitude.
          </li>
          <li>
            Time Management: Proficient in managing multiple projects
            simultaneously with strict deadlines.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
