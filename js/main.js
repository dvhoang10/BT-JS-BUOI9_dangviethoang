let danhSachStaff = [];

const json = getJson();
if (json) {
  danhSachStaff = JSON.parse(json);
  renderStaffList(danhSachStaff);
}

const validate = (staff, danhSachStaff) => {
  let rules = [
    Validator.isRequired(
      staff.taiKhoan,
      "#tknv",
      "#tbTKNV",
      "Vui lòng nhập tài khoản"
    ),
    Validator.checkUser(staff.taiKhoan, "#tknv", "#tbTKNV"),
    // Validator.findDuplicate(staff.taiKhoan, danhSachStaff, "#tknv", "#tbTKNV"),
    Validator.isRequired(
      staff.hoTen,
      "#name",
      "#tbTen",
      "Vui lòng nhập họ tên"
    ),
    Validator.checkName(staff.hoTen, "#name", "#tbTen"),
    Validator.isRequired(
      staff.email,
      "#email",
      "#tbEmail",
      "Vui lòng nhập email"
    ),
    Validator.isEmail(staff.email, "#email", "#tbEmail"),
    Validator.isRequired(
      staff.matKhau,
      "#password",
      "#tbMatKhau",
      "Vui lòng nhập mật khẩu"
    ),
    Validator.isPassword(staff.matKhau, "#password", "#tbMatKhau"),
    Validator.isRequired(
      staff.ngayLam,
      "#datepicker",
      "#tbNgay",
      "Vui lòng nhập ngày vào làm"
    ),
    Validator.isDate(staff.ngayLam, "#datepicker", "#tbNgay"),
    Validator.isRequired(
      staff.luongCb,
      "#luongCB",
      "#tbLuongCB",
      "Vui lòng nhập lương cơ bản"
    ),
    Validator.checkPosition(staff.chucVu, "#chucvu", "#tbChucVu"),
    Validator.checkWorkHours(
      staff.luongCb,
      "#luongCB",
      "#tbLuongCB",
      1000000,
      20000000
    ),
    Validator.isRequired(
      staff.gioLam,
      "#gioLam",
      "#tbGiolam",
      "Vui lòng nhập số giờ làm"
    ),
    Validator.checkWorkHours(staff.gioLam, "#gioLam", "#tbGiolam", 80, 200),
  ];

  let isValid = true;
  let selectorRules = {};

  rules.forEach((rule) => {
    if (Array.isArray(selectorRules[rule.inputSelector])) {
      selectorRules[rule.inputSelector].push(rule.test);
    } else {
      selectorRules[rule.inputSelector] = [rule.test];
    }

    let rules = selectorRules[rule.inputSelector];

    for (let i = 0; i < rules.length; i++) {
      if (!rules[i]()) {
        isValid = false;
        break;
      }
    }
  });

  return isValid;
};

const addStaff = () => {
  const newStaff = getInfoFromForm();
  console.log(newStaff.chucVu);

  let isValid = validate(newStaff, danhSachStaff);

  if (isValid) {
    danhSachStaff.push(newStaff);
    setStaffLocal(danhSachStaff);

    document.querySelector("#formStaff").reset();
  }
};

document.querySelector("#btnThemNV").addEventListener("click", addStaff);

const checkUser = (username) => {
  return danhSachStaff.findIndex((staff) => staff.taiKhoan === username);
};

document.querySelector("#btnThem").addEventListener("click", () => {
  document.querySelector("#formStaff").reset();
  document.querySelector("#btnCapNhat").style.display = "none";
  document.querySelector("#btnThemNV").style.display = "block";
  document.querySelector("#tknv").disabled = false;
});

const editStaffInfo = (username) => {
  document.querySelector("#btnThem").click();
  const index = checkUser(username);
  let staff;

  if (index !== -1) {
    staff = danhSachStaff[index];
  }

  renderStaffInfo(staff);
  document.querySelector("#btnCapNhat").style.display = "block";
  document.querySelector("#btnThemNV").style.display = "none";
  document.querySelector("#tknv").disabled = true;
};

const updateStaffInfo = () => {
  const username = document.querySelector("#tknv").value;
  const index = checkUser(username);
  let staff;

  if (index !== -1) {
    staff = getInfoFromForm();

    let isValid = validate(staff, danhSachStaff);

    if (isValid) {
      // let { taiKhoan, ...tmpStaff } = staff;
      danhSachStaff[index] = staff;
      setStaffLocal(danhSachStaff);
      document.querySelector("#btnDong").click();
    }
  }
};

document
  .querySelector("#btnCapNhat")
  .addEventListener("click", updateStaffInfo);

const deleteStaff = (username) => {
  const index = checkUser(username);

  if (index !== -1) {
    danhSachStaff.splice(index, 1);
    setStaffLocal(danhSachStaff);
  }
};

const searchStaff = (e) => {
  let input = e.target.value.trim();
  input = input.toLowerCase();
  let arrayResult = danhSachStaff.filter((staff) =>
    staff.loaiNV.toLowerCase().includes(input)
  );
  renderStaffList(arrayResult);
};

document.querySelector("#searchName").addEventListener("input", searchStaff);
