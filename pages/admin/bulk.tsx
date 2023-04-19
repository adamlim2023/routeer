import React, { useEffect, useState } from "react";
import AdminLayout from "components/layout/AdminLayout";
import Button from "components/common/Button";
import Pagination from "components/common/Pagination";
import DataTable from "react-data-table-component";

const Bulk = () => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(null);
  let timeout = null;

  useEffect(() => {
    if (tooltipPosition) {
      setIsShowTooltip(true);
    }
  }, [tooltipPosition]);

  const handleMouseMove = (e) => {
    setIsShowTooltip(false);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setTooltipPosition({
        top: e.pageY,
        left: e.pageX,
      });
    }, 1000);
  };

  const handleMouseLeave = (e) => {
    clearTimeout(timeout);
    setIsShowTooltip(false);
  };
  const columns: any = [
    {
      name: "",
      selector: () => (
        <button className="w-9 h-9 bg-cyanblue flex items-center justify-center rounded">
          <img src="/images/icons/edit.svg" alt="" />
        </button>
      ),
      width: "44px",
    },
    {
      name: "Company name",
      selector: (row) => row.companyName,
      sortable: true,
    },
    {
      name: "Type of transport",
      selector: (row) => (
        <div
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
        >
          {row.transportType}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Postcode",
      selector: (row) => row.postcode,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.website,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Facebook",
      selector: (row) => row.facebook,
      sortable: true,
    },
    {
      name: "Instagram",
      selector: (row) => row.instagram,
      sortable: true,
    },
    {
      name: "Twitter",
      selector: (row) => row.twitter,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 2,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 3,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 4,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 5,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 6,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 7,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 8,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 9,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 10,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
    {
      id: 11,
      companyName: "West coast buses",
      transportType: "Miniva, Coach, Tuk tuk, S...",
      location: "London, UK",
      postcode: "EC3A 5AY",
      website: "westcoastbusesfamilyb...",
      number: "+44 736374946587",
      email: "westcoastbuses",
      facebook: "Input field text",
      instagram: "Input field text",
      twitter: "Input field text",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        minHeight: 33,
        background: "#E7245B90",
        marginBottom: 24,
        borderBottom: "0!important",
      },
    },
    headCells: {
      style: {
        width: "100%",
        color: "#FFF",
        fontSize: 16,
        padding: "0 4px",
      },
    },
    table: {
      style: {
        background: "transparent",
      },
    },
    rows: {
      style: {
        background: "#FFF",
        minHeight: 38,
        marginBottom: 8,
        borderBottom: "0!important",
      },
    },
    cells: {
      style: {
        width: "200px",
        fontSize: 16,
        color: "#414142",
        padding: "0 4px",
        cursor: "default",
      },
    },
  };

  return (
    <AdminLayout>
      {isShowTooltip && (
        <div
          className="absolute w-[194px] bg-gray rounded p-2 text-sm text-white z-50"
          style={tooltipPosition}
        >
          Minivan, Coach, Tuk tuk, Scooter, Taxi, Van, Minibus
        </div>
      )}
      <div className="px-6 py-12">
        <p className="text-[40px] font-bold text-hotpink tracking-[-1px] mb-10">
          Transport providers
        </p>
        <div className="flex justify-end mb-10">
          <Button variant="success">
            <img src="/images/icons/plus.svg" className="mr-3" />
            <span>Bulk upload</span>
          </Button>
        </div>
        <div className="w-full overflow-x-auto mb-10">
          <DataTable
            columns={columns}
            className="bg-red-200"
            data={data}
            customStyles={customStyles}
            responsive
            sortIcon={<img src="/images/icons/sort.svg" />}
          />
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Bulk;
