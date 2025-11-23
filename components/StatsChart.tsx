import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { StatData } from '../types';

interface StatsChartProps {
  data: StatData[];
}

const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-800 mb-6 pl-2 border-l-4 border-morocco-red">
        Unemployment Trends (Last 5 Years)
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c1272d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#c1272d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorYouth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="year" 
            tick={{ fill: '#64748b' }} 
            axisLine={false} 
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#64748b' }} 
            axisLine={false} 
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }}
            itemStyle={{ color: '#1e293b' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Area 
            type="monotone" 
            dataKey="rate" 
            name="General Unemployment Rate"
            stroke="#c1272d" 
            fillOpacity={1} 
            fill="url(#colorRate)" 
          />
          <Area 
            type="monotone" 
            dataKey="youthRate" 
            name="Youth Unemployment (15-24)"
            stroke="#3b82f6" 
            fillOpacity={1} 
            fill="url(#colorYouth)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;