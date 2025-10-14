
function ScreenshotPane(){
    return (
        <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 h-full hover:shadow-green-500/10 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-700/50 pb-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">Live Browser View</h2>
                <div className="ml-auto flex items-center gap-2">
                    <button 
                        onClick={() => console.log('Download screenshot')}
                        className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center transition-colors duration-200 group"
                        title="Download Screenshot"
                    >
                        <span className="text-slate-300 group-hover:text-white text-sm font-bold">↓</span>
                    </button>
                    <button 
                        onClick={() => console.log('Refresh browser')}
                        className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center transition-colors duration-200 group"
                        title="Refresh Browser"
                    >
                        <span className="text-slate-300 group-hover:text-white text-sm font-bold">↻</span>
                    </button>
                    <button 
                        onClick={() => console.log('Close browser')}
                        className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-red-500/50 flex items-center justify-center transition-colors duration-200 group"
                        title="Close Browser"
                    >
                        <span className="text-slate-300 group-hover:text-red-300 text-sm font-bold">×</span>
                    </button>
                </div>
            </div>

            {/* Browser View */}
            <div className="flex-1 overflow-hidden border border-slate-700/50 rounded-xl bg-slate-900/60">
                {/* URL Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-300 font-medium">https://example.com</span>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 min-h-[300px]">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                        <span className="text-blue-400 text-2xl font-bold">🖥️</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">Waiting for browser action...</h3>
                    <p className="text-slate-400 text-sm text-center max-w-xs">Screenshots will appear here when automation starts</p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-700/50">
                <span className="text-sm text-slate-400">Resolution: 1920x1080</span>
                <span className="text-slate-600">•</span>
                <span className="text-sm text-slate-400">Last updated: 2s ago</span>
                <div className="ml-auto">
                    <span className="text-sm font-semibold text-blue-400">Ready</span>
                </div>
            </div>
        </div>
    );
}

export default ScreenshotPane;