import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IntroAnimation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <style>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .intro-logo {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .intro-text {
          opacity: 0;
          animation: slideUpFade 0.8s ease-out 0.5s forwards;
        }
      `}</style>
      
      <div className="intro-logo mb-8 p-6 bg-white rounded-full shadow-2xl shadow-blue-500/30">
        <div className="w-16 h-16 flex items-center justify-center">
            {/* Star Shape representing Morocco */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-morocco-red">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        </div>
      </div>

      <div className="text-center px-4">
        <h1 className="intro-text text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Morocco <span className="text-blue-400">Job Insights</span>
        </h1>
        <p className="intro-text text-blue-200 text-lg md:text-xl font-light mt-4" style={{ animationDelay: '0.7s' }}>
          Navigating the Future of Work
        </p>
      </div>

      {/* Loading Bar */}
      <div className="intro-text mt-12 w-48 h-1 bg-blue-900/50 rounded-full overflow-hidden" style={{ animationDelay: '0.9s' }}>
        <div className="h-full bg-blue-400 animate-[loading_2.5s_ease-in-out_forwards] w-0"></div>
      </div>
    </div>
  );
};

export default IntroAnimation;