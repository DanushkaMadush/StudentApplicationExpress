const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    studentEmail: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: false,
    },

    country: {
      type: String,
      required: true,
    },

    institute: {
      type: String,
      required: true,
    },

    intake: {
      type: String,
      required: true,
    },

    courseTitle: {
      type: String,
      required: true,
    },

    licenseStatus: {
      type: String,
      default: "Inactive",
    },

    approvalStatus: {
      type: String,
      default: "Pending",
    },

    expiryDate: {
      type: String,
      default: "N/A",
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Students", StudentSchema);

module.exports = Student;
