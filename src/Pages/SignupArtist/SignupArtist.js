// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Form, Label, Input, Navbar, NavbarBrand } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import music from "../../Assests/music3.png";

// const Artist = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     username: "",
//     userType: "", // New field for user type (user/artist)
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:3000/api/artists/signup",
//         formData
//       );
//       console.log(response.data); // Handle the response as needed
//       // Optionally, redirect the user to a different page or perform additional actions
//       navigate("/Login");
//     } catch (error) {
//       console.error(error.response.data); // Handle the error response
//     }
//   };

//   return (
//     <>
//       <Navbar className="" style={{ backgroundColor: "black" }}>
//         <NavbarBrand href="/">
//           <img alt="logo" style={{ width: "20%" }} src={music} />
//         </NavbarBrand>
//       </Navbar>
//       <div
//         id="signup"
//         className="container mt-5 px-5 bg-black"
//         style={{
//           boxShadow: "0 4px 6px  rgba(214, 150, 76, 0.859)",
//           width: "30%",
//           borderRadius: "10px",
//           height: "60vh",
//         }}
//       >
//         <Form onSubmit={handleSubmit}>
//           <h1 className="text-light text-center mt-5 mb-5 pt-5">
//             {" "}
//             Artist Signin Page
//           </h1>
//           <div>
//             <div>
//               <Label
//                 for="exampleEmail"
//                 className="text-light"
//                 style={{ fontSize: "15px", fontWeight: "bolder" }}
//               >
//                 What's your email?
//               </Label>
//               <Input
//                 type="email"
//                 name="email"
//                 id="exampleEmail"
//                 placeholder="Enter your email"
//                 className="InputField form-control"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 required
//               />

//               <Label
//                 for="examplePassword"
//                 className="text-light"
//                 style={{ fontSize: "15px", fontWeight: "bolder" }}
//               >
//                 Create a Password
//               </Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="examplePassword"
//                 placeholder="Create a password"
//                 className="InputField form-control"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//                 required
//                 minLength={6}
//               />

//               <Label
//                 for="exampleProfileName"
//                 className="text-light"
//                 style={{ fontSize: "15px", fontWeight: "bolder" }}
//               >
//                 What should we call you?
//               </Label>
//               <Input
//                 type="text"
//                 name="profileName"
//                 id="exampleProfileName"
//                 placeholder="Enter a profile name."
//                 className="InputField form-control"
//                 value={formData.username}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value })
//                 }
//               />
//               <p style={{ fontSize: "15px" }} className="text-light">
//                 This appears on your profile.
//               </p>
//             </div>
//             <div className="d-flex justify-content-center">
//               <Button
//                 className="signup-button mt-3 "
//                 style={{ backgroundColor: "rgb(217, 73, 25)", width: "25%" }}
//                 type="submit"
//               >
//                 Sign up
//               </Button>
//             </div>
//             <p className="text-center text-light mb-3">
//               Have an account?{" "}
//               <span class="text-decoration-none">
//                 <a href="/artist" className="text-white">
//                   Login
//                 </a>
//               </span>
//             </p>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Artist;

// components/SignupForm.js

import React, { useState } from 'react';

const Artist = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send signup data to your backend API using fetch or an HTTP library
    const response = await fetch('http://127.0.0.1:3000/api/accounts/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, role }),
    });

    // Handle response, redirect, or show messages to the user
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="artist">Artist</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Artist;

