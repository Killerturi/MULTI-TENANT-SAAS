import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AppLayout() {
  return (
    <div className="h-screen bg-gray-200 p-4">
      {/* OUTER WRAPPER */}
      <div className="h-full flex gap-4">

        {/* ===== SIDEBAR ===== */}
        <aside
          className="
            w-64
            flex-shrink-0
            rounded-2xl
            bg-white
            border border-gray-200
            shadow-sm
            overflow-hidden
          "
        >
          <Sidebar />
        </aside>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="flex flex-col flex-1 gap-4">

          {/* ===== TOPBAR ===== */}
          <header
            className="
              
              rounded-2xl
              bg-white
              border border-gray-200
              shadow-sm
              
            px-2
            "
          >
            <Topbar />
          </header>

          {/* ===== MAIN CONTENT ===== */}
          <main
            className="
              flex-1
              rounded-2xl
              bg-gray-50
              border border-gray-200
              shadow-sm
              overflow-y-auto
              hide-scrollbar
            "
          >
            <div className="p-6 min-h-full">
              <Outlet />
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
