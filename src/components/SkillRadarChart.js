import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const SkillRadarChart = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animationStep, setAnimationStep] = useState(0);

  // Skill data based on your portfolio and certifications
  const skillsData = [
    { skill: 'React.js', level: 90, category: 'frontend', color: '#61DAFB' },
    { skill: 'JavaScript', level: 85, category: 'frontend', color: '#F7DF1E' },
    { skill: 'HTML/CSS', level: 88, category: 'frontend', color: '#1572B6' },
    { skill: 'Tailwind CSS', level: 85, category: 'frontend', color: '#38B2AC' },
    { skill: 'Node.js', level: 75, category: 'backend', color: '#339933' },
    { skill: 'Python', level: 70, category: 'backend', color: '#3776AB' },
    { skill: 'Generative AI', level: 80, category: 'ai', color: '#FF6B6B' },
    { skill: 'Prompt Engineering', level: 85, category: 'ai', color: '#4ECDC4' },
    { skill: 'Cybersecurity', level: 75, category: 'security', color: '#45B7D1' },
    { skill: 'SEO', level: 80, category: 'marketing', color: '#96CEB4' },
    { skill: 'Digital Marketing', level: 78, category: 'marketing', color: '#FFEAA7' },
    { skill: 'Excel', level: 85, category: 'tools', color: '#00B894' },
    { skill: 'Git/GitHub', level: 80, category: 'tools', color: '#F05032' },
    { skill: 'Data Analysis', level: 72, category: 'tools', color: '#6C5CE7' }
  ];

  const categories = {
    all: 'All Skills',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    ai: 'AI/ML Technologies',
    security: 'Cybersecurity',
    marketing: 'Digital Marketing',
    tools: 'Tools & Technologies'
  };

  const filteredData = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStep(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-900 text-white p-3 rounded-lg shadow-xl border border-gray-700">
          <p className="font-semibold text-blue-400">{data.skill}</p>
          <p className="text-sm">Level: {data.level}%</p>
          <p className="text-xs text-gray-300 capitalize">Category: {data.category}</p>
        </div>
      );
    }
    return null;
  };

  const CustomPolarAngleAxis = (props) => {
    const { payload, x, y, cx, cy, ...rest } = props;
    
    return (
      <text 
        {...rest} 
        x={x} 
        y={y} 
        className="text-sm font-medium fill-gray-300 hover:fill-white transition-colors duration-200"
        textAnchor={x > cx ? 'start' : x < cx ? 'end' : 'middle'}
        dominantBaseline={y > cy ? 'start' : y < cy ? 'end' : 'middle'}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg">Interactive visualization of my expertise levels</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === key
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Radar Chart */}
      <div className="relative">
        <ResponsiveContainer width="100%" height={500}>
          <RadarChart data={filteredData} margin={{ top: 40, right: 80, bottom: 40, left: 80 }}>
            <PolarGrid 
              stroke="#374151" 
              strokeWidth={1}
              className="opacity-50"
            />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={<CustomPolarAngleAxis />}
              className="text-sm"
            />
            <PolarRadiusAxis 
              angle={0} 
              domain={[0, 100]} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickCount={6}
              stroke="#4B5563"
            />
            <Radar
              name="Skills"
              dataKey="level"
              stroke="url(#gradient)"
              fill="url(#gradient)"
              fillOpacity={0.3}
              strokeWidth={3}
              dot={{ fill: '#60A5FA', strokeWidth: 2, r: 6 }}
              animationBegin={0}
              animationDuration={1500}
              isAnimationActive={animationStep === 1}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Skill Legend */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Skill Levels</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((skill) => (
            <div
              key={skill.skill}
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-white text-sm">{skill.skill}</span>
                <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animationStep === 1 ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                  }}
                />
              </div>
              <span className="text-xs text-gray-400 capitalize mt-1 block">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
          <h4 className="text-2xl font-bold text-blue-400">
            {Math.round(filteredData.reduce((acc, skill) => acc + skill.level, 0) / filteredData.length)}%
          </h4>
          <p className="text-gray-400 text-sm">Average Proficiency</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
          <h4 className="text-2xl font-bold text-purple-400">{filteredData.length}</h4>
          <p className="text-gray-400 text-sm">Total Skills</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
          <h4 className="text-2xl font-bold text-pink-400">
            {filteredData.filter(skill => skill.level >= 80).length}
          </h4>
          <p className="text-gray-400 text-sm">Expert Level (80%+)</p>
        </div>
      </div>
    </div>
  );
};

export default SkillRadarChart;
