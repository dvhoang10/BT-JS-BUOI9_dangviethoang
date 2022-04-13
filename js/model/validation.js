const Validator = {
  isRequired: (value, inputSelector, errorSelector, message) => {
    return {
      inputSelector,
      test: () => {
        if (value.trim()) {
          document.querySelector(errorSelector).innerText = "";
          return true;
        }
        document.querySelector(errorSelector).innerText = message;
        document.querySelector(errorSelector).style.display = "block";
        return false;
      },
    };
  },

  checkUser: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let regex = /^[0-9]{4,6}$/;

        if (!regex.test(value)) {
          document.querySelector(errorSelector).innerText =
            "Vui lòng nhập 4 -> 6 ký số";
          document.querySelector(errorSelector).style.display = "block";
          return false;
        }
        document.querySelector(errorSelector).innerText = "";
        document.querySelector(errorSelector).style.display = "none";
        return true;
      },
    };
  },

  findDuplicate: (value, array, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let index = array.findIndex((item) => {
          return item.taiKhoan === value;
        });

        if (index === -1) {
          document.querySelector(errorSelector).innerText = "";
          document.querySelector(errorSelector).style.display = "none";
          return true;
        }
        document.querySelector(errorSelector).innerText =
          "Tài khoản đã tồn tại";
        document.querySelector(errorSelector).style.display = "block";
        return false;
      },
    };
  },

  checkName: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let regex =
          /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;

        if (!regex.test(value)) {
          document.querySelector(errorSelector).innerText =
            "Vui lòng chỉ nhập tên là chữ và có ít nhất 2 từ";
          document.querySelector(errorSelector).style.display = "block";
          return false;
        }
        document.querySelector(errorSelector).innerText = "";
        document.querySelector(errorSelector).style.display = "none";
        return true;
      },
    };
  },

  isEmail: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!regex.test(value)) {
          document.querySelector(errorSelector).innerText =
            "Email không hợp lệ";
          document.querySelector(errorSelector).style.display = "block";
          return false;
        }
        document.querySelector(errorSelector).innerText = "";
        document.querySelector(errorSelector).style.display = "none";
        return true;
      },
    };
  },

  isPassword: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

        if (!regex.test(value)) {
          document.querySelector(errorSelector).innerText =
            "Mật khẩu không hợp lệ";
          document.querySelector(errorSelector).style.display = "block";
          return false;
        }
        document.querySelector(errorSelector).innerText = "";
        document.querySelector(errorSelector).style.display = "none";
        return true;
      },
    };
  },

  isDate: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        let regex =
          /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;

        if (!regex.test(value)) {
          document.querySelector(errorSelector).innerText = "Ngày không hợp lệ";
          document.querySelector(errorSelector).style.display = "block";
          return false;
        }
        document.querySelector(errorSelector).innerText = "";
        document.querySelector(errorSelector).style.display = "none";
        return true;
      },
    };
  },

  checkSalary: (value, inputSelector, errorSelector, min, max) => {
    value = value * 1;
    return {
      inputSelector,
      test: () => {
        if (value >= min && value <= max) {
          document.querySelector(errorSelector).innerText = "";
          return true;
        }
        document.querySelector(
          errorSelector
        ).innerText = `Vui lòng nhập lương cơ bản trong khoảng ${min} - ${max}`;
        document.querySelector(errorSelector).style.display = "block";
        return false;
      },
    };
  },

  checkPosition: (value, inputSelector, errorSelector) => {
    return {
      inputSelector,
      test: () => {
        if (value !== "Chọn chức vụ") {
          document.querySelector(errorSelector).innerText = "";
          return true;
        }
        document.querySelector(
          errorSelector
        ).innerText = `Vui lòng chọn chức vụ`;
        document.querySelector(errorSelector).style.display = "block";
        return false;
      },
    };
  },

  checkWorkHours: (value, inputSelector, errorSelector, min, max) => {
    value = value * 1;
    return {
      inputSelector,
      test: () => {
        if (value >= min && value <= max) {
          document.querySelector(errorSelector).innerText = "";
          return true;
        }
        document.querySelector(
          errorSelector
        ).innerText = `Vui lòng nhập số giờ làm trong khoảng ${min} - ${max}`;
        document.querySelector(errorSelector).style.display = "block";
        return false;
      },
    };
  },
};
