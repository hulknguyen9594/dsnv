// tao danh sach
var dsnv = [];
//validate.js

// end validate.js
// them nhan vien moi
function themNhanVien() {
  console.log("yes");
  //lay du lieu tu bang
  var id = document.querySelector("#tknv").value;

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var datepicker = document.querySelector("#datepicker").value;
  var luongCB = document.querySelector("#luongCB").value * 1;
  var chucvu = document.querySelector("#chucvu").value;
  var giolam = document.querySelector("#gioLam").value;

  if (kiemTraID(id) & kiemTraName(name)) {
    //add vao danh sach sinh vien
    addNewSV(id, name, email, password, datepicker, luongCB, chucvu, giolam);

    // show len layout
    showTable(dsnv);
  } else {
  }
}
