import React from 'react';

interface PermissionCardProps {
  id: string;
  title: string;
  description: string;
  risk: 'High' | 'Medium' | 'Low';
  icon: string;
}

const PermissionCard: React.FC<PermissionCardProps> = ({ title, description, risk, icon }) => {
  const riskColor = risk === 'High' ? 'text-red-600' : risk === 'Medium' ? 'text-yellow-600' : 'text-green-600';
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 transition-all">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
          <i className={`fa-solid ${icon} text-slate-600`}></i>
        </div>
        <div>
          <h3 className="font-bold text-slate-900">{title}</h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-opacity-10 ${riskColor} bg-current`}>
            {risk} Risk
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PermissionCard;