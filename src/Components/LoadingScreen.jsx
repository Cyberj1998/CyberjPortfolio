import { useProgress } from "@react-three/drei"


const LoadingScreen = ({ started, onStarted }) => {

    const { progress } = useProgress()


    return (
        !started ? (
            <div className="loading-screen">
          <div className="loadingScreen_progress">
            <div 
              className="loadingScreen_progress_value"
              style={{
                width: `${progress}%`
              }} 
            />

          </div>
          <div className="loadingScreen_board">
            <h1 className="loadingScreen_title">
              Loading...
            </h1>
            <button 
              className="loadingScreen_button"
              disabled={progress < 100}
              onClick={onStarted}
            >
                Start
            </button>
          </div>
        </div>
        )
        : (
            ''
        )
    )
}

export default LoadingScreen