import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admission from "./pages/TablePages/Admission";
import Enquiry from "./pages/TablePages/Enquiry";
import Contact from "./pages/TablePages/Contact";
import SingleAdmission from "./pages/SinglePages/SingleAdmission";
import SingleEnquiry from "./pages/SinglePages/SingleEnquiry";
import SingleContact from "./pages/SinglePages/SingleContact";
import Gallery from "./pages/Gallery/Gallery";
import Banner from "./pages/Banners/Banner";

import { Toaster } from "sonner";
import NewGallery from "./pages/NewData/NewGallery/NewGallery";
import Member from "./pages/Member/Member";
import Staff from "./pages/Member/Staff";
import NewStaff from "./pages/NewData/NewMember/NewStaff";
import NewFounding from "./pages/NewData/NewMember/NewFounding";
import UpdateFounding from "./pages/UpdateData/UpdateMember/UpdateFounding";
import UpdateStaff from "./pages/UpdateData/UpdateMember/UpdateStaff";
import Student from "./pages/TablePages/Student";
import SingleStudent from "./pages/SinglePages/SingleStudent";
import UpdateStudent from "./pages/UpdateData/UpdateStudent/UpdateStudent";
import GalleryFolder from "./pages/GalleryFolder/GalleryFolder";
import NewGalleryFolder from "./pages/NewData/NewGalleryFolder/NewGalleryFolder";
import UpdateGalleryFolder from "./pages/UpdateData/UpdateGalleryFolder/UpdateGalleryFolder";
import Alumini from "./pages/Alumini/Alumini";
import NewAlumni from "./pages/NewAlumni/NewAlumni";
import UpdateAlumni from "./pages/UpdateData/UpdateAlumni/UpdateAlumni";
import NewStudent from "./pages/NewData/NewStudent/NewStudent";
import Profile from "./pages/Profile/Profile";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <div className="app">
      <BrowserRouter basename="/admin">
        <Toaster position="top-center" richColors />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          {/* <Route path="/register" element={<Register />} /> */}

          <Route element={user ? <Layout /> : <Navigate to="/login" />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />

            <Route path="/mentor" element={<Member />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery-folder" element={<GalleryFolder />} />
            <Route path="/student" element={<Student />} />
            <Route path="/alumni" element={<Alumini />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-password" element={<UpdatePassword />} />

            {/* Single Page */}
            <Route path="/admission/:id" element={<SingleAdmission />} />
            <Route path="/enquiry/:id" element={<SingleEnquiry />} />
            <Route path="/contact/:id" element={<SingleContact />} />
            <Route path="/student/:id" element={<SingleStudent />} />
            <Route path="/gallery-folder/:id" element={<Gallery />} />

            {/* banner */}
            <Route path="/banner/:bannerType/:id" element={<Banner />} />

            {/* new */}
            <Route path="/new-gallery" element={<NewGallery />} />
            <Route path="/new-staff-member" element={<NewStaff />} />
            <Route path="/new-mentor" element={<NewFounding />} />
            <Route path="/new-gallery-folder" element={<NewGalleryFolder />} />
            <Route path="/new-alumni" element={<NewAlumni />} />
            <Route path="/new-student" element={<NewStudent />} />

            {/* update */}
            <Route path="/mentor/:id" element={<UpdateFounding />} />
            <Route path="/staff-member/:id" element={<UpdateStaff />} />
            <Route path="/update-student/:id" element={<UpdateStudent />} />
            <Route path="/update-alumni/:id" element={<UpdateAlumni />} />

            <Route
              path="/update-gallery-folder/:id"
              element={<UpdateGalleryFolder />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
