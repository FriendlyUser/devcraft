import SvgPlaceholder from './SvgPlaceholder';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <AnimatedLogo className="text-indigo-400" />
            <span className="text-xl font-bold tracking-tight text-white">DevCraft</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            Building the future of software, one line of code at a time. We partner with ambitious companies to create extraordinary digital products.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10"><SvgPlaceholder className="w-full h-full rounded-full bg-slate-800 border-slate-700" text="X" /></div>
             <div className="w-10 h-10"><SvgPlaceholder className="w-full h-full rounded-full bg-slate-800 border-slate-700" text="In" /></div>
             <div className="w-10 h-10"><SvgPlaceholder className="w-full h-full rounded-full bg-slate-800 border-slate-700" text="Gh" /></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Mobile Apps</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Cloud Architecture</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">UI/UX Design</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} DevCraft Consultancy. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
