import React, { useEffect, useState } from 'react';

const SummernoteEditor = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [documentType, setDocumentType] = useState('general');
  
  useEffect(() => {
    $('#summernote').summernote({
      height: 300,
      placeholder: 'Start drafting your legal document here...',
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ]
    });
  }, []);

  const documentTypes = [
    { value: 'general', label: 'General Legal Document' },
    { value: 'contract', label: 'Contract Agreement' },
    { value: 'nda', label: 'Non-Disclosure Agreement' },
    { value: 'lease', label: 'Lease Agreement' },
    { value: 'letter', label: 'Legal Letter' },
    { value: 'motion', label: 'Legal Motion' }
  ];

  const handleAIClick = async () => {
    setIsGenerating(true);
    try {
      const selectedText = $('#summernote').summernote('code');
      const prompt = `Generate a professional ${documentType} legal document based on this input. Only respond with a clear and properly formatted legal draft. Do not add explanations. Draft: ${selectedText}`;

      const response = await fetch('https://lawscribe.arnabdeepnath.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'venice/uncensored:free',
          messages: [
            {
              role: 'system',
              content: 'You are a legal document drafting assistant. Only respond with the draft.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      });

      const data = await response.json();
      const draft = data.choices?.[0]?.message?.content || 'AI failed to return a draft.';
      $('#summernote').summernote('code', draft);
    } catch (error) {
      console.error('Error generating document:', error);
      $('#summernote').summernote('code', $('#summernote').summernote('code') + '\n\nError: Failed to generate AI content. Please try again later.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="documentType" className="form-label">Document Type</label>
        <select 
          id="documentType"
          className="form-select"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        >
          {documentTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>

      <div id="summernote" />
      
      <div className="mt-4 d-flex gap-2">
        <button 
          onClick={handleAIClick} 
          className="btn btn-primary" 
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Generating...
            </>
          ) : (
            <>
              <i className="bi bi-robot me-2"></i>
              Generate with AI
            </>
          )}
        </button>
        
        <button className="btn btn-outline-secondary">
          <i className="bi bi-file-earmark-text me-2"></i>
          Save Draft
        </button>
        
        <div className="dropdown ms-auto">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            <i className="bi bi-download me-2"></i>
            Export
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
            <li><a className="dropdown-item" href="#">Export as DOCX</a></li>
            <li><a className="dropdown-item" href="#">Export as TXT</a></li>
            <li><a className="dropdown-item" href="#">Export as HTML</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummernoteEditor;
