import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { TbFileDescription } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import {
  MapPin,
  Clock,
  SquarePen,
  BookmarkCheck,
  Hourglass,
} from "lucide-react";
import Dropdown from "../components/ui/Dropdown";
import EditModal from "../components/ui/EditModal";
// design inspiration
// https://www.figma.com/design/T6h90aSafWM85PglHzMsZG/CRM-Dashboard-Customers-List--Community-?node-id=0-1&p=f&t=mzaml4csrAj7FY8w-0

const SellerDashboard = () => {
  const {dummyData,isEditModalOpen, setIsEditModalOpen } = useAppContext();
  const restaurant = dummyData.restaurants[0];
  const [ordersData, setOrdersData] = useState(dummyData.orders);
  const [dropdownValue, setDropdownValue] = useState("All");

  const colorsForStatus = {
    // All: ["#eff6ff", "#375dfc"],
    Completed: ["#dbfce7", "#00a63e"],
    Pending: ["#fef9c2", "#d08700"],
  };

  return (
    <section className="p-6">
      <div className="flex justify-between">
        {/* BASIC INFO e.g. name, description edit options */}
        <div className="bg-white w-[43vw] relative px-5 py-3 border border-black/10 shadow-xs rounded-md flex flex-col gap-3">
          <h1 className="text-3xl font-semibold italic">{restaurant.name}</h1>
          <p className="text-black/75 flex items-center gap-2">
            <TbFileDescription className="size-5" /> {restaurant.description}
          </p>
          <p className="text-black/75 flex items-center gap-2">
            <MapPin className="size-5" /> {restaurant.address},{restaurant.city}
          </p>
          <div className="flex items-center justify-start gap-7">
            <div className="flex flex-col gap-1">
              <h3>Open From</h3>
              <p className="text-black/75 flex items-center gap-1">
                <Clock />
                {restaurant.open_time}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3>TO</h3>
              <p className="text-black/75 flex items-center gap-1">
                <Clock />
                {restaurant.close_time}
              </p>
            </div>
          </div>
          <div onClick={()=>setIsEditModalOpen(true)} className="absolute top-4 right-6 flex flex-col justify-center items-center gap-1 cursor-pointer">
            <SquarePen className="size-5" />
            <p className="text-black/60 text-xs">Edit</p>
          </div>
        </div>

        {/* EXTRA INFO */}
        <div className="bg-white w-[52vw] relative px-5 py-4 border border-black/10 shadow-xs rounded-md flex items-center justify-between">
          {/* TOTAL CUSTOMERS */}
          <div className="flex items-center gap-2">
            <div className="bg-[#ea580c]/20 w-fit border border-[#ea580c]/30 shadow-sm size-16 px-3 rounded-full flex justify-center items-center">
              <GoPeople className="size-10 text-[#ea580c]" />
            </div>
            <div>
              <p className="text-black/50 text-sm">Total Customers</p>
              <h2 className="font-bold text-3xl">5423</h2>
            </div>
          </div>
          {/* COMPLETED ORDERS */}
          <div className="flex items-center gap-2">
            <div className="bg-green-100 w-fit border border-green-600/30 shadow-sm size-16 px-3 rounded-full flex justify-center items-center">
              <BookmarkCheck className="size-10 text-green-600" />
            </div>
            <div>
              <p className="text-black/50 text-sm">Completed Orders</p>
              <h2 className="font-bold text-3xl">123</h2>
            </div>
          </div>
          {/* PENDING ORDERS */}
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 w-fit border border-yellow-600/30 shadow-sm size-16 px-3 rounded-full flex justify-center items-center">
              <Hourglass className="size-10 text-yellow-600" />
            </div>
            <div>
              <p className="text-black/50 text-sm">Pending Orders</p>
              <h2 className="font-bold text-3xl">321</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ORDERS DATA */}
      <div className="mt-7">
        <div className="bg-white shadow-xs border border-black/10 py-3 px-6 rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Orders Data</h2>
          <Dropdown state={dropdownValue} setState={setDropdownValue} />
        </div>
        {/* Actual Table */}
        <div className="bg-white mt-1 py-3 px-9  min-h-96">
          <div className="flex justify-between items-center pr-[68px] text-sm font-semibold pb-2 text-black/60 border border-b-black/20 border-r-white border-t-white border-l-white">
            <p className="mr-10">Customer Name</p>
            <p className="mr-10">Customer Address</p>
            <p className="mr-10">Payment</p>
            <p className="mr-10">Status</p>
          </div>
          {/* Data */}
          <div className="flex justify-start gap-[242px] items-center mt-4 border border-b-black/10 border-t-white border-r-white border-l-white pb-2">
            <p>Umar Farooq</p>
            <p>18G-332, Wah Cantt</p>
            <p className="-translate-x-3">$28.54</p>
            <p
              style={{
                backgroundColor: colorsForStatus.Completed[0],
                color: colorsForStatus.Completed[1],
                borderColor: colorsForStatus.Completed[1],
              }}
              className="-translate-x-5 px-2 rounded-sm border text-sm"
            >
              Completed
            </p>
          </div>
          <div className="flex justify-start gap-[242px] items-center mt-4 border border-b-black/10 border-t-white border-r-white border-l-white pb-2">
            <p>Umar Farooq</p>
            <p>18G-332, Wah Cantt</p>
            <p className="-translate-x-3">$28.54</p>
            <p
              style={{
                backgroundColor: colorsForStatus.Pending[0],
                color: colorsForStatus.Pending[1],
                borderColor: colorsForStatus.Pending[1],
              }}
              className="-translate-x-5 px-2 rounded-sm border text-sm"
            >
              Pending
            </p>
          </div>
          <div className="flex justify-start gap-[242px] items-center mt-4 border border-b-black/10 border-t-white border-r-white border-l-white pb-2">
            <p>Umar Farooq</p>
            <p>18G-332, Wah Cantt</p>
            <p className="-translate-x-3">$28.54</p>
            <p
              style={{
                backgroundColor: colorsForStatus.Completed[0],
                color: colorsForStatus.Completed[1],
                borderColor: colorsForStatus.Completed[1],
              }}
              className="-translate-x-5 px-2 rounded-sm border text-sm"
            >
              Completed
            </p>
          </div>
          <div className="flex justify-start gap-[242px] items-center mt-4 border border-b-black/10 border-t-white border-r-white border-l-white pb-2">
            <p>Umar Farooq</p>
            <p>18G-332, Wah Cantt</p>
            <p className="-translate-x-3">$28.54</p>
            <p
              style={{
                backgroundColor: colorsForStatus.Pending[0],
                color: colorsForStatus.Pending[1],
                borderColor: colorsForStatus.Pending[1],
              }}
              className="-translate-x-5 px-2 rounded-sm border text-sm"
            >
              Pending
            </p>
          </div>
          <div className="flex justify-start gap-[242px] items-center mt-4 border border-b-black/10 border-t-white border-r-white border-l-white pb-2">
            <p>Umar Farooq</p>
            <p>18G-332, Wah Cantt</p>
            <p className="-translate-x-3">$28.54</p>
            <p
              style={{
                backgroundColor: colorsForStatus.Pending[0],
                color: colorsForStatus.Pending[1],
                borderColor: colorsForStatus.Pending[1],
              }}
              className="-translate-x-5 px-2 rounded-sm border text-sm"
            >
              Pending
            </p>
          </div>
        </div>
      </div>
      <EditModal/>
    </section>
  );
};

export default SellerDashboard;
