
function TodoList() {
  const items = [
    'Hubungi JakOnePay ke akun  Bank DKI',
    'Mengakses ke saldo JakOnePay lewat Bank DKI',
    'Menambahkan  promo dari Bank DKI pada transaksimu'
  ];
  return (
    <>
      <ul className="list-disc ml-8 mb-12">
        {items.map((item, index) => (
          <li className='mb-4 mt-4' key={index}>{item} <hr className='mt-4' /></li>
        ))}
      </ul>
    </>
  )
}

export default TodoList;