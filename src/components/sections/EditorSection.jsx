import React from 'react';
import SummernoteEditor from '../SummernoteEditor';

const EditorSection = () => {
  return (
    <section id="editor" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our AI Document Editor</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-assisted legal document creation. Write or paste your draft below and let our AI enhance it.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100 max-w-5xl mx-auto">
          <SummernoteEditor />
          
          <div className="mt-8 border-t border-gray-100 pt-6">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-semibold mb-2">Available Document Formats:</h4>
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">DOCX</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">PDF</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">TXT</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">HTML</span>
                </div>
              </div>
              
              <div>
                <button className="btn btn-outline-primary me-2">
                  <i className="bi bi-download me-1"></i> Export
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-share me-1"></i> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;
