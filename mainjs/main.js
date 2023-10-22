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

    dsnv.push(
      addNewSV(id, name, email, password, datepicker, luongCB, chucvu, giolam)
    );
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

// tim nhan vien
function findNV() {
  var timKiem = document.querySelector("#searchName").value;
  var newdsnv = [];
  for (var i = 0; i < dsnv.length; i++) {
    if (dsnv[i].xeploai() == timKiem) {
      newdsnv.push(
        addNewSV(
          dsnv[i].id,
          dsnv[i].name,
          dsnv[i].email,
          dsnv[i].password,
          dsnv[i].datepicker,
          dsnv[i].luongCB,
          dsnv[i].chucvu,
          dsnv[i].giolam
        )
      );
    }
  }
  showTable(newdsnv);
}
