import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative container">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Web Developer</h3>
          <p className="text-muted-foreground">
            With over 3 years of experience in the industry, I specialize in
            creating responsive, accessible, and user-friendly web applications.
          </p>

          <p className="text-muted-foreground">
            I'm a level 3 student at Algonquin College studying computer
            programming. I'm a passionate developer with a drive for learning
            new technologies and I'm always looking for new challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
            <a href="#contact" className="cosmic-button">
              Contact Me
            </a>
            <a
              href="../assets/Resume.pdf"
              download="Resume.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold"> Web Development</h4>
                <p className="text-muted-foreground">
                  Developed a web application with client and admin interfaces,
                  utilizing PHP for backend and MySQL for database management.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold">Design</h4>
                <p className="text-muted-foreground">
                  Designing intuitive user interfaces and seamless user
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold"> Project Management</h4>
                <p className="text-muted-foreground">
                  Guided team projects by delegating tasks and from conception
                  to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-border card-hover">
          <img
            src="/public/projects/profileImg.png"
            alt="profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
