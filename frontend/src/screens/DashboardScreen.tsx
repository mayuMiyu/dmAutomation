import { useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MessageSquare, Copy, Cat, Settings, Play, Square, Activity, Sparkles, Heart, Palette, ArrowLeft, Trash2, Edit2 } from "lucide-react";
import { useTheme } from "../context/themeContext";

export function DashboardScreen() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isMinimal = theme === "minimal";
  const [isRunning, setIsRunning] = useState(false);
  const [logs] = useState([
    { id: 1, time: "10:42 AM", text: "1 new message request" },
    { id: 2, time: "10:15 AM", text: "1 new message request" },
    { id: 3, time: "09:30 AM", text: "1 new message request" },
  ]);

  return (
    <div className="flex-1 flex flex-col p-8 h-full pb-6 relative z-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className={`text-xl font-semibold tracking-tight flex items-center gap-2 ${
          isMinimal ? "text-white" : "text-purple-800 font-bold"
        }`}>
          DM Monitor {!isMinimal && <Sparkles className="w-5 h-5 text-pink-400" />}
        </h1>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              isMinimal
                ? "hover:bg-neutral-800 text-neutral-400"
                : "bg-white shadow-sm shadow-pink-200 text-pink-500 hover:bg-pink-50"
            }`}
          >
            {isMinimal ? <Palette className="w-4 h-4" /> : <Heart className="w-4 h-4 fill-pink-500" />}
          </motion.button>
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/settings")}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              isMinimal
                ? "hover:bg-neutral-800 text-neutral-400"
                : "bg-white shadow-sm shadow-pink-200 text-purple-500 hover:bg-purple-50"
            }`}
          >
            <Settings className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-6">
        <div className={`flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full ${
          isMinimal ? "" : isRunning ? "bg-green-100" : "bg-pink-100"
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            isRunning
              ? isMinimal ? "bg-emerald-500 animate-pulse" : "bg-green-500 animate-pulse"
              : isMinimal ? "bg-red-500" : "bg-pink-500"
          }`} />
          <span className={`text-sm font-medium ${
            isRunning
              ? isMinimal ? "text-emerald-500" : "text-green-600"
              : isMinimal ? "text-red-500" : "text-pink-600"
          }`}>
            {isRunning ? "Running" : "Stopped"}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsRunning(!isRunning)}
          className={`w-32 h-32 flex flex-col items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden ${
            isMinimal
              ? `rounded-full border ${isRunning
                  ? "bg-neutral-900/50 border-emerald-500/30 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                  : "bg-neutral-900 border-neutral-800 text-neutral-300"}`
              : `rounded-[2rem] border-4 border-white shadow-xl ${isRunning
                  ? "bg-gradient-to-br from-green-100 to-emerald-100 text-green-700 shadow-green-200/50"
                  : "bg-gradient-to-br from-pink-100 to-purple-100 text-purple-700 shadow-pink-200/50"}`
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isRunning ? "running" : "stopped"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center gap-2"
            >
              {isRunning
                ? <Square className={`w-8 h-8 ${isMinimal ? "fill-emerald-500/20" : "fill-green-600/20"}`} />
                : <Play className={`w-8 h-8 ml-1 ${isMinimal ? "fill-neutral-300/20" : "fill-purple-600/20"}`} />
              }
              <span className="font-bold text-xs tracking-wider uppercase">
                {isRunning ? "Stop" : "Start"}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <div className="mt-8 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Activity className={`w-4 h-4 ${isMinimal ? "text-neutral-500" : "text-purple-400"}`} />
          <h2 className={`text-xs font-semibold uppercase tracking-wider ${
            isMinimal ? "text-neutral-400" : "text-purple-500"
          }`}>Recent Detections</h2>
        </div>
        <div className="space-y-3">
          {logs.map((log, i) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className={`px-4 py-3 flex items-center justify-between ${
                isMinimal
                  ? "bg-neutral-900/40 border border-neutral-800/50 rounded-lg"
                  : "bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100 rounded-2xl"
              }`}
            >
              <span className={`text-sm font-medium ${isMinimal ? "text-neutral-300" : "text-purple-800"}`}>
                {log.text}
              </span>
              <span className={`text-xs font-medium ${isMinimal ? "text-neutral-500" : "text-pink-400"}`}>
                {log.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center pt-6 mt-auto">
        <p className={`text-xs font-medium ${
          isRunning
            ? isMinimal ? "text-emerald-500/70" : "text-green-500"
            : isMinimal ? "text-neutral-600" : "text-purple-400"
        }`}>Checking every 3 seconds</p>
      </div>
    </div>
  );
}