import React, { useState } from 'react';
import TeamMemberForm from './TeamMemberForm';
import NewsForm from './NewsForm';
import { motion } from 'framer-motion';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('team');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Панель администратора</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('team')}
                  className={`${
                    activeTab === 'team'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base`}
                >
                  Управление командой
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`${
                    activeTab === 'news'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base`}
                >
                  Управление новостями
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'team' ? <TeamMemberForm /> : <NewsForm />}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;