const SignIn = () => {
  return (
    <main style={mainStyle}>
      <section style={cardStyle}>

        <header>
          <h2 style={headingStyle}>Welcome 👋</h2>
        </header>

        <form style={formStyle}>
          <label>
            <input type="email" placeholder="Enter Email" style={inputStyle} />
          </label>
          <label>
            <input type="password" placeholder=" Enter Password" style={inputStyle} />
          </label>

          <button type="submit" style={signUpBtn}>Login</button>
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
          <button style={oauthBtn}>Login with Google</button>
        </section>

        <footer style={footerStyle}>
          Don't have an account?{" "}
          <a href="/login" style={linkStyle}>Sign Up</a>
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

export default SignIn;



