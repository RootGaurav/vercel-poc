import { supabase } from "@/lib/supabase";

export default async function Home() {

  const { data, error } = await supabase
    .from("users")
    .select("*");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Vercel CI/CD Demo 🚀
        </h1>

        <p className="mt-4">
          Environment :
          {process.env.NEXT_PUBLIC_ENVIRONMENT}

          
        </p>
        <p className="mt-2">
         Feature branch changes.
        </p>
      </div>
    </main>
  );
}
