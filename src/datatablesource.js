export const userColumns = [
  { field: "email", headerName: "Email", width: 160 },
  { field: "name",headerName: "User Name",width: 130,},
  { field: "lastName",headerName: "Last Name",width: 130,},
  {field: "profileUrl",headerName: "Profile",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profileUrl} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "password",
    headerName: "Password",
    width: 130,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  }
];


export const productColumns = [
  
  { field: "authorized",headerName: "Authorized",width: 110,},
  { field: "availability",headerName: "Available",width: 120,},
  { field: "city", headerName: "CITY", width: 130 },
  { field: "contactPerson",headerName: "Contact",width: 130,},
  { field: "ownerEmail",headerName: "ownerEmail",width: 130,},
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "size",headerName: "Size",width: 80,},
  {
    field: "Images",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImgProduct">
          <img className="cellImgProduct" src={params.row.images[0]} alt="avatar" />
          
        </div>
      );
    }
  },
];

export const tacheColumns = [
  
  { field: "taskTitle",headerName: "Task Title",width: 110,},
  { field: "userName",headerName: "UserName",width: 120,},

  { field: "userEmail",headerName: "UserEmail",width: 130,},


 
  {
    field: "Images",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImgProduct">
          <img className="cellImgProduct" src={params.row.images[0]} alt="avatar" />
          
        </div>
      );
    }
  },
];






export const adminColumns = [
  { field: "email", headerName: "Email", width: 200 },
];

