import React from 'react';
import { User, Article, StatCardProps } from '../types';
import { Users, Briefcase, TrendingDown, BookOpen, Clock, ChevronRight } from 'lucide-react';

interface DashboardProps {
  user: User;
}

// Dummy Articles Data
const articles: Article[] = [
  {
    id: 1,
    title: "The Role of Vocational Training in Reducing Unemployment",
    excerpt: "How OFPPT and other institutions are pivoting to meet modern market demands in the automotive and aeronautics sectors.",
    category: "Education",
    date: "Oct 12, 2023",
    imageUrl: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 2,
    title: "Startups in Casablanca: A New Hope for Youth?",
    excerpt: "Analyzing the impact of the Technopark and government grants on youth entrepreneurship rates.",
    category: "Economy",
    date: "Sep 28, 2023",
    imageUrl: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    title: "Rural Employment Challenges in 2024",
    excerpt: "The effects of recent climate shifts on agricultural labor demand in the Atlas regions.",
    category: "Agriculture",
    date: "Sep 15, 2023",
    imageUrl: "https://picsum.photos/400/250?random=3"
  }
];

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, trendUp, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-slate-600">
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      {trend && (
        <span className={`font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
      )}
      <span className="text-slate-400 ml-2">{description}</span>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user.fullName}</h1>
        <p className="text-slate-600 mt-1">Here is the latest overview of the labor market.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard
          title="Total Unemployed"
          value="1.6 Million"
          trend="+4.2%"
          trendUp={false}
          description="vs last quarter"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Youth Rate (15-24)"
          value="35.8%"
          trend="+1.5%"
          trendUp={false}
          description="Urgent demographic"
          icon={<TrendingDown className="w-6 h-6" />}
        />
        <StatCard
          title="Net Jobs Created"
          value="-58,000"
          trend="-12%"
          trendUp={false}
          description="Rural sector impact"
          icon={<Briefcase className="w-6 h-6" />}
        />
      </div>

      {/* Articles Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-morocco-red" />
            Latest Insights & Articles
          </h2>
          <button className="text-sm font-medium text-morocco-red hover:text-red-800 flex items-center">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-xs mb-3">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-morocco-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <button className="text-sm font-medium text-morocco-red hover:underline">
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* AI Promo (Mock) */}
      <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">Want deeper analysis?</h3>
          <p className="text-slate-300 mb-6">Our Premium Data sets include regional breakdowns by region (Casablanca-Settat, Tanger-Tetouan, etc.) and predictive models.</p>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Upgrade to Pro
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-morocco-red/10 skew-x-12 transform translate-x-12"></div>
      </div>
    </div>
  );
};

export default Dashboard;