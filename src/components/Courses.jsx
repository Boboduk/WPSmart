import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: 'Разработка веб-приложений',
    description: 'Научитесь создавать современные веб-приложения с использованием React, Node.js и других технологий.',
    duration: '6 месяцев',
    level: 'Начинающий'
  },
  {
    id: 2,
    title: 'Python разработка',
    description: 'Освойте Python и создавайте приложения для анализа данных, машинного обучения и веб-разработки.',
    duration: '4 месяца',
    level: 'Начинающий'
  },
  {
    id: 3,
    title: 'Кибербезопасность',
    description: 'Изучите основы информационной безопасности и защиты компьютерных систем.',
    duration: '5 месяцев',
    level: 'Средний'
  },
    {
    id: 4,
    title: 'Кибербезопасность провинутый',
    description: 'Изучите основы информационной безопасности и защиты компьютерных систем.',
    duration: '5 месяцев',
    level: 'Высокий'
  }
];

const Courses = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Популярные курсы
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Выберите направление и начните обучение уже сегодня
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-500">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Длительность: {course.duration}</span>
                  <span className="text-sm text-gray-500">Уровень: {course.level}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;