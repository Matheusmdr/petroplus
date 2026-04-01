export default function AppLogo() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="/petroplus-laranja.svg"
          alt="Petroplus"
          className="h-8 w-auto object-contain dark:hidden"
        />
        <img
          src="/petroplus-branca.svg"
          alt="Petroplus"
          className="hidden h-8 w-auto object-contain dark:block"
        />
      </div>
    </>
  );
}
