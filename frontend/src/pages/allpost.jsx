import React from 'react';
import QuestionCard from '../components/QuestionCard';

const Allpost = () => {
  return (
    <main className="min-h-screen bg-dark flex justify-center selection:bg-primary/30">
      <div className="w-full max-w-3xl px-4 py-8 space-y-6">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </main>
  );
};

export default Allpost;