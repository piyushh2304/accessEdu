import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Course3 = ({
  courseImage,
  courseTitle,
  courseSubtitle,
  progressPercent, // e.g., 61
  progressStatus,  // e.g., "Completed", "Finish"
  isActive,        // true if button should be highlighted
  courseId,
  propWidth
}) => {
  const navigate = useNavigate();

  const course3Style = useMemo(() => ({
    width: propWidth,
    background: "#181818", // dark background as in screenshot
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid #222"
  }), [propWidth]);

  const handleWatchLecture = () => {
    navigate(`/video-player/${courseId}`);
  };

  return (
    <div style={course3Style} className="flex flex-col">
      <img
        src={courseImage}
        alt=""
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover"
        }}
      />
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
            {courseTitle}
          </div>
          <div style={{ color: "#ccc", fontSize: 13, marginBottom: 12 }}>
            {courseSubtitle}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          <button
            onClick={handleWatchLecture}
            style={{
              background: isActive ? "#FF6F3D" : "#232323",
              color: isActive ? "#fff" : "#FF6F3D",
              border: "none",
              borderRadius: 4,
              padding: "8px 18px",
              fontWeight: 600,
              cursor: "pointer",
              marginRight: 12
            }}
          >
            Watch Lecture
          </button>
          {progressPercent !== undefined && (
            <span style={{ color: "#20C997", fontWeight: 500, fontSize: 13 }}>
              {progressPercent}% {progressStatus}
            </span>
          )}
        </div>
        {/* Progress bar */}
        {progressPercent !== undefined && (
          <div style={{
            height: 4,
            background: "#333",
            borderRadius: 2,
            overflow: "hidden"
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "#20C997"
            }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Course3;
