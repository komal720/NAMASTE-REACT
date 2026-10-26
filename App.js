












const parent  = React.createElement(  "div", {id:"parent"},[

  React.createElement("div",{id:"child"},

    [
      React.createElement("h1",{}," get intership in may 2027& got 10 lpa "),
      React.createElement("h2",{},"10 CGPA IN sem 5"),
    ]),

    React.createElement("div",{id:"child"},

    [
      React.createElement("h1",{}," get intership in may 2027& got 10 lpa "),
      React.createElement("h2",{},"10 CGPA IN sem 5"),
    ]),


  
]);

  console.log(parent);


    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
