"use client"
import React, { useState } from 'react';
import { FileText, ArrowLeft, ArrowRight } from 'lucide-react';

export default function SeniorProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text 
            bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 
            dark:from-primary-300 dark:via-primary-200 dark:to-secondary-300"
          >
            Senior Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Voice Authentication Mechanism for Secure Voice Calls
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 hover:bg-primary-600 transition"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 hover:bg-primary-600 transition"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            <div className="w-full aspect-[4/5] border rounded-lg overflow-hidden mb-4">
              <iframe 
                src="/api/pdf"
                width="100%" 
                height="100%" 
                title="Senior Project PDF"
                className="w-full h-full"
              />
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="/api/pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800/70 text-white px-4 py-2 rounded-lg hover:bg-gray-800/90 transition"
              >
                <FileText size={20} />
                <span>View Full PDF</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            This senior project presents an innovative voice authentication mechanism designed to enhance security in voice communication. The research explores a multi-model approach using advanced machine learning techniques to detect audio spoofing and verify speaker identity in real-time voice calls.
          </p>
        </div>
      </div>
    </div>
  );
}