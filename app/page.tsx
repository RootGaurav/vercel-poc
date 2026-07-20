export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-10 shadow-lg">

        <h1 className="text-4xl font-bold text-blue-600">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>

        <p className="mt-4 font-bold text-blue-600">
          Environment :
          {" "}
          {process.env.NEXT_PUBLIC_ENVIRONMENT}



          Changes are implemented in dev branch 
        </p>

      </div>
    </main>
  );
}
