
function ExportPanel(){
    return (
        <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-2xl border border-slate-700/50 rounded-2xl col-span-3 p-6 backdrop-blur-xl hover:shadow-pink-500/10 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-700/50 pb-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-white text-xl font-bold tracking-tight">Export Session</h2>
                    <p className="text-slate-400 text-xs">Save your automation workflow</p>
                </div>
                <div className="ml-auto rounded-full bg-slate-700/50 px-3 py-1">
                    <p className="text-slate-400 text-xs font-semibold">4 steps recorded</p>
                </div>
            </div>

            {/* Export Cards */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                {/* JSON Export */}
                <button className="flex flex-col items-start gap-3 bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-green-500/30 rounded-xl p-5 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-white text-base font-semibold">JSON Export</h3>
                        <p className="text-slate-400 text-xs text-left">Export as structured JSON data for integration</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-xs font-semibold mt-auto">
                        <span>Export Now</span>
                        <span>→</span>
                    </div>
                </button>

                {/* PDF Report */}
                <button className="flex flex-col items-start gap-3 bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-red-500/30 rounded-xl p-5 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-white text-base font-semibold">PDF Report</h3>
                        <p className="text-slate-400 text-xs text-left">Generate comprehensive PDF documentation</p>
                    </div>
                    <div className="flex items-center gap-1 text-red-400 text-xs font-semibold mt-auto">
                        <span>Generate PDF</span>
                        <span>→</span>
                    </div>
                </button>

                {/* Video Recording */}
                <button className="flex flex-col items-start gap-3 bg-slate-800/30 hover:bg-slate-700/30 border border-slate-700/50 hover:border-yellow-500/30 rounded-xl p-5 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-white text-base font-semibold">Video Recording</h3>
                        <p className="text-slate-400 text-xs text-left">Create step-by-step video playback</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold mt-auto">
                        <span>Create Video</span>
                        <span>→</span>
                    </div>
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-400 text-xs">Exports include all steps, screenshots, and metadata</p>
                <div className="ml-auto">
                    <button className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-600/50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExportPanel;