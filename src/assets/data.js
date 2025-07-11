import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineGroup } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { LuContact, LuMailQuestion } from "react-icons/lu";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { MdOutlineStars } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegImages } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineImageAspectRatio } from "react-icons/md";


export const sidebarItems = [
  // {
  //   icon: MdOutlineDashboardCustomize,
  //   title: "Dashboard",
  //   link: "dashboard",
  // },
  // {
  //   icon: PiStudentBold,
  //   title: "Student",
  //   link: "student",
  // },

  // {
  //   icon: FaRegAddressCard,
  //   title: "Admission",
  //   link: "admission",
  // },
  // {
  //   icon: LuMailQuestion,
  //   title: "Enquiry",
  //   link: "enquiry",
  // },
  // {
  //   icon: MdOutlineQuestionAnswer,
  //   title: "Contact",
  //   link: "contact",
  // },
  {
    icon: LuGalleryHorizontalEnd,
    title: "Gallery Folder",
    link: "gallery-folder",
  },
  {
    icon: MdOutlineStars,
    title: "Mentor",
    link: "mentor",
  },
  {
    icon: MdOutlineGroup,
    title: "Staffs",
    link: "staff",
  },
  {
    icon: LiaUniversitySolid,
    title: "Alumni",
    link: "alumni",
  },
  {
    icon: FaRegImages,
    title: "Affiliated Colleges",
    link: "affiliated-colleges",
  },
   {
    icon: IoPersonOutline,
    title: "About Content",
    link: "about-content",
  },
   {
    icon: MdOutlineImageAspectRatio,
    title: "Home Content Image",
    link: "home-content-image",
  },
    {
    icon: LuContact,
    title: "Contct Details",
    link: "contact-details",
  },
];

/////////////////////////////////

/// marksheeet form

export const studentDetails = [
  {
    label: "Student Name",
    type: "text",
    name: "name",
    placeholder: "Enter full name",
  },
  {
    label: "Father's Name",
    type: "text",
    name: "fatherName",
    placeholder: "Enter father's name",
  },
  {
    label: "Name of Program",
    type: "text",
    name: "course",
    placeholder: "e.g. Computer Science",
  },
  {
    label: "Year",
    type: "text",
    name: "duration",
    placeholder: "e.g. 1 year",
  },
  {
    label: "Enrollment ID",
    type: "text",
    name: "enrollmentId",
    placeholder: "Enter enrollment ID",
  },
  {
    label: "Certificate No",
    type: "text",
    name: "certificateNo",
    placeholder: "Enter certificate number",
  },
];

/////////////////////
export const coursesLink = [
  {
    title: "Main Courses",
    link: "courses/main-courses",
  },
  {
    title: "UG Courses",
    link: "courses/ug-courses",
  },
  {
    title: "PG Courses",
    link: "courses/pg-courses",
  },
];

//////////////
export const Staffdata = [
  {
    id: 1,
    name: "John Doe",
    title: "System Admin",
    department: "IT",
    joinDate: "2020-08-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "HR Manager",
    department: "HR",
    joinDate: "2019-04-10",
  },
  {
    id: 3,
    name: "David Johnson",
    title: "Accountant",
    department: "Finance",
    joinDate: "2021-06-20",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Professor",
    department: "Mathematics",
    joinDate: "2017-03-12",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },

  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
  {
    id: 5,
    name: "Michael Lee",
    title: "Librarian",
    department: "Library",
    joinDate: "2015-09-05",
  },
];

/// addmision
export const AdmissionData = [
  {
    id: 1,
    name: "Rohit Kumar",
    profile: "Undergraduate",
    selectedCourse: "Computer Science",
    Date: "2023-07-10",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    profile: "Postgraduate",
    selectedCourse: "Business Administration",
    Date: "2022-09-15",
  },
  {
    id: 3,
    name: "Vikram Singh",
    profile: "Undergraduate",
    selectedCourse: "Mechanical Engineering",
    Date: "2021-06-20",
  },
  {
    id: 4,
    name: "Priya Mehta",
    profile: "Postgraduate",
    selectedCourse: "Psychology",
    Date: "2020-05-12",
  },
  {
    id: 5,
    name: "Amit Patel",
    profile: "Undergraduate",
    selectedCourse: "Civil Engineering",
    Date: "2019-11-30",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    profile: "Postgraduate",
    selectedCourse: "Data Science",
    Date: "2021-08-22",
  },
  {
    id: 7,
    name: "Rahul Verma",
    profile: "Undergraduate",
    selectedCourse: "Graphic Design",
    Date: "2023-04-18",
  },
  {
    id: 8,
    name: "Kavita Joshi",
    profile: "Postgraduate",
    selectedCourse: "Finance and Accounting",
    Date: "2020-02-05",
  },
  {
    id: 9,
    name: "Sandeep Reddy",
    profile: "Undergraduate",
    selectedCourse: "Electrical Engineering",
    Date: "2022-03-14",
  },
  {
    id: 10,
    name: "Preeti Yadav",
    profile: "Postgraduate",
    selectedCourse: "Marketing Management",
    Date: "2023-01-25",
  },
];

// contact
export const ContactData = [
  {
    id: 1,
    name: "Rohit Kumar",
    email: "ritesh@example.com",
    phoneNumber: "+91 9876543210",
    Date: "2023-07-10",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+91 8987654321",
    Date: "2023-07-10",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "+91 8765432109",
    Date: "2023-07-10",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phoneNumber: "+91 9123456789",
    Date: "2023-07-10",
  },
  {
    id: 5,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    phoneNumber: "+91 7894561230",
    Date: "2023-07-10",
  },
  {
    id: 6,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    phoneNumber: "+91 9988776655",
    Date: "2023-07-10",
  },
  {
    id: 7,
    name: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    phoneNumber: "+91 8877665544",
    Date: "2023-07-10",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phoneNumber: "+91 7788990011",
    Date: "2023-07-10",
  },
  {
    id: 9,
    name: "Liam Taylor",
    email: "liam.taylor@example.com",
    phoneNumber: "+91 6655443322",
    Date: "2023-07-10",
  },
  {
    id: 10,
    name: "Ava Davis",
    email: "ava.davis@example.com",
    phoneNumber: "+91 5544332211",
    Date: "2023-07-10",
  },
];

// gallery

const img1 =
  "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600";

const img2 =
  "https://images.pexels.com/photos/2676888/pexels-photo-2676888.jpeg?auto=compress&cs=tinysrgb&w=600";

const img3 =
  "https://images.pexels.com/photos/3043114/pexels-photo-3043114.jpeg?auto=compress&cs=tinysrgb&w=600";

const img4 =
  "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600";

export const gallery = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img1,
  },
  {
    img: img4,
  },
  {
    img: img3,
  },
  {
    img: img1,
  },
];

// drop donw

export const topBanner = [
  {
    name: "Home Banner",
    link: "banner/home-banner",
  },
  {
    name: "Abut Banner",
    link: "banner/about-banner",
  },
  {
    name: "Founding Member Banner",
    link: "banner/founding-member-banner",
  },
  {
    name: "Staff Banner",
    link: "banner/staff-banner",
  },
  {
    name: "Enquiry Banner",
    link: "banner/enquiry-banner",
  },
  {
    name: "Placement Banner",
    link: "banner/placement-banner",
  },

  {
    name: "Admission Banner",
    link: "banner/admission-banner",
  },
  {
    name: "Gallery Banner",
    link: "banner/gallery-banner",
  },
  {
    name: "Contact Banner",
    link: "banner/contact-banner",
  },
];

// courses banner

export const courseBanner = [
  {
    name: "Architecture & Interior Design",
    link: "banner/architecture-interior-design-banner",
  },
  {
    name: "Web Design & Development",
    link: "banner/web-design-development",
  },

  {
    name: "Graphic Design",
    link: "banner/graphic-design-banner",
  },

  {
    name: "Fashion Design",
    link: "banner/fashion-design-banner",
  },
  {
    name: "B.A",
    link: "banner/ba-banner",
  },
  {
    name: "B.Com",
    link: "banner/bcom-banner",
  },
  {
    name: "B.Sc",
    link: "banner/bsc-banner",
  },
  {
    name: "B.B.A",
    link: "banner/bba-banner",
  },

  {
    name: "B.Lib",
    link: "banner/blib-banner",
  },

  {
    name: "M.A",
    link: "banner/ma-banner",
  },
  {
    name: "M.Com",
    link: "banner/mcom-banner",
  },
  {
    name: "M.Sc",
    link: "banner/msc-banner",
  },
  {
    name: "M.B.A",
    link: "banner/mba-banner",
  },
  {
    name: "M.Lib",
    link: "banner/mlib-banner",
  },
  {
    name: "Digital Marketing ",
    link: "banner/digital-marketing-banner",
  },
];

///

export const bannerData = {
  // Top Banners
  "home-banner": {
    title: "Home Banner",
  },
  "about-banner": {
    title: "About Banner",
  },
  "founding-member-banner": {
    title: "Founding Member Banner",
  },
  "staff-banner": {
    title: "Staff Banner",
  },
  "enquiry-banner": {
    title: "Enquiry Banner",
  },
  "placement-banner": {
    title: "Placement Banner",
  },
  "admission-banner": {
    title: "Admission Banner",
  },
  "gallery-banner": {
    title: "Gallery Banner",
  },
  "contact-banner": {
    title: "Contact Banner",
  },

  // Course Banners
  "architecture-interior-design-banner": {
    title: "Architecture & Interior Design Banner",
  },
  "web-design-development": {
    title: "Web Design & Development Banner",
  },
  "graphic-design-banner": {
    title: "Graphic Design Banner",
  },
  "fashion-design-banner": {
    title: "Fashion Design Banner",
  },
  "ba-banner": {
    title: "B.A Banner Banner",
  },
  "bcom-banner": {
    title: "B.Com Banner",
  },
  "bsc-banner": {
    title: "B.Sc Banner",
  },
  "bba-banner": {
    title: "B.B.A Banner",
  },
  "ma-banner": {
    title: "M.A Banner",
  },
  "mcom-banner": {
    title: "M.Com Banner",
  },
  "msc-banner": {
    title: "M.Sc Banner",
  },
  "mba-banner": {
    title: "M.B.A Banner",
  },
};

export const formCourse = [
  {
    name: "Fashion Design",
  },
  {
    name: "Interior Design",
  },
  {
    name: "Architecture Design",
  },
  {
    name: "Graphic Design",
  },
  {
    name: "Web Design & Development",
  },
  {
    name: "B.A",
  },
  {
    name: "B.Com",
  },
  {
    name: "B.Sc",
  },
  {
    name: "B.B.A",
  },
  {
    name: "B.Lib",
  },
  {
    name: "M.A",
  },
  {
    name: "M.Com",
  },
  {
    name: "M.Sc",
  },
  {
    name: "M.B.A",
  },
  {
    name: "M.Lib",
  },
  {
    name: "Digital Marketing",
  },
];

/////////////////////////

export const paperData = [
  {
    courseCode: "CS101",
    courseName: "Bachelor of Computer Science",
    courseMarks: 100,
    createdAt: "2024-12-10T10:15:00Z",
  },
  {
    courseCode: "ENG202",
    courseName: "Master of English Literature",
    courseMarks: 100,
    createdAt: "2025-01-05T14:30:00Z",
  },
  {
    courseCode: "MBA300",
    courseName: "MBA - Marketing",
    courseMarks: 100,
    createdAt: "2025-02-20T09:00:00Z",
  },
  {
    courseCode: "PHY110",
    courseName: "Bachelor of Physics",
    courseMarks: 100,
    createdAt: "2025-03-12T16:45:00Z",
  },
  {
    courseCode: "LAW210",
    courseName: "LLB - Criminal Law",
    courseMarks: 100,
    createdAt: "2025-04-01T12:20:00Z",
  },
];

////////////////////////////

const slider_img =
  "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const sliderImage = [
  slider_img,
  slider_img,
  slider_img,
  slider_img,
  slider_img,
  slider_img,
  slider_img,
  slider_img,
  slider_img,
];
