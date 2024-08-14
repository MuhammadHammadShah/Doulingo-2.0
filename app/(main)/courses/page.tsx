import { GetCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const userProgress = await getUserProgress();
  const courses = await GetCourses();
  return (
    <div className="h-full px-3 mx-auto max-w-[912px]">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCoursesID={userProgress?.activeCourseId} />
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default CoursesPage;
