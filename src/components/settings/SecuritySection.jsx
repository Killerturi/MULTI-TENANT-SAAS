import { Shield } from "lucide-react";

export default function SecuritySection() {
    return (
        <section>
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
                Security
            </h2>

            <div className="rounded-2xl bg-white/80 backdrop-blur p-6
                      shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]
                      ring-1 ring-black/5 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-slate-700">Two-factor authentication</span>
                    <input type="checkbox" className="h-5 w-5 accent-indigo-600" />
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-700">Email alerts on new login</span>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-indigo-600" />
                </div>
            </div>
        </section>
    );
}
