import { useState, useEffect } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState('Checking connection...');
  const [isUploading, setIsUploading] = useState(false);

  // Connect to our Node.js Core API Gateway (Running on port 3001)
  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then((res) => res.json())
      .then((data) => setApiStatus(`🟢 Gateway: ${data.status}`))
      .catch(() => setApiStatus('🔴 Gateway: Disconnected'));
  }, []);

  // Mock function for the upload button
  const handleMockUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      alert('Mock upload complete! Next step: connect this to Node.js');
    }, 1500);
  };

  return (
    <div className="min-h-screen p-8 font-sans">
      {/* Header Area */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-indigo-600">NexusIQ</h1>
          <p className="text-sm text-slate-500 mt-1">Enterprise Meeting Intelligence</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium">
          {apiStatus}
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Upload & Controls */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold mb-4">Ingest Meeting</h2>
            
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-3">🎙️</div>
              <p className="text-sm text-slate-600 mb-4">Drag & drop audio here, or click to browse</p>
              <button 
                onClick={handleMockUpload}
                disabled={isUploading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
              >
                {isUploading ? 'Processing...' : 'Upload Audio (.mp3, .wav)'}
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: AI Analysis & Transcripts */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b pb-4">
              <h2 className="text-lg font-semibold">Live Analysis & Graph-RAG</h2>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Awaiting Data</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
              Upload a meeting to begin semantic extraction and multi-agent workflows.
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}

export default App;