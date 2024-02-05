import { Part } from "./Part.jsx"
export const Content = ({ courseData }) => {
  return (
    <div>
      <Part part={courseData[0].part} exercise={courseData[0].exercises} />
      <Part part={courseData[1].part} exercise={courseData[1].exercises} />
      <Part part={courseData[2].part} exercise={courseData[2].exercises} />
    </div>
  );
}