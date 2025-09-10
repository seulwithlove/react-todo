export default function Header() {
  return (
    <div className="">
      <div className="text-4xl text-center text-indigo-200">
        Today is `{new Date().toDateString()}`
      </div>
    </div>
  );
}
