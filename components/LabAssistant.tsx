
import React, { useState } from 'react';
import { generateLabIdea } from '../services/geminiService';

const LabAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);
    const idea = await generateLabIdea(prompt);
    setResult(idea);
    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
          <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Showcase
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Brainstorm with the Lab Assistant</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Have an idea for a new AI experiment? Pitch it to our virtual Lab assistant and see what the future might look like.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-12">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., An AI that converts dreams into music..."
          className="w-full bg-[#111] border border-white/10 rounded-full py-5 px-8 pr-32 focus:outline-none focus:border-blue-500/50 transition-all text-lg shadow-2xl"
        />
        <button 
          disabled={loading}
          type="submit"
          className="absolute right-2 top-2 bottom-2 bg-white text-black font-semibold px-6 rounded-full hover:bg-white/90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Submit Idea'}
        </button>
      </form>

      {loading && (
        <div className="flex flex-col items-center gap-4 py-12">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-white/40 font-medium animate-pulse italic">Connecting to Gemini Brain...</p>
        </div>
      )}

      {result && (
        <div className="bg-[#111] border border-white/10 p-8 rounded-3xl text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed text-white/80 text-lg">
              {result}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LabAssistant;
