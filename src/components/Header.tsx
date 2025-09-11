export default function Header() {
  return (
    <div className="">
      <div className="text-4xl text-center text-indigo-200">
        <section>Today</section>
        <section>`{new Date().toDateString()}`</section>
      </div>
    </div>
  );
}
