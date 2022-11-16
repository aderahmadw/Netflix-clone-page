const tabs = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

// function remove border
function removeBorder() {
  tabs.forEach(function (item) {
    item.classList.remove("tab-border");
  });
}

// function remove show
function removeShow() {
  tabContents.forEach(function (item) {
    item.classList.remove("show");
  });
}

// function select item
function selectItem(e) {
  // Remove border and show
  removeBorder();
  removeShow();
  // add border
  this.classList.add("tab-border");
  // select Item
  const Contents = document.querySelector(`#${this.id}-content`);
  // add show
  Contents.classList.add("show");
}

// Listen for tab item click
tabs.forEach((item) => {
  item.addEventListener("click", selectItem);
});
