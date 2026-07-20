import { supabase } from "@/lib/supabase";

export default async function Home() {

  const { data, error } = await supabase
    .from("users")
    .select("*");

  return (
    <main className="min-h-screen font-sans text-black flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[700px]">

        <h1 className="text-3xl font-bold mb-6">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>

        <p className="mb-6">
          Environment :
          {" "}
          <strong>
            {process.env.NEXT_PUBLIC_ENVIRONMENT}
          </strong>
        </p>

        <h2 className="text-xl font-semibold mb-3">
          Users
        </h2>

        {error ? (
          <p className="text-red-500">{error.message}</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}

      </div>
    </main>
  );
}