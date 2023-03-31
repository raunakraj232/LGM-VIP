const html_form = ` <tr class="select_option">
<td id="td">
  <input type="checkbox" />
</td>
<td>
  <p id="nam">John Doe</p>
  <br />

  <p id="gen">Male,</p>
  <br />
  <p id="email">John.doe@gmail.com</p>
  <br />
  <p id="web">www.john.com</p>
  <br />
  <p id="course">Java ,Html</p>
  <br />
</td>
<td>
  <img
    src="https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp.jpg"
    alt=" profile-image"
    width="150px"
    height="150px"
    id="image"
  />
</td>
</tr>`;
const btn = document.querySelector("#subbtn");
// document.querySelector("#subbtn").onclick = function () {
//   if (document.querySelector("#x").value.length == 0) {
//     alert("Please Enter the details correctly");
//   } else {

btn.addEventListener("click", register);

function register() {
  tbl.insertAdjacentHTML("beforeend", html_form);
}

function displayRadioValue() {
  var ele = document.getElementsByName('gender');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("G").innerHTML
              = "Gender: "+ele[i].value;
  }
}

let temp = document.getElementById("x").value;
document.getElementById("nam").innerHTML = temp;

temp = document.getElementById("y").value;
document.getElementById("email").innerHTML = temp;

temp = document.getElementById("z").value;
document.getElementById("web").innerHTML = temp;

temp = document.getElementById("x1").value;
document.getElementById("image").innerHTML = temp;

temp = document.getElementById("G").value;
document.getElementById("course").innerHTML = temp;
