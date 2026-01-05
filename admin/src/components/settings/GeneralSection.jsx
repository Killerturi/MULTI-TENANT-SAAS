import { Building2, Palette } from "lucide-react";
import toast from "react-hot-toast";

export default function GeneralSection() {
    return (
        <section>
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                General
            </h2>

            <div className="space-y-8">
                {/* Workspace */}
                <div className="rounded-2xl bg-white/80 backdrop-blur p-6
                        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]
                        ring-1 ring-black/5">
                    <div className="mb-5 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-medium text-slate-800">Workspace</h3>
                    </div>

                    <div className="space-y-4">
                        <input
                            defaultValue="Acme Corp"
                            className="w-full rounded-xl bg-white px-4 py-2.5
                         ring-1 ring-slate-200
                         focus:ring-2 focus:ring-indigo-500
                         focus:outline-none"
                            placeholder="Workspace name"
                        />

                        <input
                            defaultValue="Asia/Kolkata"
                            className="w-full rounded-xl bg-white px-4 py-2.5
                         ring-1 ring-slate-200
                         focus:ring-2 focus:ring-indigo-500
                         focus:outline-none"
                            placeholder="Timezone"
                        />

                        <button
                            onClick={() => toast.success("Workspace updated")}
                            className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600
                         px-5 py-2.5 text-white font-medium
                         shadow-md shadow-indigo-500/30
                         hover:shadow-lg hover:shadow-indigo-500/40
                         transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Appearance */}
                <div className="rounded-2xl bg-white/80 backdrop-blur p-6
                        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]
                        ring-1 ring-black/5">
                    <div className="mb-5 flex items-center gap-2">
                        <Palette className="h-5 w-5 text-indigo-600" />
                        <h3 className="font-medium text-slate-800">Appearance</h3>
                    </div>

                    <div className="flex gap-3">
                        <button className="rounded-xl px-4 py-2 ring-1 ring-indigo-500
                               bg-indigo-50 text-indigo-700">
                            Light
                        </button>
                        <button className="rounded-xl px-4 py-2 ring-1 ring-slate-200 hover:bg-slate-50">
                            Dark
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}
