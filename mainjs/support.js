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
        <td> ${dsnv[i].id} </td>
        <td> ${dsnv[i].id} </td>
    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = contentHTML;

  console.log(contentHTML);
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
