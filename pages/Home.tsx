import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, AlertTriangle, GraduationCap, Users, ArrowRight, Activity } from 'lucide-react';
import StatsChart from '../components/StatsChart';
import { StatData } from '../types';

// Mock Data
const mockStats: StatData[] = [
  { year: '2019', rate: 9.2, youthRate: 24.9 },
  { year: '2020', rate: 11.9, youthRate: 31.2 },
  { year: '2021', rate: 12.3, youthRate: 31.8 },
  { year: '2022', rate: 11.8, youthRate: 32.7 },
  { year: '2023', rate: 13.0, youthRate: 35.8 },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Unemployment in <span className="text-morocco-red">Morocco</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            Understanding the challenges, analyzing the causes, and exploring the impact of labor market dynamics in the Kingdom.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-morocco-red hover:bg-red-700 md:text-lg md:px-10 transition-all shadow-lg shadow-red-900/20"
            >
              Get Involved
            </Link>
            <a 
              href="#stats" 
              className="px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:text-white hover:bg-slate-800 md:text-lg md:px-10 transition-all"
            >
              View Data
            </a>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-lg mb-4">
                <Activity className="w-6 h-6 text-morocco-red" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Unemployment?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Unemployment occurs when individuals who are employable and actively seeking a job are unable to find work. In Morocco, this is measured by the High Commission for Planning (HCP).
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                It serves as a key economic indicator. A high unemployment rate often signals economic distress, while a very low rate might indicate an overheating economy.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="absolute -inset-4 bg-morocco-green/10 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://picsum.photos/600/400" 
                alt="People working" 
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes & Consequences Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Causes & Consequences</h2>
            <p className="mt-4 text-slate-600">The complex factors driving unemployment and their societal impact.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Causes */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-2" />
                Major Causes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 text-morocco-red mt-1">1</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Skills Mismatch</h4>
                    <p className="text-slate-600 text-sm mt-1">Disparity between education system outputs and labor market needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 text-morocco-red mt-1">2</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Agricultural Dependency</h4>
                    <p className="text-slate-600 text-sm mt-1">Reliance on rainfall makes the economy vulnerable to droughts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 text-morocco-red mt-1">3</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Structural Issues</h4>
                    <p className="text-slate-600 text-sm mt-1">Slow industrialization in rural areas and limited private sector absorption.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Consequences */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                Societal Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">1</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Economic Strain</h4>
                    <p className="text-slate-600 text-sm mt-1">Reduced consumer spending and increased burden on social welfare.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">2</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Brain Drain</h4>
                    <p className="text-slate-600 text-sm mt-1">High-skilled youth emigrating for better opportunities abroad.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-1">3</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">Social Instability</h4>
                    <p className="text-slate-600 text-sm mt-1">Increased risk of crime, mental health issues, and social unrest.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Statistical Overview</h2>
              <p className="mt-2 text-slate-600">Key indicators tracked over the last 5 years.</p>
            </div>
            <div className="mt-4 md:mt-0">
               <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Updated: Oct 2023
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <StatsChart data={mockStats} />
            </div>
            
            <div className="grid gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-700">Current Rate</h4>
                  <TrendingUp className="w-5 h-5 text-morocco-red" />
                </div>
                <div className="text-4xl font-bold text-slate-900">13.0%</div>
                <p className="text-sm text-red-600 mt-2 flex items-center">
                  <ArrowRight className="w-4 h-4 rotate-[-45deg] mr-1" /> 
                  +1.2% from last year
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-700">Youth (15-24)</h4>
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-4xl font-bold text-slate-900">35.8%</div>
                <p className="text-sm text-slate-500 mt-2">
                  Highest demographic impact
                </p>
              </div>

               <div className="bg-morocco-red p-6 rounded-xl text-white shadow-lg">
                <h4 className="font-semibold opacity-90 mb-2">Need more insights?</h4>
                <p className="text-sm opacity-80 mb-4">Create an account to access detailed reports and articles.</p>
                <Link to="/signup" className="inline-block w-full text-center bg-white text-morocco-red font-semibold py-2 rounded-lg hover:bg-slate-100 transition-colors">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;