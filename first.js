var app = angular.module('myapp', []);

app.controller('myCtrl', function($scope, $sce) {
    var initialAboutMeContent = `
        <h1 style="color: #fcfcfc;font-weight: 600;line-height: 1.3;">About Me</h1>
        <div class="line"></div>
        <br>
       My name is Aditya Sahni, and I am a third-year student at the University of Petroleum and Energy Studies (UPES), pursuing a Bachelor of Technology in Computer Science with a specialization in Cloud Computing. I have a deep passion for technology and a relentless drive to tackle new challenges and opportunities that enhance my skills. I thrive in collaborative environments, working towards collective goals, and I am always eager to learn and improve.
        <br><br>
       During my academic journey, I have gained extensive hands-on experience with various cloud platforms, including <b style="font-weight: 600;">AWS</b>. I have worked on projects involving <b style="font-weight: 600;">website hosting, database connectivity</b>,<b style="font-weight: 600;">CloudFront</b>, and <b style="font-weight: 600;">load balancers</b>. Additionally, I have utilized tools like <b style="font-weight: 600;">Power BI</b> for data visualization. My interests also extend to web development, particularly backend development using <b style="font-weight: 600;">Node.js</b>. I am proficient in frontend development and have practical knowledge of databases, including <b style="font-weight: 600;">MySQL</b> and <b style="font-weight: 600;">MongoDB</b>. My technical expertise is further enhanced by my strong ability to work effectively within a team.
        <br><br>
      My ultimate goal is to become a well-rounded cloud architect with expertise in designing, deploying, and managing cloud-based solutions. I am particularly interested in exploring the intersection of cloud computing with emerging technologies like artificial intelligence and machine learning. As I continue to grow and learn, I am excited about the future and the myriad opportunities it holds in the ever-evolving world of technology.
        
     
    `;
  //  <h2 style="color: #fcfcfc;font-size: 1.5rem;font-weight: 600;line-height: 1.3;">What I'm Doing</h2>
    $scope.aboutMeContent = $sce.trustAsHtml(initialAboutMeContent);

    $scope.myresume = function() {
        var resumeHtml = `
            <h1 style="color: #fcfcfc;font-weight: 600;line-height: 1.3;">Resume</h1>
            <div class="line"></div>
            <br>
             <div class="experience">
            <h2>Experience</h2>
            <div class="job">
                <h3>DIGIIWEE <span>as Backend Intern</span></h3>
                <p><span>June 2024 - July  2024</span></p>
                 <ul>
                    <li>Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.</li>
                    <li>Developed the backend for the Urban Next landing page, enabling direct data transmission to the owner's email.</li>
                </ul>
            </div>
            <div class="job">
                <h3>Lion Parcel <span>as Site Reliability Engineer (SRE)</span></h3>
                <p><span>Jan 2021 - May 2024</span></p>
                <ul>
                    <li>Provide technical support and assistance to developers, addressing their problems and needs, ensuring smooth development processes.</li>
                    <li>Utilize JIRA for project management and issue tracking, ensuring efficient collaboration and task management.</li>
                    <li>Develop and maintain an automated CI/CD pipeline using Jenkins, enabling seamless code deployment for every release.</li>
                    <li>Create and maintain deployment processes for mobile apps on Android and iOS platforms, ensuring efficient and reliable distribution.</li>
                    <li>Provision infrastructure, servers, and services using Terraform, enabling scalable and consistent deployment and management.</li>
                    <li>Set up and monitoring, tracing, and logging tools such as ELK, Grafana, and Datadog, ensuring comprehensive visibility into system performance and issues.</li>
                    <li>Implement monitoring alerts for services, databases, and logs, reducing the occurrence of errors in production environments.</li>
                </ul>
            </div>
        </div>
    </div>
    <h2 style="color:white">Skills</h2>
    <div class="skills-container">
        <div class="skill-level">
            <span>Google Cloud Platform:</span>
        </div>
        <div class="skill-level">
            <span>Amazon Web Service:</span>
        </div>
        <div class="skill-level">
            <span>Linux Environment:</span>
        </div>
        <div class="skill-level">
            <span>Network Administrator:</span>
        </div>
        <div class="skill-level">
            <span>Infrastructure as Code:</span>
        </div>
        <div class="skill-level">
            <span>Automation and scripting:</span>
        </div>
        <div class="skill-level">
            <span>CICD:</span>
        </div>
        <div class="skill-level">
            <span>Git:</span>
        </div>
    </div>
        `;
        $scope.aboutMeContent = $sce.trustAsHtml(resumeHtml);
    };

    $scope.myportfolio = function() {
        var portfolioHtml = `
            <h1 style="color: #fcfcfc;font-weight: 600;line-height: 1.3;">Projects</h1>
            <div class="line"></div>
            <br>
           <div class="projects-container">
    <div class="project-box">
        <img src="project1.jpg" alt="Project 1 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Voting-System-Application</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="https://github.com/Adityasahni04/Voting-System-Backend-Application-">Git Hub</a></button>
                <button class="btn-more-info"><a href="notfound.html">Live Demo</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="project2.png" alt="Project 2 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">URL-Shortener</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="https://github.com/Adityasahni04/URL-Shortener">Git Hub</a></button>
                <button class="btn-more-info"><a href="notfound.html">Live Demo</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="project3.jpg" alt="Project 3 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">LinkLite-DiscordBot</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="https://github.com/Adityasahni04/LinkLite-DiscordBot">Git Hub</a></button>
                <button class="btn-more-info"><a href="notfound.htmll">Live Demo</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg" alt="Project 4 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Project 4</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="project4.html">Git Hub</a></button>
                <button class="btn-more-info"><a href="notfound.html">Live Demo</a></button>
            </div>
        </div>
    </div>
</div>

        `;
        $scope.aboutMeContent = $sce.trustAsHtml(portfolioHtml);
    };

    $scope.myBlog = function() {
        var blogHtml = `
            <h1 style="color: #fcfcfc;font-weight: 600;line-height: 1.3;">BLOG</h1>
            <div class="line"></div>
            <br>
           <div class="projects-container">
    <div class="project-box">
        <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg" alt="Project 1 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Blog 1</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="notfound.html">Read More</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg" alt="Project 2 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Blog 2</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="notfound.html">Read More</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg" alt="Project 3 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Blog 3</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="notfound.html">Read More</a></button>
            </div>
        </div>
    </div>
    <div class="project-box">
        <img src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg" alt="Project 4 Image" class="project-image">
        <div class="project-content">
            <div class="project-title">Blog 4</div>
            <div class="project-buttons">
                <button class="btn-view"><a href="notfound.html">Read More</a></button>
            </div>
        </div>
    </div>
</div>
        `;
        $scope.aboutMeContent = $sce.trustAsHtml(blogHtml);
    };

    $scope.myContact = function() {
        var contactHtml = `
            <h1 style="color: #fcfcfc;font-weight: 600;line-height: 1.3;">CONTACT</h1>
            <div class="line"></div>
            <br>
            <p>Open for opportunities: <b>Yes</b></p>
            <h2 style="color: #fcfcfc;font-size: 1.5rem;font-weight: 600;line-height: 1.3;">Contact Form</h2>
            <form class="myform" action="/submit-form" method="POST">
                <input type="text" placeholder="Full name" class="inputbox" name="fullname">
                <input type="text" placeholder="Email address" class="inputbox" name="email">
                <input type="text" placeholder="Your message" class="inputbox1" name="message" >
                <br>
                <button class="submit-btn"><i class="fas fa-paper-plane"></i> Submit</button>            
            </form>
        `;
        $scope.aboutMeContent = $sce.trustAsHtml(contactHtml);
    };

    $scope.aboutMe = function() {
        $scope.aboutMeContent = $sce.trustAsHtml(initialAboutMeContent);
    };
});
