import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Giridhar</h1>
        <h2 className="text-2xl mt-2">Engineering</h2>
        <p className="mt-4 text-lg">Passionate about technology, problem solving, and innovation.</p>
        <div className="mt-6">
          <Image 
            src="/profile.jpg" 
            alt="Your Name" 
            width={150} 
            height={150} 
            className="rounded-full mx-auto"
          />
        </div>
      </header>

      <main className="px-6 py-12 max-w-4xl mx-auto">
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-blue-600">Skills</h3>
          <ul className="list-disc text-blue-500 pl-6 mt-4">
            <li>Software Development</li>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
            <li>Embedded Systems</li>
            <li>Project Management</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-blue-600">Projects</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Project 1 - Description of your first project
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Project 2 - Description of your second project
              </a>
            </li>
            <li>
              <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Project 3 - Description of your third project
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-blue-600">Contact</h3>
          <p className="mt-4 text-blue-500">Email: your.email@example.com</p>
          <p className="mt-2 text-blue-600">
            LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Your LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
