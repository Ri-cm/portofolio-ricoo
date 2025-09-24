// ambil tombol
const backToTop = document.getElementById("backToTop");

// muncul saat scroll ke bawah
window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
} else {
    backToTop.style.display = "none";
}
};

// fungsi klik tombol balik ke atas
backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // biar halus scroll-nya
    });
};
