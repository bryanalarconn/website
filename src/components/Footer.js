export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span>© {year} Bryan Alarcon. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
