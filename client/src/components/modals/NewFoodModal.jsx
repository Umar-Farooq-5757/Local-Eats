import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Clock, DollarSign, Hash, Highlighter, Mail, Pencil } from "lucide-react";
const UploadIcon = () => (
  <svg
    className="mx-auto h-12 w-12 text-gray-400"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <path
      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);
const NewFoodModal = () => {
  const { isDark, isNewFoodModalOpen, setIsNewFoodModalOpen } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    prepTime: "",
  });

  // State for the image file and its preview URL
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // State to track if a file is being dragged over the drop zone
  const [isDragging, setIsDragging] = useState(false);

  // A ref to access the hidden file input element
  const fileInputRef = useRef(null);

  // Clean up the object URL to prevent memory leaks
  useEffect(() => {
    // This is a cleanup function that runs when the component unmounts
    // or when the 'imagePreview' state changes.
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // --- Form Field Handlers ---

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Image & Drag-and-Drop Handlers ---

  // Central function to process the selected file
  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      // Optionally, handle non-image files (e.g., show an error)
      alert("Please select an image file (PNG, JPG, etc.).");
    }
  };

  // Handles file selection from the <input type="file">
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  // Triggers the hidden file input when the drop zone is clicked
  const handleDropZoneClick = () => {
    fileInputRef.current.click();
  };

  // --- Drag and Drop Event Handlers ---
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // This is necessary to allow dropping
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  // --- Utility Handlers ---

  // Clears the selected image and preview
  const clearImage = (e) => {
    e.stopPropagation(); // Stop the click from triggering the file input
    setImageFile(null);
    setImagePreview(null);
    // Reset the file input's value
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // --- Form Submission ---

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the file and other data
    const dataToSubmit = new FormData();
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("description", formData.description);
    dataToSubmit.append("price", formData.price);
    dataToSubmit.append("prepTime", formData.prepTime);
    if (imageFile) {
      dataToSubmit.append("image", imageFile);
    }

    // --- Demonstration: Log the FormData content ---
    console.log("Form data to be submitted:");
    for (let [key, value] of dataToSubmit.entries()) {
      console.log(key, value);
    }

    // In a real application, you would send 'dataToSubmit' to your server:
    // fetch('/api/your-endpoint', {
    //   method: 'POST',
    //   body: dataToSubmit,
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));

    alert("Form submitted! Check the console for the FormData object.");
  };

  return createPortal(
    <div
      onClick={() => setIsNewFoodModalOpen(false)}
      className={`fixed inset-0 transition-all select-none ${
        isNewFoodModalOpen ? "bg-black/35" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-[700px] w-[550px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto shadow-xl bg-white transition-all border border-gray-100 text-sm rounded-md`}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg  space-y-6"
        >
          <h1 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
            Add New Food to Menu
          </h1>

          {/* Item name */}
          <div className="my-3">
            <p className="text-gray-500 text-sm">Item name</p>
            <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
              <Pencil className="size-5" />
              <input
                className="outline-none grow"
                type="email"
                placeholder="(i.e. Classic Beef Burger)"
                name=""
                value={formData.name}
              onChange={handleTextChange}
                autoComplete="off"
              />
            </div>
          </div>

          {/* --- Description Field --- */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleTextChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none sm:text-sm"
            />
          </div>
          <div className="flex justify-between items-center gap-3">
            {/* ITEM PRICE */}
            <div className="grow">
              <p className="text-gray-500 text-sm">Price</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <DollarSign className="size-5 " />
                <input
                  className="outline-none grow w-full"
                  type="number"
                  step="any" // This attribute allows for float (decimal) values
                  placeholder="(i.e. 123.45)"
                  name="number-input"
                  value={formData.price}
              onChange={handleTextChange}
                  autoComplete="off"
                />
              </div>
            </div>
            {/* PREPARATION TIME */}
            <div className="grow">
              <p className="text-gray-500 text-sm">Prep time (mins)</p>
              <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
                <Clock className="size-5 " />
                <input
                  className="outline-none grow w-full"
                  type="number"
                  step="any" // This attribute allows for float (decimal) values
                  placeholder="(i.e. 123.45)"
                  name="number-input"
                  value={formData.prepTime}
              onChange={handleTextChange}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* --- Image Upload Field --- */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Image
            </label>

            {/* Hidden file input, accessed via ref */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              id="imageUpload"
            />

            {imagePreview ? (
              // --- Image Preview ---
              <div className="mt-2 relative">
                <img
                  src={imagePreview}
                  alt="Selected preview"
                  className="w-full h-auto max-h-80 object-cover rounded-md border border-gray-300 shadow-sm"
                />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1.5 leading-none shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Remove image"
                >
                  <CloseIcon />
                </button>
              </div>
            ) : (
              // --- Drop Zone ---
              <div
                onClick={handleDropZoneClick}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 ${
                  isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
                } border-dashed rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:border-blue-400`}
              >
                <div className="space-y-1 text-center">
                  <UploadIcon />
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-blue-600 hover:text-blue-500">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF (max. 10MB)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* --- Submit Button --- */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fa8444] hover:bg-[#ea580c] focus:outline-none focus:ring-2 focus:ring-offset-2"
              disabled={!formData.name} 
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default NewFoodModal;
