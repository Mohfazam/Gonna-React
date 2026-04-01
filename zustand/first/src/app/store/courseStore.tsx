import { create } from "zustand"

interface CourseType {
    courseId: number,
    name: string,
    completed: boolean;
}

const courseStore = create<{
    courses: CourseType[];
    addCourse: (course: CourseType) => void;
    removeCourse: (courseId: number) => void;
    toggleCourseStatus: (courseId: number) => void;
}>((set) => ({
    courses: [],

    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }));
    },

    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.courseId !== courseId),
        }));
    },

    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.courseId === courseId ? {...course, completed: !course.completed} : course)
        }))
    }


}))