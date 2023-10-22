// tao danh sach
var dsnv = [];
//validate.js

// end validate.js
// them nhan vien moi
function themNhanVien() {
  //lay du lieu tu bang
  var id = document.querySelector("#tknv").value;

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var datepicker = document.querySelector("#datepicker").value;
  var luongCB = document.querySelector("#luongCB").value * 1;
  var chucvu = document.querySelector("#chucvu").value;
  var giolam = document.querySelector("#gioLam").value * 1;

  if (
    kiemTraID(id) &
    kiemTraName(name) &
    kiemTraEmail(email) &
    kiemTraPassword(password) &
    kiemTraDate(datepicker) &
    kiemTraLuong(luongCB) &
    kiemTraChucVu(chucvu) &
    kiemTraGioLamViec(giolam)
  ) {
    //add vao danh sach sinh vien
    addNewSV(id, name, email, password, datepicker, luongCB, chucvu, giolam);

    // show len layout
    showTable(dsnv);
  }
  return dsnv;
}

//remove
//function remove(id) {
//  var vitri = dsnv.findIndex(function (items) {
//return items.id == id;
//});
//console.log(vitri);
//}
function remove(id) {
  var vitri = dsnv.findIndex(function (item) {
    return item.id == id;
  });
  dsnv.splice(vitri, 1);
  showTable(dsnv);
}
