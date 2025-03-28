// import React, { useState } from "react";
// import "./LoginSignup.css";
// import { useNavigate } from "react-router-dom";
// import user_icon from "../assets/person.png";
// import email_icon from "../assets/email.png";
// import password_icon from "../assets/password.png";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");   // Add this
//   const [password, setPassword] = useState("");
//   const [action, setAction] = useState("Sign Up");
//   const navigate = useNavigate();


//   const handleSignup = () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }
    
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if user already exists
//     if (users.some(user => user.email === email)) {
//       alert("User already exists! Please log in.");
//       return;
//     }

//     // Save user details
//     users.push({ email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Signup Successful! Please log in.");
//     setEmail("");
//     setPassword("");
//   };

//   const handleLogin = () => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
    
//     let userExists = users.find(user => user.email === email && user.password === password);

//     if (userExists) {
//       localStorage.setItem("loggedInUser", JSON.stringify(userExists));
//       alert("Login Successful!");
//       navigate("/home"); // Redirect to Home Page
//     } else {
//       alert("Invalid email or password! Try again.");
//     }
//   };


//   return (
//     <>
//       <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           {action == "Login" ? (
//             <div></div>
//           ) : (
//             <div className="input">
//               <img src={user_icon} alt="" />
//               <input type="text" placeholder="Full Name" />
//             </div>
//           )}

//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input type="password" placeholder="Password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}/>
//           </div>
//         </div>
//         {action == "Sign Up" ? (
//           <div></div>
//         ) : (
//           <div className="forgot-password">
//             Lost Password? <span>Click here</span>
//           </div>
//         )}

//         <div className="submit-container">
//           <div
//             className={action == "Login" ? "submit gray" : "submit"}
//             onClick={handleLogin}
            
//           >
//             Sign Up
//           </div>
//           <div
//             className={action == "Sign Up" ? "submit gray" : "submit"}
//             onClick={handleSignup}
//           >
//             Login
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginSignup;




// import React, { useState } from "react";
// import "./LoginSignup.css";
// import { useNavigate } from "react-router-dom";
// import user_icon from "../assets/person.png";
// import email_icon from "../assets/email.png";
// import password_icon from "../assets/password.png";

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // ✅ True for Sign Up, False for Login
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if user already exists
//     if (users.some(user => user.email === email)) {
//       alert("User already exists! Please log in.");
//       return;
//     }

//     // Save user details
//     users.push({ email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Signup Successful! Please log in.");
//     setEmail("");
//     setPassword("");
//     setIsSignup(false); // ✅ Switch to Login
//   };

//   const handleLogin = () => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
    
//     let userExists = users.find(user => user.email === email && user.password === password);

//     if (userExists) {
//       localStorage.setItem("loggedInUser", JSON.stringify(userExists));
//       alert("Login Successful!");
//       navigate("/home"); // Redirect to Home Page
//     } else {
//       alert("Invalid email or password! Try again.");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="header">
//           <div className="text">{isSignup ? "Sign Up" : "Login"}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           {isSignup && ( // ✅ Only show Full Name input in Sign Up
//             <div className="input">
//               <img src={user_icon} alt="" />
//               <input type="text" placeholder="Full Name" />
//             </div>
//           )}

//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input 
//               type="password" 
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>

//         {!isSignup && ( // ✅ Only show Forgot Password in Login
//           <div className="forgot-password">
//             Lost Password? <span>Click here</span>
//           </div>
//         )}

//         <div className="submit-container">
//           <div
//             className={isSignup ? "submit" : "submit gray"}
//             onClick={handleSignup} // ✅ Sign Up action
//           >
//             Sign Up
//           </div>
//           <div
//             className={!isSignup ? "submit" : "submit gray"}
//             onClick={handleLogin} // ✅ Login action
//           >
//             Login
//           </div>
//         </div>

//         {/* Toggle between Sign Up and Login */}
//         <div className="toggle-container">
//           {isSignup ? (
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsSignup(false)}>Login here</span>
//             </p>
//           ) : (
//             <p>
//               Don't have an account?{" "}
//               <span onClick={() => setIsSignup(true)}>Sign Up here</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginSignup;







import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true); // ✅ True for Sign Up, False for Login
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.some(user => user.email === email)) {
      alert("User already exists! Please log in.");
      return;
    }

    // Save user details
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful! Please log in.");
    setEmail("");
    setPassword("");
    setIsSignup(false); // ✅ Switch to Login
  };

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let userExists = users.find(user => user.email === email && user.password === password);

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      alert("Login Successful!");
      setTimeout(() => navigate("/Home"), 500);  
  } else {
    alert("Invalid email or password! Try again.");
  }
};

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{isSignup ? "Sign Up" : "Login"}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {isSignup && ( // ✅ Only show Full Name input in Sign Up
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Full Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {!isSignup && ( // ✅ Only show Forgot Password in Login
          <div className="forgot-password">
            Lost Password? <span>Click here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={isSignup ? "submit" : "submit gray"}
            onClick={handleSignup} // ✅ Sign Up action
          >
            Sign Up
          </div>
          <div
            className={!isSignup ? "submit" : "submit gray"}
            onClick={handleLogin} // ✅ Login action
          >
            Login
          </div>
        </div>

        {/* Toggle between Sign Up and Login */}
        <div className="toggle-container">
          {isSignup ? (
            <button>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login here</span>
            </button>
          ) : (
            <button>
              Don't have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign Up here</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
