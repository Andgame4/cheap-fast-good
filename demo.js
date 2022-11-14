// B1: khởi tạo các giá trị
let fast = false;
let cheap = false;
let good = false;

// Bước 2: Lay ra cac selector

// Bước 3: Xac dinh cac tham so
// An vao fast
if (good == true && cheap == true) {
  fast = false;
  cheap = false;
  good = false;
} else {
  fast = true;
}

// An vao good
if (fast == true && cheap == true) {
}

// An vao cheap
if (good == true && fast == true) {
}
