// frontend/src/components/TranscriptPanel.tsx
import { useState, useRef } from "react";

function TranscriptPanel() {
    const [recording, setRecording] = useState(false);

    const options = {mimeType: "audio/webm;codecs=opus"};
    const recorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const handleClick = () => {
        // TODO MeddiaStream and recorderRef
    }


    return (
      <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50 h-full hover:shadow-purple-500/10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/50">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
          <h2 className="text-gray-100 text-xl font-bold tracking-tight">Voice Transcript</h2>
          <div className="ml-auto">
            <span className="text-xs text-gray-500 bg-slate-700/50 px-2 py-1 rounded-full">Live</span>
          </div>
        </div>
        
        {/* Transcript Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {/* Sample Message 1 */}
          <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200 hover:bg-slate-700/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  "Click on the search button"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>0:00:12</span>
                  <span>•</span>
                  <span className="text-green-400">Processed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Message 2 */}
          <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-200 hover:bg-slate-700/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  "Type React tutorial in the search box"
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>0:00:18</span>
                  <span>•</span>
                  <span className="text-green-400">Processed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Empty State */}
          <div className="text-center py-8 opacity-50">
            <svg className="w-16 h-16 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <p className="text-sm text-gray-600">Start recording to see transcripts...</p>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-slate-700/50 pt-4">
          {/* Control Buttons */}
          <div className="flex gap-2">
            <button onClick={handleClick} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Start Recording
            </button>
            <button className="p-3 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover:text-red-400 transition-colors" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
}
export default TranscriptPanel;
  