
function StepCard(){
    return (
        <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-700/50 h-full hover:shadow-blue-500/10 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-blue-400 text-white shadow-lg shadow-blue-400/50 flex items-center justify-center">3</div>
                <h2 className="text-gray-100 text-xl font-bold tracking-tight">Automation Steps</h2>
                <div className="ml-auto">
                    <span className="text-xs text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full">In Progress</span>
                </div>
            </div>

            {/* Steps */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {/* Step 1 */}
                <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-4 hover:bg-green-400/25 hover:border-green-400/40 transition-all duration-200">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex flex-col tracking-tight">
                            <h3 className="text-white font-semibold text-sm">Navigate to website</h3>
                            <p className="text-slate-400 text-xs">Opened https://example.com in browser</p>
                            <p className="text-slate-500 text-xs mt-1">2.3s</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-green-400 font-medium text-xs tracking-tight">Completed</p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-green-400/20 border border-green-400/30 rounded-xl p-4 hover:bg-green-400/25 hover:border-green-400/40 transition-all duration-200">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex flex-col tracking-tight">
                            <h3 className="text-white font-semibold text-sm">Click search button</h3>
                            <p className="text-slate-400 text-xs">Clicked on element: button.search-btn</p>
                            <p className="text-slate-500 text-xs mt-1">1.2s</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-green-400 font-medium text-xs tracking-tight">Completed</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 hover:bg-blue-500/25 hover:border-blue-500/40 transition-all duration-200">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col tracking-tight">
                            <h3 className="text-white font-semibold text-sm">Type in search field</h3>
                            <p className="text-slate-400 text-xs">Typing "React tutorial" in input field</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-blue-400 font-medium text-xs tracking-tight">Running...</p>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gray-400/10 border border-gray-400/20 rounded-xl p-4 opacity-50 hover:opacity-60 transition-all duration-200">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-semibold">4</div>
                        <div className="flex flex-col tracking-tight">
                            <h3 className="text-white font-semibold text-sm">Press Enter</h3>
                            <p className="text-slate-400 text-xs">Submit search query</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-gray-400 font-medium text-xs tracking-tight">Pending</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-700/50">
                <div className="flex gap-3">
                    <p className="text-slate-500 text-sm font-semibold"><span className="text-green-400">2 </span>completed</p>
                    <p className="text-slate-500 text-sm font-semibold"><span className="text-blue-400">1 </span>running</p>
                    <p className="text-slate-500 text-sm font-semibold"><span className="text-gray-400">1 </span>pending</p>
                </div>
                <div className="ml-auto">
                        <p className="text-slate-500 text-sm font-semibold">Total: 4 steps</p>
                </div>
            </div>
        </div>
    );
}

export default StepCard;