export const Total = ({ courseData }) => {
    return (
      <p>
        Number of exercises{" "}
        {courseData[0].exercises +
          courseData[1].exercises +
          courseData[2].exercises}
      </p>
    );
}