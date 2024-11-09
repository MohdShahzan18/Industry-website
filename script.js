// const texts = ["or Caps & Closures", "Electroplating Rectifier"];
// let index = 0;

// setInterval(() => {
//     index = (index + 1) % texts.length;
//     document.getElementById('text').textContent = texts[index];
// }, 1500); 


//   (function () {
//     emailjs.init("OrewJRt42BnoKwL7X");
//   })();
  
//   const btn = document.querySelector("button");

// btn.addEventListener("click", function sendMail(e) {
//   e.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let emailId = document.getElementById("email_id").value.trim();
  let phone_num = document.getElementById("phone_num").value.trim();
  let city_name = document.getElementById("city_name").value.trim();
  let message = document.getElementById("message").value.trim();

  const popup = document.getElementById("popup-message");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
  if (fullName === "" || emailId === "" || phone_num === "" || city_name === "" || message === "" ) {
    popup.innerText = "Please fill all fields!!";
    popup.style.color = "black";
    popup.style.background = "orange";
  }

//   let data = {
//     from_name: fullName,
//     email_id: emailId,
//     M_num: phone_num,
//     City_name: city_name,
//     message: message,
//   };

// console.log(data);
//   emailjs
//     .send("service_o2jziks", "template_ej2hhhx", data)
//     .then(function (res) {
//       popup.innerText = "Mail Sent Successfully";
//       popup.style.color = "white";
//       popup.style.background = "green";
//     })
//     .catch(function (error) {
//       popup.innerText = "Failed to send mail: " + error;
//       popup.style.color = "white";
//       popup.style.background = "red";
//     });
// });

// function sendmail() {
//   let params = {
//     name : fullName,
//     email : emailId,
//     phone : phone_num,
//     city : city_name,
//     message :message
//   }

//   emailjs.send("service_o2jziks", "template_ej2hhhx", params).then(function (res) {
//           popup.innerText = "Mail Sent Successfully";
//           popup.style.color = "white";
//           popup.style.background = "green";
//         }).catch(function (error) {
//                 popup.innerText = "Failed to send mail: " + error;
//                 popup.style.color = "white";
//                 popup.style.background = "red";
//               });
// }

const btn = document.querySelector("button");

btn.addEventListener("click", function sendMail(e) {
  e.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let emailId = document.getElementById("email_id").value.trim();
  let message = document.getElementById("message").value.trim();

  const popup = document.getElementById("popup-message");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
  if (fullName === "" || emailId === "" || message === "") {
    popup.innerText = "Please fill all fields!!";
    popup.style.color = "black";
    popup.style.background = "orange";
    return;
  }

  let data = {
    from_name: fullName,
    email_id: emailId,
    message: message,
  };

  emailjs
    .send("service_dsykwtc", "template_fr9qc8x", data)
    .then(function (res) {
      popup.innerText = "Mail Sent Successfully";
      popup.style.color = "white";
      popup.style.background = "green";
    })
    .catch(function (error) {
      popup.innerText = "Failed to send mail: " + error;
      popup.style.color = "white";
      popup.style.background = "red";
    });
});
