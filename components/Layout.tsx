import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User as UserIcon, LayoutDashboard } from 'lucide-react';
import { User } from '../types';

interface LayoutProps {
  user: User | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/home" className="flex-shrink-0 flex items-center gap-2" onClick={closeMenu}>
                <div className="w-8 h-8 bg-morocco-red rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 text-morocco-green text-xs font-bold">★</div>
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-800">Morocco<span className="text-morocco-red">Jobs</span>Data</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/home" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/home') ? 'text-morocco-red bg-red-50' : 'text-slate-600 hover:text-morocco-red hover:bg-slate-50'}`}
              >
                Home
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-morocco-red bg-red-50' : 'text-slate-600 hover:text-morocco-red hover:bg-slate-50'}`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                  <div className="h-6 w-px bg-slate-300 mx-2"></div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-700">{user.fullName}</span>
                    <button 
                      onClick={onLogout}
                      className="p-2 text-slate-500 hover:text-red-600 transition-colors"
                      title="Sign Out"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/signin" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-morocco-red transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="px-4 py-2 text-sm font-medium text-white bg-morocco-red hover:bg-red-800 rounded-lg shadow-sm transition-all"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-morocco-red"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/home" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-morocco-red hover:bg-slate-50"
                onClick={closeMenu}
              >
                Home
              </Link>
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-morocco-red hover:bg-slate-50"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                  <div className="border-t border-slate-200 pt-4 pb-2">
                    <div className="flex items-center px-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-slate-500" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-slate-800">{user.fullName}</div>
                        <div className="text-sm font-medium text-slate-500">{user.email}</div>
                      </div>
                    </div>
                    <div className="mt-3 px-2">
                      <button
                        onClick={() => { onLogout(); closeMenu(); }}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/signin" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-morocco-red hover:bg-slate-50"
                    onClick={closeMenu}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-morocco-red font-bold hover:bg-slate-50"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">Morocco<span className="text-morocco-red">Jobs</span>Data</h2>
              <p className="mt-2 text-slate-400 text-sm max-w-xs">
                Analyzing the economic landscape and employment challenges in Morocco to foster understanding and solutions.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Morocco Employment Insights. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;