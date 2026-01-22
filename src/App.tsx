import React from 'react';
import { PERMISSIONS, SECURITY_TIPS } from './constants';
import PermissionCard from './PermissionCard'; // এখানে পরিবর্তন করা হয়েছে

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg text-indigo-600">
              <i className="fa-solid fa-shield-halved text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight leading-tight">DroidGuard</h1>
              <p className="text-indigo-100 text-xs font-medium">Developer Security & Privacy Awareness</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Policy Notice / Refusal Section */}
        <section className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-amber-500 mt-1">
              <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
            </div>
            <div>
              <h2 className="text-amber-900 font-bold text-lg mb-2">Notice: Ethical Development Policy</h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                As a professional software engineer, I cannot fulfill requests to generate code intended for unauthorized data collection (spyware), background exfiltration of personal information (contacts, location), or instructions on bypassing software licensing. Such activities violate privacy standards and software integrity policies. Instead, this platform serves as an educational resource for building secure and ethical applications.
              </p>
            </div>
          </div>
        </section>

        {/* Permission Awareness Grid */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">Permission Risk Profiles</h2>
            <p className="text-slate-500">Understanding why certain permissions are considered sensitive and how they are abused.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERMISSIONS.map((perm) => (
              <PermissionCard key={perm.id} permission={perm} />
            ))}
          </div>
        </section>

        {/* Security & Best Practices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section>
            <h2 className="text-2xl font-black text-slate-800 mb-6">Critical Security Knowledge</h2>
            <div className="space-y-6">
              {SECURITY_TIPS.map((tip) => (
                <div key={tip.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 uppercase">
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{tip.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{tip.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-black mb-6">How to Stay Safe</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300 mb-1">Least Privilege Principle</h4>
                  <p className="text-slate-400 text-sm">Always request only the minimum set of permissions your app needs to function. Avoid broad permissions like "Read SMS" if you only need "Receive SMS".</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300 mb-1">Transparent Disclosures</h4>
                  <p className="text-slate-400 text-sm">Inform users exactly why you need a permission *before* the system dialog appears. Use "Rationale Strings" to explain the benefit.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-300 mb-1">Avoid Remote Exfiltration</h4>
                  <p className="text-slate-400 text-