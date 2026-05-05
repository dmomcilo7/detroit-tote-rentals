export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-12">
      <div className="mx-auto max-w-6xl text-sm text-slate-600">
        <p className="font-semibold text-blue-700">Detroit Tote Rentals</p>
        <p className="mt-2">Moving tote rentals serving Metro Detroit.</p>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Detroit Tote Rentals. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
