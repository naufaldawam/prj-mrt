import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <div>Halaman Tidak ditemukan !!!!</div>
    </>
  );
}

export default ErrorPage;
