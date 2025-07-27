
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import signUpCar from "../assets/signup-car.png";
// import checkImg from "../assets/check.png";

// const SignUp = () => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [verification, setVerification] = useState({
//     state: "default",
//     error: "",
//     code: "",
//   });
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   return (
//     <main style={{ backgroundColor: "white", minHeight: "20vh" }}>
//       {/* Top Image Section */}
//       <section style={{ position: "relative", height: "250px" }}>
//         <img
//           src={signUpCar}
//           alt="Sign Up Car"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//         <h2
//           style={{
//             position: "absolute",
//             bottom: "20px",
//             left: "20px",
//             color: "black",
//             fontSize: "2rem",
//             fontWeight: "600",
//           }}
//         >
//           Create Your Account
//         </h2>
//       </section>

//       {/* Form Section */}
//       <section
//         style={{
//           maxWidth: "500px",
//           margin: "0 auto",
//           padding: "40px 24px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px" }}
//           />
//         </label>

//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             style={{ width: "100%", padding: "8px", marginTop: "4px" }}
//           />
//         </label>

//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             style={{ width: "96%", padding: "8px", marginTop: "4px" }}
//           />
//         </label>

//         <button
//           style={{
//             padding: "12px",
//             backgroundColor: "#333",
//             color: "#fff",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Sign Up
//         </button>

//         <div style={{ textAlign: "center" }}>
//           <p>Or sign up with</p>
//           <button style={{ padding: "10px 20px" }}>Google</button>
//         </div>

//         <p style={{ textAlign: "center", marginTop: "20px" }}>
//           Already have an account? <a href="/sign-in">Log In</a>
//         </p>
//       </section>

//       {/* Verification Modal */}
//       {verification.state === "pending" && (
//         <section
//           style={{
//             maxWidth: "400px",
//             margin: "40px auto",
//             padding: "24px",
//             borderRadius: "12px",
//             backgroundColor: "#fff",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2>Verification</h2>
//           <p>We've sent a code to {form.email}.</p>
//           <input
//             type="text"
//             placeholder="12345"
//             value={verification.code}
//             onChange={(e) =>
//               setVerification({ ...verification, code: e.target.value })
//             }
//             style={{ width: "100%", padding: "8px", marginTop: "10px" }}
//           />
//           {verification.error && (
//             <p style={{ color: "red", fontSize: "12px" }}>
//               {verification.error}
//             </p>
//           )}
//           <button style={{ marginTop: "16px" }}>Verify Email</button>
//         </section>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <section
//           style={{
//             maxWidth: "400px",
//             margin: "40px auto",
//             padding: "24px",
//             borderRadius: "12px",
//             backgroundColor: "#fff",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src={checkImg}
//             alt="Verified"
//             style={{ width: "110px", height: "110px", margin: "20px auto" }}
//           />
//           <h2>Verified</h2>
//           <p>You have successfully verified your account.</p>
//           <button style={{ marginTop: "16px" }}>Browse Home</button>
//         </section>
//       )}
//     </main>
//   );
// };

// export default SignUp;




















































































import React from "react";

const SignUp = () => {
  return (
    <main style={mainStyle}>
      <section style={cardStyle}>

        <header>
          <h2 style={headingStyle}>Create an Account</h2>
        </header>

        <form style={formStyle}>
          <label>
            <input type="text" placeholder="Enter Name" style={inputStyle} />
          </label>
          <label>
            <input type="email" placeholder="Enter Email" style={inputStyle} />
          </label>
          <label>
            <input type="password" placeholder=" Enter Password" style={inputStyle} />
          </label>

          <button type="submit" style={signUpBtn}>Sign Up</button>
        </form>

        {/* <hr style={dividerStyle}> */}
        {/* <hr style={dividerStyle}>or<hr/> */}
        <section style={dividerStyle1}>
            <hr style={dividerStyle2} />
            <span>or</span>
            <hr style={dividerStyle2} />
        </section>


        {/* <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}> */}
    

        <section>
          <button style={oauthBtn}>SignUp with Google</button>
        </section>

        <footer style={footerStyle}>
          Already have an account?{" "}
          <a href="/login" style={linkStyle}>Log In</a>
        </footer>

      </section>
    </main>
  );
};

// 🎨 Styles
const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f9f9f9",
};

const cardStyle = {
  maxWidth: "400px",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  background: "#fff",
  width: "100%",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "1.5rem",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  width: "93%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "30px",
  fontSize: "1rem",
};

const signUpBtn = {
  padding: "0.75rem",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "40px",
  fontSize: "1rem",
  cursor: "pointer",
};

const oauthBtn = {
  width: "100%",
  padding: "0.75rem",
  background: "#f0f0f0",
  color: "#000",
  border: "1px solid #ccc",
  borderRadius: "30px",
  fontSize: "1rem",
  marginTop: "0.5rem",
  cursor: "pointer",
};

const dividerStyle1 = { 
    display: "flex", 
    alignItems: "center", 
    gap: "1rem", 
    margin: "1.5rem 0" 
};

const dividerStyle2 = { 
    flex: 1, 
    border: "none", 
    borderTop: "1px solid #eee" 
};


const footerStyle = {
  marginTop: "1.5rem",
  textAlign: "center",
  fontSize: "0.9rem",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default SignUp;
