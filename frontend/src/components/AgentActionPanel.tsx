function AgentActionPanel(){
    return (
        <div className="flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-2xl border border-slate-700/50 rounded-2xl col-span-3 p-6 backdrop-blur-xl hover:shadow-purple-500/10 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-700/50 pb-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-white text-xl font-bold tracking-tight">Agent Actions</h2>
                    <p className="text-slate-400 text-xs">Quick automation commands</p>
                </div>
                <div className="ml-auto rounded-full bg-purple-500/10 px-3 py-1 border border-purple-500/30">
                    <p className="text-purple-400 text-xs font-semibold">AI Powered</p>
                </div>
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
                {/* Search Web */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-blue-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Search Web</h3>
                    <p className="text-slate-400 text-xs text-center">Find information online</p>
                </button>

                {/* Click Element */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-green-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Click Element</h3>
                    <p className="text-slate-400 text-xs text-center">Interact with page</p>
                </button>

                {/* Type Text */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-purple-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Type Text</h3>
                    <p className="text-slate-400 text-xs text-center">Fill in forms</p>
                </button>

                {/* Navigate */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-cyan-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Navigate</h3>
                    <p className="text-slate-400 text-xs text-center">Go to URL</p>
                </button>

                {/* Scroll Page */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-yellow-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Scroll Page</h3>
                    <p className="text-slate-400 text-xs text-center">Navigate content</p>
                </button>

                {/* Extract Data */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-red-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Extract Data</h3>
                    <p className="text-slate-400 text-xs text-center">Capture information</p>
                </button>

                {/* Wait */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-violet-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Wait</h3>
                    <p className="text-slate-400 text-xs text-center">Pause execution</p>
                </button>

                {/* Screenshot */}
                <button className="flex flex-col items-center justify-center gap-2 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-pink-500/50 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Screenshot</h3>
                    <p className="text-slate-400 text-xs text-center">Capture Screen</p>
                </button>
            </div>

            {/* AI Assistant */}
            <div className="flex items-center gap-3 p-4 border border-slate-700/50 rounded-xl bg-slate-800/30">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-sm font-semibold">AI Assistant Active</h3>
                    <p className="text-slate-400 text-xs">Ready to help with complex automation tasks</p>
                </div>
                <div className="ml-auto">
                    <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200">
                        Ask AI
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgentActionPanel;