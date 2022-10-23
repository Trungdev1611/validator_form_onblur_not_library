export const data = [
  {
    id: 1,
    name: "username",
    placeholder: "Username",
    type: "text",
    pattern: "^([a-zA-Z0-9_-]){3,5}$",
    errMsg: "Username ít nhất 5 ký tự chữ"
  },
  {
    id: 2,
    name: "password",
    placeholder: "Password",
    type: "text",
    pattern: "(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*W)",
    errMsg:
      "Password phải có ít nhất một chữ viết thường, 1 chữ viết hoa, 1 số, 1 ký tự đặc biệt"
  },
  {
    id: 3,
    name: "email",
    placeholder: "Email",
    type: "text",
    pattern: "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/",
    errMsg: "email không đúng định dạng"
  },
  {
    id: 4,
    name: "phone",
    placeholder: "Phone",
    type: "number",
    errMsg: "phone không đúng định dạng"
  }
];
