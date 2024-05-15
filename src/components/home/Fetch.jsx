import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const Fetch = () => {
  const [user, setUser] = useState([]); // State to store users
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    // Fetch users from API
    axios.get('https://664369016c6a65658706f90f.mockapi.io/userDetail')
      .then((response) => {
        setUser(response.data); // Set users in state
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Function to handle user deletion
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://664369016c6a65658706f90f.mockapi.io/userDetail/${id}`)
          .then(() => {
            setUser(user.filter((u) => u.id !== id)); // Remove deleted user from state
            Swal.fire('Deleted!', 'Your user has been deleted.', 'success');
          })
          .catch((error) => {
            console.error('Error deleting user: ', error);
            Swal.fire('Error!', 'Failed to delete user.', 'error');
          });
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div
        id="header"
        className="flex items-center justify-between w-full p-5 bg-sky-500"
      >
        <div id="logo" className="text-white text-2xl">
          <h1>
            User <strong>Management</strong>
          </h1>
        </div>
        <div id="nav" className="flex gap-5">
          <input
            type="text"
            className="p-1 px-2"
            placeholder="Type to search"
            value={searchTerm} // Set value of input to searchTerm
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
          <button className="flex flex-row gap-2 items-center bg-white text-black px-5 py-2">
            <span className="fa fa-user"></span>Add New User
          </button>
          {/* <button className="flex flex-row gap-2 items-center bg-white text-black px-5">
            Log Out
          </button> */}
        </div>
      </div>
      {user.length === 0 ? (
        <div className="flex h-screen justify-center items-center text-center">
          <h1>loading....</h1>
        </div>
      ) : (
        <div id="table" className="w-full border">
          <table className="w-full text-left">
            <thead className="border border-b-black">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Date Created</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through users and filter based on searchTerm */}
              {user.filter((data) => {
                if (searchTerm === "") {
                  return data;
                } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return data;
                }
                return null;
              }).map((data) => (
                
                <tr className="border my-2" key={data.id}>
                  <td className="px-4 py-2">{data.id}</td>
                  <td className="px-4 py-2 flex items-center">
                    <img
                      src={data.avatar}
                      alt="User Avatar"
                      className="w-20 h-20 rounded-full mr-3"
                    />
                    {data.name}
                  </td>
                  <td className="px-4 py-2">{data.email}</td>
                  <td className="px-4 py-2">{data.address}</td>
                  <td className="px-4 py-2">{data.createdAt}</td>
                  <td className="px-4 py-2">
                    <button className="fa fa-edit mr-3 text-2xl text-sky-500">
                    </button>
                    <button className="fa fa-trash text-2xl text-red-500" onClick={() => handleDelete(data.id)}>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Fetch;
