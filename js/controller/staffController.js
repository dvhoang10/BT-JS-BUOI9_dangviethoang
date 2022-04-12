const staffLocal = "staffLocal";

const getInfoFromForm = () => {
  const taiKhoanNV = document.querySelector("#tknv").value;
  const tenNV = document.querySelector("#name").value;
  const emailNV = document.querySelector("#email").value;
  const matKhauNV = document.querySelector("#password").value;
  const ngayLamNV = document.querySelector("#datepicker").value;
  const luongCb = document.querySelector("#luongCB").value;
  const chucVuEl = document.querySelector("#chucvu");
  const chucVuNV = chucVuEl.options[chucVuEl.selectedIndex].text;
  const gioLamNV = document.querySelector("#gioLam").value;

  const staff = new Staff(
    taiKhoanNV,
    tenNV,
    emailNV,
    matKhauNV,
    ngayLamNV,
    luongCb,
    chucVuNV,
    gioLamNV
  );

  return staff;
};

const renderStaffInfo = (staff) => {
  document.querySelector("#tknv").value = staff.taiKhoan;
  document.querySelector("#name").value = staff.hoTen;
  document.querySelector("#email").value = staff.email;
  document.querySelector("#password").value = staff.matKhau;
  document.querySelector("#datepicker").value = staff.ngayLam;
  document.querySelector("#luongCB").value = staff.luongCb;
  document.querySelector("#chucvu").value = staff.chucVu;
  document.querySelector("#gioLam").value = staff.gioLam;
};

const renderStaffList = (array) => {
  let contentHTML = "";

  array.forEach((staff) => {
    contentHTML += `<tr>
        <td>${staff.taiKhoan}</td>
        <td>${staff.hoTen}</td>
        <td>${staff.email}</td>
        <td>${staff.ngayLam}</td>
        <td>${staff.chucVu}</td>
        <td>${staff.tongLuong}</td>
        <td>${staff.loaiNV}</td>
        <td>
        <div class="d-flex btn--design">
          <button class="btn btn-success" onclick="editStaffInfo('${staff.taiKhoan}')">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-danger" onclick="deleteStaff('${staff.taiKhoan}')">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
      </tr>`;
  });

  document.querySelector("#tableDanhSach").innerHTML = contentHTML;
};

const setStaffLocal = (array) => {
  const json = JSON.stringify(array);
  localStorage.setItem(staffLocal, json);
  renderStaffList(array);
};

const getJson = () => {
  return localStorage.getItem(staffLocal);
};
