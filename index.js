function sendLoginCode() {
  let params = {
    gmail: document.getElementById("memoir-input-1").value,
    loginCode: "iamgay",
  };
  const serviceID = "service_fcq02q6";
  const templateID = "template_d9igllb";

  emailjs.send(serviceID, templateID, params);
}
