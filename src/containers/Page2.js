import React from "react";

const Page2 = () => {
  return (
    <body  style={{'margin-left':"50px"}}>
      <h1>How To Install Node.js</h1>
      <br></br>
      <div style={{left:"1000px"}}>
        Step 1: Download the Node.js installer package from <a href="https://nodejs.org/en/download/">here</a>. Make sure to click the installer for your operating system    <br></br>

       Step 2: Once the package has been downloaded, double click it and follow the instructions shown on screen    <br></br>

       Step 3: Restart your computer    <br></br>

       Step 4: Verify the installation by opening a new terminal and entering the following line: node -v    <br></br>
       If installation was completed you should see the version number displayed on your terminal    <br></br>
       
       Step 5: To start a new project open a text editor of your choice and open the project folder. Enter npm init and follow the instructions on screen.   <br></br>
  
               </div>
       <br></br> 
       <h1>How To Install React</h1>
       <br></br>
       <div>
        Note: Node.js needs to be installed before preceeding    <br></br>
        Step 1: Open new terminal     <br></br>
        Step 2: Enter the following command: npx create-react-app my-app   <br></br>
        Please wait until you see the message: Success! Created my-app on your terminal. Takes about 5 minutes to intialize    <br></br>
        Step 3: Naviagte to the my-app directory by using the cd command   <br></br>
        Step 4: Start your application by using the command npm start   <br></br><br></br><br></br>
       </div>
    
      </body>

);
};

export default Page2;

