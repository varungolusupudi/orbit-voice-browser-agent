import './App.css'
import TranscriptPanel from './components/TranscriptPanel'
import StepCard from './components/StepCard'
import ScreenshotPane from './components/ScreenshotPane'
import ExportPanel from './components/ExportPanel'
import AgentActionPanel from './components/AgentActionPanel'

function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-screen bg-gray-900">
        <TranscriptPanel />
        <StepCard />
        <ScreenshotPane />
        <AgentActionPanel />
        <ExportPanel/>
    </div>
  )
}

export default App
