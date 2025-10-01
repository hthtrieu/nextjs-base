export class Constants {
  static AXIOS_INSTANCE = {
    CORE: {
      KEY: "core",
      VALUE: `${process.env.NEXT_PUBLIC_CORE_API_URL}/rest/api/v1`,
    },
  };

  static ACCESS_TOKEN = "access_token";
  static REFRESH_TOKEN = "refresh_token";
  static IS_AUTHENTICATED = "is_authenticated";

  static GUEST_ROUTES = ["/reset-password"];

  static PUBLIC_ROUTES = ["/", "/about-us", "/facilities"];

  static HEADER_URLS = [
    {
      label: "header.label.about_us",
      href: "#about",
    },

    {
      label: "header.label.courses",
      href: "#courses",
    },
    {
      label: "header.label.facilities",
      href: "#facilities",
    },
  ];

  static FOOTER_URLS = [
    {
      label: "footer.label.privacy_policy",
      CODE: "PY",
    },
  ];

  static INPUT_TYPE = {
    TEXT: "text",
    EMAIL: "email",
    PASSWORD: "password",
    CHECKBOX: "checkbox",
    SELECT: "select",
    TEXTAREA: "textarea",
    MONTH_PICKER: "month_picker",
    MONTH_RANGE_PICKER: "month_range_picker",
    EDITOR: "editor",
    FILE_UPLOAD: "file",
    FILE_UPLOAD_BUTTON: "file_upload_btn",
    RADIO: "rdo",
    INPUT_CHECK: "input_check",
    RE_CAPTCHA: "re_captcha",
    DATE_TIME_PICKER: "date_time_picker",
    LIST_CHECKBOX: "list_checkbox",
    INPUT_KEY: "input_key",
    DATE: "date",
    TIME_PICKER: "time",
    UPLOAD_IMAGE: "upload_image",
    NUMBER: "number",
    SELECT_FILTER: "select_filter",
    OTP: "otp",
    REACT_SELECT: "re-select",
    SWITCH: "switch",
    ATTACHMENT: "ATTACHMENT",
    SELECT_FILTER_TREE: "SELECT_FILTER_TREE",
    TIME_PICKER_SECOND: "time_has_second",
    NUMBER_NO_DECIMAL: "NUMBER_NO_DECIMAL",
    WEEK: "WEEK",
    DATE_PICKER: "date_picker",
  };

  static TYPE_ELEMENT = {
    CHECKBOX: {
      RECTANGLE: "rectangle",
      CIRCLE: "circle",
    },
  };

  static SELECT_INSTANCE_TRIGGER = {
    BUTTON: "button",
    INPUT_TAG: "input-tag",
  };

  static REGEX = {
    formatMoney: /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    isNumber: /^\d+$/,
    isOnlyDecimals: /^\.\d+/, // ex: .1
  };

  static LANGUAGE = {
    EN: {
      CODE: "En",
      VALUE: "en",
      LABEL: "EN",
    },
    VN: {
      CODE: "Vn",
      VALUE: "vn",
      LABEL: "VN",
    },
  };

  static COURSES = [
    {
      description: "courses.course_1.description",
      name: "courses.course_1.name",
      image: "/assets/images/courses/course_1.png",
    },
    {
      description: "courses.course_2.description",
      name: "courses.course_2.name",
      image: "/assets/images/courses/course_1.png",
    },
    {
      description: "courses.course_3.description",
      name: "courses.course_3.name",
      image: "/assets/images/courses/course_1.png",
    },

    {
      description: "courses.course_1.description",
      name: "courses.course_1.name",
      image: "/assets/images/courses/course_1.png",
    },
    {
      description: "courses.course_2.description",
      name: "courses.course_2.name",
      image: "/assets/images/courses/course_1.png",
    },
    {
      description: "courses.course_3.description",
      name: "courses.course_3.name",
      image: "/assets/images/courses/course_1.png",
    },
  ];
}
