// const accordionBtns = document.querySelectorAll(".mid-boxes2");

// accordionBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.classList.toggle("active");
//     const accordionDescription = this.nextElementSlibling;
//     const plusIcon = this.querySelector(".add-icon");
//     const minusIcon = this.querySelector(".minus-icon");

//     if (accordionDescription.style.maxHeight) {
//       c = null;
//       plusIcon.style.display = "block";
//       minusIcon.style.display = "none";
//     } else {
//       accordionDescription.style.maxHeight =
//         accordionDescription.scrollHeight + "px";
//       plusIcon.style.display = "none";
//       minusIcon.style.display = "block";
//     }
//   });
// });
// const accordionBtns = document.querySelectorAll(".mid-boxes2");

// accordionBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.classList.toggle("active");
//     const accordionDescription = this.nextElementSibling; // Fix typo here
//     const plusIcon = this.querySelector(".add-icon");
//     const minusIcon = this.querySelector(".minus-icon");

//     if (accordionDescription.style.maxHeight) {
//       accordionDescription.style.maxHeight = null; // Set to null to remove inline style
//       plusIcon.style.display = "block";
//       minusIcon.style.display = "none";
//     } else {
//       accordionDescription.style.maxHeight =
//         accordionDescription.scrollHeight + "px";
//       plusIcon.style.display = "none";
//       minusIcon.style.display = "block";
//     }
//   });
// });
// const accordionBtns = document.querySelectorAll(".mid-boxes2");

// accordionBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.classList.toggle("active");

//     const accordionDescription = this.nextElementSibling;
//     const plusIcon = this.querySelector(".add-icon");
//     const minusIcon = this.querySelector(".minus-icon");

//     if (accordionDescription.style.maxHeight) {
//       accordionDescription.style.maxHeight = null;
//       plusIcon.style.display = "block";
//       minusIcon.style.display = "none";
//     } else {
//       accordionDescription.style.maxHeight =
//         accordionDescription.scrollHeight + "px";
//       plusIcon.style.display = "none";
//       minusIcon.style.display = "block";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const accordionBtns = document.querySelectorAll(".mid-boxes2");

//     accordionBtns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         this.classList.toggle("active");

//         const accordionDescription = this.nextElementSibling;
//         accordionDescription.classList.toggle("show");
//       });
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".mid-boxes2");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");

      const accordionDescription = this.nextElementSibling;
      accordionDescription.classList.toggle("show");

      const plusIcon = this.querySelector(".add-icon");
      const minusIcon = this.querySelector(".minus-icon");

      if (accordionDescription.classList.contains("show")) {
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      } else {
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
      }
    });
  });
});
