export default async function Inbox() {
    return (
       <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] p-8 max-w-screen ">
  <div className=" mx-auto rounded-lg shadow border border-[color:var(--color-border)] bg-white dark:bg-[color:var(--background)] max-w-screen flex flex-col">
    <div className="border-b border-[color:var(--color-border)] px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Inbox</h1>
      <button className="rounded bg-[color:var(--color-primary)] text-black px-4 py-2 hover:bg-[color:var(--color-primary-hover)] hover:text-white transition">New Message</button>
    </div>
    <ul>
      <li className="flex items-center gap-3 px-6 py-4 border-b border-[color:var(--color-border)] hover:bg-[color:var(--color-hover)]">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Alice Smith</span>
            <span className="text-xs text-gray-400">Just now</span>
          </div>
          <div className="truncate text-sm text-gray-600 dark:text-gray-300">Hello! How are you?</div>
        </div>
      </li>
      <li className="flex items-center gap-3 px-6 py-4 border-b border-[color:var(--color-border)] hover:bg-[color:var(--color-hover)]">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold">John Doe</span>
            <span className="text-xs text-gray-400">5 min ago</span>
          </div>
          <div className="truncate text-sm text-gray-600 dark:text-gray-300">Don't forget the meeting at 3 PM.</div>
        </div>
      </li>
      <li className="flex items-center gap-3 px-6 py-4 border-b border-[color:var(--color-border)] hover:bg-[color:var(--color-hover)]">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Support</span>
            <span className="text-xs text-gray-400">1 hour ago</span>
          </div>
          <div className="truncate text-sm text-gray-600 dark:text-gray-300">Your ticket has been resolved.</div>
        </div>
      </li>
      {/* Add more static list items as needed */}
    </ul>
  </div>
</div>
 )
}