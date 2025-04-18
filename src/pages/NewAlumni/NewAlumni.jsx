import "./NewAlumni.scss";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useRef, useState } from "react";
import AddImg from "../../assets/images/addImg.svg";
import axios from "axios";
import { baseUrl } from "../../main";
import { toast } from "sonner";
import { MdKeyboardBackspace } from "react-icons/md";

const NewAlumni = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const maxSize = 2 * 1024 * 1024;

      if (file.size > maxSize) {
        toast.error("Image must be less than 2MB!");
        return;
      }

      setSelectedImage(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleButtonClick = () => fileInputRef.current.click();

  const handleSubmit = async () => {
    if (!name || !company || !designation || !location || !file) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("company", company);
    formData.append("designation", designation);
    formData.append("location", location);
    formData.append("image", file);

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${baseUrl}/alumni/new-alumni`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message);
      navigate("/alumni");
    } catch (error) {
      console.error("Error creating alumni:", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newAlumni">
      <div className="newAlumni-top">
        <Link onClick={() => navigate(-1)} className="back-icon">
          <MdKeyboardBackspace size={35} />
        </Link>
        <h1>New Alumni</h1>
      </div>

      <div className="newAlumni-contents">
        <div className="newAlumni-contents-card">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Staff alumni"
              className="alumni-img"
            />
          ) : (
            <div
              className="add-img-alumni"
              onClick={handleButtonClick}
              role="button"
              tabIndex={0}
              aria-label="Upload Staff Image"
            >
              <img src={AddImg} alt="Add Staff" className="add-alumni-img" />
              <p>Add New Alumni Image</p>
            </div>
          )}

          <div className="newAlumni-contents-card-desc">
            <div className="update-content">
              <span>Name : </span>
              <input
                type="text"
                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="update-content">
              <span>Designation : </span>
              <input
                type="text"
                placeholder="Enter designation..."
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            <div className="update-content">
              <span>Comapany : </span>
              <input
                type="text"
                placeholder="Enter company name..."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="update-content">
              <span>Location : </span>
              <input
                type="text"
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="alumni-btn">
            <button onClick={handleButtonClick} className="second-btn">
              <FaPlus className="change-icon" /> Add Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept="image/*"
            />

            <button
              disabled={loading}
              className="success-btn"
              onClick={handleSubmit}
            >
              {loading ? "Adding alumni..." : "Add alumni"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAlumni;
