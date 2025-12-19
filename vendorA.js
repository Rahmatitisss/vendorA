export default function handler(req, res) {
  res.status(200).json([
    {
      kd_produk: "A001",
      nm_brg: "Kopi Bubuk 200g",
      hrg: "15000",
      ket_stok: "ada"
    },
    {
      kd_produk: "A002",
      nm_brg: "Gula Aren 250g",
      hrg: "12000",
      ket_stok: "habis"
    },
    {
      kd_produk: "A003",
      nm_brg: "Teh Celup 50pcs",
      hrg: "9000",
      ket_stok: "ada"
    }
  ]);
}
