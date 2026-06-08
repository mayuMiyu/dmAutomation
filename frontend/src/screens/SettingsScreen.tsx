import { useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MessageSquare, Copy, Cat, Settings, Play, Square, Activity, Sparkles, Heart, Palette, ArrowLeft, Trash2, Edit2 } from "lucide-react";
import { useTheme } from "../context/themeContext";

export function SettingsScreen() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isMinimal = theme === "minimal";
  const [hideOffScreen, setHideOffScreen] = useState(true);

  return (
    <div className="flex-1 flex flex-col p-6 h-full max-h-full overflow-hidden relative z-10">
      <div className="flex items-center gap-3 mb-3">
        <motion.button
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            isMinimal
              ? "hover:bg-neutral-800 text-neutral-400"
              : "bg-white shadow-sm shadow-pink-200 text-pink-500 hover:bg-pink-50"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.button>
        <h1 className={`text-xl font-semibold tracking-tight ${
          isMinimal ? "text-white" : "text-purple-800 font-bold"
        }`}>Settings</h1>
      </div>

      <div className="flex-1 flex flex-col gap-3 pb-2">
        <div className={`flex items-center justify-between py-2 border-b ${
          isMinimal ? "border-neutral-800/50" : "border-pink-100"
        }`}>
          <span className={`font-medium text-sm ${isMinimal ? "text-neutral-200" : "text-purple-700"}`}>
            Hide Discord off-screen
          </span>
          <button
            onClick={() => setHideOffScreen(!hideOffScreen)}
            className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 shadow-inner ${
              isMinimal
                ? hideOffScreen ? "bg-white" : "bg-neutral-800 border border-neutral-700"
                : hideOffScreen ? "bg-pink-400" : "bg-pink-100"
            }`}
          >
            <motion.div
              layout
              animate={{ x: hideOffScreen ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full shadow-sm ${
                isMinimal
                  ? hideOffScreen ? "bg-black" : "bg-neutral-400"
                  : "bg-white"
              }`}
            />
          </button>
        </div>

        <div className={`py-2 border-b ${isMinimal ? "border-neutral-800/50" : "border-pink-100"}`}>
          <div className="flex items-center justify-between mb-4">
            <span className={`font-medium text-sm ${isMinimal ? "text-neutral-200" : "text-purple-700"}`}>
              Message Check Interval
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${
              isMinimal
                ? "bg-neutral-900 text-neutral-400 border border-neutral-800"
                : "bg-white text-pink-500 border border-pink-200 shadow-sm"
            }`}>3s</span>
          </div>
          <div className={`h-2 rounded-full overflow-hidden relative ${
            isMinimal ? "bg-neutral-900 border border-neutral-800" : "bg-white shadow-inner"
          }`}>
            <motion.div
              className={`absolute top-0 left-0 bottom-0 w-[30%] ${
                isMinimal ? "bg-neutral-400" : "bg-gradient-to-r from-pink-300 to-purple-300"
              }`}
            />
          </div>
          <div className={`flex justify-between mt-2 text-[10px] font-medium ${
            isMinimal ? "text-neutral-600" : "text-pink-400"
          }`}>
            <span>1s</span>
            <span>10s</span>
          </div>
        </div>

        <div className={`space-y-4 py-2 border-b ${isMinimal ? "border-neutral-800/50" : "border-pink-100"}`}>
          <div>
            <label className={`block text-xs font-medium mb-2 ${
              isMinimal ? "text-neutral-500" : "text-purple-500 ml-1"
            }`}>Trade Message Line 1</label>
            <input
              type="text"
              defaultValue="Found a new target!"
              className={`w-full px-3 py-2.5 text-sm outline-none transition-colors ${
                isMinimal
                  ? "bg-neutral-900/50 border border-neutral-800 rounded-lg text-neutral-200 focus:border-neutral-500"
                  : "bg-white border-2 border-pink-100 rounded-xl text-purple-700 focus:border-pink-300 shadow-sm"
              }`}
            />
          </div>
          <div className="pb-2">
            <label className={`block text-xs font-medium mb-2 ${
              isMinimal ? "text-neutral-500" : "text-purple-500 ml-1"
            }`}>Trade Message Line 2</label>
            <input
              type="text"
              defaultValue="Check logs for details."
              className={`w-full px-3 py-2.5 text-sm outline-none transition-colors ${
                isMinimal
                  ? "bg-neutral-900/50 border border-neutral-800 rounded-lg text-neutral-200 focus:border-neutral-500"
                  : "bg-white border-2 border-pink-100 rounded-xl text-purple-700 focus:border-pink-300 shadow-sm"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <label className={`block text-xs font-medium mb-1 ${
              isMinimal ? "text-neutral-500" : "text-purple-500"
            }`}>Telegram Chat ID</label>
            <span className={`font-medium text-sm ${isMinimal ? "text-neutral-200" : "text-purple-700"}`}>
              123456789
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 flex items-center justify-center transition-colors ${
              isMinimal
                ? "rounded-lg hover:bg-neutral-800 text-neutral-400 border border-transparent hover:border-neutral-700"
                : "rounded-full bg-white text-pink-400 shadow-sm shadow-pink-200 hover:bg-pink-50"
            }`}
          >
            <Edit2 className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/")}
            className={`w-full font-medium text-sm py-3 flex items-center justify-center gap-2 transition-colors ${
              isMinimal
                ? "border border-red-500/30 text-red-500/90 hover:text-red-500 rounded-xl"
                : "border-2 border-pink-300 text-pink-500 bg-white rounded-full shadow-sm hover:shadow-md"
            }`}
          >
            <Trash2 className="w-4 h-4" /> Reset Setup
          </motion.button>
        </div>
      </div>
    </div>
  );
}