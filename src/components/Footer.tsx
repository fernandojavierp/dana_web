export default function Footer() {
  return (
    <footer className="bg-white text-center py-6 border-t border-gray-200">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Dana Diesendorf. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
