//them sv
function addNewSV(
  id,
  name,
  email,
  password,
  datepicker,
  luongCB,
  chucvu,
  giolam
) {
  var sv = {
    id: id,
    name: name,
    email: email,
    password: password,
    datepicker: datepicker,
    luongCB: luongCB,
    chucvu: chucvu,
    giolam: giolam,
    tongluong: function () {
      if (this.chucvu == "Giám Đốc") {
        return this.luongCB * 3;
      } else if (this.chucvu == "Trưởng phòng") {
        return this.luongCB * 2;
      } else {
        return this.luongCB * 1;
      }
    },
    xeploai: function () {
      if (giolam >= 192) {
        return "nhân viên xuất sắc";
      } else if (giolam < 192 && giolam >= 176) {
        return "nhân viên giỏi";
      } else if (giolam < 176 && giolam >= 160) {
        return "nhân viên khá";
      } else {
        return "nhân viên trung bình";
      }
    },
  };
  dsnv.push(sv);
}

//show table
function showTable(dsnv) {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    contentHTML += `
    <tr>
        <td> ${dsnv[i].id} </td>
        <td> ${dsnv[i].name} </td>
        <td> ${dsnv[i].email} </td>
        <td> ${dsnv[i].datepicker} </td>
        <td> ${dsnv[i].chucvu} </td>
        <td> ${dsnv[i].tongluong().toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })} </td>
        <td> ${dsnv[i].xeploai()} </td>
        <td>
            <button class="btn btn-danger" onclick="remove(${dsnv[i].id})">Xoá
            </button>
        </td>
    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = contentHTML;
}
// validate id
function kiemTraID(id) {
  var isValid = (id.length >= 3) & (id.length <= 6) & (id != "");
  if (isValid) {
    document.querySelector("#tbTKNV").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbTKNV").style.display = "inline";
    document.querySelector(
      "#tbTKNV"
    ).innerText = `ID không được rỗng và phải có từ 3-6 ký tự`;
    return false;
  }
}
//kiem tra id trung
function kiemTraIDTrung(id) {
  var vitri = dsnv.findIndex(function (item) {
    item.id == id;
  });
  console.log(vitri);
}
// validate name
function kiemTraName(name) {
  var reg = /^[a-zA-Z\s]*$/;
  if (reg.test(name)) {
    document.querySelector("#tbTen").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbTen").style.display = "inline";
    document.querySelector(
      "#tbTen"
    ).innerText = `Tên không được rỗng và không bao gồm số`;
    return false;
  }
}

//validate email
function kiemTraEmail(email) {
  var re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    document.querySelector("#tbEmail").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbEmail").style.display = "inline";
    document.querySelector("#tbEmail").innerText = `Email sai định dạng`;
    return false;
  }
}

//validate password
function kiemTraPassword(password) {
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,10}$/;
  if (re.test(password)) {
    document.querySelector("#tbMatKhau").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbMatKhau").style.display = "inline";
    document.querySelector(
      "#tbMatKhau"
    ).innerText = `Mật khẩu gồm 6-10 ký tự, 1 chữ số, 1 ký tự việt hoa và 1 ký tự đặc biệt`;
    return false;
  }
}
//validate date
function kiemTraDate(datepicker) {
  var re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (re.test(datepicker)) {
    document.querySelector("#tbNgay").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbNgay").style.display = "inline";
    document.querySelector(
      "#tbNgay"
    ).innerText = `Không được để trống và kiểm tra định dạng là mm/dd/yyyy`;
    return false;
  }
}

// validate luong
function kiemTraLuong(luongCB) {
  var isValid = (luongCB >= 1000000) & (luongCB <= 2000000) & (luongCB != "");
  if (isValid) {
    document.querySelector("#tbLuongCB").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbLuongCB").style.display = "inline";
    document.querySelector(
      "#tbLuongCB"
    ).innerText = `Lương cơ bản từ 1.000.000 đến 2.000.000`;
    return false;
  }
}
// validate chuc vu
function kiemTraChucVu(chucvu) {
  if (chucvu != "Chọn chức vụ") {
    document.querySelector("#tbChucVu").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbChucVu").style.display = "inline";
    document.querySelector("#tbChucVu").innerText = `Chọn chức vụ`;
    return false;
  }
}
// validate gio lam viec
function kiemTraGioLamViec(giolam) {
  var isValid = (giolam >= 80) & (giolam <= 200) & (giolam != "");
  if (isValid) {
    document.querySelector("#tbGiolam").style.display = "none";
    return true;
  } else {
    document.querySelector("#tbGiolam").style.display = "inline";
    document.querySelector("#tbGiolam").innerText = `Giờ làm từ 80-200`;
    return false;
  }
}
