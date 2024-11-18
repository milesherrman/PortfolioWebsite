export default function Footer() {
    // Social links - could be moved to a config file
    const socialLinks = [
      { name: 'GitHub', href: 'https://github.com/milesherrman' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/milesherrman' }
    ]
  
    // Footer links - could be moved to a config file
    const footerLinks = [
      { name: 'Projects', href: '#projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ]
  
    return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-wrapper py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Miles Herrman
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Full-stack developer passionate about creating modern web applications
                and solving complex problems.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    
            
                      {link.name}
                
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Connect Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    
                    
                      {link.name}
               
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Miles Herrman. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }