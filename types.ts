import React from 'react';

export interface User {
  fullName: string;
  email: string;
}

export interface StatData {
  year: string;
  rate: number;
  youthRate: number;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  description: string;
  icon: React.ReactNode;
}