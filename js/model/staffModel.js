const Staff = function (
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCb,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCb = luongCb;
  this.chucVu = chucVu;
  this.gioLam = gioLam;

  this.tinhLuong = function () {
    if (this.chucVu.toLowerCase() === "giám đốc") {
      return this.luongCb * 3;
    } else if (this.chucVu.toLowerCase() === "trưởng phòng") {
      return this.luongCb * 2;
    } else {
      return luongCb;
    }
  };
  this.tongLuong = this.tinhLuong();

  this.xeploai = function () {
    if (this.gioLam >= 192) {
      return "Xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Giỏi";
    } else if (this.gioLam >= 160) {
      return "Khá";
    } else {
      return "Trung Bình";
    }
  };
  this.loaiNV = this.xeploai();
};
