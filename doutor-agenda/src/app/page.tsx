export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-red-500">Doutor Agenda</h1>
      <p className="mt-4 text-lg">Sua agenda de consultas médicas online.</p>
      <div className="mt-8">
        <a
          href="/login"
          className="rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Acessar Agenda
        </a>
      </div>
    </main>
  );
}
