import { useAppContext } from "../../context/AppContext";
import { createPortal } from "react-dom";
import { TbFileDescription } from "react-icons/tb";
import { TextAlignCenter,MapPin,Building2 } from 'lucide-react';
const EditModal = () => {
  const { isEditModalOpen, setIsEditModalOpen } = useAppContext();
  return createPortal(
    <div
      onClick={() => setIsEditModalOpen(false)}
      className={`fixed inset-0 transition-all select-none ${
        isEditModalOpen ? "bg-black/35" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`h-[600px] w-[450px] py-5 px-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white transition-all border border-gray-100 text-sm shadow-md rounded-md`}
      >
        <h2 className="font-semibold text-2xl text-black/70">Edit Details</h2>
        {/* RESTAURANT NAME */}
        <div className="my-3">
          <p className="text-gray-500 text-sm">Restaurant Name</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <TextAlignCenter className="size-5" />
            <input
              className="outline-none grow"
              type="text"
              placeholder="(i.e. Pasta Palace)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="my-4">
          <p className="text-gray-500 text-sm">Description</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <TbFileDescription className="size-5" />
            <input
              className="outline-none grow"
              type="text"
              placeholder="(i.e. Classic & creative pasta dishes made fresh daily.)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
        {/* ADDRESS */}
        <div className="my-4">
          <p className="text-gray-500 text-sm">Address</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <MapPin className="size-5" />
            <input
              className="outline-none grow"
              type="text"
              placeholder="(i.e. 123 Food St, Gulberg)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
        {/* CITY */}
        <div className="my-4">
          <p className="text-gray-500 text-sm">City</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <Building2 className="size-5" />
            <input
              className="outline-none grow"
              type="text"
              placeholder="(i.e. Lahore)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
        {/* OPEN TIME */}
        <div className="my-4">
          <p className="text-gray-500 text-sm">Open Time</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <Building2 className="size-5" />
            <input
              className="outline-none grow"
              type="time"
              placeholder="(i.e. Lahore)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
        {/* CLSOE TIME */}
        <div className="my-4">
          <p className="text-gray-500 text-sm">Close Time</p>
          <div className="bg-white flex justify-start items-center gap-3 my-1 p-3 rounded-lg border border-gray-300">
            <Building2 className="size-5" />
            <input
              className="outline-none grow"
              type="time"
              placeholder="(i.e. Lahore)"
              name=""
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
};

export default EditModal;
