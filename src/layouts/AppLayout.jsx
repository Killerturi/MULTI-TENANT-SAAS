import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        <Topbar />

        {/* MAIN CANVAS */}
        <main className="flex-1 overflow-y-auto p-6">
          <div
            className="
              min-h-full
              rounded-2xl
              bg-gray-50
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            "
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
